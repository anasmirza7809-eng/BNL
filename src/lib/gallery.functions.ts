import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { getAdminGalleryImages, saveAdminGalleryImage, deleteAdminGalleryImage, getAdminGalleryImageById } from "@/lib/admin-gallery-local-storage";
import { localGalleryData } from "@/lib/local-gallery-data";
import { fetchAdminGallery } from "@/lib/json-file-storage";
import { getServerGallery, saveServerGallery } from "../../server/data-api";

// Simple UUID generator for environments without crypto.randomUUID
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden: admin access required.");
}

// Public: list published gallery images (no auth)
export async function listPublicGallery() {
  // Try to get admin images from JSON file first (for deployment)
  let adminImages: any[] = [];
  try {
    adminImages = await fetchAdminGallery();
  } catch (error) {
    console.error('Error fetching admin gallery from JSON file, falling back to localStorage:', error);
    // Fallback to localStorage (for development)
    adminImages = getAdminGalleryImages();
  }
  
  // Combine local gallery data with admin-added images
  const combined = [...localGalleryData, ...adminImages];
  return combined
    .filter(img => img.published)
    .map(img => ({
      id: img.id,
      title: img.title,
      caption: img.caption,
      image_url: img.image_url,
      image_path: img.image_path,
      sort_order: img.sort_order,
    }))
    .sort((a, b) => {
      if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
      return 0;
    });
}

// Admin: list all
export const listAdminGallery = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    // Try to get from server file first (production)
    try {
      const serverGallery = await getServerGallery();
      if (serverGallery.length > 0) {
        return serverGallery.sort((a, b) => {
          if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
      }
    } catch (error) {
      console.error('Error reading from server file (this is normal in development):', error);
    }
    
    // Fallback to local storage (development)
    const images = getAdminGalleryImages();
    return images.sort((a, b) => {
      if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  });

const galleryInput = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().trim().max(200).optional().nullable(),
  caption: z.string().trim().max(600).optional().nullable(),
  image_url: z.string().trim().max(500).optional().nullable(),
  image_path: z.string().trim().max(500).optional().nullable(),
  sort_order: z.number().int().min(0).max(9999).optional().default(0),
  published: z.boolean(),
});

export const upsertGalleryImage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw) => galleryInput.parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const payload = {
      title: data.title || null,
      caption: data.caption || null,
      image_url: data.image_url || null,
      image_path: data.image_path || null,
      sort_order: data.sort_order ?? 0,
      published: data.published,
    };
    // Use local storage for development
    const id = data.id || generateUUID();
    const image = {
      ...payload,
      id,
      created_at: data.id ? getAdminGalleryImageById(data.id)?.created_at || new Date().toISOString() : new Date().toISOString(),
    };

    saveAdminGalleryImage(image as any);

    // Also save to server JSON file for production
    try {
      const currentGallery = await getServerGallery();
      const existingIndex = currentGallery.findIndex((img: any) => img.id === id);
      
      if (existingIndex >= 0) {
        currentGallery[existingIndex] = image;
      } else {
        currentGallery.push(image);
      }
      
      await saveServerGallery(currentGallery);
    } catch (error) {
      console.error('Error saving to server file (this is normal in development):', error);
    }

    return { id };
  });

export const deleteGalleryImage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw: { id: string }) => z.object({ id: z.string().uuid() }).parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    // Use local storage for development
    deleteAdminGalleryImage(data.id);

    // Also delete from server JSON file for production
    try {
      const currentGallery = await getServerGallery();
      const filtered = currentGallery.filter((img: any) => img.id !== data.id);
      await saveServerGallery(filtered);
    } catch (error) {
      console.error('Error deleting from server file (this is normal in development):', error);
    }

    return { ok: true };
  });
