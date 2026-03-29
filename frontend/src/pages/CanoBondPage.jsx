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
        title="CanoBond | Premium Tile Adhesives & Construction Chemicals"
        description="CanoBond offers professional-grade tile adhesives and construction chemicals with German Intelligence for an unshakeable bond and long-lasting durability."
        keywords="CanoBond, tile adhesive, construction chemicals, heavy duty adhesive, floor bonding"
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
