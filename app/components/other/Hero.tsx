"use client";

import { motion } from "framer-motion";
import { film } from "@/components/other/data";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={film.hero.src}
        alt="Two figures in stillsuits on a desert ridge watching a colossal sandworm rise on Arrakis"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_20%,transparent_0%,oklch(0.13_0.005_270/0.5)_60%,oklch(0.13_0.005_270)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-2"
        >
          {film.genres.map((g) => (
            <span
              key={g}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/80 backdrop-blur"
            >
              {g}
            </span>
          ))}
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
            {film.rated}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-[clamp(4rem,16vw,11rem)] leading-[0.85] tracking-tight text-foreground text-glow"
        >
          {film.title}
          <span className="block text-[clamp(1.5rem,4vw,3rem)] font-display italic text-foreground/70">
            {film.subtitle}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display mt-4 max-w-2xl text-xl italic text-foreground/80 sm:text-2xl"
        >
          “{film.tagline}”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/80"
        >
          <span className="inline-flex items-center gap-2">
            <span className="grid h-7 w-12 place-items-center rounded bg-[#f5c518] text-[11px] font-black text-black">
              IMDb
            </span>
            <span className="font-semibold text-foreground">{film.imdb}</span>
            <span className="text-muted-foreground">/ 10</span>
          </span>
          <span className="h-4 w-px bg-white/20" />
          <span>{film.release}</span>
          <span className="h-4 w-px bg-white/20" />
          <span>{film.runtime}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#trailer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
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
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.4em] text-foreground/50"
        style={{ animation: "shimmer 2.4s ease-in-out infinite" }}
      >
        Scroll
      </div>
    </section>
  );
}
