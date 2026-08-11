import { CheckCircle2 } from "lucide-react";

const highlights = [
  "4.5+ Years of Frontend Experience",
  "Enterprise Web Applications",
  "React.js & Next.js Specialist",
  "Performance Optimization",
  "Reusable Component Architecture",
  "REST & GraphQL Integration",
];

export default function AboutHighlights() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {highlights.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-cyan-500"
        >
          <CheckCircle2
            size={20}
            className="text-cyan-400"
          />

          <span className="text-slate-300">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}