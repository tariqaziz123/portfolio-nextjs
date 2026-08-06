import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "@/constants/socialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-2xl font-bold">
          Tariq Aziz
        </h2>

        <p className="mt-2 text-slate-400">
          Frontend Engineer
        </p>

        <div className="mt-6 flex gap-6 text-2xl">

          <a href={socialLinks.github}>
            <FaGithub />
          </a>

          <a href={socialLinks.linkedin}>
            <FaLinkedin />
          </a>

          <a href={socialLinks.email}>
            <FaEnvelope />
          </a>

        </div>

        <p className="mt-8 text-sm text-slate-500">
          © 2026 Tariq Aziz. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}