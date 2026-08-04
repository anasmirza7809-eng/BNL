DROP POLICY IF EXISTS "Anyone can submit an application" ON public.career_applications;

CREATE POLICY "Anyone can submit an application"
  ON public.career_applications FOR INSERT TO anon
  WITH CHECK (
    name IS NOT NULL AND length(trim(name)) > 0
    AND email IS NOT NULL AND length(trim(email)) > 0
  );