import Image from "next/image";
import ProfileImage from "@/public/images/profile.jpg";

export default function AboutImage() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800">
        <Image
          src={ProfileImage}
          alt="About"
          width={420}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
}