import React from 'react';
import { ArrowRight, Sparkles, Shield, Award } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Tile texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#FFFEF7] to-[#F5F5DC]">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558346648-9757f2fa4474)',
            backgroundSize: '600px 600px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      {/* Rose gold gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#B76E79]/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#C9A0A0]/20 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Premium badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#B76E79]/10 to-[#C9A0A0]/10 backdrop-blur-sm border border-[#B76E79]/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Sparkles size={18} className="text-[#B76E79]" />
              <span className="text-xs sm:text-sm text-[#2C2C2C] font-semibold">Premium Construction Solutions</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2C2C2C] leading-tight">
              Engineering
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] via-[#C9A0A0] to-[#B76E79]">
                Excellence
              </span>
              for Every Surface
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#3A3A3A] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your spaces with our premium range of tile adhesives, grouts, and furniture solutions. 
              Where quality meets innovation.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-[#B76E79]" />
                <span className="text-sm sm:text-base text-[#3A3A3A] font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={20} className="text-[#B76E79]" />
                <span className="text-sm sm:text-base text-[#3A3A3A] font-medium">15+ Years</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles size={20} className="text-[#B76E79]" />
                <span className="text-sm sm:text-base text-[#3A3A3A] font-medium">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button className="bg-gradient-to-r from-[#B76E79] to-[#C9A0A0] hover:from-[#A05D68] hover:to-[#B88F8F] text-white rounded-full px-8 py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Explore Products
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-[#B76E79] text-[#2C2C2C] hover:bg-[#B76E79]/10 rounded-full px-8 py-6 text-base sm:text-lg transition-all duration-300">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right content - Premium tile showcase */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main tile installation image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1703868669362-562283170216?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Premium Tile Installation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/50 via-transparent to-transparent" />
                
                {/* Floating quality badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#3A3A3A] mb-1">Premium Quality</p>
                      <p className="text-2xl font-bold text-[#2C2C2C]">CanoCrystal</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B76E79] to-[#C9A0A0] flex items-center justify-center shadow-lg">
                      <Sparkles size={28} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating product cards */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float">
                <div className="w-24 h-24 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1629608564457-5d74829a9e14"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[#2C2C2C] font-semibold mt-2 text-center">Tile Adhesive</p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-24 h-24 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/11700775/pexels-photo-11700775.jpeg"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-[#2C2C2C] font-semibold mt-2 text-center">Epoxy Grout</p>
              </div>

              {/* Rose gold accent circles */}
              <div className="absolute -top-8 left-1/2 w-32 h-32 bg-gradient-to-br from-[#B76E79]/30 to-[#C9A0A0]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 right-1/4 w-40 h-40 bg-gradient-to-br from-[#D4AF37]/20 to-[#B76E79]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Brand trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-24">
          {[
            { label: 'Projects Completed', value: '500+' },
            { label: 'Happy Clients', value: '1000+' },
            { label: 'Product Range', value: '50+' },
            { label: 'Years Experience', value: '15+' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#B76E79]/10 hover:shadow-lg transition-all duration-300">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] to-[#C9A0A0]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#3A3A3A] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;