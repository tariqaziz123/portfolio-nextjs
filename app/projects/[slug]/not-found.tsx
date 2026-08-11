import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <h1 className="text-8xl font-bold">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-semibold">
        Project Not Found
      </h2>

      <p className="mt-4 max-w-lg text-slate-400">
        The case study you're looking for doesn't exist.
      </p>

      <Link
        href="/#projects"
        className="
        rounded-xl
        border
        border-slate-700
        px-6
        py-3
        transition-all
        duration-300
        hover:border-cyan-500
        hover:text-cyan-400
        hover:-translate-y-1
        "
      >
        Back to Projects
      </Link>

    </main>
  );
}