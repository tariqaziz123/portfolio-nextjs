import SectionTitle from "../SectionTitle/SectionTitle";
import { projects } from "../../assets/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900/40 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          title="Projects"
          subtitle="Featured Work"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-cyan-400">
                {project.tech}
              </p>

              <p className="mt-4 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  className="rounded-lg border border-slate-700 px-4 py-2"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-black"
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}