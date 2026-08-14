import SectionHeading from "@/components/SectionTitle/SectionTitle";
import { experiences } from "@/components/data/experience";
import TimelineItem from "./TimelineItem";
import FadeIn from "../Layout/FadeIn";
import SectionWrapper from "../Common/SectionWrapper";
import StaggerContainer from "../Common/StaggerContainer";
import StaggerItem from "../Common/StaggerItem";

export default function Experience() {
  return (
    <FadeIn delay={0.2}>
      <SectionWrapper
        id="experience"
      >
        <div className="mx-auto max-w-6xl px-6">

          <SectionHeading
            title="Experience"
            subtitle="My professional journey building scalable enterprise applications."
          />

          <StaggerContainer>

            {experiences.map((experience, index) => (
              <StaggerItem key={`${experience.company}-${experience.duration}`}>
                <TimelineItem
                  key={`${experience.company}-${experience.duration}`}
                  experience={experience}
                  isLast={index === experiences.length - 1}
                />
              </StaggerItem>
            ))}

          </StaggerContainer>

        </div>
      </SectionWrapper>
    </FadeIn>
  );
}