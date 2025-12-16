export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
  url?: string;
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