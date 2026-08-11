import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2
hover:scale-[1.02]
hover:border-cyan-500/40
hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]
transition-all
duration-300 hover:border-cyan-500">
      <div
        className={`bg-gradient-to-r ${project.gradient} p-8`}
      >
        <div className="text-6xl">
          {project.icon}
        </div>

        <p className="mt-4 text-sm uppercase tracking-widest text-white/80">
          {project.category}
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          {project.title}
        </h3>
      </div>

      <div className="p-8">
        <p className="line-clamp-4 text-slate-400">
          {project.overview}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies
            .slice(0, 4)
            .map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400"
              >
                {tech}
              </span>
            ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-4"
        >
          View Case Study

          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}