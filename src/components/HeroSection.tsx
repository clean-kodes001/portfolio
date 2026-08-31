import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowRight, MapPin, GraduationCap, Calendar, Code, Database, Server, Terminal, Layout, Cloud, Layers, GitBranch, Cpu, Smartphone } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  // Complete skills profile
  const skillCategories = [
    {
      label: 'Frontend',
      skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'PHP', 'Java', 'REST APIs', 'API Integration']
    },
    {
      label: 'Database',
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      label: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux']
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT: PHOTO - Round */}
          <div className="lg:w-[380px] order-1">
            <div className="relative">
              {/* Geometric accents */}
              <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-gray-200 rounded-tl-2xl" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-2 border-r-2 border-gray-200 rounded-br-2xl" />
              
              {/* Photo container - Round */}
              <div className="relative w-64 h-64 md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50">
                <img
                  src="/myprofilepic.jpeg"
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Status ring */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-medium text-gray-600">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="flex-1 space-y-6 order-2">
            
            {/* STATUS INDICATOR */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 border border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-medium text-gray-500 tracking-[0.15em] uppercase">
                Full-Stack Software Engineer · Since 2019
              </span>
            </div>

            {/* NAME */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] text-gray-900 leading-[0.92]">
              {portfolioConfig.name}
            </h1>

            {/* TAGLINE */}
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-sm font-light text-gray-400 tracking-[0.15em] uppercase">
                Turning ideas into scalable solutions
              </span>
            </div>

            {/* BIO - Updated */}
            <p className="text-base text-gray-500 leading-relaxed max-w-xl border-l-2 border-gray-200 pl-6">
              Full-Stack Software Engineer turning ideas into real, scalable web & mobile apps since 2019.
            </p>

            {/* EDUCATION - Full details */}
            <div className="flex items-start gap-4 px-5 py-4 bg-gray-50/70 border border-gray-100/80">
              <div className="p-2 bg-white border border-gray-100">
                <GraduationCap size={18} className="text-gray-600" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                  Education
                </p>
                <p className="text-sm font-medium text-gray-800">
                  Bachelor of Technology in Computer Science
                </p>
                <p className="text-sm text-gray-500">
                  Federal University of Technology, Minna
                </p>
                <p className="text-xs text-gray-400">
                  Graduated
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-600">Open to Relocation</span>
              </div>
              <span className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-600">Lafia, Nasarawa (Temporary)</span>
              </div>
            </div>

            {/* SKILLS MARQUEE - Full profile */}
            <div className="w-full overflow-hidden bg-gray-50 border border-gray-100/80 py-3">
              <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
                {allSkills.concat(allSkills).map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-700">{skill}</span>
                    {index < allSkills.concat(allSkills).length - 1 && (
                      <span className="text-gray-300 text-xs">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION ROW */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <a
                href={portfolioConfig.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
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

        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
