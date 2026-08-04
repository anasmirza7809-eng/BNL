
CREATE TABLE public.properties (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('dubai-apartments','dubai-villas','dubai-commercial','india-commercial','india-residential','india-land')),
  title TEXT NOT NULL,
  location TEXT,
  price TEXT,
  bedrooms TEXT,
  area TEXT,
  description TEXT,
  image_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.properties TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.properties TO authenticated;
GRANT ALL ON public.properties TO service_role;

ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published properties"
  ON public.properties FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert properties"
  ON public.properties FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update properties"
  ON public.properties FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete properties"
  ON public.properties FOR DELETE TO authenticated
  USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$
LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON public.properties
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_properties_category ON public.properties(category) WHERE published = true;

-- Seed sample listings for each category
INSERT INTO public.properties (category, title, location, price, bedrooms, area, description, image_url, featured) VALUES
('dubai-apartments','Marina View Residences','Dubai Marina','AED 2.4M','2 BR','1,250 sqft','Panoramic marina views with premium finishes and resort-style amenities.',NULL,true),
('dubai-apartments','Downtown Sky Loft','Downtown Dubai','AED 3.1M','3 BR','1,780 sqft','Burj Khalifa vistas from a designer sky loft in the heart of Downtown.',NULL,false),
('dubai-villas','Palm Signature Villa','Palm Jumeirah','AED 18.5M','5 BR','7,200 sqft','Private beachfront villa with infinity pool and staff quarters.',NULL,true),
('dubai-villas','Emirates Hills Estate','Emirates Hills','AED 26M','6 BR','9,800 sqft','Golf-course estate with cinema, spa, and landscaped gardens.',NULL,false),
('dubai-commercial','Business Bay Tower Floor','Business Bay','AED 6.2M',NULL,'4,500 sqft','Full-floor Grade-A office with skyline views and secure parking.',NULL,true),
('dubai-commercial','DIFC Retail Unit','DIFC','AED 4.8M',NULL,'1,900 sqft','Ground-floor retail space in Dubai''s financial district.',NULL,false),
('india-commercial','Bandra Kurla Complex Office','Mumbai, BKC','₹ 12.5 Cr',NULL,'3,200 sqft','Grade-A corporate office in India''s premier business district.',NULL,true),
('india-commercial','Cyber City Suites','Gurgaon','₹ 4.8 Cr',NULL,'1,600 sqft','Fitted-out office suites with 24/7 access and premium services.',NULL,false),
('india-residential','Lodha Sea Residences','Mumbai, Worli','₹ 9.2 Cr','3 BHK','2,400 sqft','Sea-facing luxury apartment with private club and concierge.',NULL,true),
('india-residential','DLF Camellias','Gurgaon','₹ 18 Cr','4 BHK','5,800 sqft','Ultra-luxury residence on the Golf Course Road.',NULL,false),
('india-land','Alibaug Sea-Facing Plot','Alibaug, Maharashtra','₹ 3.2 Cr',NULL,'12,000 sqft','Titled sea-view plot ideal for a private villa or boutique retreat.',NULL,true),
('india-land','Bangalore North Farm Land','Devanahalli','₹ 1.6 Cr',NULL,'1 Acre','High-growth corridor near new airport with clear title.',NULL,false);
