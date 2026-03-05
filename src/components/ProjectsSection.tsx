import React, { useEffect, useRef, useState } from "react";
import { portfolioConfig } from "../config/portfolio";

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(portfolioConfig.projects);
  const sectionRef = useRef<HTMLElement | null>(null);

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
      ref={sectionRef}
      style={{
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* HEADER & FILTER BAR */}
      <div style={{ maxWidth: 1280, margin: "0 auto 80px auto" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
          <div>
            <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0f172a", marginBottom: 12, letterSpacing: "-0.03em" }}>
              Selected Works
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, maxWidth: 600 }}>
              A collection of digital products and experiments focused on user experience and performance.
            </p>
          </div>

          {/* MINIMALIST FILTER */}
          
          
        </div>
      </div>

      {/* PROJECT GRID */}
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              position: "relative",
              borderRadius: 32,
              background: "#f8fafc",
              border: "1px solid #f1f5f9",
              overflow: "hidden",
              transition: "transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* LARGE IMAGE AREA */}
            <div style={{ padding: 12 }}>
              <div style={{ 
                borderRadius: 24, 
                overflow: "hidden", 
                height: 300, 
                background: "#e2e8f0",
                position: "relative" 
              }}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
                {/* OVERLAY ACTION */}
                <div className="hover-overlay" style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(15, 23, 42, 0.05)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }} />
              </div>
            </div>

            {/* CONTENT AREA */}
            <div style={{ padding: "12px 32px 32px 32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a" }}>
                  {project.title}
                </h3>
                <div style={{ display: "flex", gap: 6 }}>
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p style={{ color: "#64748b", lineHeight: 1.6, fontSize: 16, marginBottom: 24 }}>
                {project.description}
              </p>

              {/* ACTION BUTTONS */}
              <div style={{ display: "flex", gap: 12 }}>
                {project.link?.live && (
                  <a
                    href={project.link.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "12px 24px",
                      borderRadius: 100,
                      background: "#0f172a",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "opacity 0.2s"
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
                      padding: "12px 24px",
                      borderRadius: 100,
                      background: "transparent",
                      border: "1px solid #e2e8f0",
                      color: "#0f172a",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: 14,
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
