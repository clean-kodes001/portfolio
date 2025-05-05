
import { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-portfolio-600">
            {portfolioConfig.name.split(' ')[0]}
            <span className="text-foreground">
              {portfolioConfig.name.split(' ').slice(1).join(' ')}
            </span>
          </span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-portfolio-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-portfolio-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-portfolio-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-portfolio-600 transition-colors">Contact</a>
          <Button asChild variant="outline" className="ml-2">
            <a href={portfolioConfig.resumeLink} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container-wide flex flex-col py-4 space-y-4">
            <a 
              href="#about" 
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#experience" 
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild variant="outline" className="mr-auto">
              <a 
                href={portfolioConfig.resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
