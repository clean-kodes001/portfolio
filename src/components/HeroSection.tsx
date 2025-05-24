
import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-16 md:pb-0">
      <div className="container-wide grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3 space-y-6">
          <div className="space-y-4">
           
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-2">
              {portfolioConfig.title}
            </h2>
          </div>
          
          <p className="text-lg max-w-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            {portfolioConfig.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
            <Button asChild size="lg" className="btn-primary">
              <a href={portfolioConfig.resumeLink} target="_blank" rel="noopener noreferrer">
                Resume/CV
              </a>
            </Button>
          
          </div>
          
          <div className="pt-6 opacity-0 animate-fade-in-delay-3">
            <SocialLinks />
          </div>
        </div>
        
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-portfolio-300 to-portfolio-600 rounded-full overflow-hidden opacity-0 animate-scale">
            {/* This is a placeholder for a profile image */}
            <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center text-9xl font-bold text-portfolio-600">
              <img
                src="/profile.jpg" // Replace with your image path
                alt={portfolioConfig.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      
     
    </section>
  );
};

export default HeroSection;
