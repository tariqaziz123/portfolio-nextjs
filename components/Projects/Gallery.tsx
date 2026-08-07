import Image from "next/image";

type GalleryProps = {
  title: string;
  gallery?: string[];
};

export default function Gallery({
  title,
  gallery,
}: GalleryProps) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">
        Gallery
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {gallery.map((image) => (
          <div
            key={image}
            className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800"
          >
            <Image
              src={image}
              alt={`${title} Screenshot`}
              fill
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}