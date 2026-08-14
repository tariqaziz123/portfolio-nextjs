"use client";

import { useMemo, useState } from "react";

import ProjectFilter from "./ProjectFilter";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { projects } from "@/components/data/projects";

import ProjectCard from "./ProjectCard";
import FadeIn from "../Layout/FadeIn";
import SectionWrapper from "../Common/SectionWrapper";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {

  const categories = [
    "All",
    ...new Set(projects.map((p) => p.domain)),
  ];

  const [selected, setSelected] = useState("All");

  const featuredProject = projects.find(
    (project) => project.featured
  );


  const filteredProjects = useMemo(() => {
    if (selected === "All") return projects;

    return projects.filter(
      (project) => project.domain === selected
    );
  }, [selected]);

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

        <div className="mt-16 flex flex-col items-center justify-center">
          <ProjectFilter
          categories={categories}
          selected={selected}
          onChange={setSelected}
        />
        </div>
        <div className="mt-0 grid gap-10 lg:grid-cols-2">
          
          {filteredProjects.map((project) => (
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