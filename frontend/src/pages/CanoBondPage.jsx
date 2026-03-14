import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const CanoBondPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      code: 'CT-333',
      name: 'Polymer Grey Tile Adhesive',
      image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/189kmljp_image.png',
      features: ['Indoor/Outdoor', 'C1T Standard', 'All tiles']
    },
    {
      code: 'VT-777',
      name: 'High Performance Vitrified',
      image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cecapv8p_image.png',
      features: ['C2TE Standard', 'Vitrified tiles', 'Pool safe']
    },
    {
      code: 'EWT-888',
      name: 'Ultra Flexible Large Format',
      image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/b34ewu7t_image.png',
      features: ['S2 Flexibility', 'Large tiles', 'Facade']
    },
    {
      code: 'IWT-666',
      name: 'Thin Set Premium',
      image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/qvln1zeb_image.png',
      features: ['Wet areas', 'Tile-on-tile', 'Pool safe']
    },
    {
      code: 'CVT-444',
      name: 'Anti-Skid Grey Adhesive',
      image: 'https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/4w0y2pe4_image.png',
      features: ['Anti-skid', 'C2T Standard', 'Top-to-bottom']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5EE] to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-700 hover:text-[#E67E22] transition-colors"
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
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-[#E67E22]/10 rounded-full mb-6">
            <span className="text-[#E67E22] font-bold text-sm">PREMIUM TILE ADHESIVES</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            CanoBond
          </h1>
          <p className="text-3xl text-[#E67E22] font-semibold mb-6">
            German Intelligence. Unshakeable Bond.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium polymer-modified tile adhesives engineered with German precision for perfect bonding across all tile types
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'ISO 9001:2015', icon: Shield },
            { label: 'C2TES2 Certified', icon: CheckCircle },
            { label: '6 Products', icon: Shield },
            { label: '24 Colors', icon: CheckCircle }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow text-center">
                <Icon size={32} className="text-[#E67E22] mx-auto mb-3" />
                <p className="font-bold text-gray-900">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Products Grid */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.code} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#E67E22] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {product.code}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle size={16} className="text-[#E67E22]" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-[#E67E22] hover:bg-[#D35400] text-white rounded-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanoBondPage;