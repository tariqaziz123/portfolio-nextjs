type Props = {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
};

export default function ProjectFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`
            rounded-full
            px-5
            py-2
            transition-all
            duration-300
            ${
              selected === category
                ? "bg-cyan-500 text-slate-950"
                : "border border-slate-700 hover:border-cyan-500 hover:text-cyan-400"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}