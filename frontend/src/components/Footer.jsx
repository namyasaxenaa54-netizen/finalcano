import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const brandLinks = [
    { name: 'CanoBond', href: '#canobond' },
    { name: 'Blackberry', href: '#blackberry' },
    { name: 'Furniture Collection', href: '#furniture' }
  ];

  const productLinks = [
    { name: 'Tile Adhesive', href: '#products' },
    { name: 'Epoxy Grout', href: '#products' },
    { name: 'Tile Cleaner', href: '#products' },
    { name: 'Premium Furniture', href: '#products' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Distributors', href: '#distributors' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
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
            <div className="flex items-center space-x-2 text-[#3A3A3A]">
              <Mail size={18} />
              <span className="text-sm">info@canocrystal.com</span>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold text-[#2C2C2C] mb-4">Our Brands</h4>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#3A3A3A] hover:text-[#B76E79] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-[#2C2C2C] mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#3A3A3A] hover:text-[#B76E79] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[#2C2C2C] mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#3A3A3A] hover:text-[#B76E79] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#B76E79]/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-[#3A3A3A] text-sm text-center md:text-left">
            © {new Date().getFullYear()} CanoCrystal Industries. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`text-[#3A3A3A] transition-colors duration-200 ${social.color.replace('hover:text-blue-600', 'hover:text-[#B76E79]').replace('hover:text-blue-400', 'hover:text-[#C9A0A0]').replace('hover:text-pink-600', 'hover:text-[#8B7E8B]').replace('hover:text-blue-700', 'hover:text-[#A68A7A]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-[#3A3A3A] hover:text-[#B76E79] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[#3A3A3A] hover:text-[#B76E79] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Powered by section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-[#3A3A3A] text-sm">
            <img 
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="h-6 w-auto"
            />
            <span>Powered by CanoCrystal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
