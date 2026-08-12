import Link from "next/link";
import { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:border-cyan-500/40">

      <div className="grid lg:grid-cols-2">

        {/* Left */}

        <div className="flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12">

          <div className="text-center">

            <h3 className="text-5xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 text-cyan-400">
              {project.category}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="p-10">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Featured Project
          </span>

          <p className="mt-6 text-slate-400 leading-8">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-10 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Case Study →
          </Link>

        </div>

      </div>

    </div>
  );
}