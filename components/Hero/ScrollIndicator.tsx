import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="mt-16 flex justify-center">
      <a
        href="#about"
        className="animate-bounce rounded-full border border-slate-700 p-3 transition hover:border-cyan-500"
      >
        <ChevronDown size={22} />
      </a>
    </div>
  );
}