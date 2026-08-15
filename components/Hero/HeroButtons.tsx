import Link from "next/link";
import { Download, FolderOpen } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="/#projects"
        className="
        rounded-xl
        bg-cyan-500
        px-6
        py-3
        flex
        items-center
        gap-2
        text-sm
        text-slate-900
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-cyan-400
        hover:shadow-[0_10px_30px_rgba(6,182,212,0.35)]
        "
      >
        <FolderOpen size={18} />
        View Projects
      </Link>

      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-500 hover:text-cyan-400"
      >
        <Download size={18} />
        Download Resume
      </a>
    </div>
  );
}