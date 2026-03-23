-- 🛠️ INITIAL SCHEMA MIGRATION

-- 1. Create Brands Table
CREATE TABLE IF NOT EXISTS brands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  brand_color TEXT,
  light_color TEXT,
  logo_url TEXT,
  banner_image_url TEXT,
  sections JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create Products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT,
  name TEXT NOT NULL,
  brand_id UUID REFERENCES brands(id) ON DELETE CASCADE,
  category TEXT,
  section TEXT,
  description TEXT,
  image_url TEXT,
  specs JSONB DEFAULT '{}'::jsonb,
  features TEXT[] DEFAULT '{}',
  applications TEXT[] DEFAULT '{}',
  colors TEXT[] DEFAULT '{}',
  price TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Company Info Table
CREATE TABLE IF NOT EXISTS company_info (
  id TEXT PRIMARY KEY DEFAULT 'company_info',
  name TEXT,
  tagline TEXT,
  description TEXT,
  mission TEXT,
  vision TEXT,
  stats JSONB DEFAULT '{}'::jsonb,
  contact JSONB DEFAULT '{}'::jsonb,
  certifications TEXT[] DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Enable RLS (Row Level Security)
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_info ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS Policies

-- Public Read access for everyone
CREATE POLICY "Public read brands" ON brands FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read company_info" ON company_info FOR SELECT USING (true);

-- Admin CRUD access (only for authenticated users)
CREATE POLICY "Admin CRUD brands" ON brands FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin CRUD products" ON products FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin CRUD company_info" ON company_info FOR ALL TO authenticated USING (true);

-- 6. Storage Setup (Instructions)
-- Create a bucket named 'site-assets' with public read access
