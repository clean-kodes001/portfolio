import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container-wide max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">
            Professional <span className="text-blue-600">Journey.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A timeline of my professional growth, key roles, and academic foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: WORK EXPERIENCE (8 Columns) */}
          <div className="md:col-span-8 relative">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-10">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Briefcase size={20} />
              </div>
              Work History
            </h3>

            {/* THE TRACK */}
            <div className="absolute left-[23px] top-[60px] bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-slate-100 to-transparent" />

            <div className="space-y-12">
              {portfolioConfig.experiences.map((exp, index) => (
                <div key={index} className="relative pl-14 group">
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1 w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center z-10 group-hover:border-blue-500 transition-colors duration-300 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {exp.startDate} — {exp.endDate}
                      </span>
                      {exp.location && (
                        <span className="flex items-center text-xs font-medium text-slate-400">
                          <MapPin size={12} className="mr-1" /> {exp.location}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-lg font-semibold text-slate-500">{exp.company}</p>
                    </div>

                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>

                    {exp.bullets && (
                      <ul className="space-y-3 pt-2">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                            <ChevronRight size={16} className="text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.skills?.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-50 text-slate-600 border-none hover:bg-blue-100 hover:text-blue-700 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: EDUCATION (4 Columns) */}
          <div className="md:col-span-4">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-10">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                <GraduationCap size={20} />
              </div>
              Education
            </h3>

            <div className="space-y-6">
              {portfolioConfig.education.map((edu, index) => (
                <div key={index} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-purple-500">
                    {edu.startDate} - {edu.endDate}
                  </span>
                  <h4 className="font-bold text-slate-900 mt-2 leading-tight">{edu.degree}</h4>
                  <p className="text-sm text-slate-500 mb-3">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-purple-100 pl-3">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Optional: Visual filler / Certifications mini-card */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <h4 className="font-bold mb-2">Looking for more?</h4>
              <p className="text-sm text-blue-100 mb-4">View my full technical skill set in the projects section.</p>
              <div className="h-1 w-12 bg-white/30 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
