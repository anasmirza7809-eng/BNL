import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import { getAdminProperties, saveAdminProperty, deleteAdminProperty } from "@/lib/admin-local-storage";
import { getServerProperties, saveServerProperties } from "../../server/data-api";

// Simple UUID generator for environments without crypto.randomUUID
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const CATEGORY_VALUES = [
  "dubai-apartments",
  "dubai-villas",
  "dubai-commercial",
  "india-commercial",
  "india-residential",
  "india-land",
] as const;

const propertyInput = z.object({
  id: z.string().uuid().optional().nullable(),
  category: z.enum(CATEGORY_VALUES),
  title: z.string().trim().min(1).max(200),
  location: z.string().trim().max(200).optional().nullable(),
  price: z.string().trim().max(80).optional().nullable(),
  bedrooms: z.string().trim().max(60).optional().nullable(),
  area: z.string().trim().max(60).optional().nullable(),
  description: z.string().trim().max(2000).optional().nullable(),
  full_description: z.string().trim().max(5000).optional().nullable(),
  image_url: z.string().trim().max(500).optional().nullable(),
  image_path: z.string().trim().max(500).optional().nullable(),
  gallery: z.array(z.string().trim().max(500)).max(12).optional().default([]),
  highlights: z.array(z.string().trim().max(140)).max(12).optional().default([]),
  featured: z.boolean(),
  published: z.boolean(),
});

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden: admin access required.");
}

export const listAdminProperties = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    // Try to get from server file first (production)
    try {
      const serverProperties = await getServerProperties();
      if (serverProperties.length > 0) {
        return serverProperties.sort((a, b) => {
          if (a.category !== b.category) return a.category.localeCompare(b.category);
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
      }
    } catch (error) {
      console.error('Error reading from server file (this is normal in development):', error);
    }
    
    // Fallback to local storage (development)
    const properties = getAdminProperties();
    return properties.sort((a, b) => {
      if (a.category !== b.category) return a.category.localeCompare(b.category);
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  });

export const upsertProperty = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw) => propertyInput.parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const payload = {
      category: data.category,
      title: data.title,
      location: data.location || null,
      price: data.price || null,
      bedrooms: data.bedrooms || null,
      area: data.area || null,
      description: data.description || null,
      full_description: data.full_description || null,
      image_url: data.image_url || null,
      image_path: data.image_path || null,
      gallery: data.gallery ?? [],
      highlights: data.highlights ?? [],
      featured: data.featured,
      published: data.published,
    };

    // Use local storage for development
    const id = data.id || generateUUID();
    const property = {
      ...payload,
      id,
      created_at: data.id ? getAdminPropertyById(data.id)?.created_at || new Date().toISOString() : new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    saveAdminProperty(property as any);

    // Also save to server JSON file for production
    try {
      const currentProperties = await getServerProperties();
      const existingIndex = currentProperties.findIndex((p: any) => p.id === id);
      
      if (existingIndex >= 0) {
        currentProperties[existingIndex] = property;
      } else {
        currentProperties.push(property);
      }
      
      await saveServerProperties(currentProperties);
    } catch (error) {
      console.error('Error saving to server file (this is normal in development):', error);
    }

    return { id };
  });

export const deleteProperty = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw) => z.object({ id: z.string().uuid() }).parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    // Use local storage for development
    deleteAdminProperty(data.id);

    // Also delete from server JSON file for production
    try {
      const currentProperties = await getServerProperties();
      const filtered = currentProperties.filter((p: any) => p.id !== data.id);
      await saveServerProperties(filtered);
    } catch (error) {
      console.error('Error deleting from server file (this is normal in development):', error);
    }

    return { ok: true as const };
  });
