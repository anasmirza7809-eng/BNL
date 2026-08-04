import { createServerFn } from "@tanstack/start-client-core";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

let mockCareers: any[] = [
  {
    id: "c9747eee-6cc2-42b4-9749-b5173614cd54",
    title: "Real Estate Broker",
    department: "Sales",
    location: "Dubai Marina Office",
    type: "Full-time",
    description: "Looking for an experienced broker with a track record in luxury sales.",
    requirements: ["3+ years experience in Dubai", "Strong communication skills", "Proven sales record"],
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

let mockApplications: any[] = [
  {
    id: "a9747eee-6cc2-42b4-9749-b5173614cd54",
    career_id: "c9747eee-6cc2-42b4-9749-b5173614cd54",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+971 50 123 4567",
    linkedin_url: "https://linkedin.com/in/johndoe",
    experience: "5 years in London and Dubai luxury sales.",
    cover_letter: "I would love to join your prestigious firm.",
    status: "new",
    created_at: new Date().toISOString(),
    careers: { title: "Real Estate Broker" },
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

const careerInput = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().trim().min(1).max(200),
  department: z.string().trim().max(100).optional().nullable(),
  location: z.string().trim().max(100).optional().nullable(),
  type: z.string().trim().max(60).optional().nullable(),
  description: z.string().trim().max(3000).optional().nullable(),
  requirements: z.array(z.string().trim().max(500)).max(20).optional().default([]),
  published: z.boolean().optional().default(true),
});

export const listCareersAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    if (isMock) return mockCareers;
    const { data, error } = await context.supabase
      .from("careers")
      .select("*")
      .order("published", { ascending: false })
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
  });

export const upsertCareer = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw) => careerInput.parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const payload = {
      id: data.id || crypto.randomUUID(),
      title: data.title,
      department: data.department || null,
      location: data.location || null,
      type: data.type || null,
      description: data.description || null,
      requirements: data.requirements ?? [],
      published: data.published ?? true,
      updated_at: new Date().toISOString(),
    };

    if (isMock) {
      if (data.id) {
        mockCareers = mockCareers.map((c) => (c.id === data.id ? { ...c, ...payload } : c));
      } else {
        mockCareers.push({ ...payload, created_at: new Date().toISOString() });
      }
      return { id: payload.id };
    }

    if (data.id) {
      const { error } = await context.supabase
        .from("careers")
        .update(payload)
        .eq("id", data.id);
      if (error) throw new Error(error.message);
      return { id: data.id };
    }

    const { data: inserted, error } = await context.supabase
      .from("careers")
      .insert(payload)
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { id: inserted.id as string };
  });

export const deleteCareer = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw) => z.object({ id: z.string().uuid() }).parse(raw))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    if (isMock) {
      mockCareers = mockCareers.filter((c) => c.id !== data.id);
      return { ok: true as const };
    }
    const { error } = await context.supabase
      .from("careers")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const listApplications = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    if (isMock) return mockApplications;
    const { data, error } = await context.supabase
      .from("career_applications")
      .select("*, careers(title)")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
  });

export const updateApplicationStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((raw) =>
    z.object({
      id: z.string().uuid(),
      status: z.enum(["new", "reviewing", "shortlisted", "rejected", "hired"]),
    }).parse(raw)
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    if (isMock) {
      mockApplications = mockApplications.map((a) => (a.id === data.id ? { ...a, status: data.status } : a));
      return { ok: true as const };
    }
    const { error } = await context.supabase
      .from("career_applications")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
