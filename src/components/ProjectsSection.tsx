import React, { useEffect, useState } from "react";
import { portfolioConfig } from "../config/portfolio";
import { ArrowUpRight, Filter, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: {
    live?: string;
    website?: string;
    web_app?: string;
    text?: string;
  };
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(portfolioConfig.projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allTags = ["all", ...new Set(portfolioConfig.projects.flatMap((p) => p.tags))];

  useEffect(() => {
    setVisibleProjects(
      activeFilter === "all"
        ? portfolioConfig.projects
        : portfolioConfig.projects.filter((p) => p.tags.includes(activeFilter))
    );
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          {/* LEFT: TITLE */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
                Projects
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light tracking-[-0.03em] text-gray-900 leading-[0.9]">
              Selected <span className="font-normal">Works</span>
            </h2>
            
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              "To protect intellectual property, I only showcase projects where explicit{' '}
              <span className="text-gray-700 font-medium">client consent</span> has been granted."
            </p>
          </div>

          {/* RIGHT: FILTER */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                    activeFilter === tag
                      ? "text-gray-900 bg-gray-100/80"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tag === "all" ? "All" : tag}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Filter size={14} strokeWidth={1.5} />
              {activeFilter === "all" ? "Filter" : activeFilter}
            </button>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-gray-50/50 border border-gray-100/80 overflow-hidden transition-all duration-300 hover:bg-gray-50"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <span className="text-xs font-light text-gray-300">No image</span>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-lg font-medium text-gray-900 tracking-[-0.02em]">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed mt-2 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                  {project.link?.live && (
                    <a
                      href={project.link.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200"
                    >
                      {project.link?.text || 'View Project'}
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </a>
                  )}
                  
                  {(project.link?.website || project.link?.web_app) && (
                    <a
                      href={project.link.website || project.link.web_app}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      Website
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {visibleProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sm text-gray-400">
              No projects found for "{activeFilter}"
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              View all projects
            </button>
          </div>
        )}
      </div>

      {/* MOBILE FILTER OVERLAY */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="text-sm font-medium text-gray-600">Filter Projects</span>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-1">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveFilter(tag);
                      setIsFilterOpen(false);
                    }}
                    className={`flex items-center justify-between py-4 px-4 text-sm font-medium transition-colors ${
                      activeFilter === tag
                        ? "bg-gray-100/80 text-gray-900"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <span>{tag === "all" ? "All Projects" : tag}</span>
                    {activeFilter === tag && (
                      <span className="w-5 h-px bg-gray-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
