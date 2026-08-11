import { skillCategories } from "@/components/data/skills";
import SkillCard from "./SkillCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import FadeIn from "../Layout/FadeIn";

export default function Skills() {
  return (
    <FadeIn delay={0.1}>
      <section
        id="skills"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies and tools I use to build scalable enterprise applications."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>

        </div>
      </section>
    </FadeIn>
  );
}