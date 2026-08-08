type Props = {
  skill: string;
};

export default function SkillChip({
  skill,
}: Props) {
  return (
    <span
      className="
        rounded-full
        border
        border-cyan-500/20
        bg-cyan-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-400
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-cyan-500/20
      "
    >
      {skill}
    </span>
  );
}