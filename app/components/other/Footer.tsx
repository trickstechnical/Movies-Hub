export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl tracking-[0.3em]">DUNE</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            A film by Denis Villeneuve. Based on the novel by Frank Herbert. In theaters and streaming worldwide.
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-foreground">Press</a></li>
          <li><a href="#" className="hover:text-foreground">Soundtrack</a></li>
          <li><a href="#" className="hover:text-foreground">Privacy</a></li>
          <li><a href="#" className="hover:text-foreground">Terms</a></li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Fan-made promotional concept. Not affiliated with Legendary or Warner Bros. Imagery is AI-generated.
      </p>
    </footer>
  );
}
