import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import logoAsset from "@/assets/bnl-logo.asset.json";
import {
  listAdminProperties,
  upsertProperty,
  deleteProperty,
} from "@/lib/admin-properties.functions";
import {
  listCareersAdmin,
  upsertCareer,
  deleteCareer,
  listApplications,
  updateApplicationStatus,
} from "@/lib/careers.functions";
import {
  listAdminGallery,
  upsertGalleryImage,
  deleteGalleryImage,
} from "@/lib/gallery.functions";
import { usePropertyImageSrc } from "@/lib/property-image";
import dubaiApartment from "@/assets/dubai-apartment.jpg.asset.json";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Bricks & Legacy" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

const CATEGORIES: { value: CategorySlug; label: string }[] = [
  { value: "dubai-apartments", label: "Dubai · Luxury Apartments" },
  { value: "dubai-villas", label: "Dubai · Luxury Villas" },
  { value: "dubai-commercial", label: "Dubai · Commercial" },
  { value: "india-commercial", label: "India · Commercial" },
  { value: "india-residential", label: "India · Residential" },
  { value: "india-land", label: "India · Land Investment" },
];

type CategorySlug =
  | "dubai-apartments"
  | "dubai-villas"
  | "dubai-commercial"
  | "india-commercial"
  | "india-residential"
  | "india-land";

type Property = {
  id: string;
  category: CategorySlug;
  title: string;
  location: string | null;
  price: string | null;
  bedrooms: string | null;
  area: string | null;
  description: string | null;
  full_description: string | null;
  image_url: string | null;
  image_path: string | null;
  gallery: string[] | null;
  highlights: string[] | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
};

type FormState = {
  id: string | null;
  category: CategorySlug;
  title: string;
  location: string;
  price: string;
  bedrooms: string;
  area: string;
  description: string;
  full_description: string;
  image_url: string;
  image_path: string;
  gallery: string[];
  highlights: string[];
  featured: boolean;
  published: boolean;
};

const emptyForm: FormState = {
  id: null,
  category: "dubai-apartments",
  title: "",
  location: "",
  price: "",
  bedrooms: "",
  area: "",
  description: "",
  full_description: "",
  image_url: "",
  image_path: "",
  gallery: [],
  highlights: [],
  featured: false,
  published: true,
};

type Career = {
  id: string;
  title: string;
  department: string | null;
  location: string | null;
  type: string | null;
  description: string | null;
  requirements: string[] | null;
  published: boolean;
  created_at: string;
  updated_at: string;
};

type CareerFormState = {
  id: string | null;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  published: boolean;
};

const emptyCareerForm: CareerFormState = {
  id: null,
  title: "",
  department: "",
  location: "",
  type: "",
  description: "",
  requirements: [],
  published: true,
};

type Application = {
  id: string;
  career_id: string | null;
  name: string;
  email: string;
  phone: string | null;
  linkedin_url: string | null;
  experience: string | null;
  cover_letter: string | null;
  status: string;
  created_at: string;
  careers: { title: string } | null;
};

type AdminTab = "listings" | "careers" | "gallery";

type GalleryRow = {
  id: string;
  title: string | null;
  caption: string | null;
  image_url: string | null;
  image_path: string | null;
  sort_order: number;
  published: boolean;
  created_at: string;
};

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const listFn = useServerFn(listAdminProperties);
  const upsertFn = useServerFn(upsertProperty);
  const deleteFn = useServerFn(deleteProperty);

  const [filter, setFilter] = useState<"all" | CategorySlug>("all");
  const [editing, setEditing] = useState<FormState | null>(null);

  const query = useQuery({
    queryKey: ["admin-properties"],
    queryFn: () => listFn() as unknown as Promise<Property[]>,
  });

  const upsert = useMutation({
    mutationFn: (data: FormState) =>
      upsertFn({
        data: {
          id: data.id,
          category: data.category,
          title: data.title,
          location: data.location,
          price: data.price,
          bedrooms: data.bedrooms,
          area: data.area,
          description: data.description,
          full_description: data.full_description,
          image_url: data.image_url,
          image_path: data.image_path,
          gallery: data.gallery,
          highlights: data.highlights,
          featured: data.featured,
          published: data.published,
        },
      }),
    onSuccess: () => {
      toast.success("Listing saved.");
      setEditing(null);
      qc.invalidateQueries({ queryKey: ["admin-properties"] });
      qc.invalidateQueries({ queryKey: ["properties"] });
    },
    onError: (err: any) => toast.error(err.message ?? "Could not save listing."),
  });

  const remove = useMutation({
    mutationFn: (id: string) => deleteFn({ data: { id } }),
    onSuccess: () => {
      toast.success("Listing removed.");
      qc.invalidateQueries({ queryKey: ["admin-properties"] });
      qc.invalidateQueries({ queryKey: ["properties"] });
    },
    onError: (err: any) => toast.error(err.message ?? "Could not delete listing."),
  });

  const [tab, setTab] = useState<AdminTab>("listings");
  const [careerSubTab, setCareerSubTab] = useState<"openings" | "applications">("openings");
  const [careerEditing, setCareerEditing] = useState<CareerFormState | null>(null);

  const listCareersFn = useServerFn(listCareersAdmin);
  const upsertCareerFn = useServerFn(upsertCareer);
  const deleteCareerFn = useServerFn(deleteCareer);
  const listApplicationsFn = useServerFn(listApplications);
  const updateStatusFn = useServerFn(updateApplicationStatus);

  const careersQuery = useQuery({
    queryKey: ["admin-careers"],
    queryFn: () => listCareersFn() as unknown as Promise<Career[]>,
    enabled: tab === "careers",
  });

  const applicationsQuery = useQuery({
    queryKey: ["admin-applications"],
    queryFn: () => listApplicationsFn() as unknown as Promise<Application[]>,
    enabled: tab === "careers" && careerSubTab === "applications",
  });

  const upsertCareerMutation = useMutation({
    mutationFn: (data: CareerFormState) =>
      upsertCareerFn({
        data: {
          id: data.id,
          title: data.title,
          department: data.department,
          location: data.location,
          type: data.type,
          description: data.description,
          requirements: data.requirements,
          published: data.published,
        },
      }),
    onSuccess: () => {
      toast.success("Opening saved.");
      setCareerEditing(null);
      qc.invalidateQueries({ queryKey: ["admin-careers"] });
      qc.invalidateQueries({ queryKey: ["careers"] });
    },
    onError: (err: any) => toast.error(err.message ?? "Could not save opening."),
  });

  const deleteCareerMutation = useMutation({
    mutationFn: (id: string) => deleteCareerFn({ data: { id } }),
    onSuccess: () => {
      toast.success("Opening removed.");
      qc.invalidateQueries({ queryKey: ["admin-careers"] });
      qc.invalidateQueries({ queryKey: ["careers"] });
    },
    onError: (err: any) => toast.error(err.message ?? "Could not delete opening."),
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      updateStatusFn({ data: { id, status } }),
    onSuccess: () => {
      toast.success("Status updated.");
      qc.invalidateQueries({ queryKey: ["admin-applications"] });
    },
    onError: (err: any) => toast.error(err.message ?? "Could not update status."),
  });

  const handleSignOut = async () => {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const filtered = useMemo(() => {
    const items = query.data ?? [];
    return filter === "all" ? items : items.filter((p) => p.category === filter);
  }, [query.data, filter]);

  const grouped = useMemo(() => {
    const groups: Record<string, number> = {};
    (query.data ?? []).forEach((p) => {
      groups[p.category] = (groups[p.category] ?? 0) + 1;
    });
    return groups;
  }, [query.data]);

  const isForbidden = query.error && /forbidden/i.test((query.error as Error).message);

  return (
    <main className="min-h-screen bg-secondary/40">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Bricks & Legacy" className="h-10 w-10 rounded-sm object-cover" />
            <div className="leading-tight">
              <div className="font-serif text-base text-background">Bricks &amp; Legacy</div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-background/70">Admin</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[11px] tracking-[0.24em] uppercase text-background/70 hover:text-accent">
              View site
            </Link>
            <button
              onClick={handleSignOut}
              className="rounded-sm border border-background/30 px-4 py-2 text-[11px] tracking-[0.24em] uppercase text-background hover:bg-accent hover:border-accent hover:text-primary transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {isForbidden ? (
          <div className="rounded-sm bg-card p-8 text-center">
            <h2 className="font-serif text-2xl">Not authorised</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This account doesn't have admin access. Sign in with the admin email.
            </p>
            <button
              onClick={handleSignOut}
              className="mt-6 inline-flex rounded-sm bg-primary px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase text-primary-foreground hover:bg-primary/90"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8 border-b border-muted-foreground/10">
              <div className="flex flex-wrap gap-2">
                <TabButton active={tab === "listings"} onClick={() => setTab("listings")} label="Property Listings" />
                <TabButton active={tab === "careers"} onClick={() => setTab("careers")} label="Careers & Applications" />
                <TabButton active={tab === "gallery"} onClick={() => setTab("gallery")} label="Gallery" />
              </div>
            </div>

            {tab === "listings" ? (
              <ListingsPanel
                query={query}
                filter={filter}
                setFilter={setFilter}
                grouped={grouped}
                filtered={filtered}
                onAdd={() => setEditing({ ...emptyForm })}
                onEdit={(p) => setEditing(propertyToForm(p))}
                onDelete={(p) => {
                  if (confirm(`Delete "${p.title}"? This cannot be undone.`)) {
                    remove.mutate(p.id);
                  }
                }}
              />
            ) : tab === "careers" ? (
              <CareersPanel
                careersQuery={careersQuery}
                applicationsQuery={applicationsQuery}
                subTab={careerSubTab}
                setSubTab={setCareerSubTab}
                onAddCareer={() => setCareerEditing({ ...emptyCareerForm })}
                onEditCareer={(c) => setCareerEditing(careerToForm(c))}
                onDeleteCareer={(id) => {
                  if (confirm("Delete this opening? This cannot be undone.")) {
                    deleteCareerMutation.mutate(id);
                  }
                }}
                onUpdateStatus={(id, status) => updateStatusMutation.mutate({ id, status })}
              />
            ) : (
              <GalleryPanel enabled={tab === "gallery"} />
            )}
          </>
        )}
      </div>

      {editing && (
        <EditDialog
          form={editing}
          onChange={setEditing}
          onClose={() => setEditing(null)}
          onSave={() => upsert.mutate(editing)}
          saving={upsert.isPending}
        />
      )}

      {careerEditing && (
        <CareerEditDialog
          form={careerEditing}
          onChange={setCareerEditing}
          onClose={() => setCareerEditing(null)}
          onSave={() => upsertCareerMutation.mutate(careerEditing)}
          saving={upsertCareerMutation.isPending}
        />
      )}
    </main>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm border px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-muted-foreground/20 bg-card text-foreground hover:border-primary"
      }`}
    >
      {label}
    </button>
  );
}

function PropertyRow({
  property,
  onEdit,
  onDelete,
}: {
  property: Property;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const src = usePropertyImageSrc(property.image_path, property.image_url, dubaiApartment.url);
  const category = CATEGORIES.find((c) => c.value === property.category)?.label ?? property.category;
  return (
    <div className="flex flex-col gap-4 rounded-sm bg-card p-4 sm:flex-row sm:items-center shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
      <img src={src} alt={property.title} className="h-20 w-28 shrink-0 rounded-sm object-cover" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-serif text-lg text-foreground truncate">{property.title}</h3>
          {property.featured && (
            <span className="rounded-sm bg-accent px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase text-primary">
              Featured
            </span>
          )}
          {!property.published && (
            <span className="rounded-sm border border-muted-foreground/30 px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase text-muted-foreground">
              Draft
            </span>
          )}
        </div>
        <p className="mt-1 text-xs tracking-[0.18em] uppercase text-muted-foreground">{category}</p>
        <p className="mt-1 text-sm text-muted-foreground truncate">
          {[property.location, property.price].filter(Boolean).join(" · ") || "—"}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="rounded-sm border border-primary/30 px-4 py-2 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="rounded-sm border border-destructive/40 px-4 py-2 text-[10px] tracking-[0.24em] uppercase text-destructive hover:bg-destructive hover:text-destructive-foreground transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function propertyToForm(p: Property): FormState {
  return {
    id: p.id,
    category: p.category,
    title: p.title,
    location: p.location ?? "",
    price: p.price ?? "",
    bedrooms: p.bedrooms ?? "",
    area: p.area ?? "",
    description: p.description ?? "",
    full_description: p.full_description ?? "",
    image_url: p.image_url ?? "",
    image_path: p.image_path ?? "",
    gallery: p.gallery ?? [],
    highlights: p.highlights ?? [],
    featured: p.featured,
    published: p.published,
  };
}

function EditDialog({
  form,
  onChange,
  onClose,
  onSave,
  saving,
}: {
  form: FormState;
  onChange: (f: FormState) => void;
  onClose: () => void;
  onSave: () => void;
  saving: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const previewSrc = usePropertyImageSrc(form.image_path, form.image_url, "");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    onChange({ ...form, [k]: v });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const uploadFile = async (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be under 10MB.");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `properties/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from("property-images")
        .upload(path, file, { contentType: file.type, upsert: false });
      if (error) throw error;
      // remove previous uploaded image if any
      if (form.image_path && form.image_path !== path) {
        await supabase.storage.from("property-images").remove([form.image_path]);
      }
      onChange({ ...form, image_path: path });
      toast.success("Image uploaded.");
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = async () => {
    if (form.image_path) {
      await supabase.storage.from("property-images").remove([form.image_path]);
    }
    onChange({ ...form, image_path: "" });
  };

  const uploadGalleryFile = async (file: File) => {
    if (form.gallery.length >= 12) {
      toast.error("Max 12 gallery photos.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be under 10MB.");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `properties/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from("property-images")
        .upload(path, file, { contentType: file.type, upsert: false });
      if (error) throw error;
      onChange({ ...form, gallery: [...form.gallery, path] });
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const removeGalleryItem = async (path: string) => {
    await supabase.storage.from("property-images").remove([path]);
    onChange({ ...form, gallery: form.gallery.filter((p) => p !== path) });
  };

  const labelCls = "text-[10px] tracking-[0.24em] uppercase text-muted-foreground";
  const inputCls =
    "mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="my-8 w-full max-w-3xl rounded-sm bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-muted-foreground/10 px-6 py-4">
          <h2 className="font-serif text-xl">
            {form.id ? "Edit Listing" : "New Listing"}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="grid gap-5 p-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <label className={labelCls}>Category</label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value as CategorySlug)}
              className={inputCls}
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className={labelCls}>Title *</label>
            <input value={form.title} onChange={(e) => set("title", e.target.value)} className={inputCls} required />
          </div>

          <div>
            <label className={labelCls}>Location</label>
            <input value={form.location} onChange={(e) => set("location", e.target.value)} className={inputCls} placeholder="Dubai Marina" />
          </div>
          <div>
            <label className={labelCls}>Price</label>
            <input value={form.price} onChange={(e) => set("price", e.target.value)} className={inputCls} placeholder="AED 2.4M" />
          </div>
          <div>
            <label className={labelCls}>Bedrooms</label>
            <input value={form.bedrooms} onChange={(e) => set("bedrooms", e.target.value)} className={inputCls} placeholder="3 BR" />
          </div>
          <div>
            <label className={labelCls}>Area</label>
            <input value={form.area} onChange={(e) => set("area", e.target.value)} className={inputCls} placeholder="1,780 sqft" />
          </div>

          <div className="lg:col-span-2">
            <label className={labelCls}>Short description (card preview)</label>
            <textarea
              rows={2}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              className={`${inputCls} resize-none`}
              placeholder="One or two lines shown on listing cards."
            />
          </div>

          <div className="lg:col-span-2">
            <label className={labelCls}>Full description (detail page)</label>
            <textarea
              rows={5}
              value={form.full_description}
              onChange={(e) => set("full_description", e.target.value)}
              className={`${inputCls} resize-none`}
              placeholder="Long-form description shown on the property detail page. Blank lines create paragraphs."
            />
          </div>

          <div className="lg:col-span-2">
            <label className={labelCls}>Key highlights (one per line)</label>
            <textarea
              rows={4}
              value={form.highlights.join("\n")}
              onChange={(e) =>
                set(
                  "highlights",
                  e.target.value.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 12),
                )
              }
              className={`${inputCls} resize-none`}
              placeholder="Private pool&#10;Sea view&#10;Smart-home ready"
            />
          </div>

          <div className="lg:col-span-2">
            <label className={labelCls}>Photo</label>
            <div className="mt-2 flex items-center gap-4">
              {previewSrc ? (
                <img src={previewSrc} alt="Preview" className="h-24 w-32 rounded-sm object-cover" />
              ) : (
                <div className="h-24 w-32 rounded-sm border border-dashed border-muted-foreground/30 flex items-center justify-center text-xs text-muted-foreground">
                  No image
                </div>
              )}
              <div className="flex flex-col gap-2">
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) uploadFile(f);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  className="rounded-sm border border-primary/30 px-4 py-2 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition disabled:opacity-60"
                >
                  {uploading ? "Uploading…" : form.image_path ? "Replace" : "Upload Photo"}
                </button>
                {form.image_path && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="text-[10px] tracking-[0.24em] uppercase text-destructive hover:underline"
                  >
                    Remove uploaded photo
                  </button>
                )}
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Max 10MB. JPG or PNG recommended.</p>

            <label className={`${labelCls} mt-4 block`}>Or external image URL</label>
            <input
              value={form.image_url}
              onChange={(e) => set("image_url", e.target.value)}
              className={inputCls}
              placeholder="https://…"
            />
          </div>

          <div className="lg:col-span-2">
            <label className={labelCls}>Additional gallery photos ({form.gallery.length}/12)</label>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {form.gallery.map((path) => (
                <GalleryThumb key={path} path={path} onRemove={() => removeGalleryItem(path)} />
              ))}
              {form.gallery.length < 12 && (
                <label className="flex h-24 cursor-pointer items-center justify-center rounded-sm border border-dashed border-muted-foreground/30 text-xs text-muted-foreground hover:border-accent hover:text-accent">
                  {uploading ? "Uploading…" : "+ Add photo"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadGalleryFile(f);
                      e.currentTarget.value = "";
                    }}
                  />
                </label>
              )}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Extra photos shown on the property detail page (up to 6).
            </p>
          </div>

          <div className="flex items-center gap-6 lg:col-span-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => set("published", e.target.checked)}
              />
              Published (visible on site)
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => set("featured", e.target.checked)}
              />
              Featured
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-muted-foreground/10 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-sm border border-muted-foreground/30 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase hover:bg-muted transition"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={saving || !form.title.trim()}
            className="rounded-sm bg-accent px-6 py-2.5 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save Listing"}
          </button>
        </div>
      </div>
    </div>
  );
}

function GalleryThumb({ path, onRemove }: { path: string; onRemove: () => void }) {
  const src = usePropertyImageSrc(path, null, "");
  return (
    <div className="group relative h-24 overflow-hidden rounded-sm border border-muted-foreground/10 bg-muted">
      {src && <img src={src} alt="" className="h-full w-full object-cover" />}
      <button
        type="button"
        onClick={onRemove}
        className="absolute right-1 top-1 rounded-sm bg-black/70 px-2 py-0.5 text-[10px] tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 hover:bg-destructive"
      >
        Remove
      </button>
    </div>
  );
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 text-[11px] tracking-[0.24em] uppercase transition border-b-2 ${
        active
          ? "border-accent text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function ListingsPanel({
  query,
  filter,
  setFilter,
  grouped,
  filtered,
  onAdd,
  onEdit,
  onDelete,
}: {
  query: { data?: Property[]; isLoading: boolean; error: Error | null };
  filter: "all" | CategorySlug;
  setFilter: (f: "all" | CategorySlug) => void;
  grouped: Record<string, number>;
  filtered: Property[];
  onAdd: () => void;
  onEdit: (p: Property) => void;
  onDelete: (p: Property) => void;
}) {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl">Property Listings</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Add, edit, publish or remove listings across every category.
          </p>
        </div>
        <button
          onClick={onAdd}
          className="rounded-sm bg-accent px-6 py-3 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90"
        >
          + Add Listing
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <FilterChip
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={`All (${query.data?.length ?? 0})`}
        />
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c.value}
            active={filter === c.value}
            onClick={() => setFilter(c.value)}
            label={`${c.label} (${grouped[c.value] ?? 0})`}
          />
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {query.isLoading && (
          <div className="rounded-sm bg-card p-8 text-center text-sm text-muted-foreground">
            Loading listings…
          </div>
        )}
        {!query.isLoading && filtered.length === 0 && (
          <div className="rounded-sm bg-card p-8 text-center text-sm text-muted-foreground">
            No listings in this category yet.
          </div>
        )}
        {filtered.map((p) => (
          <PropertyRow
            key={p.id}
            property={p}
            onEdit={() => onEdit(p)}
            onDelete={() => onDelete(p)}
          />
        ))}
      </div>
    </>
  );
}

function CareersPanel({
  careersQuery,
  applicationsQuery,
  subTab,
  setSubTab,
  onAddCareer,
  onEditCareer,
  onDeleteCareer,
  onUpdateStatus,
}: {
  careersQuery: { data?: Career[]; isLoading: boolean; error: Error | null };
  applicationsQuery: { data?: Application[]; isLoading: boolean; error: Error | null };
  subTab: "openings" | "applications";
  setSubTab: (t: "openings" | "applications") => void;
  onAddCareer: () => void;
  onEditCareer: (c: Career) => void;
  onDeleteCareer: (id: string) => void;
  onUpdateStatus: (id: string, status: string) => void;
}) {
  const careers = careersQuery.data ?? [];
  const applications = applicationsQuery.data ?? [];

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl lg:text-4xl">Careers</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Post openings and manage incoming applications.
          </p>
        </div>
        <div className="flex gap-2">
          <FilterChip active={subTab === "openings"} onClick={() => setSubTab("openings")} label={`Openings (${careers.length})`} />
          <FilterChip active={subTab === "applications"} onClick={() => setSubTab("applications")} label={`Applications (${applications.length})`} />
        </div>
      </div>

      {subTab === "openings" && (
        <div className="mt-8">
          <div className="mb-4 flex justify-end">
            <button
              onClick={onAddCareer}
              className="rounded-sm bg-accent px-6 py-3 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90"
            >
              + Add Opening
            </button>
          </div>
          {careersQuery.isLoading && (
            <div className="rounded-sm bg-card p-8 text-center text-sm text-muted-foreground">Loading openings…</div>
          )}
          {!careersQuery.isLoading && careers.length === 0 && (
            <div className="rounded-sm bg-card p-8 text-center text-sm text-muted-foreground">
              No openings yet. Add one to start receiving applications.
            </div>
          )}
          <div className="space-y-3">
            {careers.map((c) => (
              <CareerRow key={c.id} career={c} onEdit={() => onEditCareer(c)} onDelete={() => onDeleteCareer(c.id)} />
            ))}
          </div>
        </div>
      )}

      {subTab === "applications" && (
        <div className="mt-8 space-y-3">
          {applicationsQuery.isLoading && (
            <div className="rounded-sm bg-card p-8 text-center text-sm text-muted-foreground">Loading applications…</div>
          )}
          {!applicationsQuery.isLoading && applications.length === 0 && (
            <div className="rounded-sm bg-card p-8 text-center text-sm text-muted-foreground">
              No applications yet.
            </div>
          )}
          {applications.map((a) => (
            <ApplicationRow key={a.id} application={a} onUpdateStatus={onUpdateStatus} />
          ))}
        </div>
      )}
    </>
  );
}

function CareerRow({
  career,
  onEdit,
  onDelete,
}: {
  career: Career;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-sm bg-card p-4 sm:flex-row sm:items-center shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-serif text-lg text-foreground">{career.title}</h3>
          {!career.published && (
            <span className="rounded-sm border border-muted-foreground/30 px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase text-muted-foreground">
              Draft
            </span>
          )}
        </div>
        <p className="mt-1 text-xs tracking-[0.18em] uppercase text-muted-foreground">
          {[career.department, career.location, career.type].filter(Boolean).join(" · ")}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="rounded-sm border border-primary/30 px-4 py-2 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="rounded-sm border border-destructive/40 px-4 py-2 text-[10px] tracking-[0.24em] uppercase text-destructive hover:bg-destructive hover:text-destructive-foreground transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function ApplicationRow({
  application,
  onUpdateStatus,
}: {
  application: Application;
  onUpdateStatus: (id: string, status: string) => void;
}) {
  const statusOptions = ["new", "reviewing", "shortlisted", "rejected", "hired"];
  return (
    <div className="rounded-sm bg-card p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-lg text-foreground">{application.name}</h3>
            <span className={`rounded-sm px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase ${statusBadge(application.status)}`}>
              {application.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {application.email}
            {application.phone && ` · ${application.phone}`}
          </p>
          {application.careers?.title && (
            <p className="mt-1 text-xs tracking-[0.18em] uppercase text-accent">
              Applied for: {application.careers.title}
            </p>
          )}
          {application.linkedin_url && (
            <a
              href={application.linkedin_url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-xs text-accent hover:underline"
            >
              LinkedIn / Portfolio
            </a>
          )}
          {application.experience && (
            <p className="mt-3 text-sm text-muted-foreground">{application.experience}</p>
          )}
          {application.cover_letter && (
            <p className="mt-2 text-sm text-muted-foreground italic">{application.cover_letter}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <select
            value={application.status}
            onChange={(e) => onUpdateStatus(application.id, e.target.value)}
            className="rounded-sm border border-muted-foreground/20 bg-background px-3 py-2 text-xs focus:border-accent focus:outline-none"
          >
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function statusBadge(status: string) {
  switch (status) {
    case "hired":
      return "bg-accent text-primary";
    case "shortlisted":
      return "bg-primary text-primary-foreground";
    case "rejected":
      return "bg-destructive/10 text-destructive border border-destructive/30";
    case "reviewing":
      return "bg-secondary text-foreground";
    default:
      return "border border-muted-foreground/30 text-muted-foreground";
  }
}

function careerToForm(c: Career): CareerFormState {
  return {
    id: c.id,
    title: c.title,
    department: c.department ?? "",
    location: c.location ?? "",
    type: c.type ?? "",
    description: c.description ?? "",
    requirements: c.requirements ?? [],
    published: c.published,
  };
}

function CareerEditDialog({
  form,
  onChange,
  onClose,
  onSave,
  saving,
}: {
  form: CareerFormState;
  onChange: (f: CareerFormState) => void;
  onClose: () => void;
  onSave: () => void;
  saving: boolean;
}) {
  const set = <K extends keyof CareerFormState>(k: K, v: CareerFormState[K]) =>
    onChange({ ...form, [k]: v });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const labelCls = "text-[10px] tracking-[0.24em] uppercase text-muted-foreground";
  const inputCls =
    "mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="my-8 w-full max-w-2xl rounded-sm bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-muted-foreground/10 px-6 py-4">
          <h2 className="font-serif text-xl">{form.id ? "Edit Opening" : "New Opening"}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="grid gap-5 p-6">
          <div>
            <label className={labelCls}>Title *</label>
            <input
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              className={inputCls}
              required
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label className={labelCls}>Department</label>
              <input
                value={form.department}
                onChange={(e) => set("department", e.target.value)}
                className={inputCls}
                placeholder="e.g. Sales"
              />
            </div>
            <div>
              <label className={labelCls}>Location</label>
              <input
                value={form.location}
                onChange={(e) => set("location", e.target.value)}
                className={inputCls}
                placeholder="e.g. Dubai"
              />
            </div>
            <div>
              <label className={labelCls}>Type</label>
              <input
                value={form.type}
                onChange={(e) => set("type", e.target.value)}
                className={inputCls}
                placeholder="e.g. Full-time"
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Description</label>
            <textarea
              rows={5}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              className={`${inputCls} resize-none`}
              placeholder="Describe the role, responsibilities, and what success looks like."
            />
          </div>

          <div>
            <label className={labelCls}>Requirements (one per line)</label>
            <textarea
              rows={4}
              value={form.requirements.join("\n")}
              onChange={(e) =>
                set(
                  "requirements",
                  e.target.value.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 20),
                )
              }
              className={`${inputCls} resize-none`}
              placeholder="2+ years real estate experience&#10;UAE driving license&#10;Fluent in English"
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => set("published", e.target.checked)}
            />
            Published (visible on careers page)
          </label>
        </div>

        <div className="flex justify-end gap-3 border-t border-muted-foreground/10 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-sm border border-muted-foreground/30 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase hover:bg-muted transition"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={saving || !form.title.trim()}
            className="rounded-sm bg-accent px-6 py-2.5 text-[11px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save Opening"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ================= Gallery Panel =================

function GalleryPanel({ enabled }: { enabled: boolean }) {
  const qc = useQueryClient();
  const listFn = useServerFn(listAdminGallery);
  const upsertFn = useServerFn(upsertGalleryImage);
  const deleteFn = useServerFn(deleteGalleryImage);

  const query = useQuery({
    queryKey: ["admin-gallery"],
    queryFn: () => listFn() as unknown as Promise<GalleryRow[]>,
    enabled,
  });

  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["admin-gallery"] });
    qc.invalidateQueries({ queryKey: ["public-gallery"] });
  };

  const upsertMut = useMutation({
    mutationFn: (data: {
      id?: string | null;
      title?: string | null;
      caption?: string | null;
      image_path?: string | null;
      image_url?: string | null;
      sort_order?: number;
      published: boolean;
    }) => upsertFn({ data }),
    onSuccess: () => {
      toast.success("Gallery updated.");
      invalidate();
    },
    onError: (err: any) => toast.error(err.message ?? "Could not save."),
  });

  const deleteMut = useMutation({
    mutationFn: async (row: GalleryRow) => {
      if (row.image_path) {
        await supabase.storage.from("gallery-images").remove([row.image_path]);
      }
      return deleteFn({ data: { id: row.id } });
    },
    onSuccess: () => {
      toast.success("Photo removed.");
      invalidate();
    },
    onError: (err: any) => toast.error(err.message ?? "Could not delete."),
  });

  const handleUpload = async (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be under 10MB.");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `gallery/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from("gallery-images")
        .upload(path, file, { contentType: file.type, upsert: false });
      if (error) throw error;
      await upsertMut.mutateAsync({
        title: title.trim() || null,
        caption: caption.trim() || null,
        image_path: path,
        image_url: null,
        sort_order: (query.data?.length ?? 0) + 1,
        published: true,
      });
      setTitle("");
      setCaption("");
      if (fileRef.current) fileRef.current.value = "";
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const rows = query.data ?? [];

  return (
    <div className="space-y-8">
      <div className="rounded-sm bg-card p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
        <h2 className="font-serif text-xl">Add a photo</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Upload an image (max 10MB). Optional title and caption appear on hover on the public gallery.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Optional"
              className="mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">Caption</label>
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Optional"
              className="mt-2 w-full rounded-sm border border-muted-foreground/20 bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleUpload(f);
            }}
            className="text-sm"
          />
          {uploading && (
            <span className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Uploading…</span>
          )}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-lg">Gallery ({rows.length})</h3>
          {query.isLoading && <span className="text-xs text-muted-foreground">Loading…</span>}
        </div>
        {rows.length === 0 ? (
          <div className="rounded-sm bg-card p-8 text-center text-sm text-muted-foreground">
            No photos yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rows.map((row) => (
              <GalleryAdminTile
                key={row.id}
                row={row}
                onTogglePublish={() =>
                  upsertMut.mutate({
                    id: row.id,
                    title: row.title,
                    caption: row.caption,
                    image_path: row.image_path,
                    image_url: row.image_url,
                    sort_order: row.sort_order,
                    published: !row.published,
                  })
                }
                onDelete={() => {
                  if (confirm("Delete this photo? This cannot be undone.")) {
                    deleteMut.mutate(row);
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GalleryAdminTile({
  row,
  onTogglePublish,
  onDelete,
}: {
  row: GalleryRow;
  onTogglePublish: () => void;
  onDelete: () => void;
}) {

  return (
    <div className="overflow-hidden rounded-sm bg-card shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
      <div className="aspect-[4/3] bg-primary/5">
        {src ? (
          <img src={src} alt={row.title ?? ""} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full animate-pulse bg-primary/10" />
        )}
      </div>
      <div className="p-4">
        <p className="truncate font-serif text-sm">{row.title || "Untitled"}</p>
        {row.caption && <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{row.caption}</p>}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-sm px-2 py-0.5 text-[9px] tracking-[0.22em] uppercase ${
              row.published
                ? "bg-accent text-primary"
                : "border border-muted-foreground/30 text-muted-foreground"
            }`}
          >
            {row.published ? "Live" : "Hidden"}
          </span>
          <button
            onClick={onTogglePublish}
            className="rounded-sm border border-primary/30 px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition"
          >
            {row.published ? "Hide" : "Publish"}
          </button>
          <button
            onClick={onDelete}
            className="rounded-sm border border-destructive/40 px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase text-destructive hover:bg-destructive hover:text-destructive-foreground transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
