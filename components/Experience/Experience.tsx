import SectionHeading from "@/components/SectionTitle/SectionTitle";
import { experiences } from "@/components/data/experience";
import TimelineItem from "./TimelineItem";
import FadeIn from "../Layout/FadeIn";

export default function Experience() {
  return (
    <FadeIn delay={0.2}>
      <section
        id="experience"
        className="py-24"
      >
        <div className="mx-auto max-w-6xl px-6">

          <SectionHeading
            title="Experience"
            subtitle="My professional journey building scalable enterprise applications."
          />

          <div className="mt-20">

            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${experience.duration}`}
                experience={experience}
                isLast={index === experiences.length - 1}
              />
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}