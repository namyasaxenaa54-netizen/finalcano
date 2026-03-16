// Real Product Data from CanoBond Brochure
export const realCanoBondProducts = [
  {
    id: 'ct333',
    code: 'CT-333',
    name: 'Polymer Grey Tile Adhesive',
    category: 'Standard Adhesive',
    description: 'Polymer-based grey tile adhesive for ceramic tiles and small format natural stone',
    image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/0sk7szkl_6edfeae7-952a-4dc4-9f31-a8a3f97fa387.png',
    specs: {
      standard: 'C1T as per EN / TYPE 1 as per IS',
      thickness: 'Up to 15mm',
      weight: '20 KG',
      coverage: '1.2kg/m²/mm',
      shelfLife: '12 months'
    },
    features: ['Water retention', 'Easy mixing', 'Indoor/Outdoor', 'Vertical & Horizontal'],
    applications: ['Ceramic tiles', 'Terracotta', 'Clay tiles', 'Natural stone']
  },
  {
    id: 'vt777',
    code: 'VT-777',
    name: 'High Performance Vitrified Adhesive',
    category: 'Premium Adhesive',
    description: 'High-performance polymer-modified adhesive for vitrified and low-porosity tiles',
    image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/0sk7szkl_6edfeae7-952a-4dc4-9f31-a8a3f97fa387.png',
    specs: {
      standard: 'C2TE as per EN / TYPE 3 as per IS',
      thickness: 'Up to 15mm',
      weight: '20 KG',
      coverage: '1.2kg/m²/mm',
      colors: 'Grey & White'
    },
    features: ['Visible fibres', 'Exceptional bond', 'Water resistant', 'Flexible'],
    applications: ['Vitrified tiles', 'Glass mosaic', 'Natural stone', 'Swimming pools']
  },
  {
    id: 'ewt888',
    code: 'EWT-888',
    name: 'Ultra Flexible Large Format Adhesive',
    category: 'Professional Grade',
    description: 'Highly flexible adhesive for large format tiles with enhanced slip resistance',
    image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/0sk7szkl_6edfeae7-952a-4dc4-9f31-a8a3f97fa387.png',
    specs: {
      standard: 'C2T E S2 as per EN / TYPE 4 T S2 as per IS',
      thickness: 'Up to 15mm',
      weight: '20 KG',
      colors: 'Grey & White'
    },
    features: ['High polymer', 'Slip resistant', 'Large format', 'Extreme flexibility'],
    applications: ['Large tiles >1200mm', 'Granite', 'High deformation areas', 'External facade']
  },
  {
    id: 'iwt666',
    code: 'IWT-666',
    name: 'Thin Set Premium Adhesive',
    category: 'Wet Area Specialist',
    description: 'High polymer-modified thin set adhesive for vitrified tiles in wet conditions',
    image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/0sk7szkl_6edfeae7-952a-4dc4-9f31-a8a3f97fa387.png',
    specs: {
      standard: 'C2TE as per EN / TYPE 3 as per IS',
      thickness: 'Up to 12mm',
      weight: '20 KG',
      colors: 'Grey & White'
    },
    features: ['Water resistant', 'Longer open time', 'Tile-on-tile', 'Pool safe'],
    applications: ['Swimming pools', 'Bathrooms', 'Water bodies', 'Wet rooms']
  },
  {
    id: 'cvt444',
    code: 'CVT-444',
    name: 'Anti-Skid Grey Adhesive',
    category: 'Standard Adhesive',
    description: 'Advanced polymer enriched anti-skid adhesive for ceramic and natural stones',
    image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/0sk7szkl_6edfeae7-952a-4dc4-9f31-a8a3f97fa387.png',
    specs: {
      standard: 'C2T as per EN / TYPE 2 as per IS',
      thickness: 'Up to 10mm',
      weight: '20 KG',
      colors: 'Grey & White'
    },
    features: ['Anti-skid', 'Perfect adherence', 'Extended open time', 'Top-to-bottom install'],
    applications: ['Ceramic tiles', 'Natural stone', 'Interior walls', 'Floor applications']
  },
  {
    id: 'epoxygrout',
    name: 'Epoxy Grout',
    category: 'Premium Grout',
    description: 'Three component chemical resistant epoxy grout - stain free and durable',
    image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cxuxz24x_epoxy%20mockup.png',
    specs: {
      packaging: '1KG & 5KG',
      colors: '24 colors available',
      standard: 'RG as per EN13888 / ISO 13007',
      shelfLife: '24 months'
    },
    features: ['Stain free', 'Chemical resistant', 'Weather resistant', 'Non-toxic'],
    applications: ['Hospitals', 'Kitchens', 'Swimming pools', 'High traffic areas']
  }
];

export const groutProducts = [
  {
    id: 'tilegrout',
    name: 'Tile Grout',
    description: 'Polymer-based sanded cement grout for joints 1-6mm',
    specs: { weight: '1KG', colors: '24 colors', shelfLife: '12 months' },
    features: ['Reduced water absorption', 'Abrasion resistant', 'Non-cracking', 'Weather resistant']
  },
  {
    id: 'grouthardener',
    name: 'Grout Hardener',
    description: 'Synthetic polymer emulsion additive for cement grouts',
    specs: { packaging: '300ml bottle', pH: '>8' },
    features: ['Improves adhesion', 'Increases flexibility', 'Reduces permeability']
  },
  {
    id: 'tilecleaner',
    name: 'Tile Cleaner',
    description: 'Heavy duty hydrochloric-based cleaner for tile maintenance',
    specs: { packaging: '1 Litre', shelfLife: '24 months' },
    features: ['Fast acting', 'Removes cement film', 'Removes efflorescence']
  }
];

// Premium Color Palette with Metallic Effects
export const premiumColors = {
  roseGold: {
    primary: '#B76E79',
    secondary: '#C9A0A0',
    light: '#E8C5CA',
    metallic: 'linear-gradient(135deg, #D4AF37 0%, #B76E79 50%, #C9A0A0 100%)'
  },
  charcoal: {
    primary: '#2C2C2C',
    secondary: '#3A3A3A',
    light: '#4A4A4A'
  },
  cream: {
    primary: '#FAF9F6',
    secondary: '#FFFEF7',
    light: '#F5F5DC'
  },
  accent: {
    gold: '#D4AF37',
    copper: '#B87333',
    bronze: '#CD7F32'
  }
};

export const brandLogos = {
  canoCrystal: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png',
  canoBond: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/yusg4lmi_Print%20%281%29.pdf',
  blackberry: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/unoson20_black%20berry%20bold.pdf'
};

// Brand taglines
export const brandMessages = {
  canoCrystal: 'Engineering Excellence for Modern Living',
  canoBond: 'German Intelligence. Unshakeable Bond.',
  blackberry: 'Premium Solutions for Perfect Finishes'
};

// BLACKBERRY BRAND PRODUCTS - Real Product Data
export const blackberryBrandData = {
  name: 'Blackberry',
  tagline: 'Premium Solutions for Perfect Finishes',
  brandColor: '#8E44AD',
  lightColor: '#F4ECF7',
  bannerImage: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/7d6mkjxi_Screenshot%202026-03-16%20at%203.59.46%E2%80%AFPM.png',
  sections: {
    adhesives: {
      title: 'Tile Adhesives',
      products: [
        {
          id: 'bb-ct333',
          code: 'CT-333',
          name: 'Polymer Grey Tile Adhesive',
          section: 'adhesives',
          description: 'Polymer-based grey tile adhesive for ceramic tiles and small format natural stone',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/oyw8un96_Screenshot%202026-03-16%20at%204.43.01%E2%80%AFPM.png',
          specs: {
            standard: 'C1T as per EN / TYPE 1 as per IS',
            thickness: 'Up to 15mm',
            weight: '20 KG',
            coverage: '1.2kg/m²/mm'
          },
          features: ['Water retention', 'Easy mixing', 'Indoor/Outdoor', 'Vertical & Horizontal'],
          applications: ['Ceramic tiles', 'Terracotta', 'Clay tiles', 'Natural stone']
        },
        {
          id: 'bb-cvt444',
          code: 'CVT-444',
          name: 'Anti-Skid Grey Adhesive',
          section: 'adhesives',
          description: 'Advanced polymer enriched anti-skid adhesive for ceramic and natural stones',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/w76owp3h_Screenshot%202026-03-16%20at%204.43.17%E2%80%AFPM.png',
          specs: {
            standard: 'C2T as per EN / TYPE 2 as per IS',
            thickness: 'Up to 10mm',
            weight: '20 KG',
            colors: 'Grey & White'
          },
          features: ['Anti-skid', 'Perfect adherence', 'Extended open time', 'Top-to-bottom install'],
          applications: ['Ceramic tiles', 'Natural stone', 'Interior walls', 'Floor applications']
        },
        {
          id: 'bb-iwt666',
          code: 'IWT-666',
          name: 'Thin Set Premium Adhesive',
          section: 'adhesives',
          description: 'High polymer-modified thin set adhesive for vitrified tiles in wet conditions',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/n6hisdtg_Screenshot%202026-03-16%20at%204.43.32%E2%80%AFPM.png',
          specs: {
            standard: 'C2TE as per EN / TYPE 3 as per IS',
            thickness: 'Up to 12mm',
            weight: '20 KG',
            colors: 'Grey & White'
          },
          features: ['Water resistant', 'Longer open time', 'Tile-on-tile', 'Pool safe'],
          applications: ['Swimming pools', 'Bathrooms', 'Water bodies', 'Wet rooms']
        },
        {
          id: 'bb-vt777',
          code: 'VT-777',
          name: 'High Performance Vitrified Adhesive',
          section: 'adhesives',
          description: 'High-performance polymer-modified adhesive for vitrified and low-porosity tiles',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/uswmrksn_Screenshot%202026-03-16%20at%204.43.50%E2%80%AFPM.png',
          specs: {
            standard: 'C2TE as per EN / TYPE 3 as per IS',
            thickness: 'Up to 15mm',
            weight: '20 KG',
            coverage: '1.2kg/m²/mm',
            colors: 'Grey & White'
          },
          features: ['Visible fibres', 'Exceptional bond', 'Water resistant', 'Flexible'],
          applications: ['Vitrified tiles', 'Glass mosaic', 'Natural stone', 'Swimming pools']
        },
        {
          id: 'bb-ewt888',
          code: 'EWT-888',
          name: 'Ultra Flexible Large Format Adhesive',
          section: 'adhesives',
          description: 'Highly flexible adhesive for large format tiles with enhanced slip resistance',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/qub1sm7d_Screenshot%202026-03-16%20at%204.44.05%E2%80%AFPM.png',
          specs: {
            standard: 'C2T E S2 as per EN / TYPE 4 T S2 as per IS',
            thickness: 'Up to 15mm',
            weight: '20 KG',
            colors: 'Grey & White'
          },
          features: ['High polymer', 'Slip resistant', 'Large format', 'Extreme flexibility'],
          applications: ['Large tiles >1200mm', 'Granite', 'High deformation areas', 'External facade']
        }
      ]
    },
    grouts: {
      title: 'Grouts & Solutions',
      products: [
        {
          id: 'bb-epoxygrout',
          name: 'Epoxy Grout',
          section: 'grouts',
          description: 'Three component chemical resistant epoxy grout - stain free and durable',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ezw90l00_Screenshot%202026-03-16%20at%203.59.17%E2%80%AFPM.png',
          specs: {
            packaging: '1KG & 5KG',
            colors: '24 colors available',
            standard: 'RG as per EN13888 / ISO 13007',
            shelfLife: '24 months'
          },
          features: ['Stain free', 'Chemical resistant', 'Weather resistant', 'Non-toxic'],
          applications: ['Hospitals', 'Kitchens', 'Swimming pools', 'High traffic areas']
        },
        {
          id: 'bb-tilegrout',
          name: 'Tile Grout',
          section: 'grouts',
          description: 'Polymer-based sanded cement grout for wall/floor tiles & natural stone - Easy & quick to use',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/3vsbxhjh_Screenshot%202026-03-16%20at%203.58.27%E2%80%AFPM.png',
          specs: {
            weight: '500GM',
            colors: '24 colors',
            shelfLife: '12 months',
            usage: 'Ceramic, Vitrified & Mosaic Tile'
          },
          features: ['Reduced water absorption', 'Abrasion resistant', 'Non-cracking', 'Weather resistant'],
          applications: ['Wall tiles', 'Floor tiles', 'Natural stone', 'Ceramic tiles']
        },
        {
          id: 'bb-epoxyglitter',
          name: 'Epoxy Grout Glitter',
          section: 'grouts',
          description: 'Decorative glitter additive for epoxy grout - adds sparkling aesthetic finish',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/fxwbqjcw_Screenshot%202026-03-16%20at%203.58.11%E2%80%AFPM.png',
          specs: {
            weight: '100g',
            netWeight: '1L',
            colors: 'Multiple colors',
            usage: 'Mix with epoxy grout'
          },
          features: ['Decorative finish', 'Easy to mix', 'Long-lasting sparkle', 'Premium aesthetic'],
          applications: ['Feature walls', 'Bathroom accents', 'Kitchen backsplash', 'Decorative floors']
        },
        {
          id: 'bb-tilecleaner',
          name: 'Tile Cleaner',
          section: 'grouts',
          description: 'Professional tile cleaner that removes tough stains - Heavy duty formula',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/fpgffh2i_Screenshot%202026-03-16%20at%203.57.48%E2%80%AFPM.png',
          specs: {
            packaging: '1 Litre',
            shelfLife: '24 months',
            type: 'Heavy duty',
            pH: 'Acidic formula'
          },
          features: ['Fast acting', 'Removes cement film', 'Removes efflorescence', 'Professional grade'],
          applications: ['Post-installation cleaning', 'Maintenance', 'Stain removal', 'Grout cleaning']
        }
      ]
    },
    cleaning: {
      title: 'Cleaning Solutions',
      products: []
    }
  }
};

// CANOBOND BRAND PRODUCTS - Using existing real data with individual images
export const canoBondBrandData = {
  name: 'CanoBond',
  tagline: 'German Intelligence. Unshakeable Bond.',
  brandColor: '#E67E22',
  lightColor: '#FFF5EE',
  bannerImage: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/t1pe2odd_Screenshot%202026-03-16%20at%208.27.06%E2%80%AFPM.png',
  sections: {
    adhesives: {
      title: 'Tile Adhesives',
      products: [
        {
          ...realCanoBondProducts[0],
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/jeehwvnl_image.png'
        },
        {
          ...realCanoBondProducts[4],
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/gygsnn8f_image.png'
        },
        {
          ...realCanoBondProducts[3],
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/azx7fpft_image.png'
        },
        {
          ...realCanoBondProducts[1],
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/pqu66w3b_image.png'
        },
        {
          ...realCanoBondProducts[2],
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/f4octibf_image.png'
        }
      ]
    },
    grouts: {
      title: 'Grouts & Solutions',
      products: [
        {
          ...realCanoBondProducts[5],
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/6dysg2u0_Screenshot%202026-03-14%20at%204.03.57%E2%80%AFPM.png'
        },
        {
          id: 'cb-tilegrout',
          name: 'Tile Grout',
          description: 'Polymer-based sanded cement grout for wall/floor tiles & natural stone - Easy & quick to use',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/8p19sbhd_Screenshot%202026-03-14%20at%204.04.24%E2%80%AFPM.png',
          specs: { weight: '1KG', colors: '24 colors', shelfLife: '12 months' },
          features: ['Reduced water absorption', 'Abrasion resistant', 'Non-cracking', 'Weather resistant']
        },
        {
          id: 'cb-grouthardener',
          name: 'Grout Hardener',
          description: 'Synthetic polymer emulsion additive for cement grouts',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/igqtqcub_Screenshot%202026-03-14%20at%204.03.30%E2%80%AFPM.png',
          specs: { packaging: '300ml bottle', pH: '>8' },
          features: ['Improves adhesion', 'Increases flexibility', 'Reduces permeability']
        },
        {
          id: 'cb-tilecleaner',
          name: 'Tile Cleaner',
          description: 'Heavy duty hydrochloric-based cleaner for tile maintenance',
          image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/bw3m8ldj_Screenshot%202026-03-12%20at%207.24.11%E2%80%AFPM.png',
          specs: { packaging: '1 Litre', shelfLife: '24 months' },
          features: ['Fast acting', 'Removes cement film', 'Removes efflorescence']
        }
      ]
    },
    cleaning: {
      title: 'Cleaning Solutions',
      products: []
    }
  }
};

// Legacy exports for compatibility
export const canoBondProducts = realCanoBondProducts.slice(0, 4);
export const blackberryProducts = [
  {
    id: 'bb1',
    name: 'Premium Adhesive',
    description: 'Specialized adhesive for professional applications',
    image: 'https://images.unsplash.com/photo-1701422052265-64f0ac28dcd6?crop=entropy&cs=srgb&fm=jpg&q=85',
    features: ['Professional grade', 'Multi-surface', 'Fast curing']
  },
  {
    id: 'bb2',
    name: 'Designer Grout',
    description: 'Premium colored grout for aesthetic finishes',
    image: 'https://images.unsplash.com/photo-1629608564457-5d74829a9e14?crop=entropy&cs=srgb&fm=jpg&q=85',
    features: ['Wide color range', 'Smooth finish', 'Durable']
  },
  {
    id: 'bb3',
    name: 'Surface Cleaner',
    description: 'Multi-purpose cleaner for various surfaces',
    image: 'https://images.unsplash.com/photo-1637241612956-b7309005288b?crop=entropy&cs=srgb&fm=jpg&q=85',
    features: ['Versatile', 'Eco-friendly', 'Effective']
  }
];

export const furnitureProducts = [
  {
    id: 'fur1',
    name: 'Luxury Sofa',
    description: 'Elegant modern sofa for premium living spaces',
    image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=srgb&fm=jpg&q=85',
    category: 'Living Room',
    price: 'Contact for pricing'
  },
  {
    id: 'fur2',
    name: 'Designer Chair',
    description: 'Contemporary chair with premium upholstery',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&q=85',
    category: 'Seating',
    price: 'Contact for pricing'
  },
  {
    id: 'fur3',
    name: 'Dining Table',
    description: 'Modern dining table for sophisticated interiors',
    image: 'https://images.unsplash.com/photo-1639173925921-5d5fd027713c?crop=entropy&cs=srgb&fm=jpg&q=85',
    category: 'Dining',
    price: 'Contact for pricing'
  },
  {
    id: 'fur4',
    name: 'Cabinet Collection',
    description: 'Premium storage solutions with elegant design',
    image: 'https://images.unsplash.com/photo-1640109229792-a26a0ee366ff?crop=entropy&cs=srgb&fm=jpg&q=85',
    category: 'Storage',
    price: 'Contact for pricing'
  }
];

export const brandInfo = {
  canoBond: {
    name: 'CanoBond',
    tagline: 'High Performance Construction Chemicals',
    description: 'Professional-grade adhesives and construction chemicals for superior bonding and durability',
    color: '#C9A0A0',
    image: 'https://images.unsplash.com/photo-1703868669362-562283170216?crop=entropy&cs=srgb&fm=jpg&q=85'
  },
  blackberry: {
    name: 'Blackberry',
    tagline: 'Premium Chemical Solutions',
    description: 'Sophisticated chemical products designed for professional applications and premium finishes',
    color: '#8B7E8B',
    image: 'https://images.unsplash.com/photo-1560251085-d9c1dc542960?crop=entropy&cs=srgb&fm=jpg&q=85'
  },
  furniture: {
    name: 'Furniture Collection',
    tagline: 'Luxury Living Solutions',
    description: 'Contemporary furniture designed for modern living with elegance and comfort',
    color: '#A68A7A',
    image: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&q=85'
  }
};

export const industries = [
  {
    name: 'Construction',
    description: 'Premium chemicals for modern construction projects',
    icon: 'building'
  },
  {
    name: 'Interior Design',
    description: 'Professional solutions for elegant interiors',
    icon: 'paintbrush'
  },
  {
    name: 'Architecture',
    description: 'Advanced materials for architectural excellence',
    icon: 'ruler'
  },
  {
    name: 'Furniture',
    description: 'Luxury furnishings for contemporary spaces',
    icon: 'armchair'
  }
];

export const contactInfo = {
  email: 'info@canocrystal.com',
  phone: '+91 1234567890',
  address: 'CanoCrystal Industries, India'
};
