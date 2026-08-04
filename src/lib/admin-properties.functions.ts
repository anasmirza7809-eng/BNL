import { createServerFn } from "@tanstack/start-client-core";
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

let mockProperties: any[] = [
  {
    id: "d9747eee-6cc2-42b4-9749-b5173614cd54",
    category: "dubai-apartments",
    title: "Marina View Residences",
    location: "Dubai Marina",
    price: "AED 2.4M",
    bedrooms: "2 BR",
    area: "1,250 sqft",
    description: "Panoramic marina views with premium finishes and resort-style amenities.",
    full_description: "Enjoy luxurious living in the heart of Dubai Marina. This stunning 2-bedroom apartment offers breathtaking panoramic views of the water, a state-of-the-art kitchen with integrated appliances, and a spacious balcony perfect for entertaining. Residents gain exclusive access to a temperature-controlled infinity pool, modern gym, and 24/7 concierge services.",
    image_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
    image_path: null,
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80"
    ],
    highlights: ["Panoramic Marina Views", "Infinity Pool Access", "24/7 Concierge", "Integrated Kitchen Appliances"],
    featured: true,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "f57c7b3b-2ef8-48db-88c7-d8cf71b349be",
    category: "dubai-commercial",
    title: "Business Bay Tower Floor",
    location: "Business Bay",
    price: "AED 6.2M",
    bedrooms: null,
    area: "4,500 sqft",
    description: "Full-floor Grade-A office with skyline views and secure parking.",
    full_description: "A premium full-floor commercial space located in the bustling business district of Business Bay. Fully fitted with partitions, executive offices, meeting rooms, and open workstations. Offers panoramic canal and Burj Khalifa views, dedicated server room, private pantry, and 8 secure parking bays.",
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    image_path: null,
    gallery: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"],
    highlights: ["Burj Khalifa Views", "Grade-A Fitting", "8 Parking Spaces", "Canal Frontage"],
    featured: false,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "97bb159b-0de3-44b6-bbfb-21738772351b",
    category: "india-land",
    title: "Alibaug Sea-Facing Plot",
    location: "Alibaug, Maharashtra",
    price: "₹ 3.2 Cr",
    bedrooms: null,
    area: "12,000 sqft",
    description: "Titled sea-view plot ideal for a private villa or boutique retreat.",
    full_description: "A pristine 12,000 sqft sea-facing plot in Alibaug, the premium getaway destination. Clear title, demarcated boundary wall, and fully sanctioned for a luxurious second home. Boasts mature coconut groves and direct road access.",
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    image_path: null,
    gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80"],
    highlights: ["Clear Sea Views", "Demarcated Boundary", "Second Home Sanctions", "Mature Coconut Groves"],
    featured: true,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
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

export const listAdminProperties = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    if (isMock) return mockProperties;
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
      id: data.id || crypto.randomUUID(),
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
      updated_at: new Date().toISOString(),
    };

    if (isMock) {
      if (data.id) {
        mockProperties = mockProperties.map((p) => (p.id === data.id ? { ...p, ...payload } : p));
      } else {
        const newProp = { ...payload, created_at: new Date().toISOString() };
        mockProperties.push(newProp);
      }
      return { id: payload.id };
    }

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
    if (isMock) {
      mockProperties = mockProperties.filter((p) => p.id !== data.id);
      return { ok: true as const };
    }
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
