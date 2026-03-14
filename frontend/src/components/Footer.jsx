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
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 rounded-full bg-white/30" />
              </div>
              <span className="text-2xl font-bold text-gray-900">CanoCrystal</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Engineering brands for modern living. Delivering excellence across construction chemicals and premium furniture solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail size={18} />
              <span className="text-sm">info@canocrystal.com</span>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Our Brands</h4>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 text-sm text-center md:text-left">
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
                  className={`text-gray-600 transition-colors duration-200 ${social.color}`}
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
            <a href="#privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Powered by section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-gray-500 text-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-white/40" />
            </div>
            <span>Powered by CanoCrystal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
