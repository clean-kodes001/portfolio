import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight, Dot } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gray-300" />
            <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-[-0.03em] text-gray-900 leading-[0.9] mb-4">
            Professional <span className="font-medium">Journey</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            A timeline of my professional growth, key roles, and academic foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: WORK EXPERIENCE */}
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <Briefcase size={18} className="text-gray-400" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                Work History
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-2 top-2 bottom-0 w-px bg-gray-200" />

              <div className="space-y-12">
                {portfolioConfig.experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-gray-300 bg-white" />
                    
                    <div className="space-y-3">
                      {/* Date */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-gray-400 tracking-wide">
                          {exp.startDate} — {exp.endDate}
                        </span>
                        {exp.location && (
                          <>
                            <span className="w-px h-3 bg-gray-200" />
                            <span className="flex items-center gap-1 text-xs text-gray-400">
                              <MapPin size={12} strokeWidth={1.5} />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 tracking-[-0.02em]">
                          {exp.title}
                        </h4>
                        <p className="text-base font-light text-gray-500">
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                        {exp.description}
                      </p>

                      {/* Bullets */}
                      {exp.bullets && (
                        <ul className="space-y-2 pt-1">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                              <Dot size={16} className="text-gray-300 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Skills */}
                      {exp.skills && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: EDUCATION */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap size={18} className="text-gray-400" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioConfig.education.map((edu, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <span className="text-[10px] font-medium text-gray-400 tracking-wider uppercase">
                    {edu.startDate} — {edu.endDate}
                  </span>
                  <h4 className="text-base font-medium text-gray-900 mt-1.5">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-light text-gray-500">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Connect Card - Minimal */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-400 tracking-wider uppercase">
                Explore More
              </p>
              <p className="text-sm text-gray-500 mt-1">
                View my complete skill set in the{' '}
                <a href="#projects" className="text-gray-900 hover:text-gray-500 transition-colors">
                  projects section
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
