
import { StaticImageData } from "react-router-dom";

export interface Skill {
  name: string;
  level: number; // 1-5 or 1-100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string; // Format: "MMM YYYY" e.g. "Jan 2020"
  endDate: string | "Present";
  description: string;
  bullets?: string[];
  skills?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: {
    live?: string;
    github?: string;
  };
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description?: string;
}

// Main configuration for the portfolio
export const portfolioConfig = {
  // Personal Info
  name: "John Doe",
  title: "Software Developer",
  email: "hello@johndoe.dev",
  location: "San Francisco, CA",
  bio: "I'm a passionate software developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
  about: `I'm a fullstack developer with over 5 years of experience in designing and implementing scalable applications.
  I love solving complex problems with clean, efficient code, and I'm always eager to learn new technologies. 
  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes.`,
  
  // Resume/CV
  resumeLink: "https://example.com/resume.pdf",
  
  // Social Links
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    }
  ] as SocialLink[],
  
  // Skills
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ]
    },
    {
      category: "Other",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
      ]
    }
  ] as SkillCategory[],
  
  // Experience
  experiences: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      description: "Lead developer for the company's flagship product",
      bullets: [
        "Developed and maintained major features of the company's flagship product",
        "Led a team of 3 developers to deliver projects on time and within scope",
        "Implemented new React architecture resulting in 35% performance improvement",
        "Improved application testing with Jest, increasing coverage from 45% to 80%"
      ],
      skills: ["React", "TypeScript", "Redux", "Jest", "Webpack"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description: "Built responsive web applications for various clients",
      bullets: [
        "Built responsive web applications with React and Next.js for 15+ clients",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Reduced bundle size by 40% through code splitting and lazy loading",
        "Participated in code reviews and mentored junior developers"
      ],
      skills: ["React", "JavaScript", "CSS3", "HTML5"]
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Vision",
      location: "Remote",
      startDate: "Jun 2017",
      endDate: "Feb 2018",
      description: "Assisted in developing company website and internal tools",
      bullets: [
        "Assisted in developing company website and internal tools",
        "Implemented responsive designs for mobile and tablet devices",
        "Fixed bugs and improved site performance by 25%",
        "Collaborated with the marketing team to improve user engagement"
      ],
      skills: ["JavaScript", "HTML", "CSS", "jQuery"]
    }
  ] as Experience[],
  
  // Projects
  projects: [
    {
      id: "project-1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with shopping cart, payment processing, and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      link: {
        live: "https://example.com/project1",
        github: "https://github.com/username/project1"
      },
      featured: true
    },
    {
      id: "project-2",
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and user authentication.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg",
      link: {
        live: "https://example.com/project2",
        github: "https://github.com/username/project2"
      },
      featured: true
    },
    {
      id: "project-3",
      title: "Weather Dashboard",
      description: "A weather forecasting dashboard that visualizes data from multiple sources with interactive charts.",
      tags: ["TypeScript", "Chart.js", "API Integration"],
      image: "/placeholder.svg",
      link: {
        github: "https://github.com/username/project3"
      },
      featured: true
    },
    {
      id: "project-4",
      title: "Personal Finance Tracker",
      description: "A finance tracking application that helps users monitor expenses and visualize spending patterns.",
      tags: ["React", "D3.js", "PostgreSQL", "Express"],
      image: "/placeholder.svg",
      link: {
        live: "https://example.com/project4",
      },
      featured: false
    },
    {
      id: "project-5",
      title: "Social Media Dashboard",
      description: "A dashboard for social media managers to monitor and analyze engagement across multiple platforms.",
      tags: ["React", "Redux", "Node.js", "OAuth"],
      image: "/placeholder.svg",
      link: {
        github: "https://github.com/username/project5"
      },
      featured: false
    }
  ] as Project[],
  
  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      startDate: "Sep 2013",
      endDate: "May 2017",
      description: "Graduated with honors. Focused on web development and databases."
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Coding Academy",
      location: "Online",
      startDate: "Jan 2018",
      endDate: "Apr 2018",
      description: "Intensive program covering modern web development technologies."
    }
  ] as Education[],
  
  // Contact Info
  contactInfo: {
    email: "hello@johndoe.dev",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  }
};
