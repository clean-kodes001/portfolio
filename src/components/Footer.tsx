
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
    <footer className="bg-secondary py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              {portfolioConfig.name}
            </h3>
            <p className="text-muted-foreground">
              {portfolioConfig.title}
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <SocialLinks />
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-portfolio-600 text-white p-3 rounded-full hover:bg-portfolio-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} {portfolioConfig.name}. All Rights Reserved.</p>
          <p className="text-sm mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
