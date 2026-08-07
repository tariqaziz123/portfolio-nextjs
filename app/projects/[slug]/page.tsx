import { notFound } from "next/navigation";
import { projects } from "@/components/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-3 text-cyan-400">
        {project.category}
      </p>

      <p className="mt-8 text-lg">
        {project.overview}
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Problem
        </h2>

        <p className="mt-4">
          {project.problem}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          My Role
        </h2>

        <p className="mt-4">
          {project.role}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Solution
        </h2>

        <p className="mt-4">
          {project.solution}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Technologies
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Challenges
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {project.challenges.map((challenge) => (
            <li key={challenge}>
              {challenge}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Impact
        </h2>

        <p className="mt-4">
          {project.impact}
        </p>
      </section>
    </main>
  );
}