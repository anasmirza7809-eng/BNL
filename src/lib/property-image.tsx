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
  const [signed, setSigned] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!target) {
      setSigned(null);
      return;
    }
    supabase.storage
      .from("property-images")
      .createSignedUrl(target, 60 * 60 * 24)
      .then(({ data }) => {
        if (!cancelled && data?.signedUrl) setSigned(data.signedUrl);
      });
    return () => {
      cancelled = true;
    };
  }, [target]);

  if (target && signed) return signed;
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
