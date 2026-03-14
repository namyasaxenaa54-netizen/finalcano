import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [stage, setStage] = useState('initial');

  useEffect(() => {
    // Stage 1: Tile pattern appears
    const timer1 = setTimeout(() => {
      setStage('tiles');
    }, 300);

    // Stage 2: Logo fades in with shimmer
    const timer2 = setTimeout(() => {
      setStage('logo');
    }, 1000);

    // Stage 3: Complete and transition out
    const timer3 = setTimeout(() => {
      setStage('complete');
    }, 2200);

    const timer4 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#FAF9F6] via-[#FFFEF7] to-[#F5F5DC] flex items-center justify-center overflow-hidden">
      {/* Animated tile pattern background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${stage === 'initial' ? 'opacity-0 scale-95' : 'opacity-30 scale-100'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558346648-9757f2fa4474)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/80 to-[#FAF9F6]" />
      </div>

      {/* Shimmer overlay effect */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${stage === 'logo' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent animate-shimmer" />
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Actual CanoCrystal Logo */}
        <div className={`transition-all duration-1000 ${
          stage === 'initial' ? 'opacity-0 scale-50 translate-y-10' : 
          stage === 'tiles' ? 'opacity-0 scale-80 translate-y-5' :
          stage === 'logo' ? 'opacity-100 scale-100 translate-y-0' :
          'opacity-0 scale-110 -translate-y-5'
        }`}>
          <div className="relative">
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="w-64 sm:w-80 md:w-96 h-auto"
            />
            {/* Rose gold glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B76E79]/0 via-[#D4AF37]/30 to-[#B76E79]/0 blur-2xl animate-pulse" />
          </div>
        </div>

        {/* Tagline */}
        <p className={`mt-6 text-sm sm:text-base md:text-lg text-[#3A3A3A] font-medium italic transition-all duration-700 ${
          stage === 'logo' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          Engineering Excellence for Modern Living
        </p>

        {/* Premium loading dots */}
        <div className={`flex space-x-2 mt-8 transition-opacity duration-500 ${
          stage === 'complete' ? 'opacity-0' : 'opacity-100'
        }`}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#B76E79] animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
