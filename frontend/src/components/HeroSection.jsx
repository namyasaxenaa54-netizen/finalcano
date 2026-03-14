import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Shield, Award, Play } from 'lucide-react';
import { Button } from './ui/button';
import { realCanoBondProducts } from '../mockData';

const UniqueHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProduct, setSelectedProduct] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedProduct((prev) => (prev + 1) % realCanoBondProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const productColors = ['#C9A0A0', '#8B7E8B', '#A68A7A', '#B76E79', '#D4AF37'];

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-[#FAF9F6] via-[#FFFEF7] to-[#F5F5DC]"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl transition-transform duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(215, 175, 55, 0.3) 0%, transparent 70%)`,
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl transition-transform duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(183, 110, 121, 0.3) 0%, transparent 70%)`,
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
          }}
        />
      </div>

      {/* Subtle tile texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558346648-9757f2fa4474)',
          backgroundSize: '600px 600px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* LEFT COLUMN - Main Content (Spans 7 columns on desktop) */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {/* Premium Badge with Parallax */}
            <div 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#2C2C2C]/10 via-[#D4AF37]/10 to-[#2C2C2C]/10 backdrop-blur-xl border border-[#D4AF37]/30 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group"
              style={{
                transform: `translateY(${mousePosition.y * 10}px)`
              }}
            >
              <Sparkles size={20} className="text-[#D4AF37] group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-sm font-bold bg-gradient-to-r from-[#2C2C2C] via-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
                GERMAN ENGINEERING • ISO CERTIFIED
              </span>
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            </div>

            {/* Main Headline - Diagonal Split */}
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                <span className="block text-[#2C2C2C] mb-2 hover:tracking-wider transition-all duration-300">
                  Engineered
                </span>
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#C9A0A0] relative"
                  style={{
                    transform: `skew(-${mousePosition.x * 2}deg, 0deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  Excellence
                  {/* Metallic shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slow pointer-events-none" />
                </span>
                <span className="block text-[#2C2C2C] mt-2 hover:tracking-wider transition-all duration-300">
                  for Every Bond
                </span>
              </h1>
              
              {/* Decorative line with animation */}
              <div className="mt-6 flex items-center space-x-4">
                <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full animate-pulse" />
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#B76E79] to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>

            {/* Subheading with typing effect appearance */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#3A3A3A] leading-relaxed max-w-2xl font-light">
              Transform your spaces with our{' '}
              <span className="font-semibold text-[#B76E79]">premium range</span> of tile adhesives, 
              epoxy grouts, and construction solutions.{' '}
              <span className="italic text-[#D4AF37]">Where innovation meets perfection.</span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Shield, text: 'ISO 9001:2015', color: '#C9A0A0' },
                { icon: Award, text: '15+ Years', color: '#B76E79' },
                { icon: Sparkles, text: '24 Colors', color: '#D4AF37' }
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={i}
                    className="group flex items-center space-x-2 px-5 py-3 rounded-full border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    style={{ 
                      borderColor: `${feature.color}40`,
                      background: `linear-gradient(135deg, ${feature.color}10, transparent)`
                    }}
                  >
                    <Icon size={18} style={{ color: feature.color }} className="group-hover:rotate-12 transition-transform" />
                    <span className="text-sm font-semibold text-[#2C2C2C]">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#C9A0A0] text-white rounded-full px-8 py-7 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight size={22} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              
              <Button 
                variant="outline" 
                className="group border-2 border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white rounded-full px-8 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN - Interactive Product Showcase (Spans 5 columns) */}
          <div className="col-span-12 lg:col-span-5 relative">
            {/* 3D Floating Product Cards */}
            <div className="relative h-[600px] flex items-center justify-center">
              {realCanoBondProducts.slice(0, 5).map((product, index) => {
                const isActive = index === selectedProduct;
                const angle = (index - selectedProduct) * 15;
                const distance = isActive ? 0 : 100 + Math.abs(index - selectedProduct) * 40;
                const scale = isActive ? 1 : 0.7 - Math.abs(index - selectedProduct) * 0.1;
                const opacity = isActive ? 1 : 0.4;
                
                return (
                  <div
                    key={product.id}
                    className="absolute transition-all duration-700 cursor-pointer group"
                    style={{
                      transform: `
                        rotate(${angle}deg) 
                        translateY(${distance}px) 
                        scale(${scale})
                        translateZ(${isActive ? '50px' : '0px'})
                      `,
                      opacity,
                      zIndex: isActive ? 10 : 5 - Math.abs(index - selectedProduct)
                    }}
                    onClick={() => setSelectedProduct(index)}
                  >
                    {/* Product Card with 3D Tilt Effect */}
                    <div 
                      className="relative w-80 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-[#D4AF37]/20 overflow-hidden"
                      style={{
                        transform: isActive ? `
                          perspective(1000px) 
                          rotateX(${mousePosition.y * 10 - 5}deg) 
                          rotateY(${mousePosition.x * 10 - 5}deg)
                        ` : 'none',
                        transition: 'transform 0.1s ease-out'
                      }}
                    >
                      {/* Gradient overlay */}
                      <div 
                        className="absolute inset-0 opacity-10"
                        style={{
                          background: `linear-gradient(135deg, ${productColors[index]}, transparent)`
                        }}
                      />
                      
                      {/* Product Code Badge */}
                      <div 
                        className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg"
                        style={{ backgroundColor: productColors[index] }}
                      >
                        {product.code}
                      </div>
                      
                      {/* Product Image */}
                      <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      
                      {/* Product Info */}
                      <div className="relative z-10">
                        <div className="text-xs text-[#3A3A3A] mb-2 font-semibold uppercase tracking-wider">
                          {product.category}
                        </div>
                        <h3 className="text-xl font-bold text-[#2C2C2C] mb-2 leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[#3A3A3A] line-clamp-2 mb-4">
                          {product.description}
                        </p>
                        
                        {/* Key Features */}
                        {isActive && (
                          <div className="flex flex-wrap gap-2 animate-fade-in">
                            {product.features.slice(0, 3).map((feature, i) => (
                              <span 
                                key={i}
                                className="text-xs px-3 py-1 rounded-full text-white"
                                style={{ backgroundColor: productColors[index] }}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Product Navigation Dots */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-3">
              {realCanoBondProducts.slice(0, 5).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProduct(index)}
                  className="group transition-all duration-300"
                >
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === selectedProduct ? 'w-12 bg-gradient-to-r from-[#D4AF37] to-[#B76E79]' : 'w-2 bg-[#3A3A3A]/30 group-hover:bg-[#B76E79]'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar - Diagonal Design */}
        <div className="mt-16 relative">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C] to-[#3A3A3A] rounded-3xl"
            style={{ transform: 'skewY(-1deg)' }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 p-8 sm:p-12">
            {[
              { value: '500+', label: 'Projects', icon: '🏗️', delay: '0ms' },
              { value: '1000+', label: 'Clients', icon: '🤝', delay: '100ms' },
              { value: '50+', label: 'Products', icon: '📦', delay: '200ms' },
              { value: '15+', label: 'Years', icon: '⏱️', delay: '300ms' }
            ].map((stat, i) => (
              <div 
                key={i}
                className="text-center group cursor-pointer animate-fade-in"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#C9A0A0] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm text-[#FAF9F6]/70 font-medium flex items-center justify-center space-x-2">
                  <span>{stat.icon}</span>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default UniqueHeroSection;