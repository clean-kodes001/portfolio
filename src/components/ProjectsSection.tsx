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
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(
    portfolioConfig.projects
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allTags = [
    "all",
    ...new Set(portfolioConfig.projects.flatMap((p) => p.tags)),
  ];

  useEffect(() => {
    setVisibleProjects(
      activeFilter === "all"
        ? portfolioConfig.projects
        : portfolioConfig.projects.filter((p) =>
            p.tags.includes(activeFilter)
          )
    );
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
          {/* LEFT: TITLE */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs font-semibold text-gray-500 tracking-[0.2em] uppercase">
                Projects
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-light tracking-[-0.03em] text-gray-900 leading-[0.9]">
              Selected <span className="font-semibold">Works</span>
            </h2>

            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              To protect intellectual property, I only showcase projects where
              explicit{" "}
              <span className="text-gray-900 font-semibold">
                client consent
              </span>{" "}
              has been granted.
            </p>
          </div>

          {/* RIGHT: FILTER (desktop) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-wrap items-center gap-2">
              {allTags.map((tag) => {
                const isActive = activeFilter === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveFilter(tag)}
                    className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tag === "all" ? "All" : tag}
                  </button>
                );
              })}
            </div>

            {/* Mobile filter trigger */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gray-900 rounded-full"
            >
              <Filter size={14} strokeWidth={2.5} />
              {activeFilter === "all" ? "Filter" : activeFilter}
            </button>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-gray-50 rounded-3xl overflow-hidden"
            >
              {/* IMAGE — full image, never cropped */}
              <div className="relative w-full bg-white flex items-center justify-center p-4">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-56 flex items-center justify-center bg-gray-100 rounded-2xl">
                    <span className="text-xs font-medium text-gray-400">
                      No image
                    </span>
                  </div>
                )}
              </div>

              {/* CONTENT — everything always visible */}
              <div className="flex-1 flex flex-col p-6">
                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 tracking-[-0.02em] leading-snug">
                  {project.title}
                </h3>

                {/* TAGS — always visible, high contrast */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-900 bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* DESCRIPTION — always visible, full text */}
                <p className="text-sm text-gray-700 leading-relaxed mt-4 flex-1">
                  {project.description}
                </p>

                {/* LINKS — always visible, bold */}
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  {project.link?.live && (
                    <a
                      href={project.link.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-200"
                    >
                      {project.link?.text || "View Project"}
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </a>
                  )}

                  {(project.link?.website || project.link?.web_app) && (
                    <a
                      href={project.link.website || project.link.web_app}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-900 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      {project.link?.text || "Visit Website"}
                      <ArrowUpRight size={14} strokeWidth={2.5} />
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
            <p className="text-sm font-medium text-gray-500">
              No projects found for "{activeFilter}"
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
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
              <span className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Filter Projects
              </span>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-gray-900 hover:text-gray-500 transition-colors"
              >
                <X size={22} strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-2">
                {allTags.map((tag) => {
                  const isActive = activeFilter === tag;
                  return (
                    <button
                      key={tag}
                      onClick={() => {
                        setActiveFilter(tag);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center justify-between py-4 px-5 text-sm font-bold uppercase tracking-wider transition-colors rounded-2xl ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{tag === "all" ? "All Projects" : tag}</span>
                      {isActive && <span className="w-5 h-px bg-white" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
