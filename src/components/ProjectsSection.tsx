import React, { useEffect, useState } from "react";
import { portfolioConfig } from "../config/portfolio";

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(portfolioConfig.projects);

  const allTags = ["all", ...new Set(portfolioConfig.projects.flatMap((p) => p.tags))];

  useEffect(() => {
    setVisibleProjects(
      activeFilter === "all" 
        ? portfolioConfig.projects 
        : portfolioConfig.projects.filter((p) => p.tags.includes(activeFilter))
    );
  }, [activeFilter]);

  return (
    <section
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        width: "100%",
        padding: "60px 0", // Vertical padding only
        overflowX: "hidden", // Safety net
      }}
    >
      {/* HEADER & FILTER BAR - Wrapped in a centered container */}
      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto 40px auto", 
        padding: "0 20px", // Standard side padding
        boxSizing: "border-box" 
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
  {/* LEFT: TITLE & SUBTEXT */}
  <div className="space-y-4">
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full border border-slate-200">
      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Portfolio</span>
    </div>
    
    <h2 style={{ fontSize: "clamp(40px, 8vw, 64px)", fontWeight: 900, color: "#0f172a", lineHeight: 0.9, letterSpacing: "-0.05em" }}>
      Selected <span className="text-blue-600 italic font-serif">Works.</span>
    </h2>
    
    <p style={{ color: "#64748b", fontSize: 18, maxWidth: 500, lineHeight: 1.4, fontWeight: 500 }}>
      <p className="text-[13px] leading-snug font-bold text-slate-500 italic">
      "To protect intellectual property, I only showcase projects where explicit <span className="text-slate-900">client consent</span> has been granted."
    </p>
    </p>
  </div>

</div>

        
        </div>
      </div>

      {/* PROJECT GRID - Standard padding and mobile-friendly minmax */}
      <div
        style={{
          display: "grid",
          gap: "24px",
          // Changed to 280px so it fits even small iPhones (320px width)
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            style={{
              borderRadius: 24,
              background: "#f8fafc",
              border: "1px solid #f1f5f9",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              width: "100%", // Ensures it stays in the grid lane
            }}
          >
            {/* IMAGE AREA */}
            <div style={{ padding: 8 }}>
              <div style={{ 
                borderRadius: 18, 
                overflow: "hidden", 
                height: 240, 
                background: "#e2e8f0" 
              }}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </div>
            </div>

            {/* CONTENT AREA */}
            <div style={{ padding: "16px 20px 24px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0f172a" }}>
                  {project.title}
                </h3>
              </div>

              <p style={{ color: "#64748b", lineHeight: 1.6, fontSize: 14, marginBottom: 20 }}>
                {project.description}
              </p>

              {/* ACTION BUTTONS */}
              <div style={{ display: "flex", gap: 10 }}>
                {project.link?.live && (
                  <a
                    href={project.link.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 12,
                      background: "#0f172a",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                  {project?.link?.text ?? 'Get Access'}
                  </a>
                )}
                {(project.link?.website || project.link?.web_app) && (
                  <a
                    href={project.link.website || project.link.web_app}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 12,
                      background: "#fff",
                      border: "1px solid #e2e8f0",
                      color: "#0f172a",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                                      {project?.link?.text ?? 'Get Access'}

                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
