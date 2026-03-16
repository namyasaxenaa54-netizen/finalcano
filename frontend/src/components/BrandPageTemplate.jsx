import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import ProductModal from './ProductModal';
import ColorPicker from './ColorPicker';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BrandPageTemplate = ({ brandData }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const productsRef = useRef(null);

  const { name, tagline, brandColor, lightColor, bannerImage, sections } = brandData;

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate product cards on scroll
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const ProductCard = ({ product }) => (
    <div className="product-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 sm:h-72 md:h-80 bg-gray-50">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
        />
        {product.code && (
          <div 
            className="absolute top-4 right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm shadow-lg text-white"
            style={{ backgroundColor: brandColor }}
          >
            {product.code}
          </div>
        )}
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{product.name}</h3>
        <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{product.description}</p>
        <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
          {product.features?.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-center space-x-2 text-gray-600">
              <CheckCircle size={14} className="md:hidden" style={{ color: brandColor }} />
              <CheckCircle size={16} className="hidden md:block" style={{ color: brandColor }} />
              <span className="text-xs md:text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <Button 
          onClick={() => handleViewDetails(product)}
          className="w-full text-white rounded-full text-sm md:text-base py-2 md:py-3"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-700 transition-colors"
            style={{ 
              '&:hover': { color: brandColor }
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = brandColor}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Back to Home</span>
          </button>
          <img 
            src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
            alt="CanoCrystal"
            className="h-10 sm:h-12 w-auto"
          />
        </div>
      </div>

      {/* Hero Banner Section */}
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div 
            className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6"
            style={{ backgroundColor: `${brandColor}15` }}
          >
            <span className="font-bold text-xs sm:text-sm" style={{ color: brandColor }}>
              PREMIUM PRODUCTS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            {name}
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 px-4"
            style={{ color: brandColor }}
          >
            {tagline}
          </p>
        </div>

        {/* Brand Banner Image */}
        {bannerImage && (
          <div className="mb-12 md:mb-16 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
            <img 
              src={bannerImage}
              alt={`${name} Products`}
              className="w-full max-h-[250px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] object-contain"
            />
          </div>
        )}

        {/* Quality Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20">
          {[
            { label: 'ISO 9001:2015', icon: Shield },
            { label: 'Premium Quality', icon: Sparkles },
            { label: 'Certified Products', icon: CheckCircle },
            { label: '24 Colors Available', icon: Sparkles }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow text-center">
                <Icon size={24} className="mx-auto mb-2 md:hidden" style={{ color: brandColor }} />
                <Icon size={32} className="mx-auto mb-3 hidden md:block" style={{ color: brandColor }} />
                <p className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* SECTION 1: TILE ADHESIVES */}
        {sections.adhesives && sections.adhesives.products.length > 0 && (
          <section className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
                {sections.adhesives.title}
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: brandColor }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {sections.adhesives.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: GROUTS & SOLUTIONS */}
        {sections.grouts && sections.grouts.products.length > 0 && (
          <section className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
                {sections.grouts.title}
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: brandColor }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
              {sections.grouts.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Color Picker Integration */}
            <div className="mt-12 md:mt-16">
              <ColorPicker onColorSelect={(color) => console.log('Selected color:', color)} />
            </div>
          </section>
        )}

        {/* SECTION 3: CLEANING SOLUTIONS */}
        {sections.cleaning && sections.cleaning.products.length > 0 && (
          <section className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
                {sections.cleaning.title}
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 rounded-full mx-auto" style={{ backgroundColor: brandColor }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {sections.cleaning.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center py-12 md:py-16">
          <div 
            className="rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-xl"
            style={{ backgroundColor: `${brandColor}10` }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Contact us today for product inquiries, technical specifications, or to request a quote
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button 
                className="text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                style={{ backgroundColor: brandColor }}
              >
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-2"
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
