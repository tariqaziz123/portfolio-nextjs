const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Tariq Aziz</h1>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}