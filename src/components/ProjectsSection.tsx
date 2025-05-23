
import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(portfolioConfig.projects);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Extract unique tags from all projects
  const allTags = ['all', ...new Set(portfolioConfig.projects.flatMap(project => project.tags))];

  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(portfolioConfig.projects);
    } else {
      setVisibleProjects(
        portfolioConfig.projects.filter(project => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animateItems = entry.target.querySelectorAll('.stagger-item');
            animateItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('appear');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [visibleProjects]);

  return (
    <section id="projects" ref={sectionRef} className="bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading animate-appear">My Projects</h2>
          <p className="section-subheading mx-auto animate-appear">
            Here's a selection of my recent work and side projects.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 animate-appear">
          {allTags.map((tag, index) => (
            <Button
              key={index}
              variant={activeFilter === tag ? "default" : "outline"}
              className={activeFilter === tag ? "bg-portfolio-600" : ""}
              onClick={() => setActiveFilter(tag)}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Card key={project.id} className="card-hover flex flex-col h-full stagger-item">
              {project.image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.link?.website && (
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={project.link.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Visit website</span>
                    </a>
                  </Button>
                )}
                {project.link?.live && (
                  <Button asChild size="sm">
                    <a 
                      href={project.link.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>{project.link.type} </span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
