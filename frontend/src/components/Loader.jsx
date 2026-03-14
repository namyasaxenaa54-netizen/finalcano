import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [stage, setStage] = useState('particles');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage('beams');
    }, 800);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="relative">
        {/* Crystal particles assembling into logo */}
        <div className={`transition-all duration-700 ${stage === 'particles' ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Logo and brand beams */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${stage === 'beams' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
            CanoCrystal
          </div>
          
          {/* Three light beams */}
          <div className="flex space-x-8 mt-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
              <span className="text-xs mt-2 text-orange-600 font-medium">CanoBond</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '200ms' }} />
              <span className="text-xs mt-2 text-purple-600 font-medium">Blackberry</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent animate-pulse" style={{ animationDelay: '400ms' }} />
              <span className="text-xs mt-2 text-amber-700 font-medium">Furniture</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-8 italic">Engineering Brands for Modern Living</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
