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
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {highlights.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
        >
          <CheckCircle2
            size={20}
            className="text-cyan-400"
          />

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}