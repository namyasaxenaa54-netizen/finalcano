-- 🚀 CANOCRYSTAL DATA SEED

-- Seed Brands
INSERT INTO brands (name, slug, tagline, description, brand_color, light_color, logo_url, banner_image_url, sections)
VALUES ('CanoBond', 'canobond', 'German Intelligence. Unshakeable Bond.', 'Professional-grade adhesives and construction chemicals for superior bonding and durability', '#E67E22', '#FFF5EE', 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cwqu8ri7_Screenshot%202026-03-10%20at%206.05.54%E2%80%AFPM.png', 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/t1pe2odd_Screenshot%202026-03-16%20at%208.27.06%E2%80%AFPM.png', '{"adhesives": {"title": "Tile Adhesives"}, "grouts": {"title": "Grouts & Solutions"}, "cleaning": {"title": "Cleaning Solutions"}}');

INSERT INTO brands (name, slug, tagline, description, brand_color, light_color, logo_url, banner_image_url, sections)
VALUES ('Blackberry', 'blackberry', 'Premium Solutions for Perfect Finishes', 'Sophisticated chemical products designed for professional applications and premium finishes', '#8E44AD', '#F4ECF7', 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ivdpxzwa_Screenshot%202026-03-17%20at%205.35.40%E2%80%AFPM.png', 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/7d6mkjxi_Screenshot%202026-03-16%20at%203.59.46%E2%80%AFPM.png', '{"adhesives": {"title": "Tile Adhesives"}, "grouts": {"title": "Grouts & Solutions"}, "cleaning": {"title": "Cleaning Solutions"}}');

INSERT INTO brands (name, slug, tagline, description, brand_color, light_color, logo_url, banner_image_url, sections)
VALUES ('Furniture', 'furniture', 'Luxury Living', 'Contemporary furniture designed for modern living with elegance and comfort', '#7D6608', '#FFF9E6', '', 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6', '{}');

-- Seed Products
INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Polymer Grey Tile Adhesive', 
  'CT-333', 
  (SELECT id FROM brands WHERE slug = 'canobond'), 
  'Standard Adhesive', 
  'adhesives', 
  'Polymer-based grey tile adhesive for ceramic tiles and small format natural stone', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/jeehwvnl_image.png', 
  '{"standard": "C1T as per EN / TYPE 1 as per IS", "thickness": "Up to 15mm", "weight": "20 KG", "coverage": "1.2kg/m\u00b2/mm", "shelfLife": "12 months"}', 
  ARRAY['Water retention', 'Easy mixing', 'Indoor/Outdoor', 'Vertical & Horizontal'], 
  ARRAY['Ceramic tiles', 'Terracotta', 'Clay tiles', 'Natural stone'], 
  '{}', 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'High Performance Vitrified Adhesive', 
  'VT-777', 
  (SELECT id FROM brands WHERE slug = 'canobond'), 
  'Premium Adhesive', 
  'adhesives', 
  'High-performance polymer-modified adhesive for vitrified and low-porosity tiles', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/pqu66w3b_image.png', 
  '{"standard": "C2TE as per EN / TYPE 3 as per IS", "thickness": "Up to 15mm", "weight": "20 KG", "coverage": "1.2kg/m\u00b2/mm", "colors": "Grey & White"}', 
  ARRAY['Visible fibres', 'Exceptional bond', 'Water resistant', 'Flexible'], 
  ARRAY['Vitrified tiles', 'Glass mosaic', 'Natural stone', 'Swimming pools'], 
  '{}', 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Ultra Flexible Large Format Adhesive', 
  'EWT-888', 
  (SELECT id FROM brands WHERE slug = 'canobond'), 
  'Professional Grade', 
  'adhesives', 
  'Highly flexible adhesive for large format tiles with enhanced slip resistance', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/f4octibf_image.png', 
  '{"standard": "C2T E S2 as per EN / TYPE 4 T S2 as per IS", "thickness": "Up to 15mm", "weight": "20 KG", "colors": "Grey & White"}', 
  ARRAY['High polymer', 'Slip resistant', 'Large format', 'Extreme flexibility'], 
  ARRAY['Large tiles >1200mm', 'Granite', 'High deformation areas', 'External facade'], 
  '{}', 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Thin Set Premium Adhesive', 
  'IWT-666', 
  (SELECT id FROM brands WHERE slug = 'canobond'), 
  'Wet Area Specialist', 
  'adhesives', 
  'High polymer-modified thin set adhesive for vitrified tiles in wet conditions', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/azx7fpft_image.png', 
  '{"standard": "C2TE as per EN / TYPE 3 as per IS", "thickness": "Up to 12mm", "weight": "20 KG", "colors": "Grey & White"}', 
  ARRAY['Water resistant', 'Longer open time', 'Tile-on-tile', 'Pool safe'], 
  ARRAY['Swimming pools', 'Bathrooms', 'Water bodies', 'Wet rooms'], 
  '{}', 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Polymer Grey Tile Adhesive', 
  'CT-333', 
  (SELECT id FROM brands WHERE slug = 'blackberry'), 
  'Tile Adhesive', 
  'adhesives', 
  'Polymer-based grey tile adhesive for ceramic tiles', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/oyw8un96_Screenshot%202026-03-16%20at%204.43.01%E2%80%AFPM.png', 
  '{}', 
  ARRAY['Water retention', 'Easy mixing', 'Indoor/Outdoor'], 
  '{}', 
  '{}', 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Tile Grout', 
  NULL, 
  (SELECT id FROM brands WHERE slug = 'blackberry'), 
  'Grout', 
  'grouts', 
  'Polymer-based sanded cement grout for wall/floor tiles', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/3vsbxhjh_Screenshot%202026-03-16%20at%203.58.27%E2%80%AFPM.png', 
  '{}', 
  ARRAY['24 colors', 'Weather resistant', 'Non-cracking'], 
  '{}', 
  ARRAY['White', 'Grey', 'Beige', 'Black', 'Brown', 'And 19 more...'], 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Epoxy Grout', 
  NULL, 
  (SELECT id FROM brands WHERE slug = 'blackberry'), 
  'Premium Grout', 
  'grouts', 
  'Three component chemical resistant epoxy grout', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ezw90l00_Screenshot%202026-03-16%20at%203.59.17%E2%80%AFPM.png', 
  '{"packaging": "1KG & 5KG", "colors": "24 colors available"}', 
  ARRAY['Stain free', 'Chemical resistant', 'Weather resistant'], 
  '{}', 
  '{}', 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Tile Cleaner', 
  NULL, 
  (SELECT id FROM brands WHERE slug = 'blackberry'), 
  'Cleaning', 
  'cleaning', 
  'Heavy duty hydrochloric-based cleaner', 
  'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/fpgffh2i_Screenshot%202026-03-16%20at%203.57.48%E2%80%AFPM.png', 
  '{}', 
  ARRAY['Fast acting', 'Removes cement', 'Professional grade'], 
  '{}', 
  '{}', 
  NULL
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Luxury Sofa', 
  NULL, 
  (SELECT id FROM brands WHERE slug = 'furniture'), 
  'Living Room', 
  NULL, 
  'Elegant modern sofa for premium living spaces', 
  'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=srgb&fm=jpg&q=85', 
  '{}', 
  '{}', 
  '{}', 
  '{}', 
  'Contact for pricing'
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Designer Chair', 
  NULL, 
  (SELECT id FROM brands WHERE slug = 'furniture'), 
  'Seating', 
  NULL, 
  'Contemporary chair with premium upholstery', 
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&q=85', 
  '{}', 
  '{}', 
  '{}', 
  '{}', 
  'Contact for pricing'
);

INSERT INTO products (name, code, brand_id, category, section, description, image_url, specs, features, applications, colors, price)
VALUES (
  'Dining Table', 
  NULL, 
  (SELECT id FROM brands WHERE slug = 'furniture'), 
  'Dining', 
  NULL, 
  'Modern dining table for sophisticated interiors', 
  'https://images.unsplash.com/photo-1639173925921-5d5fd027713c?crop=entropy&cs=srgb&fm=jpg&q=85', 
  '{}', 
  '{}', 
  '{}', 
  '{}', 
  'Contact for pricing'
);

-- Seed Company Info
INSERT INTO company_info (name, tagline, description, mission, vision, stats, contact, certifications)
VALUES (
  'CANO Crystal', 
  'Excellence in Every Structure', 
  'CANO Crystal delivers high-performance tile adhesives designed for strength, precision, and long-term durability.', 
  'To manufacture reliable, high-performance tile adhesive solutions that deliver consistent bonding strength, application ease, and long-term durability across all construction environments.', 
  'To become a trusted name in tile fixing solutions by setting new benchmarks in quality, performance, and application reliability.', 
  '{"plants": "10+", "personnel": "300+", "projects": "562+", "customerSatisfaction": "99%"}', 
  '{"email": "Info@canocrystal.com", "phone": "+91 89379 88585", "address": "Plot No 29, Sector 142, Noida, Uttar Pradesh India 201305", "manufacturing": "CANO DRYMIX Alwar (Rajasthan)"}', 
  ARRAY['ISO 9001:2015', 'ISO 14001:2018', 'ISI Certified', 'TÜV SUD', 'CE Marking', 'German Quality']
) ON CONFLICT (id) DO UPDATE SET 
  name = EXCLUDED.name, 
  tagline = EXCLUDED.tagline, 
  description = EXCLUDED.description,
  mission = EXCLUDED.mission,
  vision = EXCLUDED.vision,
  stats = EXCLUDED.stats,
  contact = EXCLUDED.contact,
  certifications = EXCLUDED.certifications;
