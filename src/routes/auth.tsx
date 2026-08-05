import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import logoAsset from "@/assets/bnl-logo.asset.json";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin Sign In — Bricks & Legacy" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/admin" });
    });
  }, [navigate]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
        navigate({ to: "/admin" });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        if (data.session) {
          toast.success("Account created.");
          navigate({ to: "/admin" });
        } else {
          toast.success("Account created. You can sign in now.");
          setMode("signin");
        }
      }
    } catch (err: any) {
      const msg = err?.message ?? "Something went wrong.";
      setErrorMsg(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-primary text-primary-foreground flex flex-col">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Bricks & Legacy" className="h-10 w-10 rounded-sm object-cover" />
          <div className="leading-tight">
            <div className="font-serif text-base text-background">Bricks &amp; Legacy</div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-background/70">Admin Portal</div>
          </div>
        </Link>
        <Link to="/" className="text-[11px] tracking-[0.24em] uppercase text-background/70 hover:text-accent">
          ← Back to site
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md rounded-sm bg-background/5 border border-background/10 p-8 backdrop-blur"
        >
          <p className="text-[11px] tracking-[0.28em] uppercase text-accent">
            {mode === "signin" ? "Sign in" : "Create account"}
          </p>
          <h1 className="mt-3 font-serif text-3xl">Admin Portal</h1>
          <p className="mt-2 text-sm text-background/70">
            Manage property listings and careers for Bricks &amp; Legacy.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="text-[10px] tracking-[0.24em] uppercase text-background/60" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.24em] uppercase text-background/60" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-sm border border-background/20 bg-background/5 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {errorMsg ? (
            <p className="mt-4 rounded-sm border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
              {errorMsg}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-sm bg-accent px-7 py-3.5 text-[12px] tracking-[0.24em] uppercase font-medium text-primary hover:bg-accent/90 transition disabled:opacity-60"
          >
            {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-4 w-full text-center text-[11px] tracking-[0.24em] uppercase text-background/60 hover:text-accent"
          >
            {mode === "signin" ? "Need to create an account?" : "Already have an account? Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
