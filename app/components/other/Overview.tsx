import { Reveal } from "@/components/other/Reveal";
import { MovieSuccessResponse } from "@/types/MovieData";
import { ButtonLink } from "@/components/ui/buttonlink";

interface OverViewProps {
  data: MovieSuccessResponse | null;
  tagline: string;
  downloadUrl: string;
}

export function Overview({ data, tagline, downloadUrl }: OverViewProps) {
  if (!data) return null;

  const { Plot, Runtime, Language, Director, Released, Rated, Country } = data;

  const meta = [
    ["Runtime", Runtime],
    ["Language", Language],
    ["Director", Director],
    ["Country", Country],
    ["Release", Released],
    ["Rated", Rated],
  ];

  return (
    <section id="overview" className="relative pt-16 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-primary text-xs tracking-[0.3em] uppercase">Synopsis</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {tagline}
            </h2>
            <p className="text-muted-foreground mt-8 text-lg leading-relaxed">{Plot}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="glass grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/5">
              {meta.map(([k, v]) => (
                <div key={k} className="bg-background/40 p-5">
                  <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
                    {k}
                  </dt>
                  <dd className="text-foreground mt-2 text-sm font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <div className="mt-16 text-center sm:mt-24">
          <ButtonLink href={downloadUrl}> Download Full Movie</ButtonLink>
        </div>
      </div>
    </section>
  );
}
