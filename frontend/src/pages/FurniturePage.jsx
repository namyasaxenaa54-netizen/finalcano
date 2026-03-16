import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sofa, ChefHat, Bed, Armchair, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { furnitureProducts } from '../mockData';

const FurniturePage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Living Room', icon: Sofa, count: 5 },
    { name: 'Bedroom', icon: Bed, count: 4 },
    { name: 'Dining', icon: ChefHat, count: 3 },
    { name: 'Seating', icon: Armchair, count: 6 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9E6] via-white to-[#FDFBF7]">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-[#7D6608] transition-colors"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Back to Home</span>
          </button>
          <img 
            src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
            alt="CanoCrystal"
            className="h-10 sm:h-12 w-auto"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-[#7D6608]/10 rounded-full mb-4 md:mb-6">
              <span className="text-[#7D6608] font-bold text-xs sm:text-sm">LUXURY FURNITURE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Furniture Collection
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#7D6608] font-semibold mb-4 md:mb-6 px-4">
              Luxury Living Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Contemporary furniture designed for modern living with elegance and comfort
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center">
                  <Icon size={24} className="text-[#7D6608] mx-auto mb-2 md:hidden" />
                  <Icon size={32} className="text-[#7D6608] mx-auto mb-3 hidden md:block" />
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1">{cat.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{cat.count} Products</p>
                </div>
              );
            })}
          </div>

          {/* Featured Products */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center px-4">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {furnitureProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#7D6608] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    {product.category}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#7D6608] font-bold text-sm md:text-base">{product.price}</p>
                    <Button className="bg-[#7D6608] hover:bg-[#5A4A06] text-white rounded-full text-xs md:text-sm px-4 py-2">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <section className="mt-16 md:mt-20 bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Why Choose Our Furniture?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Premium Quality', desc: 'Handcrafted with finest materials and attention to detail' },
                { title: 'Modern Designs', desc: 'Contemporary styles that complement any interior' },
                { title: 'Durability', desc: 'Built to last with robust construction and quality finishes' },
                { title: 'Customization', desc: 'Tailor-made solutions to fit your unique requirements' },
                { title: 'Warranty', desc: 'Comprehensive warranty coverage for peace of mind' },
                { title: 'Installation', desc: 'Professional installation service by expert team' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#7D6608] to-[#5A4A06] flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CheckCircle size={20} className="text-white sm:hidden" />
                    <CheckCircle size={24} className="text-white hidden sm:block md:hidden" />
                    <CheckCircle size={32} className="text-white hidden md:block" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-r from-[#7D6608] to-[#5A4A06] rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
                Transform Your Space Today
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Visit our showroom or schedule a consultation with our design experts
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button className="bg-white text-[#7D6608] hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                  Schedule Visit
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default FurniturePage;