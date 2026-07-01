"use client";

import { useState } from "react";
import { Reveal } from "@/components/other/Reveal";
import type { StaticImageData } from "next/image";
import { ButtonLink } from "@/components/ui/buttonlink";

interface TrailerProps {
  youtubeId: string;
  clip: StaticImageData;
  playTime: string;
  downloadUrl: string;
}

export function Trailer({ youtubeId, clip, playTime, downloadUrl }: TrailerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="trailer" className="relative pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_30%,oklch(0.62_0.24_27/0.08),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-primary text-xs tracking-[0.3em] uppercase">Watch</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">Official Trailer</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass mt-10 overflow-hidden rounded-3xl">
            <div className="relative aspect-video w-full bg-black">
              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                    src={clip?.src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
                  <div className="bg-primary text-primary-foreground shadow-glow relative grid h-20 w-20 place-items-center rounded-full transition-transform group-hover:scale-110">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-foreground/90 absolute bottom-6 left-6 text-sm tracking-[0.25em] uppercase">
                    Play · {playTime}
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 text-center sm:mt-24">
          <ButtonLink href={downloadUrl}> Download Full Movie</ButtonLink>
        </div>
      </div>
    </section>
  );
}
