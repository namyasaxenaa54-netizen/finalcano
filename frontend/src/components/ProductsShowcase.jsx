import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { canoBondProducts, blackberryProducts, furnitureProducts } from '../mockData';

const ProductsShowcase = () => {
  const productSections = [
    {
      brand: 'CanoBond',
      color: '#FF6A00',
      products: canoBondProducts
    },
    {
      brand: 'Blackberry',
      color: '#6B4DFF',
      products: blackberryProducts
    },
    {
      brand: 'Furniture',
      color: '#8A5A3B',
      products: furnitureProducts
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Brands & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across construction chemicals and premium furniture
          </p>
        </div>

        {/* Product Sections */}
        <div className="space-y-20">
          {productSections.map((section, sectionIndex) => (
            <div key={section.brand} className="space-y-8">
              {/* Brand Header */}
              <div className="flex items-center space-x-4">
                <div
                  className="w-2 h-12 rounded-full"
                  style={{ backgroundColor: section.color }}
                />
                <h3 className="text-4xl font-bold text-gray-900">
                  {section.brand}
                </h3>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.products.map((product) => (
                  <Card
                    key={product.id}
                    className="group cursor-pointer overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      {product.features && (
                        <div className="space-y-1 mb-4">
                          {product.features.slice(0, 2).map((feature, i) => (
                            <div key={i} className="flex items-center text-xs text-gray-500">
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
