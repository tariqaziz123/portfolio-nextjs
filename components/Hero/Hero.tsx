"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { socialLinks } from "@/constants/socialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-72px)] items-center"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="text-lg font-medium text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
            Tariq Aziz
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
            Frontend Engineer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Frontend Engineer with 4.5+ years of experience building
            scalable enterprise applications using React.js, Next.js,
            TypeScript, Redux Toolkit, GraphQL, and modern frontend
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href={socialLinks.resume}
              download
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-5">
            <Link
              href={socialLinks.github}
              target="_blank"
              aria-label="GitHub"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaGithub />
            </Link>

            <Link
              href={socialLinks.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </Link>

            <Link
              href={socialLinks.email}
              aria-label="Email"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.35)] md:h-[420px] md:w-[420px]">
            <Image
              src="/images/profile.jpg"
              alt="Tariq Aziz"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}