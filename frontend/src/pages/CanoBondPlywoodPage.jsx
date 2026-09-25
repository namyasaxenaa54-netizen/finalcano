import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CanoBondPlywoodPage = () => {
  const plywoodProducts = [
    {
      id: 'gold-club',
      name: 'Gold Club',
      tier: 'Premium',
      image: 'https://customer-assets-lqy194kg.emergentagent.net/job_crystal-brands-1/artifacts/pwy3avlr_4e353fb7-6476-4e95-a730-17bb3a5e37d8.png',
      features: [
        'BWP/BWR Grade - Superior Water Resistance',
        'IS: 303 Certified Quality',
        'Virokill Technology - Kills 99.99% Viruses',
        '4 Time Pressed Technology',
        '100% Lifetime Warranty',
        'E-0 Emission Class - Eco-Friendly'
      ],
      color: '#FFD700'
    },
    {
      id: 'platinum-club',
      name: 'Platinum Club',
      tier: 'Elite',
      image: 'https://customer-assets-lqy194kg.emergentagent.net/job_crystal-brands-1/artifacts/d2tmu5l8_238604e4-5060-46b8-bce7-7ea3f9d5c770.png',
      features: [
        'BWP/BWR Grade - Superior Water Resistance',
        'IS: 303 Certified Quality',
        'Virokill Technology - Kills 99.99% Viruses',
        '4 Time Pressed Technology',
        '100% Lifetime Warranty',
        'Perfect Thickness Calibration'
      ],
      color: '#E5E4E2'
    },
    {
      id: 'silver-club',
      name: 'Silver Club',
      tier: 'Standard',
      image: 'https://customer-assets-lqy194kg.emergentagent.net/job_crystal-brands-1/artifacts/cd1fy1hy_bf6747ba-2063-40ce-8691-3f060485cbd6.png',
      features: [
        'BWP/BWR Grade - Water Resistant',
        'IS: 303 Certified Quality',
        'Virokill Technology - Kills 99.99% Viruses',
        '4 Time Pressed Technology',
        '100% Lifetime Warranty',
        'ViraShield Protection'
      ],
      color: '#C0C0C0'
    },
    {
      id: 'diamond-club',
      name: 'Diamond Club',
      tier: 'Ultimate',
      image: 'https://customer-assets-lqy194kg.emergentagent.net/job_crystal-brands-1/artifacts/28qqurg5_c18644c4-1ddf-4562-a151-48716f8960da.png',
      features: [
        'BWP/BWR Grade - Maximum Water Resistance',
        'IS: 303 Certified Quality',
        'Virokill Technology - Kills 99.99% Viruses',
        '4 Time Pressed Technology',
        '100% Lifetime Warranty',
        'CE Certified - European Standards'
      ],
      color: '#B9F2FF'
    }
  ];

  return (
    <>
      <Helmet>
        <title>CanoBond Premium Plywood | Gold, Platinum, Silver & Diamond Club</title>
        <meta 
          name="description" 
          content="Explore CanoBond's premium quality plywood range - Gold Club, Platinum Club, Silver Club, and Diamond Club. Featuring Virokill technology, lifetime warranty, and IS:303 certification." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] via-white to-[#F5F5DC]">
        <Header />

          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="https://customer-assets-lqy194kg.emergentagent.net/job_crystal-brands-1/artifacts/r07zu3oz_WhatsApp%20Image%202026-09-20%20at%2017.02.02.jpeg"
                  alt="CanoBond Premium Quality Plywood"
                  className="h-64 w-auto object-contain max-w-full"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3A3A3A] mb-6">
                CanoBond Premium <span className="bg-gradient-to-r from-[#E67E22] to-[#8E44AD] bg-clip-text text-transparent">Plywood</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed mb-8">
                Discover our premium range of plywood engineered with cutting-edge Virokill technology, 
                superior craftsmanship, and backed by a lifetime warranty. Choose from our exclusive club tiers 
                to match your project requirements.
              </p>

              {/* Features Banner */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded-full font-medium">
                  ✓ Virokill Technology
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-[#27AE60] to-[#229954] text-white rounded-full font-medium">
                  ✓ 100% Lifetime Warranty
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-[#8E44AD] to-[#7D3C98] text-white rounded-full font-medium">
                  ✓ IS:303 Certified
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-[#2980B9] to-[#21618C] text-white rounded-full font-medium">
                  ✓ 4X Pressed Technology
                </span>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#3A3A3A] mb-12">
                Our Premium <span className="bg-gradient-to-r from-[#E67E22] to-[#8E44AD] bg-clip-text text-transparent">Plywood Range</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plywoodProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Product Image */}
                    <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <img 
                        src={product.image}
                        alt={`${product.name} Premium Quality Plywood`}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        style={{ 
                          imageRendering: 'crisp-edges',
                          objectPosition: 'center'
                        }}
                      />
                      
                      {/* Tier Badge */}
                      <div 
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.tier}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">
                        {product.name}
                      </h3>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-[#5A5A5A]">
                            <span className="text-[#E67E22] mr-2 flex-shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button 
                        onClick={() => window.location.href = '/contact'}
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded-lg font-medium hover:from-[#D35400] hover:to-[#E67E22] transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E67E22]/5 to-[#8E44AD]/5">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] mb-12">
                Why Choose CanoBond Plywood?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-[#3A3A3A] mb-3">Virokill Protection</h3>
                  <p className="text-[#5A5A5A] text-sm">
                    Advanced technology that eliminates 99.99% of viruses, ensuring a safer environment for your family and workspace.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-[#3A3A3A] mb-3">Superior Strength</h3>
                  <p className="text-[#5A5A5A] text-sm">
                    4 Time Pressed Technology ensures maximum durability and structural integrity for long-lasting performance.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-5xl mb-4">🌿</div>
                  <h3 className="text-xl font-bold text-[#3A3A3A] mb-3">Eco-Friendly</h3>
                  <p className="text-[#5A5A5A] text-sm">
                    E-0 Emission Class certification guarantees minimal formaldehyde emissions, protecting both health and environment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] mb-6">
                Ready to Build with Premium Quality?
              </h2>
              <p className="text-lg text-[#5A5A5A] mb-8">
                Contact us today to discuss your plywood requirements and get expert recommendations from our team.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#E67E22] to-[#8E44AD] text-white rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </button>
            </div>
          </section>

        <Footer />
      </div>
    </>
  );
};

export default CanoBondPlywoodPage;
