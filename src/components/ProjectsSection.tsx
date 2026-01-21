import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Layout, Globe, AppWindow } from 'lucide-react';
import { cn } from "@/lib/utils"; // Standard shadcn utility

const ProjectsSection = () => { 
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState(portfolioConfig.projects);
  const sectionRef = useRef<HTMLElement>(null);
  
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

  // Intersection Observer for stagger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animateItems = entry.target.querySelectorAll('.stagger-item');
            animateItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
                item.classList.remove('opacity-0', 'translate-y-10');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, [visibleProjects]);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            A showcase of my recent work, ranging from web applications to creative experiments.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tag)}
              className={cn(
                "capitalize transition-all duration-300 rounded-full px-6",
                activeFilter === tag ? "shadow-md scale-105" : "hover:bg-primary/5"
              )}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group flex flex-col h-full stagger-item transition-all duration-500 border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm opacity-0 translate-y-10 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container with Overlay */}
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <CardHeader className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary/70 bg-primary/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {project.link?.website && (
                  <Button asChild variant="outline" size="sm" className="w-full justify-center gap-2 border-slate-200 dark:border-slate-700">
                    <a href={project.link.website} target="_blank" rel="noopener noreferrer">
                      <Globe size={14} />
                      <span className="truncate">{project.link.text || 'Website'}</span>
                    </a>
                  </Button>
                )}
                {project.link?.web_app && (
                  <Button asChild variant="outline" size="sm" className="w-full justify-center gap-2 border-slate-200 dark:border-slate-700">
                    <a href={project.link.web_app} target="_blank" rel="noopener noreferrer">
                      <AppWindow size={14} />
                      <span className="truncate">{project.link.text2 || 'App'}</span>
                    </a>
                  </Button>
                )}
                {project.link?.live && (
                  <Button asChild size="sm" className="col-span-2 w-full justify-center gap-2 shadow-sm">
                    <a href={project.link.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      <span>Live Preview</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="text-center py-20">
            <Layout className="mx-auto text-muted-foreground mb-4 opacity-20" size={48} />
            <p className="text-xl text-muted-foreground">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
