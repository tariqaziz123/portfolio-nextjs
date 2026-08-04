type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <p className="text-cyan-400 uppercase tracking-widest text-sm">
        {subtitle}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}