"use client";

import { motion } from "framer-motion";
import { MovieSuccessResponse } from "@/types/MovieData";
import type { StaticImageData } from "next/image";

interface HeroProps {
  data: MovieSuccessResponse | null;
  poster: StaticImageData;
  trailer: string;
}

export function Hero({ data, poster, trailer }: HeroProps) {
  if (!data) return;

  const { Rated, Title, imdbRating, Released, Runtime } = data;
  const genres = data?.Genre.split(",");

  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={poster.src}
        alt="Two figures in stillsuits on a desert ridge watching a colossal sandworm rise on Arrakis"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_20%,transparent_0%,oklch(0.13_0.005_270/0.5)_60%,oklch(0.13_0.005_270)_100%)]" />
      <div className="to-background absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-b from-transparent" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-20 sm:px-8 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-2"
        >
          {genres?.map((g) => (
            <span
              key={g}
              className="text-foreground/80 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.18em] uppercase backdrop-blur"
            >
              {g}
            </span>
          ))}
          <span className="text-foreground/80 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-[0.18em] uppercase backdrop-blur">
            {Rated}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-foreground text-glow mt-6 text-[clamp(4rem,16vw,11rem)] leading-[0.85] tracking-tight"
        >
          {Title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="text-foreground/80 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
        >
          <span className="inline-flex items-center gap-2">
            <span className="grid h-7 w-12 place-items-center rounded bg-[#f5c518] text-[11px] font-black text-black">
              IMDb
            </span>
            <span className="text-foreground font-semibold">{imdbRating}</span>
            <span className="text-muted-foreground">/ 10</span>
          </span>
          <span className="h-4 w-px bg-white/20" />
          <span>{Released}</span>
          <span className="h-4 w-px bg-white/20" />
          <span>{Runtime}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href={trailer}
            className="group bg-primary text-primary-foreground shadow-glow inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Trailer
          </a>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="text-foreground/50 pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.4em] uppercase"
        style={{ animation: "shimmer 2.4s ease-in-out infinite" }}
      >
        Scroll
      </div>
    </section>
  );
}
