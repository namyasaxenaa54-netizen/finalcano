import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, Building2, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const DistributorsPage = () => {
  const navigate = useNavigate();

  const distributors = [
    {
      region: 'North India',
      locations: [
        { city: 'Delhi NCR', contact: '+91 98XXXXXXXX', email: 'delhi@canocrystal.com' },
        { city: 'Punjab', contact: '+91 98XXXXXXXX', email: 'punjab@canocrystal.com' },
        { city: 'Haryana', contact: '+91 98XXXXXXXX', email: 'haryana@canocrystal.com' },
      ]
    },
    {
      region: 'South India',
      locations: [
        { city: 'Bangalore', contact: '+91 98XXXXXXXX', email: 'bangalore@canocrystal.com' },
        { city: 'Chennai', contact: '+91 98XXXXXXXX', email: 'chennai@canocrystal.com' },
        { city: 'Hyderabad', contact: '+91 98XXXXXXXX', email: 'hyderabad@canocrystal.com' },
      ]
    },
    {
      region: 'West India',
      locations: [
        { city: 'Mumbai', contact: '+91 98XXXXXXXX', email: 'mumbai@canocrystal.com' },
        { city: 'Pune', contact: '+91 98XXXXXXXX', email: 'pune@canocrystal.com' },
        { city: 'Ahmedabad', contact: '+91 98XXXXXXXX', email: 'ahmedabad@canocrystal.com' },
      ]
    },
    {
      region: 'East India',
      locations: [
        { city: 'Kolkata', contact: '+91 98XXXXXXXX', email: 'kolkata@canocrystal.com' },
        { city: 'Bhubaneswar', contact: '+91 98XXXXXXXX', email: 'bhubaneswar@canocrystal.com' },
      ]
    }
  ];

  const benefits = [
    'Competitive pricing and margins',
    'Comprehensive product training',
    'Marketing support materials',
    'Technical assistance',
    'Regular product updates',
    'Exclusive distributor territories'
  ];

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
          <img 
            src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
            alt="CanoCrystal"
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#E67E22] to-[#8E44AD] bg-clip-text text-transparent">Distributors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find authorized CanoCrystal distributors across India
            </p>
          </div>

          {/* Distributor Regions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {distributors.map((region, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin size={32} className="text-[#E67E22]" />
                  <h2 className="text-3xl font-bold text-gray-900">{region.region}</h2>
                </div>
                <div className="space-y-4">
                  {region.locations.map((loc, i) => (
                    <div key={i} className="bg-gradient-to-r from-[#FFF5EE] to-white rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <Building2 size={24} className="text-[#E67E22] flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{loc.city}</h3>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Phone size={16} />
                              <span>{loc.contact}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail size={16} />
                              <span className="text-sm">{loc.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Become a Distributor */}
          <div className="bg-gradient-to-br from-[#E67E22]/10 to-[#8E44AD]/10 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Become a Distributor</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Join the CanoCrystal family and be part of India's leading construction chemicals and furniture brand. We're always looking for reliable partners to expand our network.
                </p>
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-[#E67E22] flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded-full px-8 py-6 text-lg"
                >
                  Apply Now
                </Button>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#E67E22] font-bold text-xl">•</span>
                    <span>Established business with relevant industry experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#E67E22] font-bold text-xl">•</span>
                    <span>Adequate warehouse and storage facilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#E67E22] font-bold text-xl">•</span>
                    <span>Strong distribution network in your region</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#E67E22] font-bold text-xl">•</span>
                    <span>Financial stability and creditworthiness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#E67E22] font-bold text-xl">•</span>
                    <span>Commitment to brand values and customer service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DistributorsPage;