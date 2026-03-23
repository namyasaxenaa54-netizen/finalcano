import React, { useState, useEffect } from 'react';
import BrandPageTemplate from '../components/BrandPageTemplate';
import { brandService } from '../services/brands';
import { productService } from '../services/products';
import SEO from '../components/SEO';

const CanoBondPage = () => {
  const [brandData, setBrandData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [brand, brandProducts] = await Promise.all([
        brandService.getBrandBySlug('canobond'),
        productService.getProducts('canobond')
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
          sections: brand.sections
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

  return (
    <>
      <SEO 
        title="CanoBond - German Intelligence. Unshakeable Bond | CanoCrystal"
        description="Professional-grade adhesives and construction chemicals for superior bonding and durability. Premium tile adhesives from CanoBond."
        keywords="canobond, tile adhesive, construction adhesive, german quality, premium adhesive"
      />
      {brandData ? (
        <BrandPageTemplate brandData={brandData} products={products} />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl text-gray-600">Brand not found</div>
        </div>
      )}
    </>
  );
};

export default CanoBondPage;
