import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

let mockGallery: any[] = [
  {
    id: "e9747eee-6cc2-42b4-9749-b5173614cd54",
    title: "Luxury Villa Exterior",
    caption: "A view of the infinity pool and exterior design of our villa project in Dubai.",
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
    image_path: null,
    sort_order: 1,
    published: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "a57c7b3b-2ef8-48db-88c7-d8cf71b349be",
    title: "Modern Office Reception",
    caption: "Elegant marble reception and lobby area in Business Bay.",
    image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    image_path: null,
    sort_order: 2,
    published: true,
    created_at: new Date().toISOString(),
  }
];

const isMock = !process.env.SUPABASE_URL;

async function assertAdmin(context: { supabase: any; userId: string }) {
  if (isMock) return;
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden: admin access required.");
}

// Public: list published gallery images (no auth)
export const listPublicGallery = createServerFn({ method: "GET" }).handler(async () => {
  if (isMock) {
    return mockGallery.filter(g => g.published);
  }
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  const supabase = createClient<Database>(process.env.SUPABASE_URL!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
  const { data, error } = await supabase
    .from("gallery_images")
    .select("id, title, caption, image_url, image_path, sort_order")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
});

// Admin: list all
export const listAdminGallery = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    if (isMock) return mockGallery;
    const { data, error } = await context.supabase
      .from("gallery_images")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
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
      id: data.id || crypto.randomUUID(),
      title: data.title || null,
      caption: data.caption || null,
      image_url: data.image_url || null,
      image_path: data.image_path || null,
      sort_order: data.sort_order ?? 0,
      published: data.published,
      updated_at: new Date().toISOString(),
    };

    if (isMock) {
      if (data.id) {
        mockGallery = mockGallery.map((g) => (g.id === data.id ? { ...g, ...payload } : g));
      } else {
        mockGallery.push({ ...payload, created_at: new Date().toISOString() });
      }
      return { id: payload.id };
    }

    if (data.id) {
      const { error } = await context.supabase
        .from("gallery_images")
        .update(payload)
        .eq("id", data.id);
      if (error) throw new Error(error.message);
      return { id: data.id };
    }
    const { data: inserted, error } = await context.supabase
      .from("gallery_images")
      .insert(payload)
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { id: inserted.id };
  });

export const deleteGalleryImage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw: { id: string }) => z.object({ id: z.string().uuid() }).parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    if (isMock) {
      mockGallery = mockGallery.filter((g) => g.id !== data.id);
      return { ok: true };
    }
    const { error } = await context.supabase
      .from("gallery_images")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
