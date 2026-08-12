import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  const visibleTech = project.technologies.slice(0, 5);
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
        hover:border-cyan-500/40
        hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* Left - Image */}

        <div className="relative min-h-[420px] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width:1024px)100vw,50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-900">
              <h2 className="text-center text-6xl font-black text-cyan-400/20">
                {project.title}
              </h2>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-transparent" />

          {/* Featured Badge */}
          <span className="absolute left-6 top-6 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">
            ⭐ Featured Project
          </span>
        </div>

        {/* Right - Content */}

        <div className="flex flex-col justify-center p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {project.category}
          </p>

          <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
            {project.title}
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            {project.overview}
          </p>

          {/* Tech Stack */}

          <div className="mt-8 flex flex-wrap gap-3">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}

            {remainingTech > 0 && (
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                +{remainingTech}
              </span>
            )}
          </div>

          {/* CTA */}

          <Link
            href={`/projects/${project.slug}`}
            className="
              mt-10
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-6
              py-3
              font-semibold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
            "
          >
            View Case Study

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}