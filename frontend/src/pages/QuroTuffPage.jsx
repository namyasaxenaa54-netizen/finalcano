import React, { useState, useEffect } from 'react';
import BrandPageTemplate from '../components/BrandPageTemplate';
import API from '../utils/api';

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
        API.getBrandBySlug('qurotuff'),
        API.getProducts('qurotuff')
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
          sections: {
            plywood: { title: 'Plywood Products' },
            decorative: { title: 'Decorative Plywood' },
            specialty: { title: 'Specialty Products' }
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

  return <BrandPageTemplate brandData={brandData} products={products} />;
};

export default QuroTuffPage;
