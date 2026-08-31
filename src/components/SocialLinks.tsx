import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  MessageCircle, 
  Facebook 
} from 'lucide-react';

// Icon Map - Clean, minimal styling
const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} strokeWidth={1.5} />,
  linkedin: <Linkedin size={18} strokeWidth={1.5} />,
  whatsapp: <MessageCircle size={18} strokeWidth={1.5} />,
  twitter: <Twitter size={18} strokeWidth={1.5} />,
  facebook: <Facebook size={18} strokeWidth={1.5} />,
  website: <Globe size={18} strokeWidth={1.5} />
};

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {portfolioConfig.socialLinks.map((link, index) => {
        const platform = link.icon.toLowerCase();
        const icon = iconMap[platform] || iconMap.website;

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
            aria-label={link.name}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
