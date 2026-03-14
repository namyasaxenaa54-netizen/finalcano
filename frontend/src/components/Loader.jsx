import React, { useEffect, useState } from 'react';

const PremiumLoader = ({ onComplete }) => {
  const [stage, setStage] = useState('particles');
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('elephant'), 600),
      setTimeout(() => setStage('logo'), 1400),
      setTimeout(() => setStage('brands'), 2000),
      setTimeout(() => setStage('fade'), 2600),
      setTimeout(() => onComplete(), 3000)
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#2C2C2C] via-[#3A3A3A] to-[#2C2C2C] flex items-center justify-center overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              opacity: Math.random() * 0.6 + 0.2
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Particle explosion forming elephant */}
        <div className={`transition-all duration-1000 ${
          stage === 'particles' ? 'opacity-100 scale-100' : 
          stage === 'elephant' ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
        }`}>
          {stage === 'particles' && (
            <div className="relative w-64 h-64 flex items-center justify-center">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#B76E79] to-[#C9A0A0] animate-assemble-particle"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    transform: `rotate(${i * 18}deg) translateX(80px)`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Elephant morphing to logo */}
        <div className={`absolute transition-all duration-1000 ${
          stage === 'elephant' ? 'opacity-100 scale-100 blur-0' :
          stage === 'logo' ? 'opacity-100 scale-110 blur-0' : 
          'opacity-0 scale-50 blur-md'
        }`}>
          {stage === 'elephant' && (
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 200 200" className="filter drop-shadow-2xl">
                <defs>
                  <linearGradient id="elephantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#B76E79', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#C9A0A0', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Simplified elephant shape */}
                <path
                  d="M100,40 L120,60 L130,80 L130,100 L120,120 L100,130 L80,120 L70,100 L70,80 L80,60 Z"
                  fill="url(#elephantGradient)"
                  filter="url(#glow)"
                  className="animate-pulse-slow"
                />
                {/* Tusks */}
                <path d="M85,110 L80,130" stroke="url(#elephantGradient)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M115,110 L120,130" stroke="url(#elephantGradient)" strokeWidth="4" strokeLinecap="round"/>
                {/* Trunk */}
                <path d="M100,130 Q95,150 100,160" stroke="url(#elephantGradient)" strokeWidth="6" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          )}
        </div>

        {/* Main logo reveal */}
        <div className={`transition-all duration-1000 ${
          stage === 'logo' || stage === 'brands' || stage === 'fade' ? 
          'opacity-100 translate-y-0' : 
          'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="w-80 h-auto relative z-10"
            />
            {/* Metallic shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent animate-shimmer-fast" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B76E79]/40 via-[#D4AF37]/40 to-[#B76E79]/40 blur-3xl animate-pulse-slow" />
          </div>
        </div>

        {/* Brand beams */}
        <div className={`mt-8 transition-all duration-700 ${
          stage === 'brands' || stage === 'fade' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="flex items-center space-x-8">
            {[
              { name: 'CanoBond', color: '#C9A0A0', delay: '0ms' },
              { name: 'Blackberry', color: '#8B7E8B', delay: '200ms' },
              { name: 'Furniture', color: '#A68A7A', delay: '400ms' }
            ].map((brand, i) => (
              <div 
                key={i}
                className="flex flex-col items-center animate-fade-in"
                style={{ animationDelay: brand.delay }}
              >
                <div 
                  className="h-1 w-20 rounded-full animate-pulse-slow"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${brand.color}, transparent)`
                  }}
                />
                <span 
                  className="text-xs mt-2 font-semibold tracking-wider"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className={`text-[#D4AF37] text-sm font-light tracking-widest mt-6 transition-all duration-700 ${
          stage === 'brands' || stage === 'fade' ? 'opacity-100' : 'opacity-0'
        }`}>
          GERMAN INTELLIGENCE • UNSHAKEABLE BOND
        </p>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -20px);
            opacity: 0.8;
          }
        }
        
        @keyframes assemble-particle {
          0% {
            transform: rotate(var(--rotation, 0deg)) translateX(200px) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(var(--rotation, 0deg)) translateX(0px) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-particle {
          animation: float-particle var(--duration, 3s) ease-in-out infinite;
        }
        
        .animate-assemble-particle {
          animation: assemble-particle 1s ease-out forwards;
        }
        
        .animate-shimmer-fast {
          animation: shimmer-fast 1.5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PremiumLoader;