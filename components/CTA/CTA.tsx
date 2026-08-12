import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-gradient-to-r
            from-cyan-500/10
            via-slate-900
            to-blue-500/10
            px-8
            py-16
            text-center
          "
        >
          {/* Glow */}

          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Available for Opportunities
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Let's Build Something Amazing Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I'm currently open to Frontend and Full Stack opportunities.
              If you're looking for someone who enjoys building scalable,
              performant, and user-friendly applications, I'd love to connect.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="
                  rounded-xl
                  bg-cyan-500
                  px-8
                  py-4
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-cyan-400
                  hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                "
              >
                Hire Me
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="
                  rounded-xl
                  border
                  border-slate-700
                  px-8
                  py-4
                  font-semibold
                  transition-all
                  duration-300
                  hover:border-cyan-500
                  hover:text-cyan-400
                  hover:-translate-y-1
                "
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}