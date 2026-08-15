import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative max-w-2xl text-center">

        {/* Error Code */}

        <p className="text-8xl font-black text-cyan-500/20 md:text-9xl">
          404
        </p>

        {/* Heading */}

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Page Not Found
        </h1>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          The page you're looking for doesn't exist or may have
          been moved to another location.
        </p>

        {/* Button */}

        <Link
          href="/"
          className="
            mt-10
            inline-flex
            rounded-xl
            bg-cyan-500
            px-7
            py-3
            font-semibold
            text-slate-950
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-cyan-400
            hover:shadow-[0_10px_30px_rgba(6,182,212,0.25)]
          "
        >
          ← Back to Home
        </Link>

      </div>
    </main>
  );
}