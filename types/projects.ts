export type Project = {
  slug: string;
  title: string;

  featured: boolean;

  category: string;
  domain: string;

  duration: string;
  client: string;

  image?: string;

  overview: string;
  problem: string;
  role: string;
  solution: string;
  impact: string;

  technologies: string[];
  features: string[];
  challenges: string[];
  icon?: string;
  gradient?: string;

  gallery?: string[];

  // NEW
  github?: string;
  live?: string;
  backend?: string;

  status?: "Completed" | "In Progress";

  teamSize?: string;
};