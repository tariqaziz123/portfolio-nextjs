import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { projects } from "@/components/data/projects";

import ProjectCard from "./ProjectCard";
import FadeIn from "../Layout/FadeIn";

export default function Projects() {
  return (
    <FadeIn delay={0.3}>
      <section id="projects">
        <SectionTitle
          title="Projects"
          subtitle="Enterprise applications I've built across Travel Tech, Financial Services, Analytics, and Real-Time Collaboration."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}