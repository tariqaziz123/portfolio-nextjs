import SectionTitle from "../SectionTitle/SectionTitle";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Material UI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "REST API",
  "GraphQL",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          title="Skills"
          subtitle="Technologies"
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center font-medium transition hover:-translate-y-1 hover:border-cyan-500"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}