import SectionHeading from "@/components/SectionTitle/SectionTitle";
import AboutHighlights from "./AboutHighlights";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="About Me"
          subtitle="Frontend Engineer passionate about building scalable and user-friendly web applications."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="text-lg leading-8 text-slate-400">
              I'm a Frontend Engineer with 4.5+ years of experience
              building enterprise-grade web applications across
              Travel Tech, Financial Services, FinTech,
              Analytics, and Real-Time Collaboration.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              My expertise includes React.js, Next.js,
              TypeScript, Redux Toolkit, Material UI,
              REST APIs, GraphQL, reusable component
              architecture, and performance optimization.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I enjoy solving complex UI challenges,
              building reusable systems, and collaborating
              with cross-functional teams to deliver
              high-quality user experiences.
            </p>

            <AboutHighlights />

          </div>

          {/* Right */}

          <AboutImage />

        </div>

      </div>
    </section>
  );
}