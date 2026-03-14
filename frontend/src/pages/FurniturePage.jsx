import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sofa, Armchair, Table } from 'lucide-react';
import { Button } from '../components/ui/button';

const FurniturePage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Living Room',
      icon: Sofa,
      items: [
        { name: 'Luxury Sofas', image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6', price: 'From ₹45,000' },
        { name: 'Premium Sectionals', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc', price: 'From ₹65,000' },
        { name: 'Designer Coffee Tables', image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7', price: 'From ₹18,000' }
      ]
    },
    {
      name: 'Dining',
      icon: Table,
      items: [
        { name: 'Elegant Dining Tables', image: 'https://images.unsplash.com/photo-1639173925921-5d5fd027713c', price: 'From ₹35,000' },
        { name: 'Designer Chairs', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', price: 'From ₹8,500' },
        { name: 'Bar Units', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03', price: 'From ₹28,000' }
      ]
    },
    {
      name: 'Bedroom',
      icon: Armchair,
      items: [
        { name: 'Luxury Beds', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85', price: 'From ₹42,000' },
        { name: 'Wardrobes', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2', price: 'From ₹55,000' },
        { name: 'Side Tables', image: 'https://images.unsplash.com/photo-1551516595-56d5c1b6f3e9', price: 'From ₹12,000' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9E6] to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-700 hover:text-[#7D6608] transition-colors"
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
          <div className="inline-block px-6 py-3 bg-[#7D6608]/10 rounded-full mb-6">
            <span className="text-[#7D6608] font-bold text-sm">LUXURY FURNITURE</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Furniture Collection
          </h1>
          <p className="text-3xl text-[#7D6608] font-semibold mb-6">
            Contemporary Elegance for Modern Homes
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handcrafted premium furniture that combines timeless design with exceptional comfort
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <div key={catIndex} className="mb-20">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#7D6608]/10 flex items-center justify-center">
                  <Icon size={24} className="text-[#7D6608]" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">{category.name}</h2>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((item, i) => (
                  <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-80">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-[#7D6608] font-semibold text-lg">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#7D6608]/10 to-[#7D6608]/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Visit our showroom or schedule a consultation with our design experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#7D6608] hover:bg-[#6B5706] text-white rounded-full px-8 py-6 text-lg">
              Schedule Visit
            </Button>
            <Button variant="outline" className="border-2 border-[#7D6608] text-[#7D6608] hover:bg-[#7D6608]/10 rounded-full px-8 py-6 text-lg">
              Get Catalogue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;