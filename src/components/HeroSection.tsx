import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowRight, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 mt-12">
        
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
          
          {/* LEFT: CONTENT */}
          <div className="flex-1 space-y-10 order-2 lg:order-1 pt-8">
            
            {/* TAGLINE */}
            <div className="space-y-2">
              <p className="text-sm font-light text-gray-400 tracking-[0.2em] uppercase">
                Software Engineer
              </p>
            </div>

            {/* NAME */}
            <h1 className="text-6xl md:text-8xl font-light tracking-[-0.03em] text-gray-900 leading-[0.9]">
              {portfolioConfig.name}
            </h1>

            {/* INFO STRIP - Clean, no boxes */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              <div className="flex items-center gap-3">
                <GraduationCap size={16} className="text-gray-300" strokeWidth={1.5} />
                <span className="text-sm font-light text-gray-600">
                  B.Tech Computer Science
                </span>
                <span className="text-sm font-light text-gray-300">·</span>
                <span className="text-sm font-light text-gray-600">FUTMINNA</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-300" strokeWidth={1.5} />
                <span className="text-sm font-light text-gray-600">
                  Open to Relocation
                </span>
              </div>
            </div>

            {/* BIO - Clean paragraph */}
            <p className="text-base font-light text-gray-500 leading-relaxed max-w-xl">
              {portfolioConfig.bio}
            </p>

            {/* ACTION ROW - Clean links */}
            <div className="flex flex-wrap items-center gap-10 pt-4">
              <a
                href={portfolioConfig.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200"
              >
                View CV
                <ArrowRight 
                  size={18} 
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                  strokeWidth={1.5}
                />
              </a>
              
              <div className="flex items-center gap-6">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO - Minimal geometric */}
          <div className="lg:w-[420px] order-1 lg:order-2">
            <div className="relative">
              {/* Simple geometric accents - No shadows */}
              <div className="absolute -top-6 -right-6 w-16 h-16 border-t border-gray-200" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b border-gray-200" />
              
              {/* Photo container - Pure border */}
              <div className="relative w-64 h-64 md:w-[400px] md:h-[480px] bg-gray-50 overflow-hidden border border-gray-100">
                <img
                  src="/myprofilepic.jpeg"
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Availability - Clean text overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs font-light text-gray-400 uppercase tracking-[0.15em]">
                      Available for
                    </p>
                    <p className="text-sm font-light text-gray-700 mt-1">
                      Remote / Hybrid (Full or Part time)
                    </p>
                  </div>
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
