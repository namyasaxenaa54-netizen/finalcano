import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Factory, Award, Globe, Users, Target, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import API from '../utils/api';

const AboutPage = () => {
  const navigate = useNavigate();
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCompanyInfo();
  }, []);

  const loadCompanyInfo = async () => {
    try {
      const data = await API.getCompanyInfo();
      if (data) {
        setCompanyInfo(data);
      }
    } catch (error) {
      console.error('Failed to load company info:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!companyInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Company information not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBF7] via-white to-[#FFF9F0]">
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
          <button
            onClick={() => navigate('/')} 
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Return to homepage"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="h-12 w-auto"
            />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-[#E67E22] via-[#8E44AD] to-[#7D6608] bg-clip-text text-transparent">CanoCrystal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering Excellence for Modern Living
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                CanoCrystal Industries stands at the forefront of construction chemicals and premium furniture manufacturing. Founded with a vision to deliver excellence, we have grown into a trusted name across India.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With over 10+ manufacturing plants and 300+ trained personnel, we serve thousands of customers nationwide, providing innovative solutions that meet the highest industry standards.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to quality, innovation, and customer satisfaction drives everything we do. From tile adhesives to luxury furniture, every product bears the mark of our dedication to excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E67E22]/10 to-[#8E44AD]/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <Factory size={48} className="text-[#E67E22] mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
                  <p className="text-gray-600">Manufacturing Plants</p>
                </div>
                <div className="text-center">
                  <Users size={48} className="text-[#8E44AD] mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">300+</h3>
                  <p className="text-gray-600">Trained Personnel</p>
                </div>
                <div className="text-center">
                  <Award size={48} className="text-[#7D6608] mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">ISO</h3>
                  <p className="text-gray-600">Certified</p>
                </div>
                <div className="text-center">
                  <Globe size={48} className="text-[#E67E22] mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">PAN</h3>
                  <p className="text-gray-600">India Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E67E22] to-[#D35400] flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the most trusted and innovative provider of construction chemicals and premium furniture solutions, setting new standards in quality and design across India and beyond.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8E44AD] to-[#7D3C98] flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To deliver premium quality products through continuous innovation, sustainable practices, and unwavering commitment to customer satisfaction, while empowering our workforce and contributing to India's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => navigate('/canobond')}
              className="cursor-pointer bg-gradient-to-br from-[#FFF5EE] to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 mb-4 mx-auto bg-white rounded-2xl p-4 shadow-md">
                <img 
                  src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/cwqu8ri7_Screenshot%202026-03-10%20at%206.05.54%E2%80%AFPM.png"
                  alt="CanoBond logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">CanoBond</h3>
              <p className="text-gray-600 mb-4">German Intelligence. Unshakeable Bond.</p>
              <p className="text-sm text-gray-500">Premium tile adhesives and construction chemicals for professional applications.</p>
            </div>
            <div 
              onClick={() => navigate('/blackberry')}
              className="cursor-pointer bg-gradient-to-br from-[#F4ECF7] to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 mb-4 mx-auto bg-white rounded-2xl p-4 shadow-md">
                <img 
                  src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/ivdpxzwa_Screenshot%202026-03-17%20at%205.35.40%E2%80%AFPM.png"
                  alt="Blackberry logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Blackberry</h3>
              <p className="text-gray-600 mb-4">Premium Solutions for Perfect Finishes</p>
              <p className="text-sm text-gray-500">Specialized epoxy grouts and chemical solutions for aesthetic perfection.</p>
            </div>
            <div 
              onClick={() => navigate('/furniture')}
              className="cursor-pointer bg-gradient-to-br from-[#FFF9E6] to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">🪑</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Furniture</h3>
              <p className="text-gray-600 mb-4">Luxury Living</p>
              <p className="text-sm text-gray-500">Contemporary furniture collection designed for elegant modern living spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              'ISO 9001:2015',
              'ISO 14001:2018', 
              'ISI Certified',
              'TÜV SUD',
              'CE Marking',
              'German Quality'
            ].map((cert, i) => (
              <div key={i} className="bg-white rounded-2xl px-8 py-6 shadow-md hover:shadow-xl transition-shadow">
                <Award className="text-[#E67E22] mx-auto mb-3" size={32} />
                <p className="text-lg font-semibold text-gray-900 text-center">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#E67E22] to-[#8E44AD]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our product range or get in touch with our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/')}
              className="bg-white text-[#E67E22] hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
            >
              Explore Products
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;