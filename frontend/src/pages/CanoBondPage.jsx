import React, { useState, useEffect } from 'react';
import BrandPageTemplate from '../components/BrandPageTemplate';
import API from '../utils/api';
import { canoBondBrandData } from '../mockData';

const CanoBondPage = () => {
  const [brandData, setBrandData] = useState(canoBondBrandData);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [brand, brandProducts] = await Promise.all([
        API.getBrandBySlug('canobond'),
        API.getProducts('canobond')
      ]);
      
      if (brand && brandProducts) {
        setBrandData({
          name: brand.name,
          tagline: brand.tagline,
          description: brand.description,
          brandColor: brand.brand_color,
          lightColor: brand.light_color,
          logo: brand.logo,
          bannerImage: brand.banner_image,
          sections: brand.sections || canoBondBrandData.sections
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

  return <BrandPageTemplate brandData={brandData} products={products} />;
};

export default CanoBondPage;
