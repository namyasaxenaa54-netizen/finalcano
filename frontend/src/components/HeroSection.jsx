import React, { useState } from 'react';
import { ArrowRight, Package, Droplet, Armchair } from 'lucide-react';
import { Button } from './ui/button';
import { brandInfo } from '../mockData';

const HeroSection = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    {
      id: 'canobond',
      name: 'CanoBond',
      icon: Package,
      color: '#FF6A00',
      gradient: 'from-orange-400 to-orange-600',
      position: 'top-20 left-20',
      products: ['Tile Adhesive', 'Epoxy Grout', 'Tile Cleaner', 'Hardener']
    },
    {
      id: 'blackberry',
      name: 'Blackberry',
      icon: Droplet,
      color: '#6B4DFF',
      gradient: 'from-purple-400 to-purple-600',
      position: 'top-20 right-20',
      products: ['Adhesive', 'Grout', 'Cleaner']
    },
    {
      id: 'furniture',
      name: 'Furniture',
      icon: Armchair,
      color: '#8A5A3B',
      gradient: 'from-amber-600 to-amber-800',
      position: 'bottom-32 left-1/2 -translate-x-1/2',
      products: ['Sofa', 'Chair', 'Table', 'Cabinet']
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            CanoCrystal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Engineering Brands for Modern Living
          </p>
        </div>

        {/* Central Crystal Sphere */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Main Crystal */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 flex items-center justify-center shadow-2xl animate-float">
              <div className="w-40 h-40 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/50 backdrop-blur-sm" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-50 animate-pulse" />
          </div>

          {/* Brand Spheres */}
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div
                key={brand.id}
                className={`absolute ${brand.position} cursor-pointer transition-all duration-500 ${hoveredBrand === brand.id ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                style={{
                  animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                }}
              >
                <div className="relative group">
                  {/* Sphere */}
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${brand.gradient} shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12`}>
                    <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={40} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity bg-gradient-to-br ${brand.gradient}`} />

                  {/* Brand Info Card */}
                  <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl transition-all duration-300 ${hoveredBrand === brand.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: brand.color }}>
                      {brand.name}
                    </h3>
                    <div className="space-y-1 mb-3">
                      {brand.products.map((product, i) => (
                        <div key={i} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: brand.color }} />
                          {product}
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full rounded-full text-white"
                      style={{ backgroundColor: brand.color }}
                    >
                      Explore {brand.name}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Discover Our Brands
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
