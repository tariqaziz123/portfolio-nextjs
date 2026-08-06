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
      className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
    >
      <FaArrowUp />
    </button>
  );
}