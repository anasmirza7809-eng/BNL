import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import logoAsset from "@/assets/bnl-icon-white.png.asset.json";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Properties", to: "/properties" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

export function Header({ className = "absolute inset-x-0 top-0 z-[60]" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const hash = routerState.location.hash;

  useEffect(() => setMounted(true), []);

  // Lock body scroll while menu is open, without shifting layout
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      const scrollBarComp = window.innerWidth - document.documentElement.clientWidth;
      const prevOverflow = document.body.style.overflow;
      const prevPadding = document.body.style.paddingRight;
      document.body.style.overflow = "hidden";
      if (scrollBarComp > 0) document.body.style.paddingRight = `${scrollBarComp}px`;
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.paddingRight = prevPadding;
      };
    }
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  const isActive = (to: string, linkHash?: string) => {
    if (linkHash) return pathname === to && hash === linkHash;
    return pathname === to;
  };

  const linkBase =
    "text-[13px] tracking-[0.18em] uppercase text-background/90 transition-colors hover:text-accent";
  const linkActive = "text-accent";

  const Brand = ({ small = false, onClick }: { small?: boolean; onClick?: () => void }) => (
    <Link to="/" onClick={onClick} className="flex items-center gap-3">
      <img
        src={logoAsset.url}
        alt="Bricks & Legacy"
        className={
          small
            ? "h-9 w-9 shrink-0 object-contain"
            : "h-12 w-12 shrink-0 object-contain sm:h-[52px] sm:w-[52px]"
        }
      />
      <div className={small ? "leading-tight" : "hidden sm:block leading-tight"}>
        <div
          className={`whitespace-nowrap font-serif text-background ${
            small ? "text-sm" : "text-lg"
          }`}
        >
          Bricks &amp; Legacy
        </div>
      </div>
    </Link>
  );

  const Hamburger = (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="lg:hidden relative z-[10000] grid h-11 w-11 place-items-center rounded-sm border border-background/20 text-background focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span
        className={`absolute left-3 block h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${
          open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
        }`}
      />
      <span
        className={`absolute left-3 block h-0.5 w-5 bg-current transition-opacity duration-300 ease-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-3 block h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${
          open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
        }`}
      />
    </button>
  );

  // Mobile nav is rendered in a portal to <body> so it is not clipped by any
  // ancestor transform (e.g. the hero section's auto-reveal animation).
  const MobileNav = (
    <>
      {/* Mobile header — always fixed, translucent navy with blur */}
      <header
        className="lg:hidden fixed inset-x-0 top-0 z-[10000] bg-primary/90 backdrop-blur-md border-b border-background/10"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <Brand small />
          {Hamburger}
        </div>
      </header>

      {/* Mobile overlay backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile menu panel, fixed below the header so it never covers the hamburger */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`lg:hidden fixed inset-x-0 bottom-0 z-[9999] w-screen bg-primary transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: "calc(env(safe-area-inset-top) + 68px)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex h-full flex-col px-6 pb-6">
          <nav className="flex flex-col">
            {links.map((l, i) => {
              const active = isActive(l.to, l.hash);
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between border-b border-background/10 py-4 text-sm tracking-[0.18em] uppercase transition-all duration-300 ${
                    active ? "text-accent" : "text-background/90 hover:text-accent"
                  }`}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  <span>{l.label}</span>
                  <span
                    className={`h-px w-6 bg-accent transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-background/10">
            <a
              href="tel:+971543043949"
              className="flex items-center gap-3 text-sm text-background/80 hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +971 54 304 3949
            </a>
            <a
              href="mailto:info@bricksandlegacy.com"
              className="mt-3 flex items-center gap-3 text-sm text-background/80 hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              info@bricksandlegacy.com
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop header — keeps caller-provided positioning (absolute over hero, etc.) */}
      <header className={`hidden lg:block ${className}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Brand />
          <nav className="flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className={`${linkBase} ${isActive(l.to, l.hash) ? linkActive : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {mounted && createPortal(MobileNav, document.body)}
    </>
  );
}
