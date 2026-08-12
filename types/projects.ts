export interface Project {
  slug: string;
  title: string;
  featured: boolean;
  category: string;
  duration: string;
  client: string;

  icon: string;
  gradient: string;

  image?: string;
  gallery?: string[];

  overview: string;
  problem: string;
  role: string;
  solution: string;
  impact: string;

  technologies: string[];
  features: string[];
  challenges: string[];
}