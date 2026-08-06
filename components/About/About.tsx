import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <h3 className="text-2xl font-semibold">
              Frontend Engineer
            </h3>

            <p className="mt-6 text-slate-400 leading-8">
              I'm a Frontend Engineer with 4.5+ years of experience
              building enterprise-grade web applications using React,
              Next.js, TypeScript, Redux Toolkit, and modern JavaScript.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              I enjoy creating responsive, accessible, and
              high-performance user interfaces while collaborating
              with cross-functional teams to deliver impactful
              products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <Card title="Experience" value="4.5+ Years" />
            <Card title="Projects" value="20+" />
            <Card title="Tech Stack" value="React Ecosystem" />
            <Card title="Location" value="India" />

          </div>

        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition">
      <h4 className="text-lg font-semibold">
        {title}
      </h4>

      <p className="mt-2 text-cyan-400">
        {value}
      </p>
    </div>
  );
}