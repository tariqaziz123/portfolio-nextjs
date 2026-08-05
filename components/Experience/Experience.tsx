import { experiences } from "../../assets/data/experience";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Experience" subtitle="Career Journey" />

        <div className="space-y-10">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.duration}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg"
            >
              {/* Header */}
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-lg font-medium text-cyan-400">
                    {experience.company}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    📍 {experience.location}
                  </p>

                  {"project" in experience && experience.project && (
                    <p className="mt-2 text-sm text-slate-300">
                      <span className="font-semibold text-white">
                        Project:
                      </span>{" "}
                      {experience.project}
                    </p>
                  )}
                </div>

                <span className="h-fit rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
                  {experience.duration}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-slate-300">
                {experience.description}
              </p>

              {/* Projects */}
              {"projects" in experience &&
                experience.projects &&
                experience.projects.length > 0 && (
                  <div className="mt-8">
                    <h4 className="mb-4 text-lg font-semibold text-white">
                      Key Projects
                    </h4>

                    <div className="space-y-4">
                      {experience.projects.map((project) => (
                        <div
                          key={project.name}
                          className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                        >
                          <h5 className="font-semibold text-cyan-400">
                            {project.name}
                          </h5>

                          <p className="mt-1 text-sm text-slate-400">
                            {project.domain}
                          </p>

                          <p className="mt-3 leading-7 text-slate-300">
                            {project.work}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-700 bg-cyan-900/20 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}