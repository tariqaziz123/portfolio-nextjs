import Image from "next/image";
import Link from "next/link";
import TechnologyBadge from "./TechnologyBadge";
import { Project } from "@/types/projects";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <section className="mb-20">

      {/* Top Content */}

      <div className="mx-auto max-w-5xl text-center">

        <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
          {project.category}
        </span>

        <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
          {project.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {project.overview}
        </p>

        <div className="mt-8 flex justify-center">
          <TechnologyBadge
            technologies={project.technologies}
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              🌐 Live Demo
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              GitHub
            </Link>
          )}

          {project.backend && (
            <Link
              href={project.backend}
              target="_blank"
              className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-500 hover:text-cyan-400"
            >
              Backend API
            </Link>
          )}

        </div>

      </div>

      {/* Browser Mockup */}

      <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        {/* Browser Header */}

        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-6 py-4">

          <span className="h-3 w-3 rounded-full bg-red-500" />

          <span className="h-3 w-3 rounded-full bg-yellow-500" />

          <span className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-4 rounded-lg bg-slate-800 px-4 py-1 text-sm text-slate-400">
            {project.live || project.title}
          </div>

        </div>

        {/* Screenshot */}

        <div className="relative  h-[420px] overflow-hidden bg-slate-950 p-8">

  {project.image ? (
    <Image
      src={project.image}
      alt={project.title}
      fill
      priority
      className="object-contain p-4 transition duration-700 hover:scale-105"
    />
  ) : (
            <div
              className={`flex h-full items-center justify-center bg-gradient-to-r ${project.gradient}`}
            >
              <div className="text-center">

                <div className="text-8xl">
                  {project.icon}
                </div>

                <h2 className="mt-6 text-5xl font-bold text-white">
                  {project.title}
                </h2>

              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}