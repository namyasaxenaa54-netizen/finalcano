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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Droplet size={32} className="text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Advanced Construction Chemistry
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engineered solutions that transform construction excellence through innovation
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-gray-200">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose CanoCrystal Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-xl hover:bg-white transition-colors duration-200"
              >
                <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Animation Area */}
        <div className="mt-16 relative h-64 bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-3xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1701422052265-64f0ac28dcd6?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Technology"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <p className="text-2xl font-bold text-gray-800 mb-2">
              Trusted by Construction Professionals
            </p>
            <p className="text-lg text-gray-600">
              Delivering excellence in every project, every time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
