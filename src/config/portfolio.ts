

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
  name: "Dickson Miracle",
  title: "Software Developer",
  email: "anoibidickson@gmail.com",
  location: "Minna, Niger State",
  bio: "I have a strong background in both frontend and backend technologies, with over 4yrs of experience and a graduate of Computer Science (FUTMINNA, Nigeria), with a focus on React, Node.js, PHP and Java.",
  about: `I'm a fullstack developer with over 4 years of experience in designing and implementing scalable applications.
`,
  
  // Resume/CV
  resumeLink: "/resume.pdf",
  
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
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=100070429810693",
      icon: "facebook"
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
    },
    {
      title: "Frontend & Backend Developer",
      company: "Cheepay payment solutions",
      location: "Minna, Niger state",
      startDate: "Oct 2023",
      endDate: "Present",
      description: "Built responsive web & mobile applications for the company's payment solutions.",
      bullets: [
        "Developed and maintained the mobile application using React Native, PHP for server side & API, and Mysql for robust database",
        "Worked closely with the design team to ensure a consistent and user-friendly interface",
        "Integrated third-party APIs for payment processing and data visualization",

       
      ],
      skills: ["React Native", "JavaScript", "CSS3", "HTML5", "PHP", "MYSQL"]
    },
  
  ] as Experience[],
  
  // Projects
  projects: [
    {
      id: "coinly",
      title: "Coinly Mobile App(Available on Apple AppStore) - 2024",
      description: "A full-featured mobile app for bill payments, cryptocurrency transactions, buy & sell cryptocurrencies, and more.",
      tags: ["React Native", "PHP", "MYSQL","TypeScript", "HTML5", "CSS3"],
      image: "/coinly.jpg",
      link: {
        live: "https://expo.dev/artifacts/eas/9X1tEhkMZVAbqDXX1d76s7.apk",
        website: "https://thecoinlyapp.com",
        text:'Download app'
      },
      featured: true 
    },

    {
      id: "swift",
      title: "Swift Rider & Package Delivery App(2025) - Web app available",
      description: "A full-featured mobile app for booking ride within Nigeria, especially Niger State, package & parcel delivery and bill payments.",
      tags: ["React Native", "PHP", "MYSQL","TypeScript", "React"],
      image: "/swift.jpg",
      link: {
        live: "https://expo.dev/artifacts/eas/eyAVxLSqMU2zXNLsoRJ8YC.apk",
        website: "https://swiftpickup.com.ng/",
        web_app: "https://app.swiftpickup.com.ng/",
        text:'Download APK(Android)'
      },
      featured: true 
    },

    ,
    {
      id: "dji-drone-app",
      title: "IOT Based DJI Drone App Android App(2025)",
      description: "A mobile app for controlling DJI drones, capturing photos, and recording videos.",
      tags: ["Java", "PHP", "Mysql DATABASE","Android"],
      image: "/dji-app.jpg",
      link: {
        live: "https://wa.me/+2348146360057?text=I%20want%20to%20download%20the%20DJI%20Drone%20App",
        text:'Request For Demo(Whatsapp)'
      },
      featured: true
    },
   
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
