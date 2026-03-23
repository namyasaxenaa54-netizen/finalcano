import React, { useState, useEffect } from 'react';
import { brandService } from '../services/brands';

const BrandsEcosystem = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await brandService.getBrands();
        
        // Enhance fetched data with UI-specific properties
        const enhancedBrands = data.map(brand => {
          let uiProps = {};
          if (brand.slug === 'canobond') {
            uiProps = {
              color: '#E07B39',
              gradient: 'from-[#FFF5EB] via-white to-[#FFF5EB]',
              logo: brand.logo_url || 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cwqu8ri7_Screenshot%202026-03-10%20at%206.05.54%E2%80%AFPM.png'
            };
          } else if (brand.slug === 'blackberry') {
            uiProps = {
              color: '#8E44AD',
              gradient: 'from-[#F4ECF7] via-white to-[#F4ECF7]',
              logo: brand.logo_url || 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ivdpxzwa_Screenshot%202026-03-17%20at%205.35.40%E2%80%AFPM.png'
            };
          } else if (brand.slug === 'furniture') {
            uiProps = {
              name: 'Quro Tuff', // Override displayed name for this slot
              color: '#2C5F2D',
              gradient: 'from-[#E8F5E9] via-white to-[#E8F5E9]',
              logo: brand.logo_url || '/qurotuff-logo.png'
            };
          }
          
          return {
            ...brand,
            ...uiProps,
            accentColor: uiProps.color
          };
        });

        // Ensure we only show the 3 main brands and maintain order
        const order = ['canobond', 'blackberry', 'furniture'];
        const sortedBrands = enhancedBrands
          .filter(b => order.includes(b.slug))
          .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

        setBrands(sortedBrands);
      } catch (error) {
        console.error('Error fetching brands:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        <div className="text-xl text-gray-500 animate-pulse">Loading Brands Portfolio...</div>
      </div>
    );
  }

  return (
    <section id="brands" className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7]">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - More Premium */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-3 rounded-full border border-gray-200 shadow-sm">
              Our Portfolio
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            One Crystal.<br />
            <span className="bg-gradient-to-r from-orange-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Three Powerful Brands.
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            United by innovation, specialized for excellence across construction, adhesives, and premium plywood
          </p>
        </div>

        {/* Brand Cards - Premium Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`relative h-full bg-gradient-to-br ${brand.gradient} rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden border border-gray-100`}>
                {/* Decorative corner element */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl transition-all duration-700 group-hover:scale-150"
                  style={{ backgroundColor: brand.color }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Logo Badge - Properly contained */}
                  <div 
                    className="w-32 h-32 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 bg-white p-4"
                    style={{ 
                      border: `2px solid ${brand.color}30`
                    }}
                  >
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Brand Name */}
                  <h3 
                    className="text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                    {brand.tagline}
                  </p>
                  
                  {/* Accent line */}
                  <div 
                    className="w-16 h-1 rounded-full mb-6 transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: brand.color }}
                  />
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light flex-grow">
                    {brand.description}
                  </p>

                  {/* Subtle bottom accent */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="font-medium">Premium Quality</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.color }} />
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg font-light italic">
            Each brand, a testament to quality. Together, an unbeatable portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsEcosystem;