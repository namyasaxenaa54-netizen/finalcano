import React, { useEffect, useState } from 'react';

const SleekLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    // Complete after 2 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-white via-[#FAF9F6] to-[#FFF5EE] flex items-center justify-center">
      {/* Main logo with smooth animation */}
      <div className="relative flex flex-col items-center">
        {/* Logo - Final transparent version */}
        <div className="animate-logo-entrance">
          <img
            src="https://crystal-brands-1.preview.emergentagent.com/logo-transparent.png"
            alt="CanoCrystal"
            className="w-96 h-auto"
          />
        </div>

        {/* Elegant loading bar */}
        <div className="mt-12 w-64">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#E67E22] via-[#8E44AD] to-[#7D6608] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Subtle text */}
        <p className="mt-6 text-sm text-gray-500 font-medium tracking-wider animate-fade-in">
          Loading Excellence...
        </p>
      </div>

      {/* Subtle corner decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E67E22]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#8E44AD]/10 to-transparent rounded-full blur-3xl" />

      <style jsx>{`
        @keyframes logo-entrance {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          60% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-logo-entrance {
          animation: logo-entrance 1.2s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SleekLoader;