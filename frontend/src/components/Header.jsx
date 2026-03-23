import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', action: () => navigate('/') },
    { name: 'About', action: () => navigate('/about') },
    { name: 'Distributors', action: () => navigate('/distributors') },
    { name: 'Contact', action: () => navigate('/contact') }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#FAF9F6]/95 backdrop-blur-xl shadow-lg' : 'bg-white'}`}>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-[#E67E22] to-[#8E44AD] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+919520899699" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span>+91 95208 99699</span>
            </a>
            <a href="mailto:Info@canocrystal.com" className="hidden sm:flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              <span>Info@canocrystal.com</span>
            </a>
          </div>
          <div className="text-xs">
            <span className="hidden md:inline">Manufacturing: CANO DRYMIX Alwar (Rajasthan) | </span>
            <span className="font-semibold">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Final transparent version, perfectly sized */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Return to homepage"
          >
            <img
              src="/logo-transparent.png"
              alt="CanoCrystal - Return to Home"
              className="h-16 sm:h-18 md:h-20 w-auto"
              style={{ transform: 'scale(0.74)', transformOrigin: 'center' }}
            />
          </button>

          {/* Search Bar - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-[#3A3A3A] hover:text-[#E67E22] transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#3A3A3A] hover:text-[#E67E22] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3">
          <SearchBar />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.action();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-[#3A3A3A] hover:text-[#E67E22] transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-[#FAF9F6]"
              >
                {link.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
