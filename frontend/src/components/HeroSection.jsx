import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield } from 'lucide-react';
import { Button } from './ui/button';

const PremiumHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* MAIN HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#B76E79]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Premium grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          {/* CanoCrystal Logo - Without Background */}
          <div className="mb-12 animate-fade-in">
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="h-24 w-auto mx-auto drop-shadow-2xl"
              style={{ 
                filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.3))',
                mixBlendMode: 'screen'
              }}
            />
          </div>

          {/* Main Headline */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-3">Where Strength</span>
              <span className="block bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                Meets Elegance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Premium construction chemicals and luxury furniture crafted with German precision and Indian excellence
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Shield, text: 'ISO 9001:2015', color: '#D4AF37' },
              { icon: Sparkles, text: 'German Engineering', color: '#B76E79' },
              { icon: Shield, text: '15+ Years Trust', color: '#C9A0A0' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i}
                  className="group flex items-center space-x-3 px-6 py-4 rounded-full border-2 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-opacity-100 cursor-pointer bg-white/5"
                  style={{ 
                    borderColor: `${item.color}40`,
                    background: `linear-gradient(135deg, ${item.color}10, transparent)`
                  }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-full px-10 py-8 text-xl font-bold shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Explore Our Brands
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
            
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black rounded-full px-10 py-8 text-xl font-bold backdrop-blur-xl transition-all duration-300 hover:scale-105">
              View Products
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                <div className="w-1.5 h-3 rounded-full bg-[#D4AF37] animate-scroll" />
              </div>
              <span className="text-white/50 text-xs tracking-widest">SCROLL TO EXPLORE</span>
            </div>
          </div>
        </div>

        {/* Parallax floating elements */}
        <div 
          className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#D4AF37] animate-float"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-[#B76E79] animate-float"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, animationDelay: '1s' }}
        />
      </section>

      {/* CANOBOND SECTION */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-[#FFFEF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-5 py-2 rounded-full text-sm font-bold bg-[#C9A0A0]/10 text-[#2C2C2C] border border-[#C9A0A0]/30">
                  PREMIUM ADHESIVES
                </span>
              </div>
              
              <h2 className="text-6xl font-bold text-[#2C2C2C]">
                CanoBond
              </h2>
              
              <p className="text-2xl text-[#B76E79] font-semibold">
                German Intelligence. Unshakeable Bond.
              </p>
              
              <p className="text-xl text-[#3A3A3A] leading-relaxed">
                Premium polymer-modified tile adhesives engineered for perfection. From ceramic to vitrified, small format to large format - we bond them all with German precision.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {['ISO 9001:2015', 'C2TES2 Certified', '6 Products', '24 Colors'].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-[#C9A0A0]/20 hover:shadow-lg transition-shadow">
                    <div className="w-2 h-2 rounded-full bg-[#C9A0A0]" />
                    <span className="font-semibold text-[#2C2C2C]">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-[#C9A0A0] to-[#B76E79] text-white rounded-full px-8 py-6 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Explore CanoBond Products
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>

            {/* Right: Product Showcase */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { img: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/189kmljp_image.png', code: 'CT-333' },
                  { img: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cecapv8p_image.png', code: 'VT-777' },
                  { img: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/b34ewu7t_image.png', code: 'EWT-888' },
                  { img: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/qvln1zeb_image.png', code: 'IWT-666' }
                ].map((product, i) => (
                  <div 
                    key={i} 
                    className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <img src={product.img} alt={product.code} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {product.code}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A0A0]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* BLACKBERRY SECTION */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#2C2C2C] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Product Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cxuxz24x_epoxy%20mockup.png"
                  alt="Blackberry Epoxy Grout"
                  className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#8B7E8B]/30 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-block">
                <span className="px-5 py-2 rounded-full text-sm font-bold bg-[#8B7E8B]/20 text-white border border-[#8B7E8B]/50">
                  PREMIUM FINISHES
                </span>
              </div>
              
              <h2 className="text-6xl font-bold text-white">
                Blackberry
              </h2>
              
              <p className="text-2xl text-[#A68A7A] font-semibold">
                Premium Solutions for Perfect Finishes
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Professional-grade epoxy grouts and chemical solutions. Stain-free, chemical-resistant, and available in 24 stunning colors for the perfect aesthetic finish.
              </p>

              <div className="space-y-4">
                {['24 Color Options', 'Stain Free Formula', 'Chemical Resistant', 'Easy Application'].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Sparkles size={24} className="text-[#8B7E8B]" />
                    <span className="text-white font-semibold text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-[#8B7E8B] to-[#A68A7A] text-white rounded-full px-8 py-6 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Explore Blackberry Range
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FURNITURE SECTION */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#FAF9F6] via-white to-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-bold bg-[#A68A7A]/10 text-[#2C2C2C] border border-[#A68A7A]/30 mb-6">
              LUXURY LIVING
            </span>
            <h2 className="text-6xl font-bold text-[#2C2C2C] mb-4">
              Furniture Collection
            </h2>
            <p className="text-2xl text-[#A68A7A] font-semibold">
              Contemporary Elegance for Modern Homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6', title: 'Luxury Sofas', desc: 'Premium comfort' },
              { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', title: 'Designer Chairs', desc: 'Elegant seating' },
              { img: 'https://images.unsplash.com/photo-1639173925921-5d5fd027713c', title: 'Dining Tables', desc: 'Statement pieces' }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
                <div className="relative h-96">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-[#A68A7A] to-[#8B7E8B] text-white rounded-full px-8 py-6 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              View Full Collection
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default PremiumHeroSection;