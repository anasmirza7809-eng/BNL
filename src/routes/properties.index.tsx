import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TiltCard } from "@/components/tilt-card";
import heroDubai from "@/assets/hero-properties.jpg";
import dubaiApartment from "@/assets/dubai-apartment.jpg.asset.json";
import dubaiVilla from "@/assets/dubai-villa.jpg.asset.json";
import dubaiCommercial from "@/assets/dubai-commercial.jpg.asset.json";
import indiaCommercial from "@/assets/india-commercial.jpg.asset.json";
import indiaResidential from "@/assets/india-residential.jpg.asset.json";
import indiaLand from "@/assets/india-land.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

type Cat = {
  slug:
    | "dubai-apartments"
    | "dubai-villas"
    | "dubai-commercial"
    | "india-commercial"
    | "india-residential"
    | "india-land";
  region: "Dubai" | "India";
  title: string;
  blurb: string;
  image: string;
};

const CATEGORIES: Cat[] = [
  {
    slug: "dubai-apartments",
    region: "Dubai",
    title: "Luxury Apartments",
    blurb: "Modern residences in Dubai's most iconic addresses.",
    image: dubaiApartment.url,
  },
  {
    slug: "dubai-villas",
    region: "Dubai",
    title: "Luxury Villas",
    blurb: "Exclusive villas and estates for elevated living.",
    image: dubaiVilla.url,
  },
  {
    slug: "dubai-commercial",
    region: "Dubai",
    title: "Commercial Spaces",
    blurb: "High-ROI offices and retail in prime commercial districts.",
    image: dubaiCommercial.url,
  },
  {
    slug: "india-residential",
    region: "India",
    title: "Residential",
    blurb: "Luxury homes for a discerning lifestyle across metro India.",
    image: indiaResidential.url,
  },
  {
    slug: "india-commercial",
    region: "India",
    title: "Commercial",
    blurb: "Grade-A offices and retail assets across India's top cities.",
    image: indiaCommercial.url,
  },
  {
    slug: "india-land",
    region: "India",
    title: "Land Investment",
    blurb: "Titled plots and land banks with strong growth potential.",
    image: indiaLand,
  },
];

export const Route = createFileRoute("/properties/")({
  head: () => ({
    meta: [
      { title: "Properties in Dubai & India — Bricks & Legacy" },
      {
        name: "description",
        content:
          "Explore Bricks & Legacy's curated portfolio of luxury apartments, villas, commercial spaces, and land investments across Dubai and India.",
      },
      { property: "og:title", content: "Properties in Dubai & India — Bricks & Legacy" },
      {
        property: "og:description",
        content:
          "Curated luxury apartments, villas, commercial spaces, and land investments across Dubai and India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PropertiesPage,
});

function CategoryCard({ cat }: { cat: Cat }) {
  return (
    <TiltCard max={7}>
      <Link
        to="/properties/$category"
        params={{ category: cat.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-sm bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={cat.image}
            alt={cat.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-sm bg-accent px-2.5 py-1 text-[10px] tracking-[0.24em] uppercase text-primary">
            {cat.region}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 tilt-lift-sm">
          <h3 className="font-serif text-2xl text-foreground">{cat.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{cat.blurb}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] tracking-[0.24em] uppercase text-primary group-hover:text-accent transition">
            View Listings <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}

function PropertiesPage() {
  const dubai = CATEGORIES.filter((c) => c.region === "Dubai");
  const india = CATEGORIES.filter((c) => c.region === "India");

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroDubai}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <Header />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <p className="eyebrow text-accent flex items-center">
            <span className="gold-rule draw-x is-visible mr-3 !bg-accent" style={{ ["--reveal-delay" as string]: "0ms" }} />
            <span className="reveal-up is-visible" style={{ ["--reveal-delay" as string]: "150ms" }}>Our Portfolio</span>
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            PROPERTIES IN DUBAI &amp; INDIA
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mt-6 max-w-2xl text-sm text-background/80">
            A curated selection of luxury apartments, villas, commercial assets and land
            investments across two of the world's most rewarding real estate markets.
          </p>
        </div>
      </section>

      {/* Dubai */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-accent">Dubai</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Dubai Properties</h2>
            </div>
            <div className="hidden sm:block h-px flex-1 bg-primary/15" />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-scene">
            {dubai.map((c) => (
              <CategoryCard key={c.slug} cat={c} />
            ))}
          </div>
        </div>
      </section>

      {/* India */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-accent">India</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">India Properties</h2>
            </div>
            <div className="hidden sm:block h-px flex-1 bg-primary/15" />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-scene">
            {india.map((c) => (
              <CategoryCard key={c.slug} cat={c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${ctaBg})` }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/95" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <h2 className="font-serif text-3xl lg:text-4xl">Can't find what you're looking for?</h2>
          <p className="mt-4 text-sm text-background/75">
            Share your brief and an experienced broker will curate a private, off-market
            shortlist within four business hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition"
          >
            Speak with a Broker
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
