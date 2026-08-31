import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowRight, MapPin, GraduationCap, Sparkles, Briefcase } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 mt-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
          
          {/* LEFT: CONTENT */}
          <div className="flex-1 space-y-12 order-2 lg:order-1">
            
            {/* STATUS INDICATOR - Subtle pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-medium text-gray-500 tracking-[0.15em] uppercase">
                Open to Work
              </span>
            </div>

            {/* NAME - Bold but refined */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] text-gray-900 leading-[0.92]">
              {portfolioConfig.name}
            </h1>

            {/* TAGLINE - Clean divider approach */}
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-sm font-light text-gray-400 tracking-[0.15em] uppercase">
                Software Engineer
              </span>
            </div>

            {/* INFO GRID - Minimal cards with radius */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50/70 rounded-xl border border-gray-100/50">
                <div className="p-1.5 bg-white rounded-lg border border-gray-100">
                  <GraduationCap size={14} className="text-gray-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Education
                  </p>
                  <p className="text-sm font-light text-gray-700">
                    B.Tech CS · FUTMINNA
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-50/70 rounded-xl border border-gray-100/50">
                <div className="p-1.5 bg-white rounded-lg border border-gray-100">
                  <MapPin size={14} className="text-gray-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-light text-gray-700">
                    Open to Relocation
                  </p>
                </div>
              </div>
            </div>

            {/* BIO - Refined paragraph */}
            <p className="text-base font-light text-gray-500 leading-relaxed max-w-xl border-l-2 border-gray-200 pl-6">
              {portfolioConfig.bio}
            </p>

            {/* ACTION ROW - Enhanced with subtle radius */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <a
                href={portfolioConfig.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
              >
                View Resume
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                  strokeWidth={2}
                />
              </a>
              
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-medium text-gray-300 uppercase tracking-wider">
                  Connect
                </span>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO - Enhanced with subtle radius */}
          <div className="lg:w-[440px] order-1 lg:order-2">
            <div className="relative">
              {/* Geometric accents - refined */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-t-2 border-r-2 border-gray-200 rounded-tr-2xl" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-b-2 border-l-2 border-gray-200 rounded-bl-2xl" />
              <div className="absolute top-1/2 -left-8 w-12 h-12 border-l-2 border-t-2 border-gray-100/50 rounded-tl-xl" />
              
              {/* Photo container - Subtle radius */}
              <div className="relative w-72 h-72 md:w-[420px] md:h-[500px] bg-gray-50 rounded-3xl overflow-hidden border border-gray-100/80">
                <img
                  src="/myprofilepic.jpeg"
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Availability overlay - Refined */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 px-5 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.15em]">
                          Available for
                        </p>
                        <p className="text-sm font-light text-gray-700 mt-0.5">
                          Remote · Hybrid · Full/Part time
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-medium text-emerald-700">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience badge - Floating */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 px-4 py-3">
                  <div className="text-center">
                    <p className="text-lg font-light text-gray-900">3+</p>
                    <p className="text-[9px] font-medium text-gray-400 uppercase tracking-wider">
                      Years Exp.
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
