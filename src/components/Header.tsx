import { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <>
      {/* Header container - full width, no elevation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* LOGO - Clean typography */}
            <a href="#" className="group">
              <span className="text-2xl font-light tracking-[-0.02em] text-gray-900">
                Miracle
                <span className="text-gray-300 font-thin ml-0.5">.</span>
              </span>
            </a>

            {/* DESKTOP NAV - Pure typography */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors duration-200 tracking-wide"
                >
                  {item}
                </a>
              ))}
              <span className="w-px h-4 bg-gray-200" />
              <a
                href={portfolioConfig.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 tracking-wide"
              >
                Resume
              </a>
            </nav>

            {/* MOBILE TRIGGER - Clean icon */}
            <button
              className="md:hidden -mr-2 p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY - Full screen, no blur, pure content */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          {/* Mobile nav items - Large, clean typography */}
          <div className="flex flex-col items-center gap-10">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-4xl font-light tracking-[-0.02em] text-gray-900 hover:text-gray-500 transition-all duration-700 ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile resume link - Clean button */}
          <a
            href={portfolioConfig.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-12 text-base font-medium text-blue-600 hover:text-blue-700 transition-all duration-700 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '320ms' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume →
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
