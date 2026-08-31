import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowUp } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* LEFT: Name & Title */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-light text-gray-900 tracking-[-0.02em]">
              {portfolioConfig.name}
            </h3>
            <p className="text-xs font-light text-gray-400 mt-0.5">
              {portfolioConfig.title}
            </p>
          </div>
          
          {/* CENTER: Social Links */}
          <div className="flex items-center gap-4">
            <SocialLinks />
          </div>
          
          {/* RIGHT: Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </button>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-8 pt-6 text-center">
          <p className="text-[10px] font-light text-gray-400 tracking-wide">
            &copy; {currentYear} {portfolioConfig.name}. All rights reserved.
          </p>
          <p className="text-[9px] font-light text-gray-300 mt-1 tracking-wider">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
