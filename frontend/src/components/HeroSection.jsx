import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const LightThemeHero = () => {
  const navigate = useNavigate();

  const brands = [
    {
      id: 'canobond',
      name: 'CanoBond',
      tagline: 'German Intelligence',
      subtitle: 'Tile Adhesive Excellence',
      color: '#E67E22',
      lightColor: '#FFF5EE',
      image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/t1pe2odd_Screenshot%202026-03-16%20at%208.27.06%E2%80%AFPM.png',
      logo: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cwqu8ri7_Screenshot%202026-03-10%20at%206.05.54%E2%80%AFPM.png'
    },
    {
      id: 'blackberry',
      name: 'Blackberry',
      tagline: 'Premium Finishes',
      subtitle: 'Epoxy Grout Solutions',
      color: '#8E44AD',
      lightColor: '#F4ECF7',
      image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/7d6mkjxi_Screenshot%202026-03-16%20at%203.59.46%E2%80%AFPM.png',
      logo: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ivdpxzwa_Screenshot%202026-03-17%20at%205.35.40%E2%80%AFPM.png'
    },
    {
      id: 'furniture',
      name: 'Furniture',
      tagline: 'Luxury Living',
      subtitle: 'Contemporary Collection',
      color: '#7D6608',
      lightColor: '#FFF9E6',
      image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6',
      icon: '🪑'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FDFBF7] via-white to-[#FFF9F0] overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, #E67E22 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Header */}
        <div className="text-center mb-20 pt-32">
          {/* Logo */}
          <div className="mb-12 animate-fade-in">
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="h-32 md:h-40 w-auto mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Choose Your <span className="bg-gradient-to-r from-[#E67E22] via-[#8E44AD] to-[#7D6608] bg-clip-text text-transparent">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our premium brands - from construction chemicals to luxury furniture
          </p>

          {/* Certifications Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              'ISO 9001:2015',
              'ISO 14001:2018', 
              'ISI Certified',
              'TÜV SUD',
              'CE Marking',
              'German Quality'
            ].map((cert, i) => (
              <div key={i} className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <span className="text-xs font-semibold text-gray-700">{cert}</span>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#E67E22]/10 to-[#8E44AD]/10 rounded-full">
              <Sparkles size={16} className="text-[#E67E22]" />
              <span className="text-sm font-semibold text-gray-700">10+ Manufacturing Plants</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#8E44AD]/10 to-[#7D6608]/10 rounded-full">
              <Sparkles size={16} className="text-[#8E44AD]" />
              <span className="text-sm font-semibold text-gray-700">300+ Trained Personnel</span>
            </div>
          </div>
        </div>

        {/* THREE BRAND CARDS - NEW PREMIUM DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              onClick={() => navigate(`/${brand.id}`)}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Card Container - Premium Design */}
              <div className="relative h-[580px] rounded-3xl overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 border-2 border-gray-100">
                {/* Background Image with Better Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${brand.lightColor} 0%, white 100%)` }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-10">
                  {/* Top: Large Logo */}
                  <div className="flex flex-col items-center text-center">
                    {brand.logo ? (
                      <div 
                        className="w-44 h-44 rounded-3xl flex items-center justify-center shadow-2xl p-8 mb-6 bg-white group-hover:scale-105 transition-transform duration-500 backdrop-blur-sm"
                        style={{ 
                          border: `4px solid ${brand.color}`,
                          boxShadow: `0 15px 50px ${brand.color}50`
                        }}
                      >
                        <img 
                          src={brand.logo} 
                          alt={`${brand.name} logo`}
                          className="w-full h-full object-contain filter drop-shadow-lg"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-36 h-36 rounded-3xl flex items-center justify-center text-7xl shadow-2xl mb-6 bg-white group-hover:scale-105 transition-transform duration-500"
                        style={{ 
                          border: `4px solid ${brand.color}`,
                          boxShadow: `0 15px 50px ${brand.color}50`
                        }}
                      >
                        {brand.icon}
                      </div>
                    )}
                    
                    {/* Brand Tag */}
                    <div 
                      className="px-6 py-2.5 rounded-full shadow-lg mb-4"
                      style={{ 
                        backgroundColor: `${brand.color}20`, 
                        border: `2px solid ${brand.color}40` 
                      }}
                    >
                      <span className="font-bold text-sm tracking-wide" style={{ color: brand.color }}>
                        {brand.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Brand Info */}
                  <div className="text-center">
                    <h2 
                      className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-sm"
                      style={{ color: brand.color }}
                    >
                      {brand.name}
                    </h2>
                    <p className="text-gray-700 text-xl font-semibold mb-8">
                      {brand.subtitle}
                    </p>

                    {/* CTA Button */}
                    <div 
                      className="inline-flex items-center space-x-3 px-10 py-5 rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:translate-y-[-4px]"
                      style={{ 
                        backgroundColor: brand.color,
                        boxShadow: `0 8px 30px ${brand.color}70`
                      }}
                    >
                      <span className="font-bold text-white text-lg tracking-wide">Explore Products</span>
                      <ArrowRight size={24} className="text-white group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Animated Decorative Elements */}
                <div 
                  className="absolute -top-20 -right-20 w-52 h-52 rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-1000"
                  style={{ backgroundColor: brand.color }}
                />
                <div 
                  className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-1000"
                  style={{ backgroundColor: brand.color }}
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LightThemeHero;
