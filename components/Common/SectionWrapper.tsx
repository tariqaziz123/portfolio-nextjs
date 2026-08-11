import { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 ${
        alternate ? "bg-slate-900/30" : ""
      } ${className}`}
    >
      {/* Top Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}