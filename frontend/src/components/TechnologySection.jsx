import React from 'react';
import { Droplet, CheckCircle } from 'lucide-react';

const TechnologySection = () => {
  const steps = [
    {
      title: 'Advanced Formula',
      description: 'Polymer-modified compounds for superior performance',
      icon: '🧪',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Mix & Apply',
      description: 'Easy water mixing with consistent workability',
      icon: '🔄',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Strong Bonding',
      description: 'Exceptional adhesion strength across surfaces',
      icon: '🔗',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Long Lasting',
      description: 'Weather-resistant and durable performance',
      icon: '⚡',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const features = [
    'ISO 9001:2015 Certified Manufacturing',
    'Advanced Chemical Engineering',
    'Eco-Friendly Formulations',
    'Rigorous Quality Testing',
    'Professional Grade Solutions',
    'Technical Support Available'
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Tile texture background */}
      <div className="absolute inset-0 bg-white">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/220680/pexels-photo-220680.jpeg)',
            backgroundSize: '300px 300px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>
      
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#B76E79]/20 to-[#C9A0A0]/20 mb-6">
            <Droplet size={32} className="text-[#B76E79]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4">
            Advanced Construction Chemistry
          </h2>
          <p className="text-lg sm:text-xl text-[#3A3A3A] max-w-2xl mx-auto">
            Engineered solutions that transform construction excellence through innovation
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl sm:text-4xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold text-[#2C2C2C]">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#3A3A3A] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#B76E79]/30 to-[#C9A0A0]/30">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#C9A0A0]/30 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-[#FAF9F6] to-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#B76E79]/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-8 text-center">
            Why Choose CanoCrystal Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-xl hover:bg-white transition-colors duration-200"
              >
                <CheckCircle size={24} className="text-[#B76E79] flex-shrink-0 mt-1" />
                <span className="text-[#3A3A3A] font-medium text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Animation Area */}
        <div className="mt-12 sm:mt-16 relative h-48 sm:h-64 bg-gradient-to-r from-[#FAF9F6] via-[#FFFEF7] to-[#FAF9F6] rounded-3xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1701422052265-64f0ac28dcd6?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Technology"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <p className="text-xl sm:text-2xl font-bold text-[#2C2C2C] mb-2">
              Trusted by Construction Professionals
            </p>
            <p className="text-base sm:text-lg text-[#3A3A3A]">
              Delivering excellence in every project, every time
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TechnologySection;