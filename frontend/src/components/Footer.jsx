import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const brandLinks = [
    { name: 'CanoBond', path: '/canobond' },
    { name: 'Blackberry', path: '/blackberry' },
    { name: 'Furniture Collection', path: '/furniture' }
  ];

  const productLinks = [
    { name: 'Tile Adhesives', path: '/canobond' },
    { name: 'Epoxy Grout', path: '/blackberry' },
    { name: 'Tile Cleaner', path: '/blackberry' },
    { name: 'Premium Furniture', path: '/furniture' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Distributors', path: '/distributors' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1M4XA51DX3/?mibextid=wwXIfr', label: 'Facebook', color: 'hover:text-[#1877F2]' },
    { icon: Instagram, href: 'https://www.instagram.com/cano._crystal?igsh=MnQ4dzdtcnFzb2hm&utm_source=qr', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: Linkedin, href: 'https://linkedin.com/company/canocrystal', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
    { icon: Twitter, href: 'https://twitter.com/canocrystal', label: 'Twitter', color: 'hover:text-[#1DA1F2]' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#FAF9F6] to-[#F5F5DC] pt-16 sm:pt-20 pb-10 relative overflow-hidden">
      {/* Subtle tile texture */}
      <div className="absolute inset-0 opacity-5">
        <div 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558346648-9757f2fa4474)',
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
          }}
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
                alt="CanoCrystal"
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <p className="text-[#3A3A3A] mb-6 leading-relaxed text-sm sm:text-base">
              Engineering brands for modern living. Delivering excellence across construction chemicals and premium furniture solutions.
            </p>
            <div className="space-y-2 text-[#3A3A3A] text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919520899699" className="hover:text-[#E67E22]">+91 95208 99699</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:Info@canocrystal.com" className="hover:text-[#E67E22]">Info@canocrystal.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Plot No 29, Sector 142, Noida, UP 201305</span>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold text-[#2C2C2C] mb-4 text-lg">Our Brands</h4>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-[#3A3A3A] hover:text-[#E67E22] transition-colors duration-200 text-sm sm:text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-[#2C2C2C] mb-4 text-lg">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-[#3A3A3A] hover:text-[#E67E22] transition-colors duration-200 text-sm sm:text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[#2C2C2C] mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-[#3A3A3A] hover:text-[#E67E22] transition-colors duration-200 text-sm sm:text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E67E22]/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-[#3A3A3A] text-sm text-center md:text-left">
            © {new Date().getFullYear()} CanoCrystal Industries. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-[#3A3A3A] transition-all duration-300 hover:scale-110 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 text-center text-sm text-[#3A3A3A]">
          <p>ISO 9001:2015 Certified | Manufacturing: CANO DRYMIX Alwar (Rajasthan)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
