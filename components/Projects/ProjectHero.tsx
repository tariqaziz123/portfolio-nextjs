import Image from "next/image";
import TechnologyBadge from "./TechnologyBadge";
import { Project } from "@/types/projects";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  if (project.image) {
    return (
      <section className="relative overflow-hidden rounded-3xl">
        <div className="relative h-[420px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-10 left-10 z-10">
            <span className="rounded-full bg-cyan-500/80 px-4 py-2 text-sm font-medium text-white">
              {project.category}
            </span>

            <h1 className="mt-4 text-5xl font-bold text-white">
              {project.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-white/90">
              {project.overview}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`overflow-hidden rounded-3xl bg-gradient-to-r ${project.gradient} p-10 text-white shadow-xl`}
    >
      <div className="text-7xl">
        {project.icon}
      </div>

      <span className="mt-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
        {project.category}
      </span>

      <h1 className="mt-5 text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-white/90">
        {project.overview}
      </p>

      <div className="mt-8">
        <TechnologyBadge
          technologies={project.technologies}
        />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <span className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
          🏢 {project.client}
        </span>

        <span className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
          📅 {project.duration}
        </span>

        <span className="rounded-full bg-red-500/80 px-4 py-2 text-sm font-semibold">
          🔒 Enterprise Project
        </span>
      </div>
    </section>
  );
}