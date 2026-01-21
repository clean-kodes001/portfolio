import React, { useEffect, useRef, useState } from "react";
import { portfolioConfig } from "../config/portfolio";

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(portfolioConfig.projects);
  const sectionRef = useRef<HTMLElement | null>(null);

  const allTags = ["all", ...new Set(portfolioConfig.projects.flatMap((p) => p.tags))];

  /* FILTER LOGIC */
  useEffect(() => {
    if (activeFilter === "all") {
      setVisibleProjects(portfolioConfig.projects);
    } else {
      setVisibleProjects(portfolioConfig.projects.filter((p) => p.tags.includes(activeFilter)));
    }
  }, [activeFilter]);

  /* STAGGER ANIMATION */
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const items = entry.target.querySelectorAll(".project-card");
          items.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).style.opacity = "1";
              (item as HTMLElement).style.transform = "translateY(0)";
            }, index * 100);
          });
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "100px 20px",
        background: "linear-gradient(180deg, #fdfeff 0%, #f1f5f9 100%)",
        minHeight: "100vh",
      }}
    >
      {/* HEADER SECTION */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span
          style={{
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 800,
            color: "#3b82f6",
            background: "rgba(59, 130, 246, 0.1)",
            padding: "8px 16px",
            borderRadius: 100,
          }}
        >
          Work Portfolio
        </span>
        
      </div>

     

      {/* PROJECT GRID */}
      <div
        style={{
          display: "grid",
          gap: 32,
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              background: "#fff",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid #f1f5f9",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02), 0 10px 15px -3px rgba(0,0,0,0.03)",
              opacity: 0,
              transform: "translateY(40px)",
              transition: "transform 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease",
              display: "flex",
              flexDirection: "column",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.02)";
            }}
          >
            {/* THUMBNAIL CONTAINER */}
            <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)",
                opacity: 0.8
              }} />
            </div>

            {/* CARD CONTENT */}
            <div style={{ padding: 28, flexGrow: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    fontSize: 11, fontWeight: 700, color: "#3b82f6",
                    background: "#eff6ff", padding: "4px 10px", borderRadius: 8
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1e293b", marginBottom: 10 }}>
                {project.title}
              </h3>

              <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 15 }}>
                {project.description}
              </p>
            </div>

            {/* CARD ACTION AREA */}
            <div
              style={{
                padding: "20px 28px 28px",
                display: "flex",
                gap: 12,
              }}
            >
              {(project.link?.website || project.link?.web_app) && (
                <a
                  href={project.link.website || project.link.web_app}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: 14,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                    color: "#0f172a",
                    fontWeight: 700,
                    fontSize: 14,
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#f1f5f9"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#f8fafc"}
                >
                  View Website
                </a>
              )}

              {project.link?.live && (
                <a
                  href={project.link.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1.2,
                    textAlign: "center",
                    padding: "12px",
                    borderRadius: 14,
                    background: "#0f172a",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow: "0 10px 15px -3px rgba(15, 23, 42, 0.2)"
                  }}
                >
                  Launch App
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <div style={{ textAlign: "center", marginTop: 100, color: "#94a3b8", fontSize: 18 }}>
          No projects matched your selection.
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;