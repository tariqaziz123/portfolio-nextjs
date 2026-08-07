import { ReactNode } from "react";

type ProjectSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function ProjectSection({
  id,
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900/40 p-8"
    >
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>

      <div className="leading-8 text-slate-300">
        {children}
      </div>
    </section>
  );
}