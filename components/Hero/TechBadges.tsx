const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
];

export default function TechBadges() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}