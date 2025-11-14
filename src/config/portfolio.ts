

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
    text?: string;
    website?: string;
    web_app?: string;
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
  name: "Dickson Anoibi",
  title: "Software Engineer",
  email: "anoibidickson@gmail.com",
  location: "Minna, Niger State",
  bio: "I have a strong background in both frontend and backend technologies, with over 5yrs of experience and a graduate of Computer Science (FUTMINNA, Nigeria), with a focus on React, Node.js, PHP and Java.",
  about: `I'm a fullstack developer with over 4 years of experience in designing and implementing scalable applications.
`,
  
  // Resume/CV
  resumeLink: "/Resume.pdf",
  
  // Social Links
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Dickson2020",
      icon: "github"
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+2348146360057",
      icon: "whatsapp"
    }
  ] as SocialLink[],
  
  // Skills
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "Reactjs & Nextjs", level: 90 },
        { name: "ReactNative", level: 90 },
        { name: "Java Mobile Android", level: 85 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 70 },
        { name: "Mysql", level: 90 },
        { name: "Php", level: 97 },
      ]
    },
    {
      category: "Other",
      skills: [
        { name: "Git", level: 90 },
        { name: "AI Automation", level: 70 },
        { name: "Java & Android Studio Mobile Development", level: 70 },
      ]
    }
  ] as SkillCategory[],
  
  // Experience
  experiences: [
    {
      title: "Senior Frontend & Backend Developer",
      company: "Coinly Limited",
      location: "Minna, Nigeria",
      startDate: "Nov 2024",
      endDate: "Present",
      description: "Lead developer for the company's offical mobile app",
      bullets: [
        "Developed and maintained major features of the company's mobile app using React Native and TypeScript",
        "Collaborated with designers and backend developers to create a seamless user experience",
        "Optimized app performance and reduced load times by 25% through code splitting and lazy loading",
        "Implemented unit and integration tests using Jest and React Testing Library, increasing code coverage to 85%",
        "Mentored junior developers and conducted code reviews to ensure best practices"],
      skills: ["React Native", "TypeScript", "Redux", "MYSQL", "PHP"]
    }
  
  ] as Experience[],
  
  // Projects
  projects: [
     {
      id: "kudipoint",
      title: "Kudipoint Mobile App(Available on Playstore) - 2025",
      description: "A full-featured mobile app for Send & Receive money, gift cards trade, bill payments and more",
      tags: ["React Native", "TypeScript"],
      image: "/Screenshot_12-11-2025_74140_play.google.com.jpeg",
      link: {
        website: "https://play.google.com/store/apps/details?id=com.kudipointfinance.finance&pli=1",
        text:'Install App',
         web_app: "https://kudipoint.ng/",

      },
      featured: true 
    },
     {
      id: "maize-farm-disease-detector",
      title: "Intelligent A.I Hardware System for Detecting and Curing Maize Crop Diseases",
      description: "A smart, AI-powered physical system designed to detect and treat maize leaf diseases such as blight, rust, and leaf spot. The system integrates computer vision, Raspberry Pi, and chemical spraying actuators to automatically identify infected maize leaves using a trained AI model and apply targeted treatment through controlled chemical dispensing.",
      tags: ["Raspberry PI","Python3","Sci-kit learn","M.L","A.I"],
      image: "/Screenshot_12-11-2025_93620_.jpeg",
      link: {
        website: "/thesis.pdf",
        web_app: "/fork-of-98-accurate-maize-leaf-disease-detect.ipynb",
        text:'Thesis & Documentation',
        text2:'Kaggle Notebook (Dataset & Trained Models)'
      },
      featured: true 
    },

    {
      id: "coinly",
      title: "Coinly Mobile App(Available on Apple AppStore) - 2024",
      description: "A full-featured mobile app for bill payments, cryptocurrency transactions, buy & sell cryptocurrencies, and more.",
      tags: ["React Native", "PHP", "MYSQL","TypeScript", "HTML5", "CSS3"],
      image: "/coinly.jpg",
      link: {
        website: "https://coinlyapp.io",
        text:'Visit website'
      },
      featured: true 
    },

    {
      id: "swift",
      title: "Swift Rider & Package Delivery App(2025) - (App under Playstore Review) - Web app available",
      description: "A full-featured mobile app for booking ride within Nigeria, especially Niger State, package & parcel delivery and bill payments.",
      tags: ["React Native", "PHP", "MYSQL","TypeScript", "React"],
      image: "/swift.jpg",
      link: {
        website: "https://swiftpickup.com.ng/",
        web_app: "https://app.swiftpickup.com.ng/",
      },
      featured: true 
    },

   
    {
      id: "webjs",
      title: "WebJS GUI Library(2022)",
      description: "WebJS is a JavaScript library for developing Extremely fast webpages, writing lesser HTML code The primary aim of WebJS is to enable web developers with little knowledge of JavaScript to be able to develop webpages with heavy functions by importing and using it.",
      tags: ["Vanilla JavaScript","HTML5","CSS3"],
      image: "/Screenshot_25-8-2025_18448_github.com.jpeg",
      link: {
        live: "https://github.com/Dickson2020/WebJS-Library",
        website: "https://github.com/Dickson2020/WebJS-Library",
        text:'Github Repository'
      },
      featured: true 
    },

    

    ,
    /*
    {
      id: "cheepay",
      title: "Cheepay Mobile App(2025)",
      description: "A full-featured mobile app for bill payments, send & receive money, social media promotions, and more.",
      tags: ["React Native", "PHP", "MYSQL","TypeScript", "HTML5", "CSS3"],
      image: "/cheepay-ads.png",
      link: {
        live: "https://expo.dev/artifacts/eas/nEAuWCSsjkhtjrzBkECvBz.apk",
        website: "https://cheepayapp.top",
        text:'Download app'
      },
      featured: true
    }, */
   
    {
      id: "ghost",
      title: "Ghost Team Developer Dashboard(2023)",
      description: "A platform interface designed to help developers collaborate on different projects in realtime",
      tags: ["Reactjs","Tailwind CSS","PostgreSQL"],
      image: "/Screenshot_3-7-2025_72836_ghost-vert.vercel.app.jpeg",
      link: {
        live: "https://github.com/Dickson2020/ghost-project",
        website: "https://ghost-vert.vercel.app/",
        text:'Github Repository'
      },
      featured: true
    },

  
   
  ] as Project[],
  
  // Education
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Federal University of Technology",
      location: "Minna, Niger State, Nigeria",
      startDate: "Nov 2019",
      endDate: "Feb 2025",
      description: "Graduated with 2nd class honors. Focused on software engineering, problem solving and database design."
    },
    {
      degree: "W3Scools Full-Stack Web Development Bootcamp",
      institution: "Coding Academy",
      location: "Online",
      startDate: "Jan 2017",
      endDate: "Present",
      description: "Intensive program covering modern web development technologies."
    }
  ] as Education[],
  
  // Contact Info
  contactInfo: {
    email: "anoibidickson@gmail.com",
    phone: "+234 814 636 0057",
    location: "Minna, Niger"
  }
};
