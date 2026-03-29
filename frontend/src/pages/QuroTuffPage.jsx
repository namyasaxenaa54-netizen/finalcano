import React, { useState, useEffect } from 'react';
import BrandPageTemplate from '../components/BrandPageTemplate';
import { brandService } from '../services/brands';
import { productService } from '../services/products';

import SEO from '../components/SEO';

const QuroTuffPage = () => {
  const [brandData, setBrandData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [brand, brandProducts] = await Promise.all([
        brandService.getBrandBySlug('furniture'),
        productService.getProducts('furniture')
      ]);
      
      if (brand && brandProducts) {
        setBrandData({
          name: brand.name,
          tagline: brand.tagline,
          description: brand.description,
          brandColor: brand.brand_color,
          lightColor: brand.light_color,
          logo_url: brand.logo_url,
          banner_image_url: brand.banner_image_url,
          sections: brand.sections || {
            living: { title: 'Living Room' },
            bedroom: { title: 'Bedroom' },
            dining: { title: 'Dining' }
          }
        });
        setProducts(brandProducts);
      }
    } catch (error) {
      console.error('Failed to load brand data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!brandData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Brand not found</div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Quro Tuff | High-Performance Construction Chemicals"
        description="Explore Quro Tuff's range of high-performance construction chemicals and bonding solutions designed for extreme durability and strength."
        keywords="Quro Tuff, construction chemicals, bonding agents, industrial adhesives, tuff bond"
      />
      <BrandPageTemplate brandData={brandData} products={products} />
    </>
  );
};

export default QuroTuffPage;
