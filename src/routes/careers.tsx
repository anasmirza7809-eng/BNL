import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { TiltCard, useReveal3D } from "@/components/tilt-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import heroDubai from "@/assets/hero-careers.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Bricks & Legacy" },
      {
        name: "description",
        content:
          "Join Bricks & Legacy. Explore open roles and apply to be part of a luxury real estate team connecting Dubai and India.",
      },
      { property: "og:title", content: "Careers — Bricks & Legacy" },
      {
        property: "og:description",
        content:
          "Join Bricks & Legacy. Explore open roles and apply to be part of a luxury real estate team connecting Dubai and India.",
      },
    ],
  }),
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(careersQuery());
  },
  component: CareersPage,
});

const careersQuery = () =>
  queryOptions({
    queryKey: ["careers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal3D<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal-3d ${className}`}>
      {children}
    </div>
  );
}


function Hero() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-primary">
      <img
        src={heroDubai}
        alt="Dubai skyline"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" />
      <Header />
      <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-16 lg:px-10">
        <div className="max-w-3xl text-background reveal-3d is-visible">
          <p className="eyebrow text-accent flex items-center">
            <span className="gold-rule draw-x is-visible mr-3 !bg-accent" style={{ ["--reveal-delay" as string]: "0ms" }} />
            <span className="reveal-up is-visible" style={{ ["--reveal-delay" as string]: "150ms" }}>Careers</span>
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
            Build your career<br />
            <span className="text-accent">with a legacy brand</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/80">
            Join a team that connects Dubai's iconic skyline with India's finest opportunities. We are always looking for driven people who believe in trust, discretion, and long-term relationships.
          </p>
          <a
            href="#apply"
            className="mt-8 inline-flex rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition"
          >
            Submit Application
          </a>
        </div>
      </div>
    </section>
  );
}

type Career = {
  id: string;
  title: string;
  department: string | null;
  location: string | null;
  type: string | null;
  description: string | null;
  requirements: string[] | null;
};

function JobList() {
  const { data: careers } = useSuspenseQuery(careersQuery());
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Open Positions</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Join the Team</h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
            Browse current openings. If you don't see a perfect fit, send a general application — we review every one.
          </p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {careers.map((c) => (
            <JobCard key={c.id} career={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ career }: { career: Career }) {
  return (
    <Reveal>
      <TiltCard max={5}>
        <div className="rounded-sm bg-card p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h3 className="font-serif text-2xl text-foreground">{career.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                {career.department && <span className="rounded-sm border border-muted-foreground/20 px-2 py-1">{career.department}</span>}
                {career.location && <span className="rounded-sm border border-muted-foreground/20 px-2 py-1">{career.location}</span>}
                {career.type && <span className="rounded-sm border border-muted-foreground/20 px-2 py-1">{career.type}</span>}
              </div>
              {career.description && (
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{career.description}</p>
              )}
              {career.requirements && career.requirements.length > 0 && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {career.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" aria-hidden />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a
              href="#apply"
              className="shrink-0 rounded-sm border border-primary/30 px-6 py-2.5 text-[11px] tracking-[0.24em] uppercase text-foreground hover:bg-primary hover:text-primary-foreground transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}

function ApplyForm() {
  const { data: careers } = useSuspenseQuery(careersQuery());
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    career_id: "",
    name: "",
    email: "",
    phone: "",
    linkedin_url: "",
    experience: "",
    cover_letter: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("career_applications").insert({
      career_id: form.career_id || null,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      linkedin_url: form.linkedin_url.trim() || null,
      experience: form.experience.trim() || null,
      cover_letter: form.cover_letter.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Could not submit. Please try again or email info@bricksandlegacy.com.");
      return;
    }
    toast.success("Application received — we'll be in touch soon.");
    setForm({
      career_id: "",
      name: "",
      email: "",
      phone: "",
      linkedin_url: "",
      experience: "",
      cover_letter: "",
    });
  };

  const inputCls =
    "w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition";
  const labelCls = "text-[10px] tracking-[0.24em] uppercase text-background/60";

  return (
    <section id="apply" className="bg-secondary/50">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <p className="eyebrow text-accent"><span className="gold-rule mr-3 !bg-accent" />Apply</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Send Your Application</h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-accent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground">
            Tell us about yourself, your experience, and why you want to join Bricks & Legacy.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <TiltCard max={4}>
            <form onSubmit={onSubmit} className="rounded-sm bg-primary p-8 text-primary-foreground lg:p-10 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="ca-name">Full Name</label>
                  <input
                    id="ca-name"
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
                  <label className={labelCls} htmlFor="ca-email">Email</label>
                  <input
                    id="ca-email"
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
                  <label className={labelCls} htmlFor="ca-phone">Phone / WhatsApp</label>
                  <input
                    id="ca-phone"
                    type="tel"
                    maxLength={30}
                    value={form.phone}
                    onChange={set("phone")}
                    className={`${inputCls} mt-2`}
                    placeholder="+971 …"
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="ca-linkedin">LinkedIn / Portfolio URL</label>
                  <input
                    id="ca-linkedin"
                    type="url"
                    maxLength={500}
                    value={form.linkedin_url}
                    onChange={set("linkedin_url")}
                    className={`${inputCls} mt-2`}
                    placeholder="https://…"
                  />
                </div>
              </div>

              <div>
                <label className={labelCls} htmlFor="ca-position">Position (optional)</label>
                <select
                  id="ca-position"
                  value={form.career_id}
                  onChange={set("career_id")}
                  className={`${inputCls} mt-2 appearance-none`}
                >
                  <option value="">General application</option>
                  {careers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelCls} htmlFor="ca-experience">Relevant Experience</label>
                <textarea
                  id="ca-experience"
                  maxLength={1000}
                  rows={3}
                  value={form.experience}
                  onChange={set("experience")}
                  className={`${inputCls} mt-2 resize-none`}
                  placeholder="Briefly describe your experience…"
                />
              </div>

              <div>
                <label className={labelCls} htmlFor="ca-cover">Cover Letter / Message</label>
                <textarea
                  id="ca-cover"
                  maxLength={2000}
                  rows={4}
                  value={form.cover_letter}
                  onChange={set("cover_letter")}
                  className={`${inputCls} mt-2 resize-none`}
                  placeholder="Why do you want to join Bricks & Legacy?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Submit Application"}
              </button>
            </form>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}


function CareersPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <JobList />
      <ApplyForm />
      <Footer />
    </main>
  );
}
