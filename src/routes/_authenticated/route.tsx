import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const hasSupabaseUrl = !!(import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL);
    if (!hasSupabaseUrl) {
      console.warn("[Auth] Bypassing authentication check since Supabase is not configured yet.");
      return { user: { id: "mock-user-id", email: "admin@example.com" } };
    }
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw redirect({ to: "/auth" });
    }
    return { user: data.user };
  },
  component: () => <Outlet />,
});
