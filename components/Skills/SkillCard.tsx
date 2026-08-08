import SkillChip from "./SkillChip";

type Props = {
  title: string;
  skills: string[];
};

export default function SkillCard({
  title,
  skills,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/50
        p-6
      "
    >
      <h3 className="mb-5 text-2xl font-bold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillChip
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}