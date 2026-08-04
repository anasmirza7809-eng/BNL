import { createFileRoute, Link } from "@tanstack/react-router";
import { TiltCard, useReveal3D } from "@/components/tilt-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import heroDubai from "@/assets/hero-blogs.jpg";
import propertyFinderPhoto from "@/assets/blog-hero-luxury.webp.asset.json";
import damacBlogPhoto from "@/assets/damac-blog.jpg.asset.json";
import bloomBlogPhoto from "@/assets/bloom-blog.jpg.asset.json";
import goldenVisaBlogPhoto from "@/assets/golden-visa-blog.webp.asset.json";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Bricks & Legacy" },
      {
        name: "description",
        content:
          "Curated Dubai real estate reads — trusted blogs and market insights we recommend for buyers, investors, and NRIs.",
      },
      { property: "og:title", content: "Blogs — Bricks & Legacy" },
      {
        property: "og:description",
        content:
          "Curated Dubai real estate reads — trusted blogs and market insights we recommend for buyers, investors, and NRIs.",
      },
    ],
  }),
  component: BlogsPage,
});

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal3D<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal-3d ${className}`}>
      {children}
    </div>
  );
}


type BlogEntry = {
  name: string;
  url: string;
  domain: string;
  tag: string;
  description: string;
  image?: string;
};

const BLOGS: BlogEntry[] = [
  {
    name: "Property Finder Blog",
    url: "https://www.propertyfinder.ae/blog",
    domain: "propertyfinder.ae/blog",
    tag: "Neutral · Data-backed",
    description:
      "Dubai's leading property portal. Publishes neutral, data-backed guides on neighborhoods, mortgages, and new regulations (like tenant credit-check rules). Reads as journalistic rather than promotional.",
    image: propertyFinderPhoto.url,
  },
  {
    name: "DAMAC Properties Blog",
    url: "https://www.damacproperties.com/en/blog",
    domain: "damacproperties.com/en/blog",
    tag: "Developer · Market Insight",
    description:
      "From an established, decades-old developer with strong social proof (nearly 1M Facebook followers). Content frames Dubai's growth story positively while staying informational about projects and market shifts.",
    image: damacBlogPhoto.url,
  },
  {
    name: "Bloom Luxury Signature Blog",
    url: "https://luxurysignature.net",
    domain: "luxurysignature.net",
    tag: "Investor · Stats-led",
    description:
      "Focuses on data points like population growth, Golden Visa expansion, and market maturity — builds confidence through stats rather than hype.",
    image: goldenVisaBlogPhoto.url,
  },
  {
    name: "K Estates Blog",
    url: "https://kestates.ae/blog",
    domain: "kestates.ae/blog",
    tag: "Educational · Lifestyle",
    description:
      "Covers market insights and lifestyle trends in a straightforward, educational tone aimed at helping buyers understand Dubai rather than just pushing listings.",
    image: bloomBlogPhoto.url,
  },
];

function Hero() {
  return (
    <section className="relative min-h-[55vh] w-full overflow-hidden bg-primary">
      <img
        src={heroDubai}
        alt="Dubai skyline"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" />
      <Header />
      <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-16 lg:px-10">
        <div className="max-w-3xl text-background reveal-3d is-visible">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Blogs</p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
            Insights we <span className="text-accent">recommend</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80">
            A hand-picked shortlist of Dubai real estate blogs we trust — market data, neighborhood guides, regulation updates and long-view investor perspective.
          </p>
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Recommended Reading</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Trusted Voices on Dubai Real Estate</h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
            While our own editorial is on the way, these are the outlets we lean on for grounded market context.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {BLOGS.map((b, i) => (
            <Reveal key={b.url} className="h-full" >
              <TiltCard max={6}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-sm bg-card p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] transition hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]"
                >
                  <div>
                    {b.image && (
                      <div className="mb-6 overflow-hidden rounded-sm">
                        <img
                          src={b.image}
                          alt={b.name}
                          className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.28em] uppercase text-accent">
                        0{i + 1} · {b.tag}
                      </span>
                      <span className="text-xs text-muted-foreground group-hover:text-accent transition">↗</span>
                    </div>
                    <h3 className="mt-5 font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                      {b.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-3 border-t border-border/60 pt-5">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-[11px] tracking-[0.22em] uppercase text-foreground/70">
                      {b.domain}
                    </span>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Want tailored guidance instead? {" "}
            <Link to="/contact" className="text-accent underline-offset-4 hover:underline">
              Speak with an experienced broker →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}


function BlogsPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <BlogGrid />
      <Footer />
    </main>
  );
}
