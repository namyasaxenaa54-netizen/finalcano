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
      logo: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/x4i589o8_Print_Transparent%20%281%29%20copy.pdf'
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

        {/* THREE BRAND CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              onClick={() => navigate(`/${brand.id}`)}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Card Container */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div 
                    className="absolute inset-0 opacity-90 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${brand.color}95, ${brand.color}dd)` }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  {/* Top: Logo Badge */}
                  <div className="flex justify-between items-start">
                    {brand.logo ? (
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg p-3"
                        style={{ backgroundColor: 'white' }}
                      >
                        <img 
                          src={brand.logo} 
                          alt={`${brand.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                        style={{ backgroundColor: brand.lightColor }}
                      >
                        {brand.icon}
                      </div>
                    )}
                    <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                      <span className="text-white text-xs font-semibold">{brand.tagline}</span>
                    </div>
                  </div>

                  {/* Bottom: Brand Info */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {brand.name}
                    </h2>
                    <p className="text-white/90 text-lg mb-6">
                      {brand.subtitle}
                    </p>

                    {/* Click indicator */}
                    <div className="flex items-center space-x-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                      <span className="font-semibold">Explore Products</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Decorative corner */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${brand.lightColor}, transparent)`,
                    borderRadius: '0 24px 0 100%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Click any brand to explore our complete product range</p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E67E22] via-[#8E44AD] to-[#7D6608] rounded-full mx-auto" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default LightThemeHero;