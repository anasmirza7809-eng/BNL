import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { TiltCard } from "@/components/tilt-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PropertyImage } from "@/lib/property-image";
import { listPublicProperties } from "@/lib/public-properties.functions";
import { getPropertiesByCategory } from "@/lib/local-property-data";
import heroDubai from "@/assets/hero-dubai.jpg";
import dubaiApartment from "@/assets/dubai-apartment.jpg.asset.json";
import indiaResidential from "@/assets/india-residential.jpg.asset.json";
import dubaiVilla from "@/assets/dubai-villa.jpg.asset.json";
import dubaiRental from "@/assets/dubai-rental.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import indiaLand from "@/assets/india-land.jpg";
import indiaCommercial from "@/assets/india-commercial.jpg.asset.json";


type CategorySlug =
  | "dubai-apartments"
  | "dubai-villas"
  | "dubai-commercial"
  | "india-commercial"
  | "india-residential"
  | "india-land";

const CATEGORIES: Record<
  CategorySlug,
  { title: string; region: string; blurb: string; fallbackImg: string }
> = {
  "dubai-apartments": {
    title: "Luxury Apartments",
    region: "Dubai",
    blurb: "Modern residences in Dubai's most iconic addresses.",
    fallbackImg: dubaiApartment.url,
  },
  "dubai-villas": {
    title: "Luxury Villas",
    region: "Dubai",
    blurb: "Exclusive villas and estates for elevated living.",
    fallbackImg: dubaiVilla.url,
  },
  "dubai-commercial": {
    title: "Commercial Spaces",
    region: "Dubai",
    blurb: "High-ROI offices and retail in prime commercial districts.",
    fallbackImg: dubaiRental,
  },
  "india-commercial": {
    title: "Commercial",
    region: "India",
    blurb: "Grade-A offices and retail assets across India's top cities.",
    fallbackImg: indiaCommercial.url,
  },
  "india-residential": {
    title: "Residential",
    region: "India",
    blurb: "Luxury homes for a discerning lifestyle.",
    fallbackImg: indiaResidential.url,
  },
  "india-land": {
    title: "Land Investment",
    region: "India",
    blurb: "Titled plots and land banks with strong growth potential.",
    fallbackImg: indiaLand,
  },
};

const isCategory = (s: string): s is CategorySlug => s in CATEGORIES;

const propertiesQuery = (category: CategorySlug) =>
  queryOptions({
    queryKey: ["properties", category],
    queryFn: async () => {
      // Get both local and admin-added properties
      const localProperties = getPropertiesByCategory(category);
      const adminProperties = await listPublicProperties(category);
      // Combine and deduplicate by ID
      const combined = [...localProperties];
      adminProperties.forEach(adminProp => {
        if (!combined.find(p => p.id === adminProp.id)) {
          combined.push(adminProp);
        }
      });
      // Sort: featured first, then by date
      return combined.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        const dateA = new Date(a.created_at || 0).getTime();
        const dateB = new Date(b.created_at || 0).getTime();
        return dateB - dateA;
      });
    },
  });

export const Route = createFileRoute("/properties/$category")({
  loader: async ({ params, context }) => {
    if (!isCategory(params.category)) throw notFound();
    await context.queryClient.ensureQueryData(propertiesQuery(params.category));
  },
  head: ({ params }) => {
    const meta = isCategory(params.category) ? CATEGORIES[params.category] : null;
    const title = meta
      ? `${meta.title} in ${meta.region} — Bricks & Legacy`
      : "Properties — Bricks & Legacy";
    const description = meta?.blurb ?? "Explore premium properties in Dubai and India.";
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
        <h1 className="font-serif text-3xl">Category not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent underline">Back to home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-8 text-center">
      <div>
        <h1 className="font-serif text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-4 rounded-sm bg-accent px-6 py-2 text-primary text-sm">Retry</button>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  if (!isCategory(category)) return null;
  const meta = CATEGORIES[category];
  const { data: properties } = useSuspenseQuery(propertiesQuery(category));

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={heroDubai} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <Header />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] tracking-[0.32em] uppercase text-accent">
            {meta.region} Properties
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {meta.title.toUpperCase()}
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mt-6 max-w-xl text-sm text-background/80">{meta.blurb}</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-background/80 hover:text-accent"
          >
            <span aria-hidden>←</span> Back to all categories
          </Link>
        </div>
      </section>

      {/* Listings */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          {properties.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-sm bg-card p-10 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
              <p className="text-[11px] tracking-[0.28em] uppercase text-accent">Coming Soon</p>
              <h2 className="mt-3 font-serif text-2xl">New listings are being curated</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Contact our senior brokers for an off-market shortlist tailored to your goals.
              </p>
              <Link
                to="/"
                hash="contact"
                className="mt-6 inline-block rounded-sm bg-accent px-6 py-3 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90"
              >
                Enquire Now
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-scene">
              {properties.map((p) => (
                <TiltCard key={p.id} max={7}>
                  <Link
                    to="/property/$id"
                    params={{ id: p.id }}
                    className="group flex h-full flex-col overflow-hidden rounded-sm bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]"
                  >
                    <div className="relative h-56 overflow-hidden bg-primary/90">
                      <PropertyImage
                        imagePath={p.image_path}
                        imageUrl={p.image_url}
                        gallery={p.gallery}
                        fallback={meta.fallbackImg}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {p.featured && (
                        <span className="absolute left-3 top-3 rounded-sm bg-accent px-2 py-1 text-[10px] tracking-[0.22em] uppercase text-primary">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6 tilt-lift-sm">
                      <p className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                        {p.location || meta.region}
                      </p>
                      <h3 className="mt-2 font-serif text-xl">{p.title}</h3>
                      {p.description && (
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                      )}
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-[0.18em] uppercase text-foreground/80">
                        {p.bedrooms && <span>{p.bedrooms}</span>}
                        {p.area && <span>{p.area}</span>}
                      </div>
                      <div className="mt-auto flex items-end justify-between pt-6">
                        <div>
                          <div className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                            Starting
                          </div>
                          <div className="font-serif text-lg text-foreground">{p.price || "On Request"}</div>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-sm border border-primary/20 px-4 py-2 text-[10px] tracking-[0.24em] uppercase group-hover:bg-primary group-hover:text-primary-foreground transition">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${ctaBg})` }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/95" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <h2 className="font-serif text-3xl lg:text-4xl">Looking for something specific?</h2>
          <p className="mt-4 text-sm text-background/75">
            Share your requirements and a senior broker will curate a private shortlist within four business hours.
          </p>
          <Link
            to="/"
            hash="contact"
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
