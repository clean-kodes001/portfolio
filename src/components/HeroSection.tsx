import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Code, Terminal, Sparkles } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 bg-white">
      <div className="container-wide max-w-6xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-12 gap-0 border-2 border-slate-900 overflow-hidden">
          
          {/* TOP BAR / HEADER BLOCK (Full Width of the Hero Grid) */}
          <div className="col-span-12 border-b-2 border-slate-900 p-6 flex flex-wrap items-center justify-between gap-4 bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 border border-slate-900" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 border border-slate-900" />
              <div className="w-3 h-3 rounded-full bg-green-500 border border-slate-900" />
              <span className="ml-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                Status: Available for hire
              </span>
            </div>
            <div className="text-xs font-mono font-bold text-slate-400">
              LOCATION: {portfolioConfig.contactInfo?.location?.toUpperCase() || "REMOTE"}
            </div>
          </div>

          {/* LEFT CONTENT: THE IDENTITY (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-slate-900 space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85]">
                {portfolioConfig.name?.split(' ')[0]}<br />
                <span className="text-blue-600">
                  {portfolioConfig.name?.split(' ')[1] || "DEV"}
                </span>
              </h1>
              <h2 className="inline-block px-4 py-1 border-2 border-slate-900 bg-yellow-300 text-slate-900 font-bold uppercase tracking-tighter transform -rotate-1">
                {portfolioConfig.title}
              </h2>
            </div>

            {/* BIO BENTO - Structured like the Education view but sharper */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 border-2 border-slate-900">
                <Terminal size={20} className="mb-3 text-blue-600" />
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  {portfolioConfig.bio}
                </p>
              </div>
              <div className="p-4 bg-blue-600 text-white border-2 border-slate-900 flex flex-col justify-between">
                <Sparkles size={20} className="mb-3 text-blue-200" />
                <p className="text-xs font-black uppercase tracking-widest">
                  Crafting experiences through clean code & logic.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <Button asChild className="h-14 px-10 rounded-none bg-slate-900 text-white hover:bg-blue-600 border-2 border-slate-900 transition-colors font-black text-lg">
                <a href={portfolioConfig.resumeLink} target="_blank" rel="noopener noreferrer">
                  VIEW RESUME <ArrowUpRight className="ml-2" />
                </a>
              </Button>
              <SocialLinks />
            </div>
          </div>

          {/* RIGHT: THE PORTRAIT (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col">
            {/* IMAGE BLOCK */}
            <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 border-b-2 border-slate-900 lg:border-b-0">
               <div className="relative w-full aspect-square border-2 border-slate-900 bg-white overflow-hidden group">
                  <img 
                    src="/profile.jpg" 
                    alt={portfolioConfig.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Decorative corner tag */}
                  <div className="absolute bottom-0 right-0 bg-slate-900 text-white px-3 py-1 font-mono text-[10px] font-bold">
                    IMG_01.JPG
                  </div>
               </div>
            </div>
            
            {/* SUB-BLOCK: SKILLS QUICK VIEW */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <Code size={20} className="text-blue-400" />
                 <span className="text-xs font-black uppercase tracking-tighter">Core Stack</span>
               </div>
               <div className="flex -space-x-2">
                 {/* Decorative Skill Icons or empty circles */}
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                     {i}
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
