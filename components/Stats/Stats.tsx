import StatsCard from "./StatsCard";

const stats = [
  {
    end: 4.5,
    suffix: "+",
    decimals: 1,
    label: "Years Experience",
  },
  {
    end: 15,
    suffix: "+",
    label: "Enterprise Projects",
  },
  {
    end: 10,
    suffix: "+",
    label: "Technologies",
  },
  {
    end: 4,
    label: "Business Domains",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              decimals={stat.decimals}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}