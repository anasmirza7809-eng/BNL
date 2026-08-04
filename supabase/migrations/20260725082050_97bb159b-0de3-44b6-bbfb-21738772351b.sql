
CREATE POLICY "gallery read authenticated"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'gallery-images');

CREATE POLICY "gallery admin insert"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'gallery-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "gallery admin update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'gallery-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "gallery admin delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'gallery-images' AND public.has_role(auth.uid(), 'admin'));
