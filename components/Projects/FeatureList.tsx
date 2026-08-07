import { CheckCircle2 } from "lucide-react";

type FeatureListProps = {
  features: string[];
};

export default function FeatureList({
  features,
}: FeatureListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature}
          className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4"
        >
          <CheckCircle2
            className="mt-1 text-cyan-400"
            size={18}
          />

          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}