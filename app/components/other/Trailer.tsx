'use client'

import { useState } from "react";
import { clips } from "@/components/other/data";
import { Reveal } from "@/components/other/Reveal";

const YT_ID = "Way9Dexny3w"; // Dune: Part Two official trailer

export function Trailer() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="trailer" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_30%,oklch(0.62_0.24_27/0.08),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Watch</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">Official Trailer</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass mt-10 overflow-hidden rounded-3xl">
            <div className="relative aspect-video w-full bg-black">
              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0`}
                  title="Dune: Part Two — Official Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 grid place-items-center"
                  aria-label="Play official trailer"
                >
                  <img
                    src={clips[0].img.src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
                  <div className="relative grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-6 left-6 text-sm uppercase tracking-[0.25em] text-foreground/90">
                    Play · 2:31
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
