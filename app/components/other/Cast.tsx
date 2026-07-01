import { Reveal } from "@/components/other/Reveal";
import { MovieSuccessResponse } from "@/types/MovieData";
import { ButtonLink } from "@/components/ui/buttonlink";

interface CastProps {
  data: MovieSuccessResponse | null;
  downloadUrl: string;
}

export function Cast({ data, downloadUrl }: CastProps) {
  if (!data) return null;

  const { Director, Actors, Writer } = data;

  const crew = [
    { role: "Director", name: Director },
    { role: "Writer", name: Writer },
    { role: "Actors", name: Actors },
  ];

  return (
    <section id="cast" className="relative pt-16 sm:pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase">Cast & Crew</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">The Houses Assemble</h2>
          </div>
          <p className="text-muted-foreground hidden max-w-xs text-sm sm:block">
            A constellation of performers across the great houses of the Imperium.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {crew.map((c) => (
              <div key={c.role} className="bg-background/60 p-6">
                <p className="text-muted-foreground text-[11px] tracking-[0.25em] uppercase">
                  {c.role}
                </p>
                <p className="text-foreground mt-2 text-base font-medium">{c.name}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 text-center sm:mt-24">
          <ButtonLink href={downloadUrl}> Download Full Movie</ButtonLink>
        </div>
      </div>
    </section>
  );
}
