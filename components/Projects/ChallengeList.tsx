import { AlertTriangle } from "lucide-react";

type ChallengeListProps = {
  challenges: string[];
};

export default function ChallengeList({
  challenges,
}: ChallengeListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {challenges.map((challenge) => (
        <div
          key={challenge}
          className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4"
        >
          <AlertTriangle
            className="mt-1 text-orange-400"
            size={18}
          />

          <span>{challenge}</span>
        </div>
      ))}
    </div>
  );
}