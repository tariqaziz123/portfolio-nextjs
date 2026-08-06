"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed left-0 top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
          <a
            href="/"
            className="text-2xl font-bold text-white"
          >
            Tariq Aziz
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={clsx(
                  "transition-colors",
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                )}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="rounded-lg bg-cyan-500 px-5 py-2 font-medium text-black transition hover:bg-cyan-400"
            >
              Resume
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
    </>
  );
}