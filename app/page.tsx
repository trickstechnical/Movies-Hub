import { Nav, Hero, Overview, Cast, Trailer, Reviews, Gallery, Footer } from '@/components/other'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Overview />
      <Cast />
      <Trailer />
      <Reviews />
    </main>
  );
}
