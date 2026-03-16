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
            <a href="tel:9520899699" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <Phone size={14} />
              <span>9520899699</span>
            </a>
            <a href="mailto:info@canocrystal.com" className="hidden sm:flex items-center space-x-1 hover:opacity-80 transition-opacity">
              <Mail size={14} />
              <span>info@canocrystal.com</span>
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
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_crystal-brands-1/artifacts/lrvcnut7_Screenshot%202026-03-14%20at%203.14.05%E2%80%AFPM.png"
              alt="CanoCrystal"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

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
            <Button className="bg-gradient-to-r from-[#E67E22] to-[#8E44AD] hover:from-[#D35400] hover:to-[#7D3C98] text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Quote
            </Button>
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
            <Button className="w-full bg-gradient-to-r from-[#E67E22] to-[#8E44AD] text-white rounded-full py-3 shadow-lg">
              Get Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
