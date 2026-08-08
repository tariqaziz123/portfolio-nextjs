import Image from "next/image";
import HeroButtons from "./HeroButtons";
import TechBadges from "./TechBadges";
import ScrollIndicator from "./ScrollIndicator";
import ProfileImage from "@/public/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            👋 Hello, I'm
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Tariq{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Aziz
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            Senior Frontend Engineer • React.js • Next.js • TypeScript
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I build scalable enterprise web applications using
            <span className="font-semibold text-cyan-400">
              {" "}React.js
            </span>,
            <span className="font-semibold text-cyan-400">
              {" "}Next.js
            </span>,
            <span className="font-semibold text-cyan-400">
              {" "}TypeScript
            </span>
            {" "}and modern frontend architecture with a strong
            focus on performance, accessibility, and user
            experience.
          </p>

          <HeroButtons />

          <TechBadges />

        </div>

        {/* RIGHT */}

        <div className="flex justify-center lg:justify-end">

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Ring */}

            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl" />

            {/* Image */}

            <div className="relative h-80 w-80 overflow-hidden rounded-full border-[6px] border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.25)]">

              <Image
                src={ProfileImage}
                alt="Tariq Aziz"
                fill
                priority
                className="object-cover"
              />

            </div>

            {/* Experience Badge */}

            <div className="absolute -left-10 top-10 rounded-2xl ... animate-[float_4s_ease-in-out_infinite]">

              <p className="text-3xl font-bold text-cyan-400">
                4.5+
              </p>

              <p className="text-sm text-slate-400">
                Years Experience
              </p>

            </div>

            {/* Availability Badge */}

            <div className="absolute -bottom-6 right-0 ... animate-[float_5s_ease-in-out_infinite]">

              <p className="font-semibold text-green-400">
                ● Available for Hire
              </p>

            </div>

          </div>

        </div>

      </div>

      <ScrollIndicator />

    </section>
  );
}