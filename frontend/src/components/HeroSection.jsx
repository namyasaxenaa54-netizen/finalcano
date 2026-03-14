import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const LuxuryBrandSelector = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const brands = [
    {
      id: 'canobond',
      name: 'CanoBond',
      tagline: 'German Intelligence',
      subtitle: 'Tile Adhesive Excellence',
      description: 'Premium polymer-modified adhesives engineered for perfect bonding',
      logo: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/yusg4lmi_Print%20%281%29.pdf',
      productImage: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/189kmljp_image.png',
      color: {
        primary: '#C9A0A0',
        gradient: 'from-[#C9A0A0]/20 via-[#B76E79]/20 to-[#C9A0A0]/20',
        overlay: 'from-[#C9A0A0]/80 to-[#B76E79]/80'
      },
      features: ['ISO 9001:2015', 'C2TES2 Certified', '15+ Products']
    },
    {
      id: 'blackberry',
      name: 'Blackberry',
      tagline: 'Premium Finishes',
      subtitle: 'Chemical Solutions',
      description: 'Professional-grade chemical solutions for flawless tile installations',
      logo: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/unoson20_black%20berry%20bold.pdf',
      productImage: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cxuxz24x_epoxy%20mockup.png',
      color: {
        primary: '#8B7E8B',
        gradient: 'from-[#8B7E8B]/20 via-[#A68A7A]/20 to-[#8B7E8B]/20',
        overlay: 'from-[#8B7E8B]/80 to-[#A68A7A]/80'
      },
      features: ['24 Colors', 'Epoxy Grout', 'Stain Free']
    },
    {
      id: 'furniture',
      name: 'Furniture',
      tagline: 'Luxury Living',
      subtitle: 'Contemporary Collection',
      description: 'Handcrafted furniture pieces that redefine modern elegance',
      logo: null,
      productImage: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6',
      color: {
        primary: '#A68A7A',
        gradient: 'from-[#A68A7A]/20 via-[#8B7E8B]/20 to-[#A68A7A]/20',
        overlay: 'from-[#A68A7A]/80 to-[#8B7E8B]/80'
      },
      features: ['Premium Wood', 'Custom Design', 'Lifetime Warranty']
    }
  ];

  const handleSectionClick = (brandId) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSection(activeSection === brandId ? null : brandId);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16">
      {/* CanoCrystal Logo - Floating Top */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
        <img 
          src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
          alt="CanoCrystal"
          className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Main Title */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-30 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-3">
          <span className="bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] bg-clip-text text-transparent">
            Choose Your Excellence
          </span>
        </h1>
        <p className="text-white/60 text-lg tracking-widest">SELECT A BRAND TO EXPLORE</p>
      </div>

      {/* 3-Section Split Screen */}
      <div className="relative w-full h-screen flex">
        {brands.map((brand, index) => {
          const isActive = activeSection === brand.id;
          const isInactive = activeSection && activeSection !== brand.id;
          
          return (
            <div
              key={brand.id}
              className={`relative transition-all duration-700 ease-out cursor-pointer overflow-hidden ${
                isActive ? 'flex-[2]' : isInactive ? 'flex-[0.3]' : 'flex-1'
              }`}
              onClick={() => handleSectionClick(brand.id)}
              onMouseEnter={() => !activeSection && setActiveSection(brand.id)}
              onMouseLeave={() => !isTransitioning && setActiveSection(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={brand.productImage}
                  alt={brand.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isActive ? 'scale-100' : 'scale-110 grayscale'
                  }`}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isActive ? brand.color.overlay : 'from-black/70 to-black/50'
                } transition-all duration-700`} />
              </div>

              {/* Animated Grid Pattern */}
              <div className={`absolute inset-0 opacity-10 transition-opacity duration-700 ${
                isActive ? 'opacity-20' : 'opacity-5'
              }`}>
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(${brand.color.primary}40 1px, transparent 1px),
                      linear-gradient(90deg, ${brand.color.primary}40 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                  }}
                />
              </div>

              {/* Content */}
              <div className={`relative z-10 h-full flex flex-col justify-center transition-all duration-700 ${
                isActive ? 'px-16' : 'px-8'
              }`}>
                {/* Vertical Brand Name (when inactive) */}
                {!isActive && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-8">
                    <div className="writing-mode-vertical text-6xl font-bold text-white tracking-wider">
                      {brand.name}
                    </div>
                    <div 
                      className="w-1 h-24 rounded-full"
                      style={{ backgroundColor: brand.color.primary }}
                    />
                  </div>
                )}

                {/* Expanded Content (when active) */}
                {isActive && (
                  <div className="max-w-2xl animate-fade-in-scale">
                    {/* Logo Badge */}
                    <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
                      <Sparkles size={20} className="text-[#D4AF37]" />
                      <span className="text-white/90 font-semibold tracking-wide">
                        {brand.tagline}
                      </span>
                    </div>

                    {/* Brand Name */}
                    <h2 className="text-7xl font-bold text-white mb-4 tracking-tight">
                      {brand.name}
                    </h2>

                    {/* Subtitle */}
                    <p 
                      className="text-3xl font-light mb-6"
                      style={{ color: brand.color.primary }}
                    >
                      {brand.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                      {brand.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-4 mb-10">
                      {brand.features.map((feature, i) => (
                        <div 
                          key={i}
                          className="px-5 py-2 rounded-full backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium"
                          style={{ 
                            background: `linear-gradient(135deg, ${brand.color.primary}20, transparent)` 
                          }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="group relative overflow-hidden text-white rounded-full px-8 py-7 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                      style={{ 
                        background: `linear-gradient(135deg, ${brand.color.primary}, ${brand.color.primary}dd)` 
                      }}
                    >
                      <span className="relative z-10 flex items-center">
                        Explore {brand.name}
                        <ArrowRight size={22} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                    </Button>

                    {/* Decorative Elements */}
                    <div className="mt-12 flex items-center space-x-4">
                      <div 
                        className="h-1 w-24 rounded-full animate-pulse"
                        style={{ backgroundColor: brand.color.primary }}
                      />
                      <div className="text-white/40 text-sm tracking-widest">SCROLL TO DISCOVER MORE</div>
                    </div>
                  </div>
                )}

                {/* Hover Indicator */}
                {!isActive && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex flex-col items-center space-y-3">
                      <div 
                        className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: brand.color.primary }}
                      >
                        <ArrowRight size={24} style={{ color: brand.color.primary }} />
                      </div>
                      <span className="text-white/60 text-xs tracking-widest">CLICK TO EXPLORE</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Divider Line */}
              {index < brands.length - 1 && (
                <div 
                  className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-white/50 animate-scroll-down" />
          </div>
          <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
        }

        @keyframes scroll-down {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LuxuryBrandSelector;