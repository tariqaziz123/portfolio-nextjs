import StaggerContainer from "../Common/StaggerContainer";
import StaggerItem from "../Common/StaggerItem";
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

      <StaggerContainer>
        {skills.map((skill) => (
          <StaggerItem key={skill}>
            <SkillChip
              key={skill}
              skill={skill}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}