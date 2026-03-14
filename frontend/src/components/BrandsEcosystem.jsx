import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { brandInfo } from '../mockData';

const BrandsEcosystem = () => {
  const brands = [
    {
      ...brandInfo.canoBond,
      color: '#C9A0A0',
      gradient: 'from-[#C9A0A0]/20 to-[#B76E79]/20',
      borderColor: 'border-[#C9A0A0]/30',
      textColor: 'text-[#2C2C2C]',
      image: 'https://images.unsplash.com/photo-1703868669362-562283170216?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      ...brandInfo.blackberry,
      color: '#8B7E8B',
      gradient: 'from-[#8B7E8B]/20 to-[#A68A7A]/20',
      borderColor: 'border-[#8B7E8B]/30',
      textColor: 'text-[#2C2C2C]',
      image: 'https://images.unsplash.com/photo-1598056036946-3cfa8493bfdf?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      ...brandInfo.furniture,
      color: '#A68A7A',
      gradient: 'from-[#A68A7A]/20 to-[#8B7E8B]/20',
      borderColor: 'border-[#A68A7A]/30',
      textColor: 'text-[#2C2C2C]',
      image: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&q=85'
    }
  ];

  return (
    <section id="brands" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Marble texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-white to-[#FFFEF7]">
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551554781-c46200ea959d)',
            backgroundSize: '500px 500px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#B76E79] bg-[#B76E79]/10 px-4 py-2 rounded-full">
              Our Ecosystem
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            One Crystal. Three Powerful Brands.
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A] max-w-2xl mx-auto">
            United by innovation, specialized for excellence across construction and living spaces
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative h-full bg-gradient-to-br ${brand.gradient} backdrop-blur-sm border-2 ${brand.borderColor} rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}>
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

                  <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${brand.textColor}`}>
                    {brand.name}
                  </h3>
                  
                  <p className="text-base sm:text-lg font-semibold text-[#3A3A3A] mb-4">
                    {brand.tagline}
                  </p>
                  
                  <p className="text-[#3A3A3A] mb-6 leading-relaxed text-sm sm:text-base">
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
    </section>
  );
};

export default BrandsEcosystem;
