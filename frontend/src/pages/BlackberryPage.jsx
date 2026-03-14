import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlackberryPage = () => {
  const navigate = useNavigate();

  const colors = ['White', 'Grey', 'Black', 'Beige', 'Brown', 'Ivory', 'Cream', 'Sandstone', 
                  'Terracotta', 'Silver', 'Gold', 'Bronze', 'Blue', 'Green', 'Red', 'Yellow',
                  'Orange', 'Purple', 'Pink', 'Chocolate', 'Caramel', 'Pearl', 'Coral', 'Turquoise'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4ECF7] to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-700 hover:text-[#8E44AD] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </button>
          <img 
            src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
            alt="CanoCrystal"
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cxuxz24x_epoxy%20mockup.png"
              alt="Blackberry Epoxy Grout"
              className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-6 py-3 bg-[#8E44AD]/10 rounded-full mb-6">
              <span className="text-[#8E44AD] font-bold text-sm">PREMIUM EPOXY GROUT</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Blackberry
            </h1>
            <p className="text-3xl text-[#8E44AD] font-semibold mb-6">
              Premium Solutions for Perfect Finishes
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Professional-grade epoxy grout that's stain-free, chemical-resistant, and available in 24 stunning colors for the perfect aesthetic finish
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Three-component epoxy system',
                'Chemical & stain resistant',
                'Weather resistant formula',
                'Easy to clean & maintain',
                'Non-toxic & eco-friendly',
                '1KG & 5KG packaging'
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle size={24} className="text-[#8E44AD] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-[#8E44AD] hover:bg-[#7D3C98] text-white rounded-full px-8 py-6 text-lg">
              Get Quote
            </Button>
          </div>
        </div>

        {/* 24 Colors Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles size={24} className="text-[#8E44AD]" />
              <h2 className="text-4xl font-bold text-gray-900">24 Beautiful Colors</h2>
            </div>
            <p className="text-xl text-gray-600">
              Choose from our extensive color palette to match your design vision
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {colors.map((color, i) => (
              <div key={i} className="group text-center cursor-pointer">
                <div 
                  className="w-16 h-16 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto mb-2"
                  style={{ 
                    background: color === 'White' ? '#FFFFFF' :
                              color === 'Grey' ? '#808080' :
                              color === 'Black' ? '#000000' :
                              color === 'Beige' ? '#F5F5DC' :
                              color === 'Brown' ? '#8B4513' :
                              color === 'Ivory' ? '#FFFFF0' :
                              color === 'Cream' ? '#FFFDD0' :
                              color === 'Sandstone' ? '#D2B48C' :
                              color === 'Terracotta' ? '#E2725B' :
                              color === 'Silver' ? '#C0C0C0' :
                              color === 'Gold' ? '#FFD700' :
                              color === 'Bronze' ? '#CD7F32' :
                              color === 'Blue' ? '#4169E1' :
                              color === 'Green' ? '#228B22' :
                              color === 'Red' ? '#DC143C' :
                              color === 'Yellow' ? '#FFD700' :
                              color === 'Orange' ? '#FF8C00' :
                              color === 'Purple' ? '#8E44AD' :
                              color === 'Pink' ? '#FF69B4' :
                              color === 'Chocolate' ? '#7B3F00' :
                              color === 'Caramel' ? '#C68E17' :
                              color === 'Pearl' ? '#F0EAD6' :
                              color === 'Coral' ? '#FF7F50' :
                              '#40E0D0',
                    border: color === 'White' || color === 'Ivory' || color === 'Cream' ? '2px solid #E5E7EB' : 'none'
                  }}
                />
                <p className="text-xs font-medium text-gray-700">{color}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackberryPage;