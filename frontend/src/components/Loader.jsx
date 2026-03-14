import React, { useEffect, useState } from 'react';

const CinematicLoader = ({ onComplete }) => {
  const [stage, setStage] = useState('fade-in');
  
  useEffect(() => {
    const timeline = [
      { time: 500, stage: 'particles' },
      { time: 1200, stage: 'liquid' },
      { time: 2000, stage: 'logo-reveal' },
      { time: 2800, stage: 'glass-shatter' },
      { time: 3400, stage: 'complete' },
      { time: 3800, action: onComplete }
    ];
    
    const timers = timeline.map(({ time, stage, action }) => 
      setTimeout(() => {
        if (stage) setStage(stage);
        if (action) action();
      }, time)
    );
    
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80" />
      
      {/* Liquid metal background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${stage === 'liquid' || stage === 'logo-reveal' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2C2C2C] to-[#0a0a0a]">
          {/* Animated liquid blobs */}
          <div className="liquid-blob blob-1" />
          <div className="liquid-blob blob-2" />
          <div className="liquid-blob blob-3" />
        </div>
      </div>

      {/* Floating particles field */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${stage === 'particles' || stage === 'liquid' ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="particle-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main logo container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Glass morphism container */}
        <div className={`relative transition-all duration-1000 ${
          stage === 'fade-in' ? 'opacity-0 scale-50' :
          stage === 'particles' ? 'opacity-0 scale-70' :
          stage === 'liquid' ? 'opacity-100 scale-90' :
          stage === 'logo-reveal' ? 'opacity-100 scale-100' :
          stage === 'glass-shatter' ? 'opacity-100 scale-110' :
          'opacity-0 scale-120'
        }`}>
          {/* Glowing backdrop */}
          <div className="absolute inset-0 -m-32 bg-gradient-to-r from-[#D4AF37]/20 via-[#B76E79]/20 to-[#D4AF37]/20 blur-3xl animate-pulse-glow" />
          
          {/* Logo with cinematic reveal */}
          <div className="relative">
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="w-[500px] h-auto relative z-10"
              style={{
                filter: stage === 'logo-reveal' || stage === 'glass-shatter' ? 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.5))' : 'none'
              }}
            />
            
            {/* Glass shatter effect overlay */}
            {stage === 'glass-shatter' && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="glass-shard"
                    style={{
                      left: `${30 + (i % 4) * 15}%`,
                      top: `${20 + Math.floor(i / 4) * 20}%`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>
            )}
            
            {/* Liquid metal ripple effect */}
            {stage === 'liquid' && (
              <div className="absolute inset-0 -m-20">
                <div className="ripple-ring ring-1" />
                <div className="ripple-ring ring-2" />
                <div className="ripple-ring ring-3" />
              </div>
            )}
            
            {/* Metallic shimmer scan */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent transition-opacity ${
              stage === 'logo-reveal' ? 'opacity-100 animate-shimmer-scan' : 'opacity-0'
            }`} />
          </div>

          {/* Tagline with typewriter effect */}
          <div className={`mt-12 text-center transition-all duration-1000 ${
            stage === 'logo-reveal' || stage === 'glass-shatter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-[#D4AF37] text-xl font-light tracking-[0.3em] uppercase">
              {stage === 'logo-reveal' && <span className="typewriter">Engineering Excellence</span>}
              {stage === 'glass-shatter' && <span>Engineering Excellence</span>}
            </p>
          </div>

          {/* Brand indicators */}
          <div className={`mt-8 flex justify-center space-x-8 transition-all duration-700 ${
            stage === 'glass-shatter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {[
              { name: 'CanoBond', gradient: 'from-[#C9A0A0] to-[#B76E79]' },
              { name: 'Blackberry', gradient: 'from-[#8B7E8B] to-[#A68A7A]' },
              { name: 'Furniture', gradient: 'from-[#A68A7A] to-[#8B7E8B]' }
            ].map((brand, i) => (
              <div 
                key={i}
                className="flex flex-col items-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`h-0.5 w-16 bg-gradient-to-r ${brand.gradient} rounded-full`} />
                <span className={`text-xs mt-2 font-medium bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent tracking-wider`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64">
        <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#C9A0A0] loading-progress" />
        </div>
      </div>

      <style jsx>{`
        /* Liquid blobs */
        .liquid-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: liquid-morph 8s ease-in-out infinite;
        }
        
        .blob-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }
        
        .blob-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(183, 110, 121, 0.15), transparent);
          bottom: -10%;
          right: -10%;
          animation-delay: 2s;
        }
        
        .blob-3 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(201, 160, 160, 0.1), transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 4s;
        }

        @keyframes liquid-morph {
          0%, 100% { 
            transform: scale(1) translate(0, 0) rotate(0deg);
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          33% { 
            transform: scale(1.1) translate(50px, -30px) rotate(120deg);
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          66% { 
            transform: scale(0.9) translate(-30px, 50px) rotate(240deg);
            border-radius: 50% 50% 30% 70% / 50% 70% 30% 60%;
          }
        }

        /* Particles */
        .particle-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(135deg, #D4AF37, #B76E79);
          border-radius: 50%;
          animation: particle-float 5s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -30px) scale(1.5);
            opacity: 0.8;
          }
          50% {
            transform: translate(-20px, 40px) scale(0.8);
            opacity: 0.5;
          }
          75% {
            transform: translate(40px, 20px) scale(1.2);
            opacity: 0.7;
          }
        }

        /* Pulse glow */
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        /* Ripple rings */
        .ripple-ring {
          position: absolute;
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          animation: ripple-expand 2s ease-out infinite;
        }
        
        .ring-1 {
          inset: 0;
          animation-delay: 0s;
        }
        
        .ring-2 {
          inset: -20px;
          animation-delay: 0.6s;
        }
        
        .ring-3 {
          inset: -40px;
          animation-delay: 1.2s;
        }

        @keyframes ripple-expand {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        /* Glass shatter */
        .glass-shard {
          position: absolute;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          animation: shatter-fly 0.8s ease-out forwards;
          transform-origin: center;
        }

        @keyframes shatter-fly {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(var(--random-x, 50) * 1px), calc(var(--random-y, 50) * 1px)) rotate(360deg) scale(0);
            opacity: 0;
          }
        }

        /* Shimmer scan */
        @keyframes shimmer-scan {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        
        .animate-shimmer-scan {
          animation: shimmer-scan 2s ease-in-out 1;
        }

        /* Typewriter */
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 1.5s steps(20) 1 normal both;
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Fade in up */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Loading progress */
        .loading-progress {
          width: 0;
          animation: load-progress 3.5s ease-out forwards;
        }

        @keyframes load-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default CinematicLoader;