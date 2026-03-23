import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';

const ColorPicker = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const groutColors = [
    { name: 'Bright White 44', hex: '#FFFFFF', border: true },
    { name: 'Quarry Red 46', hex: '#8B4513' },
    { name: 'Silk 03', hex: '#F5F5DC' },
    { name: 'Antique 33', hex: '#D2B48C' },
    { name: 'Dusty Rose 54', hex: '#DCAE96' },
    { name: 'Parchment 61', hex: '#F1E9D2' },
    { name: 'Buff 51', hex: '#F0DC82' },
    { name: 'Mocha 35', hex: '#967969' },
    { name: 'Sandstone 34', hex: '#D2B48C' },
    { name: 'Marble Beige 17', hex: '#E8DCC4' },
    { name: 'Midnight Black 22', hex: '#1C1C1C' },
    { name: 'Skyblue 101', hex: '#87CEEB' },
    { name: 'Alpine Blue 108', hex: '#4682B4' },
    { name: 'Burgundy 101', hex: '#800020' },
    { name: 'Silver Shadow 88', hex: '#C0C0C0' },
    { name: 'Slate Grey 91', hex: '#708090' },
    { name: 'Platinum 42', hex: '#E5E4E2' },
    { name: 'Raven 45', hex: '#3A3A3A' },
    { name: 'Mushroom 105', hex: '#C9A88A' },
    { name: 'Sable 05', hex: '#8B7355' },
    { name: 'Hemp 27', hex: '#A89968' },
    { name: 'Ivy 25', hex: '#556B2F' },
    { name: 'Inca Gold 11', hex: '#D4AF37' },
    { name: 'Smoke Grey 89', hex: '#696969' }
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color.name);
    if (onColorSelect) onColorSelect(color);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 mb-4">
          <Palette size={32} className="text-[#E67E22]" />
          <h2 className="text-4xl font-bold text-gray-900">24 Premium Colors</h2>
        </div>
        <p className="text-xl text-gray-600">
          Click on any color to select and view details
        </p>
        {selectedColor && (
          <div className="mt-4 inline-block bg-[#E67E22]/10 px-6 py-3 rounded-full">
            <p className="text-lg font-semibold text-[#E67E22]">
              Selected: {selectedColor}
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {groutColors.map((color, i) => (
          <div 
            key={i} 
            className="group relative cursor-pointer"
            onClick={() => handleColorClick(color)}
          >
            {/* Color swatch */}
            <div 
              className={`aspect-square rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 relative overflow-hidden ${
                selectedColor === color.name ? 'ring-4 ring-[#E67E22] ring-offset-2' : ''
              }`}
              style={{ 
                backgroundColor: color.hex,
                border: color.border ? '2px solid #E5E7EB' : 'none'
              }}
            >
              {/* Check mark for selected */}
              {selectedColor === color.name && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#E67E22] flex items-center justify-center">
                    <Check size={20} className="text-white" />
                  </div>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                <span className="text-white text-xs font-semibold">Select</span>
              </div>
            </div>

            {/* Color name */}
            <p className="text-center mt-2 text-xs font-medium text-gray-700 group-hover:text-[#E67E22] transition-colors line-clamp-2">
              {color.name}
            </p>
          </div>
        ))}
      </div>

      {/* Info note */}
      <div className="mt-8 bg-orange-50 border-l-4 border-[#E67E22] rounded-r-xl p-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Note:</span> Actual colors may vary slightly from screen representation. 
          Request physical samples for accurate color matching.
        </p>
      </div>
    </div>
  );
};

export default ColorPicker;