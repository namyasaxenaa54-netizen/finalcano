import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { brandInfo } from '../mockData';

const BrandsEcosystem = () => {
  const brands = [
    {
      ...brandInfo.canoBond,
      gradient: 'from-orange-50 to-orange-100',
      textColor: 'text-orange-600',
      image: 'https://images.unsplash.com/photo-1703868669362-562283170216?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      ...brandInfo.blackberry,
      gradient: 'from-purple-50 to-purple-100',
      textColor: 'text-purple-600',
      image: 'https://images.unsplash.com/photo-1598056036946-3cfa8493bfdf?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      ...brandInfo.furniture,
      gradient: 'from-amber-50 to-amber-100',
      textColor: 'text-amber-700',
      image: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&q=85'
    }
  ];

  return (
    <section id="brands" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animation: Crystal splitting visualization */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              {/* Central crystal */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg animate-pulse" />
              
              {/* Branching lines */}
              <svg className="absolute top-8 left-8 w-64 h-32" viewBox="0 0 200 100">
                <line x1="0" y1="0" x2="60" y2="40" stroke="#FF6A00" strokeWidth="2" className="animate-draw" />
                <line x1="0" y1="0" x2="100" y2="10" stroke="#6B4DFF" strokeWidth="2" className="animate-draw" style={{ animationDelay: '0.2s' }} />
                <line x1="0" y1="0" x2="80" y2="60" stroke="#8A5A3B" strokeWidth="2" className="animate-draw" style={{ animationDelay: '0.4s' }} />
              </svg>
            </div>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            One Crystal. Three Powerful Brands.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            United by innovation, specialized for excellence across construction and living spaces
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative h-full bg-gradient-to-br ${brand.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                {/* Background image with overlay */}
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Brand color indicator */}
                  <div
                    className="w-12 h-1 rounded-full mb-6"
                    style={{ backgroundColor: brand.color }}
                  />

                  <h3 className={`text-3xl font-bold mb-3 ${brand.textColor}`}>
                    {brand.name}
                  </h3>
                  
                  <p className="text-lg font-semibold text-gray-700 mb-4">
                    {brand.tagline}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {brand.description}
                  </p>

                  <Button
                    className="w-full justify-between rounded-full text-white shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: brand.color }}
                  >
                    Explore {brand.name}
                    <ArrowRight size={18} />
                  </Button>
                </div>

                {/* Decorative element */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: brand.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          to {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: draw 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default BrandsEcosystem;
