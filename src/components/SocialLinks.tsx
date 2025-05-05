
import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Github, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Twitter size={20} />,
  instagram: <Instagram size={20} />,
  website: <Globe size={20} />
};

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {portfolioConfig.socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-muted-foreground hover:text-portfolio-600 transition-colors"
          aria-label={link.name}
        >
          {iconMap[link.icon.toLowerCase()] || <Globe size={20} />}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
