
DROP POLICY IF EXISTS "gallery read authenticated" ON storage.objects;

CREATE POLICY "gallery read public"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'gallery-images');
