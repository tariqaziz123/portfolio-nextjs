export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 animate-pulse">
      <div className="h-96 rounded-3xl bg-slate-800" />

      <div className="mt-10 h-10 w-80 rounded bg-slate-800" />

      <div className="mt-5 h-5 w-full rounded bg-slate-800" />

      <div className="mt-2 h-5 w-10/12 rounded bg-slate-800" />

      <div className="mt-16 space-y-6">
        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="h-40 rounded-2xl bg-slate-800"
          />
        ))}
      </div>
    </main>
  );
}