import { gallery } from "@/components/other/data";
import { Reveal } from "@/components/other/Reveal";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">From the Set</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">Stills & Behind the Scenes</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4">
            {gallery.map((src, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-xl bg-surface ${spans[i] ?? ""}`}
              >
                <img
                  src={src.src}
                  alt={`Dune: Part Two production still ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
