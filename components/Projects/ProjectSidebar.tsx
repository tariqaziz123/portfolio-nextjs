import Link from "next/link";

const items = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "My Role", href: "#role" },
  { label: "Solution", href: "#solution" },
  { label: "Technologies", href: "#technologies" },
  { label: "Features", href: "#features" },
  { label: "Challenges", href: "#challenges" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
];

export default function ProjectSidebar() {
  return (
    <aside className="sticky top-28 hidden h-fit lg:block">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="mb-5 text-lg font-semibold">
          On this page
        </h3>

        <nav className="space-y-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-slate-400 transition hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}