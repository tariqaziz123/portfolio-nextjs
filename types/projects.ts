export type Project = {
  slug: string;
  title: string;
  featured: boolean;

  category: string;

  domain: string; // 👈 NEW

  duration: string;
  client: string;

  image?: string;
  icon?: string;
  gradient?: string;

  overview: string;
  problem: string;
  role: string;
  solution: string;
  impact: string;

  technologies: string[];
  features: string[];
  challenges: string[];

  gallery?: string[];
};