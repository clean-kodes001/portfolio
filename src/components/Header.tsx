import { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Button } from '@/components/ui/button';
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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <header 
        className={`flex items-center justify-between transition-all duration-500 ease-in-out px-6 py-3 ${
          isScrolled 
            ? 'w-full md:w-[90%] lg:w-[70%] rounded-full bg-white/70 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)]' 
            : 'w-full bg-transparent'
        }`}
      >
        {/* LOGO AREA */}
        <div className="flex items-center">
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
            MIRACLE<span className="text-blue-600">.</span>
          </span>
        </div>
        
        {/* DESKTOP NAV - Minimalist style */}
        <nav className="hidden md:flex items-center gap-1">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-all rounded-full hover:bg-slate-100/50"
            >
              {item}
            </a>
          ))}
          
          <div className="w-[1px] h-4 bg-slate-200 mx-2" />
          
          <Button asChild variant="ghost" className="rounded-full font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            <a href={portfolioConfig.resumeLink} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>
        
        {/* MOBILE TRIGGER */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* MOBILE OVERLAY - Full screen blur */}
      <div className={`fixed inset-0 bg-white/90 backdrop-blur-2xl z-[-1] transition-all duration-500 md:hidden ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {['About', 'Experience', 'Projects', 'Contact'].map((item, i) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`text-3xl font-bold tracking-tight transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button asChild size="lg" className="rounded-full px-10">
            <a href={portfolioConfig.resumeLink} target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
