import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  MessageCircle, 
  Facebook,
  ExternalLink 
} from 'lucide-react';

// Upgraded Icon Map with Brand-Specific Colors
const iconMap: Record<string, { icon: React.ReactNode, color: string, bg: string }> = {
  github: { 
    icon: <Github size={20} />, 
    color: "text-slate-900", 
    bg: "bg-slate-100" 
  },
  linkedin: { 
    icon: <Linkedin size={20} />, 
    color: "text-[#0077B5]", 
    bg: "bg-[#0077B5]/10" 
  },
  whatsapp: { 
    icon: <MessageCircle size={20} />, 
    color: "text-[#25D366]", 
    bg: "bg-[#25D366]/10" 
  },
  twitter: { 
    icon: <Twitter size={20} />, 
    color: "text-[#1DA1F2]", 
    bg: "bg-[#1DA1F2]/10" 
  },
  facebook: { 
    icon: <Facebook size={20} />, 
    color: "text-[#1877F2]", 
    bg: "bg-[#1877F2]/10" 
  },
  website: { 
    icon: <Globe size={20} />, 
    color: "text-blue-600", 
    bg: "bg-blue-50" 
  }
};

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {portfolioConfig.socialLinks.map((link, index) => {
        const platform = link.icon.toLowerCase();
        const config = iconMap[platform] || iconMap.website;

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 active:scale-90"
            aria-label={link.name}
          >
            {/* Background Layer - Solid color on hover, subtle tint normally */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${config.bg} group-hover:opacity-100 group-hover:scale-110 opacity-60 border border-transparent group-hover:border-current`} />
            
            {/* Icon Layer */}
            <div className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${config.color}`}>
              {config.icon}
            </div>

            {/* Premium Custom Tooltip (Anti-AI Look) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-tighter rounded-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none">
              {link.name}
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
