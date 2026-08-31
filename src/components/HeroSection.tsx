import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowRight, MapPin, GraduationCap, Calendar, ChevronDown, ChevronUp, Code, Database, Server, Layout, Cloud, Smartphone, GitBranch, Terminal } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Skills organized by category
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <Layout size={14} />,
      skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      name: 'Backend',
      icon: <Server size={14} />,
      skills: ['Node.js', 'PHP', 'Java', 'REST APIs', 'API Integration']
    },
    {
      name: 'Database',
      icon: <Database size={14} />,
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      name: 'DevOps & Tools',
      icon: <Cloud size={14} />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux']
    }
  ];

  // Initial visible skills (first 6)
  const initialSkills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Git'];
  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const displayedSkills = showAllSkills ? allSkills : initialSkills;

  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* LEFT: PHOTO - Smaller */}
          <div className="lg:w-[280px] order-1 flex-shrink-0">
            <div className="relative">
              <div className="relative w-48 h-48 md:w-[260px] md:h-[260px] rounded-full overflow-hidden border border-gray-100 bg-gray-50">
                <img
                  src="/myprofilepic.jpeg"
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[8px] font-medium text-gray-600">Available</span>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="flex-1 space-y-5 order-2 min-w-0">
            
            {/* NAME */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] text-gray-900 leading-[0.92]">
              {portfolioConfig.name}
            </h1>

            {/* TITLE */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-gray-300 flex-shrink-0" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                Full-Stack Software Engineer
              </span>
            </div>

            {/* BIO */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
              Full-Stack Software Engineer turning ideas into real, scalable web & mobile apps since 2019.
            </p>

            {/* QUICK INFO - Education & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 px-4 py-3 bg-gray-50/70 border border-gray-100/80">
                <GraduationCap size={16} className="text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Education
                  </p>
                  <p className="text-xs font-medium text-gray-800 truncate">
                    B.Tech Computer Science
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    FUT Minna
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 px-4 py-3 bg-gray-50/70 border border-gray-100/80">
                <MapPin size={16} className="text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-xs font-medium text-gray-800">
                    Open to Relocation
                  </p>
                  <p className="text-xs text-gray-500">
                    Lafia, Nasarawa
                  </p>
                </div>
              </div>
            </div>

            {/* SKILLS SECTION - With Accordion */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {displayedSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* View More/Less Button */}
              {allSkills.length > initialSkills.length && (
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showAllSkills ? (
                    <>
                      Show Less
                      <ChevronUp size={14} strokeWidth={1.5} />
                    </>
                  ) : (
                    <>
                      View All Skills ({allSkills.length})
                      <ChevronDown size={14} strokeWidth={1.5} />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href={portfolioConfig.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-xs font-medium"
              >
                View Resume
                <ArrowRight 
                  size={14} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                  strokeWidth={2}
                />
              </a>
              
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-medium text-gray-300 uppercase tracking-wider">
                  Connect
                </span>
                <SocialLinks />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
