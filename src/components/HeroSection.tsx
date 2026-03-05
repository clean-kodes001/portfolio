import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="flex items-center py-12 md:py-20">
      <div className="container-wide grid md:grid-cols-12 gap-8 items-center">
        
        {/* TEXT CONTENT: Spans 7 columns for more breathing room for text */}
        <div className="md:col-span-7 space-y-5 order-2 md:order-1">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 opacity-0 animate-fade-in">
              {portfolioConfig.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 opacity-0 animate-fade-in-delay-2">
              {portfolioConfig.title}
            </h2>
          </div>
          
          <p className="text-base md:text-lg max-w-lg text-slate-600 leading-relaxed opacity-0 animate-fade-in-delay-3">
            {portfolioConfig.bio}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 pt-2 opacity-0 animate-fade-in-delay-3">
            <Button asChild size="lg" className="rounded-full px-8 bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-blue-500/20">
              <a href={portfolioConfig.resumeLink} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
            
            <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />
            
            <SocialLinks />
          </div>
        </div>
        
        {/* IMAGE SECTION: Spans 5 columns */}
        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            {/* Soft Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 animate-pulse-slow" />
            
            <div className="relative w-48 h-48 md:w-72 md:h-72 p-2 rounded-full border border-slate-100 bg-white/50 backdrop-blur-sm shadow-2xl opacity-0 animate-scale">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                <img
                  src="/profile.jpg"
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
