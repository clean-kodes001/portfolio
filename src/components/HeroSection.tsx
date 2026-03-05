import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Globe, Sparkles } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center bg-white py-12">
      <div className="container-wide max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT: CONTENT SIDE */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            
            {/* BREATHING HEADER */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                <span className="w-8 h-[1px] bg-blue-600" />
                Software Engineer
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
                {portfolioConfig.name}
              </h1>
            </div>

            {/* BIO BENTO - Clean, no shadows, structured like Education cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between min-h-[140px]">
                <Code2 size={20} className="text-slate-400 mb-4" />
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {portfolioConfig.bio}
                </p>
              </div>
              
              <div className="p-6 bg-blue-600 rounded-2xl flex flex-col justify-between text-white min-h-[140px]">
                <Sparkles size={20} className="text-blue-200 mb-4" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest opacity-70 mb-1">Focus</p>
                  <p className="text-lg font-bold leading-tight">
                    Building Scalable <br /> Digital Products.
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION ROW */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <Button asChild className="h-14 px-8 rounded-2xl bg-slate-900 text-white hover:bg-blue-700 transition-colors font-bold text-base border-none">
                <a href={portfolioConfig.resumeLink} target="_blank" rel="noopener noreferrer">
                  Download CV <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              
              <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO SIDE */}
          <div className="lg:w-[400px] order-1 lg:order-2">
            <div className="relative">
              {/* Simple Geometric Accent (No Shadow) */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-600 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-slate-200 rounded-bl-3xl" />
              
              {/* THE PHOTO CONTAINER */}
              <div className="relative w-64 h-64 md:w-[380px] md:h-[480px] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-100">
                <img
                  src="/profile.jpg" // Ensure this path is correct in your public folder
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                
                {/* Floating Info Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available For</p>
                    <p className="text-xs font-bold text-slate-900">Remote / Hybrid</p>
                  </div>
                  <Globe size={16} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
