type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  project: string;
  description: string;
  technologies: string[];
};

type Props = {
  experience: Experience;
  isLast: boolean;
};

export default function TimelineItem({
  experience,
  isLast,
}: Props) {
  return (
    <div className="relative flex gap-8">

      {/* Timeline */}

      <div className="relative flex w-10 justify-center">

        <div className="z-10 h-5 w-5 rounded-full border-4 border-cyan-400 bg-slate-950" />

        {!isLast && (
          <div className="absolute top-5 h-full w-[2px] bg-slate-700" />
        )}

      </div>

      {/* Content */}

      <div className="mb-16 flex-1 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg">

        <span className="text-sm font-medium text-cyan-400">
          {experience.duration}
        </span>

        <h3 className="mt-3 text-3xl font-bold">
          {experience.role}
        </h3>

        <p className="mt-2 text-lg text-slate-300">
          {experience.company}
        </p>

        <p className="text-sm text-slate-500">
          {experience.location}
        </p>

        <span className="mt-5 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          {experience.project}
        </span>

        <p className="mt-6 leading-8 text-slate-400">
          {experience.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}