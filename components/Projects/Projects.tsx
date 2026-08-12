import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { projects } from "@/components/data/projects";

import ProjectCard from "./ProjectCard";
import FadeIn from "../Layout/FadeIn";
import SectionWrapper from "../Common/SectionWrapper";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <FadeIn delay={0.3}>
      <SectionWrapper id="projects">
        <SectionTitle
          title="Projects"
          subtitle="Enterprise applications I've built across Travel Tech, Financial Services, Analytics, and Real-Time Collaboration."
        />

        {featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </SectionWrapper>
    </FadeIn>
  );
}