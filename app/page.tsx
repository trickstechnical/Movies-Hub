"use client";

import { Nav, Hero, Overview, Cast, Trailer, Reviews } from "@/components/other";
import useFetchData from "./hooks/useFetchData";
import hero from "@/assets/movie-obsession.webp";

export default function Home() {
  const { data } = useFetchData("tt37287335");

  return (
    <main className="bg-background text-foreground relative min-h-screen">
      <Nav title={data?.Title} downloadUrl="" />
      <Hero data={data} poster={hero} trailer="" />
      <Overview data={data} tagline="" />
      <Cast data={data} />
      <Trailer youtubeId="0G5CjgPw1x4" clip={hero} playTime="1:08" />
      <Reviews data={data} />
    </main>
  );
}
