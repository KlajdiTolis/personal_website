import { Experience, SkillCategory, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Klajdi Tolis",
  title: "Full Stack Developer",
  email: "info@tolis.al",
  phone: "+355 693350203",
  linkedin: "https://al.linkedin.com/in/klajdi-tolis-b2939b225",
  github: "https://github.com/KlajdiTolis",
  location: "Tirana, Albania",
  languages: [
    { name: "Albanian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Italian", level: "Basic" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "teamsystem",
    company: "TeamSystem",
    role: "Frontend Developer",
    period: "May 2023 - Present",
    description: [
      "Modernized legacy jQuery systems into scalable React/TypeScript applications.",
      "Engineered reusable component libraries with Storybook and Tailwind CSS.",
      "Ensured high performance and accessibility across enterprise-grade ERP modules.",
      "Worked in an Agile environment using Jira and GitLab CI/CD pipelines."
    ],
    techStack: [
      "React", 
      "TypeScript", 
      "Zustand", 
      "React Query", 
      "Tailwind CSS",
      "jQuery",
      "PHP",
      "Storybook",
      "GitLab CI/CD",
      "Jira"
    ],
    url: "https://www.teamsystem.com/",
    projects: [
      {
        title: "ERP Module Modernization",
        description: "Re-architecting core accounting modules from legacy stacks to modern React applications.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Enterprise Design System",
        description: "Developing a unified UI library with Storybook to ensure visual consistency across all TeamSystem products.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "icharge",
    company: "iCharge.app",
    role: "Tech Lead",
    period: "Nov 2023 - Aug 2025",
    description: [
      "Developed a full-stack EV charging platform for drivers and fleet operators across Albania.",
      "Managed real-time charger communication using Node.js, Express.js, and WebSockets.",
      "Integrated secure payment processing with Stripe.",
      "Optimized power distribution with load balancing algorithms and utilized MongoDB, Firebase, and Redis."
    ],
    techStack: [
      "Next.js", 
      "TypeScript", 
      "Node.js", 
      "Express.js",
      "Socket.io", 
      "MongoDB",
      "Redis",
      "GCP", 
      "Stripe",
      "Firebase",
      "Cloudflare"
    ],
    url: "https://icharge.app/",
    projects: [
      {
        title: "EV Portal",
        description: "Real-time charger discovery and payment gateway integration.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "applay",
    company: "APPlay",
    role: "Full Stack Developer",
    period: "Aug 2023 - Present",
    description: [
      "Developed and maintained a cross-platform smart TV application supporting LG webOS, Android TV, and Samsung Tizen platforms.",
      "Built responsive TV interfaces using SolidJS optimized for large-screen experiences.",
      "Developed admin dashboard and content management features using React Admin, React.js, TanStack Query and shadcn/ui.",
      "Created Node.js backend services to handle TV-specific APIs, content delivery, and user authentication.",
      "Optimized application performance for resource-constrained TV environments and managed real-time state synchronization."
    ],
    techStack: [
      "SolidJS",
      "React",
      "React Admin",
      "TanStack Query",
      "shadcn/ui",
      "Node.js",
      "webOS",
      "Tizen",
      "Android TV",
      "IPTV/OTT"
    ],
    url: "https://applay.cloud/",
    projects: [
      {
        title: "Cross-Platform TV App",
        description: "Unified media streaming application for webOS, Tizen, and Android TV ecosystems.",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Content Management Hub",
        description: "Scalable admin dashboard for real-time content operations and user management.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "blitz",
    company: "Blitz Carwash",
    role: "Full Stack Developer & Mobile Lead",
    period: "2022 - 2023",
    description: [
      "Architected and developed a comprehensive management platform to monitor and control car washing machines in real-time.",
      "Developed a cross-platform mobile application using Expo Go for staff to manage operations and machine status on-site.",
      "Built a robust backend with Node.js and Express to handle machine telemetry and remote triggers.",
      "Implemented a responsive React frontend for business analytics and machine state visualization."
    ],
    techStack: [
      "React",
      "React Native",
      "Expo Go",
      "Node.js",
      "Express.js",
      "Socket.io",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS",
      "State Management",
      "Real-time Monitoring"
    ],
    url: "https://blitzcarwash.al/",
    projects: [
      {
        title: "Blitz Management Platform",
        description: "Unified dashboard for machine control and operational monitoring.",
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Staff Mobile App",
        description: "Expo-based mobile solution for real-time on-field machine management.",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "magoware",
    company: "Magoware",
    role: "Frontend Developer",
    period: "June 2021 - May 2023",
    description: [
      "Contributed to the development of IPTV and OTT solutions with a focus on modern frontend architectures.",
      "Built responsive user interfaces using React, React Admin, and Material-UI (MUI).",
      "Collaborated with backend teams using Node.js and NestJS frameworks.",
      "Gained experience with cloud infrastructure on Google Cloud Platform (GCP)."
    ],
    techStack: [
      "React", 
      "React Admin",
      "MUI", 
      "Node.js",
      "NestJS", 
      "Firebase",
      "GCP",
      "Redis",
      "IPTV/OTT Tech"
    ],
    url: "https://www.magoware.tv/",
    projects: [
      {
        title: "OTT Web Player",
        description: "Optimized video streaming interface for cross-browser compatibility.",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: [
      "React", 
      "Next.js",
      "Redux",
      "SolidJS",
      "Android TV",
      "webOS",
      "Tizen",
      "React Native",
      "Expo",
      "TypeScript", 
      "Tailwind CSS",
      "Shadcn",
      "Zustand",
      "TanStack Query", 
      "React Admin",
      "MUI",
      "React Router",
      "React DnD",
      "Chart.js",
      "Figma"
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "NestJS", 
      "Express.js", 
      "Socket.io", 
      "OCPP 1.6/2.0 Integration", 
      "Machine Telemetry & Control", 
      "Stripe Payments",
      "PostgreSQL", 
      "MongoDB", 
      "Redis", 
      "PHP",
      "REST & GraphQL"
    ]
  },
  {
    title: "AI & Productivity",
    skills: [
      "Cursor",
      "ChatGPT",
      "Google AI Studio",
      "Claude",
      "Gemini API",
      "Midjourney",
      "Vercel V0",
      "GitHub Copilot",
      "DeepSeek",
      "AI Prompt Engineering"
    ]
  },
  {
    title: "Architecture & DevOps",
    skills: [
      "Load Balancing",
      "Power Distribution",
      "Google Cloud (GCP)", 
      "Firebase Realtime DB", 
      "Docker", 
      "Cloudflare", 
      "IPTV / OTT Architecture",
      "GitLab CI/CD", 
      "Jira / Agile"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc. in Computer Science",
    school: "Polytechnic University of Tirana",
    period: "2023 - 2025"
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "Polytechnic University of Tirana",
    period: "2020 - 2023"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "TeamSystem Conference (Milano, Italy, 2025)" },
  { name: "2nd Place - TeamSystem Hackathon (Rimini, Italy)" },
  { name: "OCPP 1.6/2.0 Integration Certification" },
  { name: "Microsoft Azure AZ-204 (Online)" },
  { name: "Microsoft Azure AZ-900 (Online)" },
  { name: "TeamSystem Conference (Rimini, Italy, 2024)" },
  { name: "TeamSystem Conference (Pesaro, Italy, 2023)" }
];
