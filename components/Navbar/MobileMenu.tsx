"use client";

import clsx from "clsx";
import { navLinks } from "./navLinks";

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({
  isOpen,
  closeMenu,
}: Props) {
  return (
    <div
      className={clsx(
        "fixed top-[72px] left-0 right-0 z-40 bg-slate-950 border-b border-slate-800 transition-all duration-300 md:hidden",
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col px-6 py-6 gap-6">
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            {item.label}
          </a>
        ))}

        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-cyan-500 px-4 py-3 text-center font-semibold text-black"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}