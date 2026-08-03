export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-cyan-400">Hello, I'm</p>

        <h1 className="mt-2 text-5xl font-bold md:text-7xl">
          Tariq Aziz
        </h1>

        <h2 className="mt-4 text-2xl text-slate-300 md:text-3xl">
          Frontend Engineer | React | Next.js | TypeScript
        </h2>

        <p className="mt-6 max-w-2xl text-slate-400">
          I build scalable, high-performance web applications with React,
          Next.js, TypeScript, Redux Toolkit, and modern frontend technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-medium text-black"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}