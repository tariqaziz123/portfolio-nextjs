import SectionTitle from "@/components/SectionTitle/SectionTitle";
import AboutHighlights from "./AboutHighlights";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="About Me"
          subtitle="Frontend Engineer passionate about building scalable and user-friendly web applications."
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-lg leading-8 text-slate-400">
              I'm a Frontend Engineer with 4.5+ years of experience
              developing enterprise-grade applications across
              Travel Tech, Financial Services, FinTech, Analytics,
              and Real-Time Collaboration.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              My expertise includes React.js, Next.js,
              TypeScript, Redux Toolkit, Material UI,
              REST APIs, GraphQL, and modern frontend
              architecture. I enjoy building reusable
              components, improving application performance,
              and creating intuitive user experiences.
            </p>

            <AboutHighlights />

          </div>

          <AboutImage />

        </div>

      </div>
    </section>
  );
}