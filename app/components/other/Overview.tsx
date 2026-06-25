import { film } from "@/components/other/data";
import { Reveal } from "@/components/other/Reveal";

const meta = [
  ["Runtime", film.runtime],
  ["Language", film.language],
  ["Director", film.director],
  ["Studio", film.studio],
  ["Release", film.release],
  ["Rated", film.rated],
];

export function Overview() {
  return (
    <section id="overview" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Synopsis</p>
          <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            A son rises. A prophecy burns. A planet awakens.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{film.synopsis}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="glass grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/5">
            {meta.map(([k, v]) => (
              <div key={k} className="bg-background/40 p-5">
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-sm font-medium text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
