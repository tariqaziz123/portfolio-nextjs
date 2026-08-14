import { Project } from "@/types/projects";

type Props = {
  project: Project;
};

export default function ProjectInfo({ project }: Props) {
  const status = project.status || "Completed";

  const getStatusClasses = () => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-400 border-green-500/20";

      case "In Progress":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";

      case "Maintenance":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";

      default:
        return "bg-slate-500/10 text-slate-300 border-slate-500/20";
    }
  };

  const items = [
    {
      label: "Status",
      value: status,
    },
    {
      label: "Duration",
      value: project.duration,
    },
    {
      label: "Client",
      value: project.client,
    },
    {
      label: "Team",
      value: project.teamSize || "1 Developer",
    },
    {
      label: "Category",
      value: project.category,
    },
  ];

  return (
    <section className="mt-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/50
              p-6
              transition-all
              duration-300
              hover:border-cyan-500/40
            "
          >
            <p className="text-sm uppercase tracking-wider text-slate-500">
              {item.label}
            </p>

            {item.label === "Status" ? (
              <span
                className={`mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-semibold ${getStatusClasses()}`}
              >
                {item.value}
              </span>
            ) : (
              <p className="mt-4 text-lg font-semibold text-white">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}