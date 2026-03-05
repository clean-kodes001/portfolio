import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Badge } from '@/components/ui/badge';
import { User, Rocket, Cpu, Sparkles } from 'lucide-react';

const AboutSection = () => {
  // Assuming portfolioConfig.skills is an array of strings like ["React", "Node.js", ...]
  const skills = portfolioConfig.skills || [];

  return (
    <section id="about" className="py-20 bg-slate-50/50">
      <div className="container-wide max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: THE STORY (7 Columns) */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <User size={14} /> About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Engineering digital <span className="text-blue-600">solutions</span> with passion.
            </h2>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>{portfolioConfig.about}</p>
              <p>
                I thrive at the intersection of design and development, pushing the boundaries of what's possible on the web. I'm currently looking for new challenges where I can bring value to a forward-thinking team.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
               <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25">
                Let's Talk <Rocket size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: THE SKILLS (5 Columns) */}
          <div className="md:col-span-5 relative">
            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-slate-900 text-white">
                  <Cpu size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Technical Stack</h3>
              </div>

              {/* SKILL TAGS CLOUD */}
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group relative px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 font-medium text-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:border-blue-400 hover:text-blue-600 hover:shadow-md cursor-default flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors" />
                    {skill}
                  </div>
                ))}
              </div>

              {/* "Extra" callout */}
              <div className="mt-10 p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-3">
                <Sparkles size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-xs text-blue-800 leading-relaxed">
                  Always learning. Currently exploring new ways to optimize <strong>performance</strong> and <strong>scalability</strong> in modern web apps.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
