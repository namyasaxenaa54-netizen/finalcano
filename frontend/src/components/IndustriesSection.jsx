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
      color: '#C9A0A0',
      gradient: 'from-[#C9A0A0] to-[#B76E79]',
      bgGradient: 'from-[#C9A0A0]/10 to-[#B76E79]/10'
    },
    {
      ...industries[1],
      color: '#8B7E8B',
      gradient: 'from-[#8B7E8B] to-[#A68A7A]',
      bgGradient: 'from-[#8B7E8B]/10 to-[#A68A7A]/10'
    },
    {
      ...industries[2],
      color: '#B76E79',
      gradient: 'from-[#B76E79] to-[#C9A0A0]',
      bgGradient: 'from-[#B76E79]/10 to-[#C9A0A0]/10'
    },
    {
      ...industries[3],
      color: '#A68A7A',
      gradient: 'from-[#A68A7A] to-[#8B7E8B]',
      bgGradient: 'from-[#A68A7A]/10 to-[#8B7E8B]/10'
    }
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle tile background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FAF9F6]">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6373692/pexels-photo-6373692.jpeg)',
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#B76E79] bg-[#B76E79]/10 px-4 py-2 rounded-full">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A] max-w-2xl mx-auto">
            Empowering diverse sectors with innovative solutions and premium quality
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industryData.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full bg-gradient-to-br ${industry.bgGradient} backdrop-blur-sm border border-[#B76E79]/10 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}>
                  {/* Icon container */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2C] mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-[#3A3A3A] leading-relaxed text-sm sm:text-base">
                      {industry.description}
                    </p>
                  </div>

                  {/* Decorative background element */}
                  <div
                    className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full opacity-30 blur-2xl transition-all duration-500 group-hover:scale-150"
                    style={{ backgroundColor: industry.color }}
                  />

                  {/* Top corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 rounded-bl-full opacity-20"
                    style={{ backgroundColor: industry.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats/Info Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#B76E79]/10">
            <div className="text-3xl sm:text-4xl font-bold text-[#B76E79] mb-2">500+</div>
            <div className="text-[#3A3A3A] font-medium text-sm sm:text-base">Projects Completed</div>
          </div>
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#B76E79]/10">
            <div className="text-3xl sm:text-4xl font-bold text-[#C9A0A0] mb-2">200+</div>
            <div className="text-[#3A3A3A] font-medium text-sm sm:text-base">Partner Distributors</div>
          </div>
          <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#B76E79]/10">
            <div className="text-3xl sm:text-4xl font-bold text-[#A68A7A] mb-2">15+</div>
            <div className="text-[#3A3A3A] font-medium text-sm sm:text-base">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
