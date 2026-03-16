import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import ProductModal from './ProductModal';
import ColorPicker from './ColorPicker';

const BrandPageTemplate = ({ brandData }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { name, tagline, brandColor, lightColor, bannerImage, sections } = brandData;

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const ProductCard = ({ product }) => (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-80">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {product.code && (
          <div 
            className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm shadow-lg text-white"
            style={{ backgroundColor: brandColor }}
          >
            {product.code}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="space-y-2 mb-4">
          {product.features?.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-center space-x-2 text-gray-600">
              <CheckCircle size={16} style={{ color: brandColor }} />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <Button 
          onClick={() => handleViewDetails(product)}
          className="w-full text-white rounded-full"
          style={{ backgroundColor: brandColor }}
        >
          View Details
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50" style={{ backgroundImage: `linear-gradient(to bottom right, ${lightColor}, white)` }}>
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-700 transition-colors"
            style={{ 
              '&:hover': { color: brandColor }
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = brandColor}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </button>
          <img 
            src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
            alt="CanoCrystal"
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div 
            className="inline-block px-6 py-3 rounded-full mb-6"
            style={{ backgroundColor: `${brandColor}15` }}
          >
            <span className="font-bold text-sm" style={{ color: brandColor }}>
              PREMIUM PRODUCTS
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            {name}
          </h1>
          <p 
            className="text-2xl md:text-3xl font-semibold mb-6"
            style={{ color: brandColor }}
          >
            {tagline}
          </p>
        </div>

        {/* Brand Banner Image */}
        {bannerImage && (
          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={bannerImage}
              alt={`${name} Products`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Quality Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'ISO 9001:2015', icon: Shield },
            { label: 'Premium Quality', icon: Sparkles },
            { label: 'Certified Products', icon: CheckCircle },
            { label: '24 Colors Available', icon: Sparkles }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow text-center">
                <Icon size={32} className="mx-auto mb-3" style={{ color: brandColor }} />
                <p className="font-bold text-gray-900">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* SECTION 1: TILE ADHESIVES */}
        {sections.adhesives && sections.adhesives.products.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {sections.adhesives.title}
              </h2>
              <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: brandColor }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.adhesives.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: GROUTS & SOLUTIONS */}
        {sections.grouts && sections.grouts.products.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {sections.grouts.title}
              </h2>
              <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: brandColor }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {sections.grouts.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Color Picker Integration */}
            <div className="mt-16">
              <ColorPicker onColorSelect={(color) => console.log('Selected color:', color)} />
            </div>
          </section>
        )}

        {/* SECTION 3: CLEANING SOLUTIONS */}
        {sections.cleaning && sections.cleaning.products.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {sections.cleaning.title}
              </h2>
              <div className="w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: brandColor }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.cleaning.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center py-16">
          <div 
            className="rounded-3xl p-12 shadow-xl"
            style={{ backgroundColor: `${brandColor}10` }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for product inquiries, technical specifications, or to request a quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-white rounded-full px-8 py-6 text-lg"
                style={{ backgroundColor: brandColor }}
              >
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg border-2"
                style={{ borderColor: brandColor, color: brandColor }}
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BrandPageTemplate;
