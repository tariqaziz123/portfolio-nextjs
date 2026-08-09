import TimelineItem from "./TimelineItem";
import { experiences } from "@/components/data/experience";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Timeline() {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          title="Experience"
          subtitle="My professional journey building enterprise-grade frontend applications."
        />

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-700" />

          <div className="space-y-20">

            {experiences.map((experience) => (
              <TimelineItem
                key={`${experience.company}-${experience.duration}`}
                role={experience.role}
                company={experience.company}
                duration={experience.duration}
                location={experience.location}
                project={experience.project}
                description={experience.description}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}