import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { canoBondProducts, blackberryProducts, furnitureProducts } from '../mockData';

const ProductsShowcase = () => {
  const productSections = [
    {
      brand: 'CanoBond',
      color: '#C9A0A0',
      gradient: 'from-[#C9A0A0] to-[#B76E79]',
      products: canoBondProducts
    },
    {
      brand: 'Blackberry',
      color: '#8B7E8B',
      gradient: 'from-[#8B7E8B] to-[#A68A7A]',
      products: blackberryProducts
    },
    {
      
      brand: 'Quro Tuff',
      color: '#A68A7A',
      gradient: 'from-[#A68A7A] to-[#8B7E8B]',
      products: furnitureProducts
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle tile texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FAF9F6]">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800)',
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#B76E79] bg-[#B76E79]/10 px-4 py-2 rounded-full">
              Our Premium Collection
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Brands & Products
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A] max-w-2xl mx-auto">
            Comprehensive solutions across construction chemicals and premium furniture
          </p>
        </div>

        {/* Product Sections */}
        <div className="space-y-16 sm:space-y-20">
          {productSections.map((section, sectionIndex) => (
            <div key={section.brand} className="space-y-6 sm:space-y-8">
              {/* Brand Header */}
              <div className="flex items-center space-x-4">
                <div
                  className="w-2 h-10 sm:h-12 rounded-full"
                  style={{ backgroundColor: section.color }}
                />
                <h3 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
                  {section.brand}
                </h3>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {section.products.map((product) => (
                  <Card
                    key={product.id}
                    className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Premium badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-[#2C2C2C]">Premium</span>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-2">
                        {product.name}
                      </h4>
                      <p className="text-[#3A3A3A] text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      {product.features && (
                        <div className="space-y-1 mb-4">
                          {product.features.slice(0, 2).map((feature, i) => (
                            <div key={i} className="flex items-center text-xs text-[#3A3A3A]">
                              <div
                                className="w-1.5 h-1.5 rounded-full mr-2"
                                style={{ backgroundColor: section.color }}
                              />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-0 h-auto font-semibold hover:bg-transparent"
                        style={{ color: section.color }}
                      >
                        View Details
                        <ArrowRight size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
