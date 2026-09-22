
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
  isClientProject?: boolean;
  projectCategory?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Language' | 'Frontend' | 'Backend' | 'Cloud' | 'Tool';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface ExpertiseCard {
  title: string;
  description: string;
  iconName: string;
}

export type Theme = 'light' | 'dark';
