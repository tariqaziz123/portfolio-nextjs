"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { socialLinks } from "@/constants/socialLinks";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          title="Let's Work Together"
          subtitle="Contact"
        />

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <p className="mx-auto max-w-3xl text-center text-lg text-slate-400">
            I'm currently open to Frontend, React and Next.js
            opportunities. Feel free to reach out if you'd like
            to discuss a project or role.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="flex items-center gap-4">
              <FaEnvelope className="transition-transform duration-300 hover:scale-125" />
              <a href={socialLinks.email}>
                taziz7628@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="transition-transform duration-300 hover:scale-125" />
              +91 6361378854
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="transition-transform duration-300 hover:scale-125" />
              <a href={socialLinks.github} target="_blank">
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="transition-transform duration-300 hover:scale-125" />
              <a href={socialLinks.linkedin} target="_blank">
                LinkedIn
              </a>
            </div>

          </div>

          <div className="mt-10 text-center">

            <a
              href={socialLinks.email}
              className="
              rounded-xl
              bg-cyan-500
              px-6
              py-3
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
              "
            >
              Email Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}