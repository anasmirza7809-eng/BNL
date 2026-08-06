import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { localGalleryData } from "@/lib/local-gallery-data";
import heroGallery from "@/assets/hero-gallery.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bricks & Legacy" },
      {
        name: "description",
        content:
          "A visual portfolio of Bricks & Legacy properties across Dubai and India — luxury apartments, villas and landmark developments.",
      },
      { property: "og:title", content: "Gallery — Bricks & Legacy" },
      {
        property: "og:description",
        content: "A visual portfolio of Bricks & Legacy across Dubai and India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

type GalleryRow = {
  id: string;
  title: string | null;
  caption: string | null;
  image_url: string | null;
  image_path: string | null;
  sort_order: number;
};
function useGalleryImageSrc(image_path: string | null, image_url: string | null) {
  if (image_path) {
    if (image_path.startsWith("http") || image_path.startsWith("/")) return image_path;
    return `/${image_path}`;
  }
  return image_url || "";
}

function GalleryTile({ row, index }: { row: GalleryRow; index: number }) {
  const src = useGalleryImageSrc(row.image_path, row.image_url);
  return (
    <figure
      className="group relative overflow-hidden rounded-sm border border-primary/10 bg-secondary transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={row.title ?? "Gallery image"}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-primary/10" />
        )}
      </div>
      {(row.title || row.caption) && (
        <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-primary/95 via-primary/80 to-transparent p-5 text-background transition-transform duration-500 group-hover:translate-y-0">
          {row.title && <p className="font-serif text-lg">{row.title}</p>}
          {row.caption && (
            <p className="mt-1 text-[12px] leading-relaxed text-background/80">{row.caption}</p>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function GalleryPage() {
  // Use local gallery data instead of Supabase
  const rows = localGalleryData;
  const isLoading = false;

  return (
    <main className="min-h-screen bg-background text-primary">
      <section className="relative overflow-hidden bg-primary text-background">
        <Header />
        <img
          src={heroGallery}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-40">
          <p className="eyebrow text-accent flex items-center">
            <span className="gold-rule draw-x is-visible mr-3 !bg-accent" style={{ ["--reveal-delay" as string]: "0ms" }} />
            <span className="reveal-up is-visible" style={{ ["--reveal-delay" as string]: "150ms" }}>Gallery</span>
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Moments &amp; Milestones
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-background/70 sm:text-base">
            A visual journal of the residences, developments and experiences that define our
            portfolio across Dubai and India.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] animate-pulse rounded-sm bg-primary/10" />
              ))}
            </div>
          ) : rows.length === 0 ? (
            <div className="rounded-sm border border-primary/10 bg-secondary p-16 text-center">
              <p className="text-[11px] tracking-[0.28em] uppercase text-accent">Coming soon</p>
              <p className="mt-3 font-serif text-2xl">Our gallery is being curated.</p>
              <p className="mt-2 text-sm text-primary/70">Please check back shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rows.map((row, i) => (
                <GalleryTile key={row.id} row={row} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
