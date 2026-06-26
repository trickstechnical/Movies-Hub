import { Reveal } from "@/components/other/Reveal";
import { MovieSuccessResponse } from "@/types/MovieData";

function Ring({ value, label, accent }: { value: number; label: string; accent: string }) {
  const pct = Math.min(100, Math.max(0, value));
  const radius = 42;
  const circ = 2 * Math.PI * radius;
  const dash = (pct / 100) * circ;
  return (
    <div className="glass flex flex-col items-center rounded-2xl p-6">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="oklch(1 0 0 / 0.08)"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={accent}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${dash} ${circ}`}
            style={{ transition: "stroke-dasharray 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-3xl">
            {value}
            {label === "Audience" || label === "Rotten Tomatoes" ? "" : ""}
          </span>
        </div>
      </div>
      <p className="text-foreground mt-4 text-sm font-medium">{label}</p>
    </div>
  );
}

interface ReviewsProps {
  data: MovieSuccessResponse | null;
}

export function Reviews({ data }: ReviewsProps) {
  if (!data) return null;

  const { imdbRating, Ratings, Metascore } = data;

  return (
    <section id="reviews" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-primary text-xs tracking-[0.3em] uppercase">Acclaim</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">Ratings & Reviews</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Ring value={Number(imdbRating)} label="IMDb" accent="#f5c518" />
            <Ring
              value={Number(Ratings[1].Value)}
              label="Rotten Tomatoes"
              accent="oklch(0.62 0.24 27)"
            />
            <Ring value={Number(Metascore)} label="Metascore" accent="oklch(0.74 0.18 55)" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
