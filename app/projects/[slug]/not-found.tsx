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
        className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black"
      >
        Back to Projects
      </Link>

    </main>
  );
}