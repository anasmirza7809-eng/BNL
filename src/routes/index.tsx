import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import { TiltCard, useReveal3D } from "@/components/tilt-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";


import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import heroDubai from "@/assets/hero-dubai.jpg";
import dubaiApartment from "@/assets/dubai-apartment.jpg.asset.json";
import dubaiVillaAsset from "@/assets/dubai-villa.jpg.asset.json";
import dubaiRental from "@/assets/dubai-rental.jpg";
import indiaLand from "@/assets/india-land.jpg";
import dubaiCommercialAsset from "@/assets/dubai-commercial.jpg.asset.json";
import indiaCommercial from "@/assets/india-commercial.jpg.asset.json";
import indiaResidential from "@/assets/india-residential.jpg.asset.json";
import emaarLogo from "@/assets/partners/emaar-logo-new.png.asset.json";
import binghattiLogo from "@/assets/partners/binghatti-logo-new.png.asset.json";
import damacLogo from "@/assets/partners/damac-new.png.asset.json";
import danubeLogo from "@/assets/partners/danube.png.asset.json";
import dubaiPropsLogo from "@/assets/partners/dubai-properties-new.png.asset.json";
import aldarLogo from "@/assets/partners/aldar.png.asset.json";

import nakheelLogo from "@/assets/partners/nakheel-new.png.asset.json";
import omniyatLogo from "@/assets/partners/omniyat.png.asset.json";
import samanaLogo from "@/assets/partners/samana.png.asset.json";
import sobhaRealtyLogo from "@/assets/partners/sobha-realty-new.png.asset.json";
import aziziLogo from "@/assets/partners/azizi.png.asset.json";
import dlfLogo from "@/assets/partners/dlf-new.png.asset.json";
import lodhaLogo from "@/assets/partners/lodha-new.png.asset.json";
import piramalLogo from "@/assets/partners/piramal-realty-new.png.asset.json";
import omaxeLogo from "@/assets/partners/omaxe.png.asset.json";

import adaniLogo from "@/assets/partners/adani-new.png.asset.json";
import oberoiLogo from "@/assets/partners/oberoi-new.png.asset.json";
import tataHousingLogo from "@/assets/partners/tata-housing.png.asset.json";
import puravankaraLogo from "@/assets/partners/puravankara.png.asset.json";
import brigadeLogo from "@/assets/partners/brigade.png.asset.json";
import prestigeLogo from "@/assets/partners/prestige.png.asset.json";
import godrejNewLogo from "@/assets/partners/godrej-new.png.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useReveal3D<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal-3d ${className}`}>
      {children}
    </div>
  );
}



function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-primary">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        poster=""
      >
        <source src={heroVideoAsset.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/10" />
      <Header />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-32 lg:px-10">
        <div className="max-w-2xl text-background reveal-3d is-visible">
          <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            YOUR INVESTMENT
            <br />
            FOR
            <br />
            <span className="text-accent">LUXURY LIVING</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-background/85">
            Connecting you to premium properties in Dubai &amp; India
            <br />
            with expert guidance and trusted solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#properties"
              className="group rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition inline-flex items-center gap-3"
            >
              Explore Properties <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type CategorySlug =
  | "dubai-apartments"
  | "dubai-villas"
  | "dubai-commercial"
  | "india-commercial"
  | "india-residential"
  | "india-land";

type PropertyCard = { slug: CategorySlug; title: string; body: string; img: string };

function PropertyPanel({ heading, items }: { heading: string; items: PropertyCard[] }) {
  return (
    <div className="rounded-sm bg-card p-6 lg:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
      <h3 className="text-center font-serif text-xl tracking-[0.28em] uppercase text-foreground">{heading}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-3 perspective-scene">
        {items.map((p) => (
          <TiltCard key={p.title} max={9}>
            <Link
              to="/properties/$category"
              params={{ category: p.slug }}
              className="group flex h-full flex-col overflow-hidden rounded-sm bg-background cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 tilt-lift-sm"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 tilt-lift-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-4 w-4 rounded-sm bg-accent/70" aria-hidden />
                  <p className="text-[10px] tracking-[0.24em] uppercase text-foreground/80">{p.title}</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-foreground group-hover:text-accent">
                  Explore <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

function Properties() {
  const dubai: PropertyCard[] = [
    {
      slug: "dubai-apartments",
      title: "Luxury Apartments",
      body: "Modern living in iconic locations.",
      img: dubaiApartment.url,
    },
    { slug: "dubai-villas", title: "Luxury Villas", body: "Exclusive villas for elevated living.", img: dubaiVillaAsset.url },
    {
      slug: "dubai-commercial",
      title: "Commercial Spaces",
      body: "High ROI commercial investments.",
      img: dubaiCommercialAsset.url,
    },
  ];
  const india: PropertyCard[] = [
    {
      slug: "india-commercial",
      title: "Commercial",
      body: "Premium office spaces in prime locations.",
      img: indiaCommercial.url,
    },
    {
      slug: "india-residential",
      title: "Residential",
      body: "Luxury homes for a better lifestyle.",
      img: indiaResidential.url,
    },
    { slug: "india-land", title: "Land Investment", body: "High growth potential & assured returns.", img: indiaLand },
  ];
  return (
    <section id="properties" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent">
            <span className="gold-rule mr-3 !bg-accent" />
            Premium Properties
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">DUBAI &amp; INDIA</h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            We offer a wide range of premium properties in Dubai &amp; India
            <br />
            to match your lifestyle and investment goals.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <PropertyPanel heading="Dubai Properties" items={dubai} />
          </Reveal>
          <Reveal>
            <PropertyPanel heading="Indian Properties" items={india} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const dubai: { name: string; logo?: string; dark?: boolean }[] = [
    { name: "Emaar Properties", logo: emaarLogo.url },
    
    { name: "Nakheel Properties", logo: nakheelLogo.url },
    { name: "Dubai Properties", logo: dubaiPropsLogo.url },
    { name: "Sobha Realty", logo: sobhaRealtyLogo.url },
    { name: "Damac Properties", logo: damacLogo.url },
    
    { name: "Samana Developers", logo: samanaLogo.url },
    { name: "Danube Properties", logo: danubeLogo.url },
    { name: "Azizi Developments", logo: aziziLogo.url },
    { name: "Binghatti Developers", logo: binghattiLogo.url },
    { name: "Aldar Properties", logo: aldarLogo.url },
    { name: "Omniyat", logo: omniyatLogo.url },
  ];
  const india: { name: string; logo?: string; dark?: boolean }[] = [
    { name: "DLF", logo: dlfLogo.url },
    { name: "Godrej Properties", logo: godrejNewLogo.url },
    { name: "Lodha", logo: lodhaLogo.url },
    { name: "Piramal Realty", logo: piramalLogo.url },
    { name: "Prestige Group", logo: prestigeLogo.url },
    { name: "Omaxe", logo: omaxeLogo.url },
    { name: "Brigade Group", logo: brigadeLogo.url },
    { name: "Adani Realty", logo: adaniLogo.url },
    { name: "Oberoi Realty", logo: oberoiLogo.url },
    { name: "Tata Housing", logo: tataHousingLogo.url },
    { name: "Puravankara Group", logo: puravankaraLogo.url },
  ];
  const dubaiLoop = [...dubai, ...dubai];
  const indiaLoop = [...india, ...india];
  const renderTile = (d: { name: string; logo?: string; dark?: boolean }, i: number) => (
    <div
      key={`${d.name}-${i}`}
      className="logo-tile flex h-36 w-36 shrink-0 items-center justify-center rounded-sm bg-white border border-border/60 p-4"
      title={d.name}
    >
      {d.logo ? (
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src={d.logo}
            alt={d.name}
            loading="lazy"
            className="h-[115%] w-[115%] object-contain"
          />
        </div>
      ) : (
        <span className="px-3 text-center font-serif text-base leading-tight text-primary">{d.name}</span>
      )}
    </div>
  );

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Reveal>
          <p className="text-center text-[11px] tracking-[0.32em] uppercase text-muted-foreground">
            Top Developers of Dubai — Building Iconic Spaces
          </p>
          <div className="marquee mt-8">
            <div className="marquee-track gap-5">{dubaiLoop.map(renderTile)}</div>
          </div>
        </Reveal>
        <Reveal className="mt-14">
          <p className="text-center text-[11px] tracking-[0.32em] uppercase text-muted-foreground">
            Our Exclusive Developer Partners — India
          </p>
          <div className="marquee mt-8">
            <div className="marquee-track gap-5" style={{ animationDirection: "reverse" }}>
              {indiaLoop.map(renderTile)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


type FaqItem = { q: string; a: string };

function FaqRow({ item, index, open, onToggle }: { item: FaqItem; index: number; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-primary/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-accent"
      >
        <span className="font-serif text-lg text-foreground sm:text-xl">{item.q}</span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-500 ${
            open ? "rotate-45 bg-accent text-primary" : ""
          }`}
          aria-hidden
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-500 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-6 pr-14 text-sm leading-relaxed text-muted-foreground transition-transform duration-500"
            style={{ transform: open ? "translateY(0)" : "translateY(-8px)" }}
          >
            {item.a}
          </p>
        </div>
      </div>
      <span className="sr-only">{index}</span>
    </div>
  );
}

function Faq() {
  const items: FaqItem[] = [
    {
      q: "What areas does Bricks & Legacy cover?",
      a: "We operate across Dubai's most sought-after communities — Downtown, Palm Jumeirah, Dubai Marina, Emirates Hills and beyond — and advise NRIs on prime residential and land opportunities across Delhi NCR, Mumbai, Bengaluru and other tier-1 Indian corridors.",
    },
    {
      q: "What types of properties do you offer?",
      a: "Luxury apartments, villas, townhouses, off-plan launches, commercial assets and investment land — curated from leading developers and an off-market private network.",
    },
    {
      q: "Is Bricks & Legacy only for investors?",
      a: "Not at all. We work with first-time buyers, families relocating to Dubai, long-term residents, short-stay landlords, and seasoned investors — with the same senior-broker attention on every mandate.",
    },
    {
      q: "How can I see available listings?",
      a: "Explore our Dubai and India categories on the homepage, or share your brief through the contact form — we'll send a private, tailored shortlist within four business hours.",
    },
    {
      q: "What makes Bricks & Legacy different?",
      a: "A boutique cross-border desk covering both Dubai and India, senior advisors on every deal, direct developer relationships, and end-to-end care from viewing to handover, mortgage and ongoing property management.",
    },
    {
      q: "Do you help NRIs invest back in India?",
      a: "Yes — our India desk specialises in NRI acquisitions, from legal and tax guidance to documentation, remittance and long-term property management.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number>(-1);
  return (
    <section id="faq" className="relative overflow-hidden bg-secondary/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-105 animate-ken-burns"
        style={{
          backgroundImage: `url(${heroDubai})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3F]/85 via-secondary/75 to-[#0B1F3F]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,110,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-black">
            <span className="gold-rule mr-3 !bg-accent" />
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            Everything you need to know before working with us across Dubai and India.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="rounded-sm bg-background/95 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
            {items.map((item, i) => (
              <FaqRow
                key={item.q}
                item={item}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  const match = value.match(/^([0-9,.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : value;
  const isDecimal = match ? match[1].includes(".") : false;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    let start: number | null = null;
    const duration = 2000;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const current = numeric * easeOutQuart(progress);
          if (isDecimal) {
            setDisplay(current.toFixed(1));
          } else {
            setDisplay(Math.floor(current).toLocaleString());
          }
          if (progress < 1) {
            raf = requestAnimationFrame(step);
          } else {
            observer.disconnect();
          }
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [numeric, isDecimal]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

function Achievements() {
  const stats = [
    {
      value: "250+",
      label: "Happy Clients",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      value: "500M AED",
      label: "Property Transactions",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
    },
    {
      value: "50+",
      label: "Projects",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4 8 4v14" />
          <path d="M9 21V11" />
          <path d="M15 21V11" />
          <path d="M12 21V11" />
        </svg>
      ),
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="achievements" className="bg-primary py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow text-accent">
            <span className="gold-rule mr-3 !bg-accent" />
            Our Achievements
          </p>
          <h2 className="mt-3 font-serif text-3xl lg:text-4xl text-primary-foreground">
            Numbers that define our legacy
          </h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="group flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/60 text-accent transition-transform duration-500 group-hover:scale-105">
                  {stat.icon}
                </div>
                <div className="mt-4 font-serif text-3xl text-primary-foreground">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-1 text-[11px] tracking-[0.2em] uppercase text-accent/80">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    {
      title: "Expert Guidance",
      body: "From market research to final investment",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
          <path d="M9 21h6" />
        </svg>
      ),
    },
    {
      title: "Verified Properties",
      body: "Carefully selected and verified",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Best Investment Plans",
      body: "High ROI & secure future",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      ),
    },
    {
      title: "End-to-End Support",
      body: "From booking to handover",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4 8 4v14" />
          <path d="M9 21V11" />
          <path d="M15 21V11" />
          <path d="M12 21V11" />
        </svg>
      ),
    },
    {
      title: "Legal & Documentation",
      body: "Transparent & hassle-free process",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Lifetime Relationship",
      body: "We're with you, always",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-primary py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl lg:text-3xl text-primary-foreground tracking-wide">
            WHY CHOOSE BRICKS & LEGACY?
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="group flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/60 text-accent transition-transform duration-500 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-serif text-base text-primary-foreground">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-background/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent">
            <span className="gold-rule mr-3 !bg-accent" />
            Get in Touch
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Speak with an Experienced Broker</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            A dedicated advisor will respond within four business hours with a tailored shortlist across Dubai and
            India.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2 perspective-scene">
          <TiltCard max={5}>
            <ContactCard title="Dubai — Head Office" />
          </TiltCard>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title }: { title: string }) {
  return (
    <div className="h-full rounded-sm bg-primary p-8 text-primary-foreground lg:p-10">
      <div className="text-[11px] tracking-[0.28em] uppercase text-accent">{title}</div>
      <div className="mt-8 space-y-6 tilt-lift-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-background/60">Office</div>
            <div className="mt-1 font-serif text-lg leading-snug">Office No. 4, Al Khabeesi Building</div>
            <div className="text-sm text-background/75">Dubai, United Arab Emirates</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-background/60">Call</div>
            <a href="tel:+971543043949" className="mt-1 block text-sm text-background/75 hover:text-accent">
              +971 54 304 3949
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.43-8.44zM12.07 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.19c0-5.44 4.43-9.86 9.87-9.86 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.97c0 5.44-4.43 9.82-9.86 9.82zm5.4-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.45 1.06 2.86 1.21 3.06.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.75-.71 2-1.4.25-.7.25-1.29.17-1.4-.07-.11-.27-.17-.57-.32z"/>
            </svg>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-background/60">WhatsApp</div>
            <a href="https://wa.me/971543043949" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-background/75 hover:text-accent">
              +971 54 304 3949
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-background/60">Email</div>
            <a href="mailto:info@bricksandlegacy.com" className="mt-1 block text-sm text-background/75 hover:text-accent">
              info@bricksandlegacy.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-background/60">Instagram</div>
            <a href="https://www.instagram.com/bricksandlegacy?igsh=Y3ZvbnBpc2J3NGk5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-background/75 hover:text-accent">
              @bricksandlegacy
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.54 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.61c0-1.58-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.76V8z"/>
            </svg>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.24em] uppercase text-background/60">LinkedIn</div>
            <a href="https://www.linkedin.com/company/bricks-and-legacy/" target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-background/75 hover:text-accent">
              Bricks &amp; Legacy
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Dubai — Buy", message: "" });

  const set =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      interest: form.interest,
      message: form.message.trim(),
    });
    setLoading(false);
    if (error) {
      toast.error("Could not send. Please try again or email info@bricksandlegacy.com.");
      return;
    }
    toast.success("Thank you — a experienced broker will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", interest: "Dubai — Buy", message: "" });
  };

  const inputCls =
    "w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition";
  const labelCls = "text-[10px] tracking-[0.24em] uppercase text-background/60";

  return (
    <form onSubmit={onSubmit} className="h-full rounded-sm bg-primary p-8 text-primary-foreground lg:p-10 space-y-5">
      <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Send Us an Enquiry</div>
      <p className="text-sm text-background/70 -mt-3">
        Share a few details and a experienced broker will respond within four business hours.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-name">
            Full Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={set("name")}
            className={`${inputCls} mt-2`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-email">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            maxLength={255}
            value={form.email}
            onChange={set("email")}
            className={`${inputCls} mt-2`}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-phone">
            Phone / WhatsApp
          </label>
          <input
            id="cf-phone"
            type="tel"
            maxLength={30}
            value={form.phone}
            onChange={set("phone")}
            className={`${inputCls} mt-2`}
            placeholder="+971 …"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-interest">
            I'm interested in
          </label>
          <select
            id="cf-interest"
            value={form.interest}
            onChange={set("interest")}
            className={`${inputCls} mt-2 appearance-none bg-primary text-background`}
          >
            {[
              "Dubai — Buy",
              "Dubai — Sell",
              "Dubai — Rent",
              "India — Residential",
              "India — Commercial",
              "India — Land Investment",
            ].map((o) => (
              <option key={o} value={o} className="bg-primary text-background">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          maxLength={2000}
          rows={4}
          value={form.message}
          onChange={set("message")}
          className={`${inputCls} mt-2 resize-none`}
          placeholder="Tell us what you're looking for…"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}


function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Properties />
      <Partners />
      <Achievements />
      <WhyChoose />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
