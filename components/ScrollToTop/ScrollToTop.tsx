"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {

    const scroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);

  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      rounded-xl
      border
      border-slate-700
      px-6
      py-3
      transition-all
      duration-300
      hover:border-cyan-500
      hover:text-cyan-400
      hover:-translate-y-1
      "
    >
      <FaArrowUp />
    </button>
  );
}