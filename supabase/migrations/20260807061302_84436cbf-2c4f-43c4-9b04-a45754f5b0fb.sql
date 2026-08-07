CREATE INDEX IF NOT EXISTS idx_properties_public_listing
  ON public.properties (category, published, featured DESC, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_properties_published_created
  ON public.properties (published, created_at DESC);