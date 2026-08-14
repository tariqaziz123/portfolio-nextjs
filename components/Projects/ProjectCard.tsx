import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const visibleTech = project.technologies.slice(0, 3);
  const remainingTech = project.technologies.length - visibleTech.length;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-500/40
        hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]
      "
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Banner */}
        <div className="relative h-56 overflow-hidden">

          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-900">
              <span className="text-7xl font-black text-cyan-400/20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500/10" />

          {/* Category */}
          <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-950">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-7">

          <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
            {project.title}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
            {project.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
    >
      🌐 Live Demo
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-500 hover:text-cyan-400"
    >
      GitHub Repository
    </a>
  )}

  {project.backend && (
    <a
      href={project.backend}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-500 hover:text-cyan-400"
    >
      Backend API
    </a>
  )}

</div>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">

            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}

            {remainingTech > 0 && (
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-cyan-400">
                +{remainingTech}
              </span>
            )}

          </div>

          {/* CTA */}
          <div className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400">

            <span>View Case Study</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </div>

        </div>
      </Link>
    </article>
  );
}