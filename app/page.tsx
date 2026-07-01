"use client";

import { Nav, Hero, Overview, Cast, Trailer, Reviews } from "@/components/other";
import useFetchData from "./hooks/useFetchData";
import hero from "@/assets/movie-obsession.webp";

export default function Home() {
  const { data } = useFetchData("tt37287335");

  const downloadLink = "https://tundrafile.com/1902963";
  const trailer = "https://youtu.be/0G5CjgPw1x4";

  return (
    <main className="bg-background text-foreground relative min-h-screen">
      <Nav title={data?.Title} downloadUrl={downloadLink} />
      <Hero data={data} poster={hero} trailer={trailer} />
      <Overview data={data} tagline="" downloadUrl={downloadLink} />
      <Cast data={data} downloadUrl={downloadLink} />
      <Trailer youtubeId="0G5CjgPw1x4" clip={hero} playTime="1:08" downloadUrl={downloadLink} />
      <Reviews data={data} />
    </main>
  );
}
