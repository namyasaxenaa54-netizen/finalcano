-- 📂 STORAGE BUCKET POLICIES for 'site-assets'
-- Run this in your Supabase SQL Editor if image uploads are failing.

-- Enable Public access for reading files
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'site-assets' );

-- Allow Authenticated users (Admins) to upload files
CREATE POLICY "Authenticated Upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'site-assets' AND
  auth.role() = 'authenticated'
);

-- Allow Authenticated users (Admins) to delete files
CREATE POLICY "Authenticated Delete"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'site-assets' AND
  auth.role() = 'authenticated'
);

-- Allow Authenticated users (Admins) to update files
CREATE POLICY "Authenticated Update"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'site-assets' AND
  auth.role() = 'authenticated'
);
