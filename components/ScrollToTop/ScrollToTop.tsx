"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        border
        border-slate-700
        bg-slate-900/90
        text-slate-300
        shadow-lg
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500
        hover:text-cyan-400
        hover:shadow-[0_10px_30px_rgba(6,182,212,0.20)]
      "
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}