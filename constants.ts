import { Experience, SkillCategory, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Klajdi Tolis",
  title: "Full Stack Developer",
  email: "klajdi.tolis08@gmail.com",
  phone: "+355 693350203",
  linkedin: "https://al.linkedin.com/in/klajdi-tolis-b2939b225",
  github: "https://github.com/KlajdiTolis",
  location: "Tirana, Albania"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "teamsystem",
    company: "TeamSystem",
    role: "Frontend Developer (React/TypeScript)",
    period: "May 2023 – Present",
    description: [
      "Led the transition from a jQuery-based legacy system to a modern React stack, significantly improving system performance and maintainability.",
      "Collaborated with backend teams on PHP-based systems to optimize frontend architecture and ensure seamless integration.",
      "Managed tasks via Jira in an agile environment and utilized GitLab for source control and CI/CD pipelines."
    ],
    techStack: [
      "React", 
      "TypeScript", 
      "React Context API", 
      "Zustand", 
      "Tailwind CSS", 
      "React Hook Form", 
      "Storybook", 
      "React Query", 
      "Jira", 
      "GitLab"
    ],
    url: "https://www.teamsystem.com/",
    projects: [
      {
        title: "Legacy Modernization",
        description: "Migration of core business modules from jQuery to React/TypeScript.",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/32/50/68/325068a9-674b-b450-cb6c-0ed4790d1865/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/1200x630wa.png"
      }
    ]
  },
  {
    id: "icharge",
    company: "iCharge.app",
    role: "Tech Lead",
    period: "Nov 2023 – Aug 2025",
    description: [
      "Developed and maintained a full-stack EV charging platform for drivers and fleet operators across Albania.",
      "Built user interfaces with React.js, React Admin, and Material-UI; integrated Stripe for secure payments.",
      "Managed real-time charger communication using Node.js, Express.js, and WebSockets with Firebase Realtime Database.",
      "Optimized power distribution with load balancing algorithms and utilized MongoDB, Firebase, and Redis.",
      "Leveraged Google Cloud for scalable infrastructure and Cloudflare for security and CDN caching."
    ],
    techStack: [
      "React.js", 
      "Next.js", 
      "TypeScript", 
      "Node.js", 
      "Socket.io", 
      "MongoDB", 
      "Firebase RealTimeDB", 
      "Redis", 
      "GCP", 
      "Docker", 
      "Stripe",
      "Cloudflare"
    ],
    url: "https://icharge.app/",
    projects: [
      {
        title: "EV Driver Portal",
        description: "Real-time charger discovery and payment gateway integration.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Fleet Management",
        description: "Admin panel for large scale EV fleet monitoring and load balancing.",
        image: "https://cdn.prod.website-files.com/69078eea6f03503263d3efd5/690b2deeb9bff902eb6a1869_relume-522309.png"
      },
      {
        title: "Real-time Monitoring",
        description: "WebSocket-driven dashboard for live charger status updates.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "magoware",
    company: "Magoware",
    role: "Frontend Developer",
    period: "June 2021 – May 2023",
    description: [
      "Contributed to the development of IPTV and OTT solutions with a strong focus on frontend technologies.",
      "Built responsive user interfaces using React, React Admin, and Material-UI (MUI).", 
      "Collaborated with backend teams using Node.js and NestJS framework.",
      "Gained experience with infrastructure technologies like Redis, Firebase, and Google Cloud Platform (GCP)."
    ],
    techStack: [
      "React", 
      "MUI", 
      "IPTV/OTT", 
      "NestJS", 
      "React Context API", 
      "Zustand", 
      "Tailwind CSS", 
      "React Hook Form", 
      "Storybook", 
      "React Query"
    ],
    url: "https://www.magoware.tv/",
    projects: [
      {
        title: "OTT Web Player",
        description: "High-performance video player interface for web browsers.",
        image: "https://static.wixstatic.com/media/e18fa1_34e98278eeea4420a0d6fa4be496ed9a~mv2.png/v1/fill/w_587,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/home4.png"
      }
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native (Expo)", "TypeScript", "Redux", "Zustand", "React Query", "Material-UI", "Shadcn", "Figma", "Chart.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "WebSocket", "GraphQL", "RESTful APIs"]
  },
  {
    title: "Cloud & Database",
    skills: ["Firebase (Firestore, Auth, Functions)", "Google Cloud Platform (GCP)", "MongoDB", "Redis", "Cloudflare"]
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
  { name: "Microsoft Azure AZ-204 (Online)" },
  { name: "Microsoft Azure AZ-900 (Online)" },
  { name: "TeamSystem Conference (Rimini, Italy, 2024)" },
  { name: "TeamSystem Conference (Pesaro, Italy, 2023)" }
];