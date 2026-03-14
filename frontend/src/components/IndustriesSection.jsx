import React from 'react';
import { Building2, Paintbrush, Ruler, Armchair } from 'lucide-react';
import { industries } from '../mockData';

const IndustriesSection = () => {
  const iconMap = {
    building: Building2,
    paintbrush: Paintbrush,
    ruler: Ruler,
    armchair: Armchair
  };

  const industryData = [
    {
      ...industries[0],
      color: '#FF6A00',
      gradient: 'from-orange-400 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      ...industries[1],
      color: '#6B4DFF',
      gradient: 'from-purple-400 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      ...industries[2],
      color: '#4C8FFF',
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      ...industries[3],
      color: '#8A5A3B',
      gradient: 'from-amber-500 to-amber-700',
      bgGradient: 'from-amber-50 to-amber-100'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering diverse sectors with innovative solutions and premium quality
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryData.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full bg-gradient-to-br ${industry.bgGradient} rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}>
                  {/* Icon container */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Decorative background element */}
                  <div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30 blur-2xl transition-all duration-500 group-hover:scale-150"
                    style={{ backgroundColor: industry.color }}
                  />

                  {/* Top corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-20"
                    style={{ backgroundColor: industry.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats/Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Partner Distributors</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
