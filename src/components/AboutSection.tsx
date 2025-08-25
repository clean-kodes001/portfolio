
import React, { useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';
import SkillBar from './SkillBar';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animateItems = entry.target.querySelectorAll('.animate-appear');
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
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-secondary/50" style={{marginTop:-20}}>
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-heading animate-appear">About Me</h2>
          <p className="section-subheading mx-auto animate-appear">
            Here you'll find more information about me, my skills, and what I do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 animate-appear">Get to know me!</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="animate-appear">{portfolioConfig.about}</p>
              <p className="animate-appear">
                I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me.
              </p>
            </div>
            <button className="btn-primary mt-6 animate-appear">
              <a href="#contact">Contact Me</a>
            </button>
          </div>

   
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
