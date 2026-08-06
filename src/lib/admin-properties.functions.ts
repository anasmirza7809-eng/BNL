import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

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
    const { data, error } = await context.supabase
      .from("properties")
      .select("*")
      .order("category")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
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

    if (data.id) {
      const { error } = await context.supabase
        .from("properties")
        .update(payload)
        .eq("id", data.id);
      if (error) throw new Error(error.message);
      return { id: data.id };
    }

    const { data: inserted, error } = await context.supabase
      .from("properties")
      .insert(payload)
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { id: inserted.id as string };
  });

export const deleteProperty = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw) => z.object({ id: z.string().uuid() }).parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { data: existing } = await context.supabase
      .from("properties")
      .select("image_path, gallery")
      .eq("id", data.id)
      .maybeSingle();

    const { error } = await context.supabase
      .from("properties")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);

    const toRemove: string[] = [];
    if (existing?.image_path) toRemove.push(existing.image_path);
    if (Array.isArray(existing?.gallery)) toRemove.push(...existing.gallery);
    if (toRemove.length) {
      await context.supabase.storage
        .from("property-images")
        .remove(toRemove);
    }
    return { ok: true as const };
  });
