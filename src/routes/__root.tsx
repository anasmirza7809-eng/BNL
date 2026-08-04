import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bricks & Legacy — Luxury Real Estate in Dubai & India" },
      {
        name: "description",
        content:
          "Bricks & Legacy — your investment for luxury living. Buy, sell and rent apartments and land in Dubai, and secure prime Indian land for NRIs.",
      },
      { name: "author", content: "Bricks & Legacy" },
      { property: "og:title", content: "Bricks & Legacy — Luxury Real Estate in Dubai & India" },
      {
        property: "og:description",
        content:
          "Bricks & Legacy — your investment for luxury living. Buy, sell and rent apartments and land in Dubai, and secure prime Indian land for NRIs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bricks & Legacy — Luxury Real Estate in Dubai & India" },
      { name: "twitter:description", content: "Bricks & Legacy — your investment for luxury living. Buy, sell and rent apartments and land in Dubai, and secure prime Indian land for NRIs." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45b58e9e-8b84-450b-a71c-2c4c350c9721/id-preview-b0f0f141--69f98387-551c-4301-9e08-a8b384c5d4e2.lovable.app-1784222154791.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45b58e9e-8b84-450b-a71c-2c4c350c9721/id-preview-b0f0f141--69f98387-551c-4301-9e08-a8b384c5d4e2.lovable.app-1784222154791.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    let observer: IntersectionObserver | null = null;
    let raf = 0;

    const apply = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const targets: HTMLElement[] = [];
      sections.forEach((s) => {
        // Skip sections that already opt into a bespoke reveal system
        if (s.closest(".reveal-up, .reveal-3d")) return;
        if (s.querySelector(".reveal-up, .reveal-3d, .reveal-words")) {
          // Section has its own internal reveals — don't override the whole section
          return;
        }
        if (!s.classList.contains("auto-reveal")) {
          s.classList.add("auto-reveal");
          targets.push(s);
        }
      });
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("is-visible");
                observer?.unobserve(e.target);
              }
            });
          },
          { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
        );
      }
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add("is-visible");
        } else {
          observer!.observe(el);
        }
      });
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // small delay lets route content mount
        setTimeout(apply, 50);
      });
    };

    schedule();
    const unsub = router.subscribe("onResolved", schedule);
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
      unsub();
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
