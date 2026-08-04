import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { TiltCard, useReveal3D } from "@/components/tilt-card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import heroDubai from "@/assets/hero-services.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bricks & Legacy" },
      {
        name: "description",
        content:
          "Full-service luxury real estate across Dubai and India — buy, sell, rent, short-term rentals, mortgage advisory, and property management for HNIs and NRIs.",
      },
      { property: "og:title", content: "Services — Bricks & Legacy" },
      {
        property: "og:description",
        content:
          "Buy, sell, rent, short-term rent, mortgage advisory, and property management across Dubai and India — handled by senior brokers.",
      },
    ],
  }),
  component: ServicesPage,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useReveal3D<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal-3d ${className}`}>
      {children}
    </div>
  );
}

type Service = {
  title: string;
  icon: string;
  summary: string;
  points: string[];
};

const dubaiServices: Service[] = [
  {
    title: "Buy",
    icon: "🏠",
    summary:
      "Acquire luxury apartments, villas, land, and commercial assets across Dubai's most sought-after communities.",
    points: [
      "Off-plan and ready inventory from every top developer",
      "Off-market opportunities via our private network",
      "End-to-end paperwork, DLD, and handover support",
      "Golden Visa eligibility guidance for qualifying purchases",
    ],
  },
  {
    title: "Sell",
    icon: "🤝",
    summary:
      "Position your Dubai property in front of the right buyer with premium marketing and qualified matchmaking.",
    points: [
      "Professional photography, video, and staging",
      "Global reach across UAE, India, GCC and Europe",
      "Discreet, off-market listings when required",
      "Negotiation and closing handled by a senior broker",
    ],
  },
  {
    title: "Rent",
    icon: "🔑",
    summary:
      "Long-term rental solutions for families, executives, and investors — on both sides of the transaction.",
    points: [
      "Curated shortlists matched to your lifestyle",
      "Tenant vetting, Ejari, and contract management",
      "Renewal, rent review, and RERA-compliant advice",
      "Landlord representation across prime communities",
    ],
  },
  {
    title: "Short-term Rent",
    icon: "🧳",
    summary:
      "Fully managed holiday homes and short-stay rentals in Dubai's most desirable addresses.",
    points: [
      "DTCM licensing and compliance handled for you",
      "Multi-channel listing (Airbnb, Booking, Direct)",
      "Housekeeping, guest support, and dynamic pricing",
      "Transparent monthly owner statements",
    ],
  },
];

const indiaServices: Service[] = [
  {
    title: "Buy",
    icon: "🏡",
    summary:
      "Curated residential, commercial, and land opportunities for NRIs investing back home with confidence.",
    points: [
      "Vetted projects from India's most trusted developers",
      "Legal due diligence, title checks, and RERA verification",
      "NRI-focused documentation (POA, remittance, taxation)",
      "On-ground site visits and construction updates",
    ],
  },
  {
    title: "Sell",
    icon: "📈",
    summary:
      "Global buyer reach with local expertise to position your Indian property for the best possible outcome.",
    points: [
      "Fair market valuation and pricing strategy",
      "NRI-friendly repatriation and TDS guidance",
      "Buyer sourcing across UAE, GCC, UK, and US",
      "End-to-end closing coordination remotely",
    ],
  },
  {
    title: "Rent",
    icon: "🗝️",
    summary:
      "Reliable long-term leasing support for your Indian residential and commercial assets.",
    points: [
      "Tenant sourcing, background checks, and agreements",
      "Rent collection and remittance to your NRE / NRO account",
      "Society and municipal compliance handled locally",
      "Annual inspections and condition reports",
    ],
  },
  {
    title: "Short-term Rent",
    icon: "🧳",
    summary:
      "Hassle-free short-stay and corporate rentals in India's most sought-after cities.",
    points: [
      "Serviced apartments and holiday homes",
      "Corporate leasing tie-ups for consistent occupancy",
      "Housekeeping and guest management",
      "Monthly earnings statements with full transparency",
    ],
  },
];

const additionalServices: Service[] = [
  {
    title: "Mortgage Advisory",
    icon: "📑",
    summary:
      "Expert guidance across UAE and Indian lenders to structure the right financing for you.",
    points: [
      "Pre-approvals and rate comparisons across leading banks",
      "NRI-specific mortgage structuring for Indian assets",
      "UAE mortgage guidance for residents and non-residents",
      "Refinancing, top-ups, and equity release advisory",
    ],
  },
  {
    title: "Property Management",
    icon: "⚙️",
    summary:
      "Complete care for your assets — so your investment keeps working while you focus elsewhere.",
    points: [
      "Tenant sourcing, screening, and lease renewals",
      "Preventive maintenance and 24/7 emergency response",
      "Rent collection, remittance, and reconciliation",
      "Transparent quarterly reporting to owners",
    ],
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
          <p className="eyebrow text-accent">
            <span className="gold-rule mr-3 !bg-accent" />
            Our Services
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
            One trusted partner <br />
            <span className="text-accent">across two markets</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80">
            From your first home in Dubai to a multi-generational land portfolio in India — we handle every stage of the journey with the discretion and standards you expect.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <TiltCard max={6} className="h-full">
      <article className="group flex h-full flex-col rounded-sm bg-card p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] transition tilt-lift-sm hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.22)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent transition group-hover:bg-accent group-hover:text-primary">
          <span>{s.icon}</span>
        </div>
        <h3 className="mt-5 font-serif text-2xl text-foreground">{s.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
        <ul className="mt-auto space-y-2.5 border-t border-border/60 pt-5">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>
    </TiltCard>
  );
}

function MarketSection({
  eyebrow,
  title,
  description,
  services,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
  tone?: "light" | "muted";
}) {
  return (
    <section className={tone === "muted" ? "bg-secondary/50" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">
            <span className="gold-rule mr-3 !bg-accent" />
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-scene items-stretch">
          {services.map((s) => (
            <Reveal key={s.title} className="h-full">
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdditionalServicesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent">
            <span className="gold-rule mr-3 !bg-accent" />
            Beyond the Transaction
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Additional Services</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
            Long-term support that goes beyond the sale — so your investment keeps working for you.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 perspective-scene">
          {additionalServices.map((s) => (
            <Reveal key={s.title}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", title: "Discovery", body: "A private consultation to understand your goals, timelines, and risk appetite." },
    { n: "02", title: "Curated Shortlist", body: "A tailored selection across Dubai and India — on and off-market — within four business hours." },
    { n: "03", title: "Due Diligence", body: "Legal, financial, and physical verification so you buy or sell with complete clarity." },
    { n: "04", title: "Close & Beyond", body: "We handle handover, financing, and long-term management — the relationship outlasts the deal." },
  ];
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent">
            <span className="gold-rule mr-3 !bg-accent" />
            How We Work
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">A four-step process</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.n}>
              <div className="h-full rounded-sm bg-card p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.12)]">
                <div className="font-serif text-4xl text-accent">{s.n}</div>
                <h3 className="mt-4 font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${ctaBg})` }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/95" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl lg:text-4xl">Speak with an experienced broker</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-background/75">
            Tell us what you're looking for and we'll get back within four business hours with a tailored plan.
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

function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <MarketSection
        eyebrow="Dubai Services"
        title="Dubai — Buy, Sell, Rent & Beyond"
        description="From Palm Jumeirah villas to Downtown penthouses and commercial floors — full-cycle advisory led by senior brokers with deep developer relationships."
        services={dubaiServices}
      />
      <MarketSection
        eyebrow="India Services"
        title="India — Built for the NRI Investor"
        description="Residential, commercial, and land opportunities across India's key corridors — with legal, tax, and remittance guidance built for NRIs."
        services={indiaServices}
        tone="muted"
      />
      <AdditionalServicesSection />
      <ProcessSection />
      <CTA />
      <Footer />
    </main>
  );
}
