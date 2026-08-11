import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative flex justify-center">

      <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 shadow-xl">

        <Image
          src="/images/profile.jpg"
          alt="Tariq Aziz"
          width={450}
          height={550}
          className="object-cover"
        />

      </div>

    </div>
  );
}