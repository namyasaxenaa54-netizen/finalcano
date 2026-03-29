import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, X } from 'lucide-react';

const SocialMediaFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1M4XA51DX3/?mibextid=wwXIfr', label: 'Facebook', color: 'bg-[#1877F2]' },
    { icon: Instagram, href: 'https://www.instagram.com/cano._crystal?igsh=MnQ4dzdtcnFzb2hm&utm_source=qr', label: 'Instagram', color: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
    { icon: Linkedin, href: 'https://linkedin.com/company/canocrystal', label: 'LinkedIn', color: 'bg-[#0A66C2]' },
    { icon: Twitter, href: 'https://twitter.com/canocrystal', label: 'Twitter', color: 'bg-[#1DA1F2]' }
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end space-y-3">
      {/* Social Media Links - Appear when open */}
      {isOpen && (
        <div className="flex flex-col space-y-3 animate-fade-in-up">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#E67E22] to-[#8E44AD] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-3xl"
        aria-label={isOpen ? 'Close social media' : 'Open social media'}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex space-x-0.5">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="flex space-x-0.5 mt-0.5">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default SocialMediaFloat;
