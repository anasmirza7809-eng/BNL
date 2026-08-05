import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Resolves the best available image URL for a property row.
 * - If image_path exists (uploaded to storage), generate a signed URL (24h).
 * - Otherwise fall back to image_url (external), then a provided default.
 */
export function usePropertyImageSrc(
  imagePath: string | null | undefined,
  imageUrl: string | null | undefined,
  fallback: string,
  gallery?: string[] | null,
): string {
  const galleryPath = gallery && gallery.length > 0 ? gallery[0] : null;
  const target =
    imagePath || (galleryPath && !galleryPath.startsWith("http") ? galleryPath : null);

  if (target) {
    if (target.startsWith("http") || target.startsWith("/")) return target;
    return `/${target}`;
  }
  // Prefer an uploaded gallery photo over a legacy/stock image_url
  if (galleryPath && galleryPath.startsWith("http")) return galleryPath;
  if (imageUrl) return imageUrl;
  return fallback;
}

export function PropertyImage({
  imagePath,
  imageUrl,
  fallback,
  gallery,
  alt,
  className,
}: {
  imagePath: string | null | undefined;
  imageUrl: string | null | undefined;
  fallback: string;
  gallery?: string[] | null;
  alt: string;
  className?: string;
}) {
  const src = usePropertyImageSrc(imagePath, imageUrl, fallback, gallery);
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}
