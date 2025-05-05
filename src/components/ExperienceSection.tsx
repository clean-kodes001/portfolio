
import React, { useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animateItems = entry.target.querySelectorAll('.stagger-item');
            animateItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('appear');
              }, index * 150);
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
  }, []);

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading animate-appear">My Experience</h2>
          <p className="section-subheading mx-auto animate-appear">
            A summary of my professional journey and accomplishments.
          </p>
        </div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5 hidden md:block"></div>
          
          {portfolioConfig.experiences.map((experience, index) => (
            <div key={index} className="stagger-item">
              <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:pl-8 md:pr-12 mb-8 md:mb-0 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute bg-portfolio-600 w-4 h-4 rounded-full border-4 border-background right-0 transform translate-x-1/2 top-8 z-10"></div>
                  
                  <Card className={`card-hover h-full ${index % 2 === 1 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={14} className="mr-1" />
                          <span>
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>
                        {experience.location && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin size={14} className="mr-1" />
                            <span>{experience.location}</span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="font-medium text-lg">
                        {experience.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{experience.description}</p>
                      {experience.bullets && experience.bullets.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-muted-foreground">
                          {experience.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      {experience.skills && experience.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="bg-muted/50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center stagger-item">Education</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioConfig.education.map((edu, index) => (
              <Card key={index} className="card-hover stagger-item">
                <CardHeader>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={14} className="mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="font-medium">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                {edu.description && (
                  <CardContent>
                    <p>{edu.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
