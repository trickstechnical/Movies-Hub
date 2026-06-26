"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#cast", label: "Cast" },
  { href: "#trailer", label: "Trailer" },
  { href: "#reviews", label: "Reviews" },
];

interface NavProps {
  title: string | undefined;
  downloadUrl: string;
}

export function Nav({ title, downloadUrl }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-display text-foreground text-2xl tracking-[0.3em]">
          {title}
        </a>
        <ul className="text-muted-foreground hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground focus-visible:text-foreground transition-colors focus-visible:outline-none"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={downloadUrl}
          className="bg-primary text-primary-foreground shadow-glow inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-transform hover:scale-[1.03]"
        >
          Download Now
        </a>
      </nav>
    </header>
  );
}
