export interface Project {
  title: string;
  description: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
  url?: string;
  projects?: Project[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}