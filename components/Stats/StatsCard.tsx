import CountUp from "./CountUp";

type StatsCardProps = {
  end: number;
  label: string;
  suffix?: string;
  decimals?: number;
};

export default function StatsCard({
  end,
  label,
  suffix,
  decimals,
}: StatsCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/50
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-500
        hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)]
      "
    >
      <h3 className="text-5xl font-bold text-cyan-400">
        <CountUp
          end={end}
          decimals={decimals}
          suffix={suffix}
        />
      </h3>

      <p className="mt-4 text-sm uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
}