import hero from "@/assets/hero.jpg";
import cast1 from "@/assets/cast-1.jpg";
import cast2 from "@/assets/cast-2.jpg";
import cast3 from "@/assets/cast-3.jpg";
import cast4 from "@/assets/cast-4.jpg";
import cast5 from "@/assets/cast-5.jpg";
import cast6 from "@/assets/cast-6.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import c1 from "@/assets/clip-1.jpg";
import c2 from "@/assets/clip-2.jpg";
import c3 from "@/assets/clip-3.jpg";
import c4 from "@/assets/clip-4.jpg";

export const film = {
  title: "DUNE",
  subtitle: "Part Two",
  tagline: "Long live the fighters.",
  release: "March 1, 2024",
  runtime: "2h 46m",
  language: "English",
  director: "Denis Villeneuve",
  studio: "Legendary Pictures · Warner Bros.",
  rated: "PG-13",
  genres: ["Sci-Fi", "Adventure", "Drama"],
  imdb: 8.5,
  rt: 92,
  audience: 95,
  hero,
  synopsis:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he must prevent a terrible future only he can foresee.",
};

export const cast = [
  { name: "Tomé Chevalier", role: "Paul Atreides", img: cast1 },
  { name: "Aïsha Zen", role: "Chani", img: cast2 },
  { name: "Rebekah Ferran", role: "Lady Jessica", img: cast3 },
  { name: "Oskar Isak", role: "Duke Leto", img: cast4 },
  { name: "Joash Bren", role: "Gurney Halleck", img: cast5 },
  { name: "Stellan Skarn", role: "Baron Harkonnen", img: cast6 },
];

export const crew = [
  { role: "Director", name: "Denis Villeneuve" },
  { role: "Screenplay", name: "Jon Spaihts & Denis Villeneuve" },
  { role: "Producers", name: "Mary Parent · Cale Boyter · Tanya Lapointe" },
  { role: "Cinematography", name: "Greig Fraser" },
  { role: "Score", name: "Hans Zimmer" },
  { role: "Editor", name: "Joe Walker" },
];

export const clips = [
  { title: "Official Trailer #2", duration: "2:31", img: c1 },
  { title: "Harkonnen Arrival", duration: "1:48", img: c2 },
  { title: "Eyes of Arrakis", duration: "0:58", img: c3 },
  { title: "The Storm Calls", duration: "1:12", img: c4 },
];

export const gallery = [g1, g3, g6, g2, g5, g4];

export const reviews = [
  {
    quote:
      "A staggering, soul-shaking sequel. Villeneuve has built something that operates on the scale of dream and myth.",
    source: "The Guardian",
    score: "★★★★★",
  },
  {
    quote:
      "Cinema at its most colossal. Every frame feels carved from sand and prophecy.",
    source: "IndieWire",
    score: "A",
  },
  {
    quote:
      "An astonishing widescreen vision — bigger, stranger, and more emotionally precise than the first.",
    source: "Empire",
    score: "5 / 5",
  },
];
