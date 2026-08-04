import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { TiltCard, useReveal3D } from "@/components/tilt-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import heroDubai from "@/assets/hero-about.jpg";
import aboutDubai from "@/assets/about-dubai-skyline.jpg.asset.json";
import indiaSkyline from "@/assets/india-residential.jpg.asset.json";
import testimonialsBg from "@/assets/testimonials-bg.jpg";


export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Bricks & Legacy" },
      {
        name: "description",
        content:
          "Learn about Bricks & Legacy — a boutique luxury real estate firm connecting Dubai and India through trusted advisory, curated properties, and end-to-end services.",
      },
      { property: "og:title", content: "About Us — Bricks & Legacy" },
      {
        property: "og:description",
        content:
          "Boutique luxury real estate advisory across Dubai & India — who we are, why clients choose us, and the people behind the legacy.",
      },
    ],
  }),
  component: AboutPage,
});

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal3D<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-up ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function RevealWords({ text, className = "", wordDelay = 70, className2 = "" }: { text: string; className?: string; wordDelay?: number; className2?: string }) {
  const ref = useReveal3D<HTMLSpanElement>();
  const words = text.split(" ");
  return (
    <span ref={ref} className={`reveal-words ${className}`}>
      {words.map((w, i) => (
        <span key={i} className={`reveal-word ${className2}`} style={{ marginRight: "0.28em" }}>
          <span style={{ ["--word-delay" as string]: `${i * wordDelay}ms` }}>{w}</span>
        </span>
      ))}
    </span>
  );
}




function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroDubai}
          alt="Dubai skyline"
          className="absolute inset-0 h-full w-full object-cover opacity-40 hero-zoom"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary" />
      <Header />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <div className="max-w-3xl text-background">
          <p className="eyebrow text-accent flex items-center">
            <span className="gold-rule draw-x is-visible mr-3 !bg-accent" style={{ ["--reveal-delay" as string]: "0ms" }} />
            <span className="reveal-up is-visible" style={{ ["--reveal-delay" as string]: "150ms" }}>About Bricks &amp; Legacy</span>
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
            <RevealWords text="A boutique real estate firm" />
            <br />
            <span className="text-accent">
              <RevealWords text="built on trust & legacy" wordDelay={80} />
            </span>
          </h1>
          <p
            className="reveal-up is-visible mt-6 max-w-2xl text-base leading-relaxed text-background/80"
            style={{ ["--reveal-delay" as string]: "900ms" }}
          >
            We are a modern advisory bridging Dubai's iconic skyline with India's most promising land and residential opportunities — delivering discreet, personal service to a global clientele.
          </p>
        </div>
      </div>
    </section>
  );
}


function ServiceIcon({ type }: { type: "buy" | "sell" | "rent" | "short" }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "buy") return (
    <svg {...common}><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>
  );
  if (type === "sell") return (
    <svg {...common}><path d="M3 12c1.5-1.5 3-1 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" /><path d="M6 15l3-3 3 2 3-4 3 3" /></svg>
  );
  if (type === "rent") return (
    <svg {...common}><circle cx="8" cy="15" r="4" /><path d="m11 12 9-9" /><path d="M17 3h4v4" /><path d="m15 5 4 4" /></svg>
  );
  return (
    <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4M16 3v4" /></svg>
  );
}

function DubaiIcon() {
  return (
    <svg width="72" height="88" viewBox="0 0 72 88" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 84V38l8-10 8 10v46" />
      <path d="M34 84V22l8-14 8 14v62" />
      <path d="M50 84V44l6-8 6 8v40" />
      <path d="M6 84h60" />
      <path d="M22 46h6M22 54h6M22 62h6M22 70h6M38 30h8M38 40h8M38 50h8M38 60h8M38 70h8M54 50h6M54 60h6M54 70h6" />
    </svg>
  );
}

function IndiaIcon() {
  return (
    <svg width="86" height="72" viewBox="0 0 86 72" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M43 6l-3 6 3 4 3-4z" />
      <path d="M43 16v6" />
      <path d="M32 30c0-6 5-8 11-8s11 2 11 8" />
      <path d="M30 30h26v6H30z" />
      <path d="M28 36h30v4H28z" />
      <path d="M32 40v22M40 40v22M46 40v22M54 40v22" />
      <path d="M24 62h38" />
      <path d="M18 62v-10c0-3 2-5 5-5M68 62v-10c0-3-2-5-5-5" />
      <path d="M18 47l-2 4M68 47l2 4" />
      <path d="M6 66h74" />
    </svg>
  );
}

function ServicePill({ type, label }: { type: "buy" | "sell" | "rent" | "short"; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-accent"><ServiceIcon type={type} /></span>
      <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-foreground/80">{label}</span>
    </div>
  );
}

function RegionCard({ variant, label, description }: { variant: "dubai" | "india"; label: string; description: string }) {
  const railClass = variant === "dubai" ? "bg-primary text-background" : "bg-accent text-primary";
  return (
    <div className="group flex h-full overflow-hidden rounded-md border border-foreground/10 bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] transition hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.28)]">
      <div className={`${railClass} flex w-24 sm:w-28 shrink-0 items-center justify-center p-4 transition-transform duration-500 group-hover:scale-[1.02]`}>
        {variant === "dubai" ? <DubaiIcon /> : <IndiaIcon />}
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 p-6">
        <div>
          <div className={`font-serif text-2xl tracking-[0.24em] ${variant === "dubai" ? "text-primary" : "text-accent"}`}>{label}</div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We help you with end-to-end solutions for{" "}
            <span className="font-semibold text-foreground">Buy, Sell, Rent &amp; Short Rental</span>{" "}
            {description}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-foreground/10">
          <ServicePill type="buy" label="Buy" />
          <ServicePill type="sell" label="Sell" />
          <ServicePill type="rent" label="Rent" />
          <ServicePill type="short" label="Short Rental" />
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <span className="text-primary/80">{icon}</span>
      <span className="text-sm font-medium text-foreground/80 leading-snug max-w-[10rem]">{label}</span>
    </div>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        {/* Top: headline + skyline collage */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-accent flex items-center">
              <span className="reveal-up is-visible">Who We Are</span>
              <span className="ml-3 h-px w-16 bg-accent" />
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] lg:text-6xl text-primary">
              <RevealWords text="Building Connections." />
              <br />
              <span className="text-accent">
                <RevealWords text="Creating Value." wordDelay={80} />
              </span>
            </h2>
            <span className="mt-6 block h-px w-16 bg-accent" />
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We are a global real estate advisory firm, helping clients buy, sell, rent &amp; invest in the right properties across Dubai and India.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative perspective-scene h-[360px] lg:h-[420px]">
              <div
                className="absolute inset-y-0 left-0 w-[62%] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }}
              >
                <img src={aboutDubai.url} alt="Dubai skyline" className="h-full w-full object-cover" />
              </div>
              <div
                className="absolute inset-y-0 right-0 w-[46%] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
                style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <img src={indiaSkyline.url} alt="India skyline" className="h-full w-full object-cover" />
              </div>
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-sm bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-2xl" />
            </div>
          </Reveal>
        </div>

        {/* Region cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2 perspective-scene">
          <Reveal>
            <RegionCard variant="dubai" label="DUBAI" description="properties in Dubai." />
          </Reveal>
          <Reveal delay={120}>
            <RegionCard variant="india" label="INDIA" description="properties in India." />
          </Reveal>
        </div>

        {/* NRI bar */}
        <Reveal className="mt-6">
          <div className="relative flex flex-col gap-6 overflow-hidden rounded-md border border-foreground/10 bg-secondary/60 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
            <div className="flex shrink-0 items-center gap-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary text-accent">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <span className="hidden h-16 w-px bg-foreground/15 sm:block" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-xl sm:text-2xl tracking-[0.14em] uppercase text-primary">
                Exclusively for <span className="text-accent">NRI Clients</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">
                We specialize in <span className="font-semibold text-foreground">Land Investment</span> opportunities across India, curated exclusively for NRI investors.
              </p>
            </div>
            <svg className="hidden md:block shrink-0 text-primary/40" width="140" height="70" viewBox="0 0 140 70" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 56c14-4 28 6 42 2s22-14 36-14 30 10 54 8" />
              <path d="M20 50l4-8 4 8M60 42l4-8 4 8M104 40l4-8 4 8" />
              <path d="M92 20c0 6-6 10-6 10s-6-4-6-10a6 6 0 0 1 12 0Z" />
              <circle cx="86" cy="20" r="2" />
            </svg>
          </div>
        </Reveal>

        {/* Feature row */}
        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          <Reveal>
            <FeatureItem
              label="Trusted Advisory"
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
            />
          </Reveal>
          <Reveal delay={80}>
            <FeatureItem
              label="NRI-Focused Solutions"
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              }
            />
          </Reveal>
          <Reveal delay={160}>
            <FeatureItem
              label="End-to-End Support"
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                  <rect x="3" y="14" width="4" height="6" rx="1" />
                  <rect x="17" y="14" width="4" height="6" rx="1" />
                  <path d="M17 20a4 4 0 0 1-4 3h-1" />
                </svg>
              }
            />
          </Reveal>
          <Reveal delay={240}>
            <FeatureItem
              label="Global Reach, Local Expertise"
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2c3 3.5 4.5 7.5 4.5 10S15 18.5 12 22c-3-3.5-4.5-7.5-4.5-10S9 5.5 12 2Z" />
                </svg>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}



type ServiceCard = { title: string; body: string; icon: ReactNode };

function ServiceTile({ s }: { s: ServiceCard }) {
  return (
    <TiltCard max={6}>
      <article className="group flex h-full flex-col items-center rounded-sm bg-background p-6 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)] transition hover:shadow-[0_20px_70px_-25px_rgba(0,0,0,0.18)] tilt-lift-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-primary">
          {s.icon}
        </div>
        <h4 className="mt-4 font-serif text-base tracking-wide text-foreground">{s.title}</h4>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
      </article>
    </TiltCard>
  );
}

function ServiceAccordion({
  title,
  items,
  defaultOpen = false,
  accent,
}: {
  title: string;
  items: ServiceCard[];
  defaultOpen?: boolean;
  accent: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-sm bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 px-6 py-5 lg:px-8 lg:py-6 text-left transition-colors hover:bg-secondary/40"
      >
        <div className="flex items-center gap-4">
          <span
            className={`h-10 w-1 rounded-full ${accent} transition-all duration-500 ${open ? "h-12" : ""}`}
          />
          <h3 className="font-serif text-xl lg:text-2xl tracking-[0.24em] uppercase text-foreground">
            {title}
          </h3>
        </div>
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 text-accent transition-transform duration-500 ${
            open ? "rotate-180 bg-accent text-primary" : "group-hover:rotate-45"
          }`}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-4 px-6 pb-6 sm:grid-cols-2 lg:px-8 lg:pb-8 perspective-scene">
            {items.map((s, i) => (
              <div
                key={s.title}
                className={`transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
              >
                <ServiceTile s={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionVision() {
  const cards = [
    {
      eyebrow: "Our Mission",
      title: "Redefining trust in real estate",
      points: [
        "Empower families to invest, live and grow with confidence.",
        "Bridge Dubai and India through expert cross-border guidance.",
        "Deliver personalised, end-to-end real estate solutions.",
        "Turn aspirations into action — from first inquiry to final deal.",
      ],
    },
    {
      eyebrow: "Our Vision",
      title: "A future built with trusted partners",
      points: [
        "Be the most trusted advisory between Dubai and India.",
        "Remove the guesswork from every property transaction.",
        "Create a seamless journey from inquiry to ownership.",
        "Build lifelong relationships that outlast the deal.",
      ],
    },
  ];
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Purpose &amp; Direction</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Our Mission &amp; Vision</h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 perspective-scene">
          {cards.map((c, i) => (
            <Reveal key={c.eyebrow} delay={i * 120} className="h-full">
              <TiltCard max={8} className="h-full">
                <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-sm bg-card p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] tilt-lift-sm">
                  <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                  <p className="eyebrow text-accent"><span className="gold-rule mr-2 !bg-accent" />{c.eyebrow}</p>
                  <h3 className="mt-4 font-serif text-2xl lg:text-3xl text-foreground">{c.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurCommitment() {
  const promises = [
    "Fair practices over fast profits",
    "Complete transparency in every transaction",
    "A platform where clients and partners are respected and rewarded",
    "Continuous learning and evolving to serve you better every day",
    "Integrity over incentives — service, not sales targets",
    "One-stop solutions across buying, selling, leasing, mortgage & management",
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Our Commitment</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">More than brokers — your partners</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
            Whether you're a first-time buyer, a seasoned investor, or a long-term partner, our promise remains the same.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p} delay={i * 70}>
              <div className="group flex h-full items-start gap-4 rounded-sm border border-accent/20 bg-card p-6 transition hover:border-accent hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)]">
                <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-foreground">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Omar Khalifa", location: "", quote: "Found our dream family villa in Dubai Hills Estate thanks to the amazing team. Incredibly helpful and made the entire process so easy." },
    { name: "Layla Mansoori", location: "", quote: "Thrilled with the support in finding our new office space in DIFC. The team understood our business needs perfectly." },
    { name: "Nikhil Patel", location: "", quote: "Excellent guidance and helped us find the perfect investment in Dubai Creek Harbour. Highly recommend for anyone buying in Dubai." },
    { name: "Priya Sharma", location: "", quote: "From the initial property viewings to the final registration, the team was incredibly supportive and professional. Seamless throughout." },
    { name: "Sunita Kumar", location: "", quote: "Transparent and honest approach. Realistic valuation, no hidden charges, and excellent negotiation on my ancestral property sale." },
    { name: "Sarah Mitchell", location: "", quote: "Their property management has been a lifesaver. Proactive on maintenance and tenants — full peace of mind as an expat." },
  ];
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${testimonialsBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95" aria-hidden />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Testimonials</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-background">What our clients say</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-background/75">
            Real stories from clients across Dubai and India who trusted us with their homes and investments.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch perspective-scene">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90} className="h-full">
              <TiltCard max={6} className="h-full">
                <article className="group relative flex h-full min-h-[280px] flex-col rounded-sm bg-background/[0.04] p-8 backdrop-blur-sm border border-background/10 transition hover:border-accent/60 hover:bg-background/[0.07] tilt-lift-sm">
                  <svg className="h-8 w-8 shrink-0 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7.17 6C4.87 6 3 7.87 3 10.17V18h7v-7.83H6.5c0-1.47 1.2-2.67 2.67-2.67V6H7.17zm10 0c-2.3 0-4.17 1.87-4.17 4.17V18h7v-7.83H16.5c0-1.47 1.2-2.67 2.67-2.67V6h-2z" />
                  </svg>
                  <p className="mt-5 text-sm leading-relaxed text-background/90">"{r.quote}"</p>
                  <div className="mt-auto flex items-center gap-3 pt-6 border-t border-background/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary font-serif text-sm">
                      {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-serif text-sm text-background">{r.name}</p>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type TeamMember = { name: string; role: string; bio: string; initials: string };

function MeetTheTeam() {
  const team: TeamMember[] = [
    {
      name: "Founder & Managing Director",
      role: "Dubai & India Advisory",
      bio: "Over a decade advising HNIs and NRIs on cross-border real estate. Leads every senior mandate personally.",
      initials: "BL",
    },
    {
      name: "Head of Dubai Sales",
      role: "Luxury Apartments & Villas",
      bio: "Specialist in Palm Jumeirah, Downtown, and Emirates Hills. Deep relationships with every top developer.",
      initials: "DS",
    },
    {
      name: "Head of India Desk",
      role: "NRI Land & Residential",
      bio: "Focused on Delhi NCR, Mumbai, and emerging tier-1 corridors. Guides NRIs through legal and tax nuances.",
      initials: "ID",
    },
    {
      name: "Head of Property Management",
      role: "Dubai & India Operations",
      bio: "Runs the day-to-day for owners abroad — tenants, maintenance, and reporting, handled end to end.",
      initials: "PM",
    },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Meet the Team</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">The people behind the legacy</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            Senior advisors with deep local roots in Dubai and India — and a global outlook shaped by the clients they serve.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-scene">
          {team.map((m) => (
            <TiltCard key={m.name} max={8}>
              <article className="flex h-full flex-col items-center rounded-sm bg-card p-8 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] tilt-lift-sm">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-serif text-primary-foreground">
                  {m.initials}
                </div>
                <h4 className="mt-5 font-serif text-lg text-foreground">{m.name}</h4>
                <p className="mt-1 text-[10px] tracking-[0.24em] uppercase text-accent">{m.role}</p>
                
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${testimonialsBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/95" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl lg:text-4xl">Ready to build your legacy?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-background/75">
            Speak with a senior broker — a tailored shortlist across Dubai and India, within four business hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <WhoWeAre />
      <MissionVision />
      <OurCommitment />
      <Testimonials />
      <MeetTheTeam />
      <CTA />
      <Footer />
    </main>
  );
}
