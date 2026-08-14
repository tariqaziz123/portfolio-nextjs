import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { projects } from "@/components/data/projects";

import ProjectHero from "@/components/Projects/ProjectHero";
import ProjectSidebar from "@/components/Projects/ProjectSidebar";
import ProjectSection from "@/components/Projects/ProjectSection";
import TechnologyBadge from "@/components/Projects/TechnologyBadge";
import FeatureList from "@/components/Projects/FeatureList";
import ChallengeList from "@/components/Projects/ChallengeList";
import Gallery from "@/components/Projects/Gallery";
import ProjectInfo from "@/components/Projects/ProjectInfo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Tariq Aziz",
    };
  }

  return {
    title: `${project.title} | Tariq Aziz`,
    description: project.overview,

    keywords: [
      "React",
      "TypeScript",
      "Frontend Developer",
      project.title,
      project.category,
      ...project.technologies,
    ],

    openGraph: {
      title: project.title,
      description: project.overview,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const previousProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <Link
        href="/#projects"
        className="mb-10 inline-flex items-center gap-2 text-cyan-400 transition hover:gap-3"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      <ProjectHero project={project} />

      <div className="mt-20 grid gap-12 lg:grid-cols-[260px_1fr]">

        <ProjectSidebar />

        <div className="space-y-12">

          <ProjectSection
            id="overview"
            title="Overview"
          >
            <p>{project.overview}</p>
          </ProjectSection>
          <ProjectInfo project={project} />

          <ProjectSection
            id="problem"
            title="Problem"
          >
            <p>{project.problem}</p>
          </ProjectSection>

          <ProjectSection
            id="role"
            title="My Role"
          >
            <p>{project.role}</p>
          </ProjectSection>

          <ProjectSection
            id="solution"
            title="Solution"
          >
            <p>{project.solution}</p>
          </ProjectSection>

          <ProjectSection
            id="technologies"
            title="Technologies"
          >
            <TechnologyBadge
              technologies={project.technologies}
            />
          </ProjectSection>

          <ProjectSection
            id="features"
            title="Key Features"
          >
            <FeatureList
              features={project.features}
            />
          </ProjectSection>

          <ProjectSection
            id="challenges"
            title="Challenges"
          >
            <ChallengeList
              challenges={project.challenges}
            />
          </ProjectSection>

          <ProjectSection
            id="impact"
            title="Impact"
          >
            <p>{project.impact}</p>
          </ProjectSection>
                    {project.gallery && project.gallery.length > 0 && (
            <div id="gallery">
              <Gallery
                title={project.title}
                gallery={project.gallery}
              />
            </div>
          )}

          {/* Previous / Next Navigation */}

          <div className="mt-24 border-t border-slate-800 pt-10">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Previous Project */}

              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.slug}`}
                  className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-800"
                >
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <ArrowLeft size={16} />
                    Previous Project
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold transition group-hover:text-cyan-400">
                    {previousProject.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {previousProject.category}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {previousProject.technologies
                      .slice(0, 3)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {/* Next Project */}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 text-right transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-800"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-slate-400">
                    Next Project
                    <ArrowRight size={16} />
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold transition group-hover:text-cyan-400">
                    {nextProject.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {nextProject.category}
                  </p>

                  <div className="mt-5 flex flex-wrap justify-end gap-2">
                    {nextProject.technologies
                      .slice(0, 3)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}