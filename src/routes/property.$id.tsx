import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { usePropertyImageSrc } from "@/lib/property-image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import heroDubai from "@/assets/hero-dubai.jpg";
import dubaiApartment from "@/assets/dubai-apartment.jpg.asset.json";
import indiaResidential from "@/assets/india-residential.jpg.asset.json";
import dubaiVilla from "@/assets/dubai-villa.jpg.asset.json";
import dubaiRental from "@/assets/dubai-rental.jpg";
import indiaLand from "@/assets/india-land.jpg";
import indiaCommercial from "@/assets/india-commercial.jpg.asset.json";


const FALLBACKS: Record<string, string> = {
  "dubai-apartments": dubaiApartment.url,
  "dubai-villas": dubaiVilla.url,
  "dubai-commercial": dubaiRental,
  "india-commercial": indiaCommercial.url,
  "india-residential": indiaResidential.url,
  "india-land": indiaLand,
};

const CATEGORY_LABEL: Record<string, { label: string; region: string }> = {
  "dubai-apartments": { label: "Luxury Apartments", region: "Dubai" },
  "dubai-villas": { label: "Luxury Villas", region: "Dubai" },
  "dubai-commercial": { label: "Commercial", region: "Dubai" },
  "india-commercial": { label: "Commercial", region: "India" },
  "india-residential": { label: "Residential", region: "India" },
  "india-land": { label: "Land Investment", region: "India" },
};

type Property = {
  id: string;
  category: string;
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
};

const propertyQuery = (id: string) =>
  queryOptions({
    queryKey: ["property", id],
    queryFn: async (): Promise<Property> => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .eq("published", true)
        .maybeSingle();
      if (error) throw error;
      if (!data) throw notFound();
      return data as unknown as Property;
    },
  });

export const Route = createFileRoute("/property/$id")({
  loader: ({ params, context }) =>
    context.queryClient.ensureQueryData(propertyQuery(params.id)),
  head: ({ loaderData }) => {
    const p = loaderData as Property | undefined;
    const title = p ? `${p.title} — Bricks & Legacy` : "Property — Bricks & Legacy";
    const description = p?.description ?? "Explore this premium listing with Bricks & Legacy.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-8 text-center">
      <div>
        <h1 className="font-serif text-3xl">Listing not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent underline">
          Back to home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-8 text-center">
      <div>
        <h1 className="font-serif text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-4 rounded-sm bg-accent px-6 py-2 text-primary text-sm">
          Retry
        </button>
      </div>
    </div>
  ),
  component: PropertyPage,
});

function useGalleryUrls(paths: string[]): string[] {
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(() => {
    let cancelled = false;
    if (!paths.length) {
      setUrls([]);
      return;
    }
    Promise.all(
      paths.map((path) =>
        path.startsWith("http")
          ? Promise.resolve(path)
          : supabase.storage
              .from("property-images")
              .createSignedUrl(path, 60 * 60 * 24)
              .then(({ data }) => data?.signedUrl ?? ""),
      ),
    ).then((r) => {
      if (!cancelled) setUrls(r.filter(Boolean));
    });
    return () => {
      cancelled = true;
    };
  }, [paths.join("|")]);
  return urls;
}

function PropertyPage() {
  const { data: p } = useSuspenseQuery(propertyQuery(Route.useParams().id));
  const fallback = FALLBACKS[p.category] ?? dubaiApartment;
  const cat = CATEGORY_LABEL[p.category] ?? { label: "Property", region: "" };
  const heroSrc = usePropertyImageSrc(p.image_path, p.image_url, fallback, p.gallery);
  const galleryUrls = useGalleryUrls(p.gallery ?? []);
  // When a gallery exists, it is the source of truth (the hero is just gallery[0]
  // re-signed, which would otherwise show up as a duplicate/mismatched first slide).
  const allImages = (galleryUrls.length ? galleryUrls : [heroSrc]).filter(Boolean);
  const [active, setActive] = useState(0);
  const count = allImages.length;
  const go = (dir: number) => setActive((i) => (count ? (i + dir + count) % count : 0));

  return (
    <main className="bg-background text-foreground">
      {/* Header — solid bar on interior pages so it never overlaps the breadcrumb */}
      <div className="relative bg-primary text-primary-foreground border-b border-background/10">
        <Header className="relative inset-x-auto top-auto z-[60]" />
        <div className="mx-auto max-w-7xl px-6 pb-3 lg:px-10">
          <Link
            to="/properties/$category"
            params={{ category: p.category }}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-background/70 hover:text-accent"
          >
            <span aria-hidden>←</span> Back to {cat.label}
          </Link>
        </div>
      </div>

      {/* Gallery + Summary */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl grid gap-10 px-6 py-14 lg:grid-cols-5 lg:px-10 lg:py-20">
          {/* Gallery */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-sm bg-primary shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]">
              {/* Blurred fill so any aspect ratio sits cleanly without cropping */}
              <img
                src={allImages[active] ?? fallback}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-40"
              />
              <img
                src={allImages[active] ?? fallback}
                alt={p.title}
                className="relative h-[380px] w-full object-contain sm:h-[460px] lg:h-[540px]"
              />
              {p.featured && (
                <span className="absolute left-4 top-4 rounded-sm bg-accent px-3 py-1.5 text-[10px] tracking-[0.24em] uppercase text-primary">
                  Featured
                </span>
              )}
              {count > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() => go(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur-sm transition hover:bg-primary"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() => go(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur-sm transition hover:bg-primary"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <span className="absolute bottom-4 right-4 rounded-sm bg-primary/70 px-3 py-1 text-[11px] tracking-[0.18em] text-primary-foreground">
                    {active + 1} / {count}
                  </span>
                </>
              )}
            </div>
            {count > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-6">
                {allImages.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActive(i)}
                    className={`overflow-hidden rounded-sm border transition ${
                      i === active
                        ? "border-accent ring-1 ring-accent"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="h-16 w-full object-cover sm:h-20" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <aside className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.32em] uppercase text-accent">
              {cat.region} · {cat.label}
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{p.title}</h1>
            {p.location && (
              <p className="mt-2 text-sm tracking-[0.18em] uppercase text-muted-foreground">
                {p.location}
              </p>
            )}
            <div className="mt-6 rounded-sm bg-card p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
              <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                Starting
              </div>
              <div className="mt-1 font-serif text-3xl text-foreground">
                {p.price || "Price on Request"}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-muted-foreground/10 pt-5 text-sm">
                {p.bedrooms && (
                  <div>
                    <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                      Bedrooms
                    </div>
                    <div className="mt-1 font-serif text-lg">{p.bedrooms}</div>
                  </div>
                )}
                {p.area && (
                  <div>
                    <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                      Area
                    </div>
                    <div className="mt-1 font-serif text-lg">{p.area}</div>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="mt-6 block rounded-sm bg-accent px-6 py-3 text-center text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90"
              >
                Enquire About This
              </Link>
              <Link
                to="/"
                hash="contact"
                className="mt-3 block text-center text-[10px] tracking-[0.24em] uppercase text-muted-foreground hover:text-accent"
              >
                Or request a viewing
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Description + Highlights */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl grid gap-12 px-6 py-16 lg:grid-cols-5 lg:px-10 lg:py-20">
          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-[0.28em] uppercase text-accent">Overview</p>
            <h2 className="mt-3 font-serif text-3xl">About this property</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {(p.full_description || p.description || "Details for this listing will be shared on request.")
                .split(/\n+/)
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </div>
          {p.highlights && p.highlights.length > 0 && (
            <div className="lg:col-span-2">
              <p className="text-[11px] tracking-[0.28em] uppercase text-accent">Highlights</p>
              <h2 className="mt-3 font-serif text-3xl">Key features</h2>
              <ul className="mt-6 space-y-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={heroDubai} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <h2 className="font-serif text-3xl lg:text-4xl">Interested in {p.title}?</h2>
          <p className="mt-4 text-sm text-background/75">
            Speak with an experienced broker for pricing, availability and a private viewing.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition"
          >
            Get in touch
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
