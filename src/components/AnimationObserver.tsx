
import React, { useEffect, useRef } from 'react';

interface AnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  threshold?: number;
  rootMargin?: string;
}

const AnimationObserver: React.FC<AnimationObserverProps> = ({ 
  children, 
  className = '', 
  animation = 'animate-fade-in', 
  threshold = 0.2,
  rootMargin = '0px'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animation);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, threshold, rootMargin]);

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default AnimationObserver;
