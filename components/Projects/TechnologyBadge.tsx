type TechnologyBadgeProps = {
  technologies: string[];
};

export default function TechnologyBadge({
  technologies,
}: TechnologyBadgeProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/20"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}