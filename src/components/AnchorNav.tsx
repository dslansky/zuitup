"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#styles", label: "Styles" },
  { href: "#fabrics", label: "Fabrics" },
  { href: "#details", label: "Details" },
  { href: "#how", label: "How" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Love" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function AnchorNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur border-b transition-colors ${isScrolled ? "bg-z-cream/80 border-z-silver/30" : "bg-transparent border-transparent"}`}>
      <nav className="container-standard flex items-center justify-between h-14">
        <Link href="#hero" className="font-serif text-xl text-z-navy">Zuit Up</Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-z-gold text-z-ink">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#styles" className="inline-flex items-center rounded-2xl bg-z-gold text-z-ink px-4 py-2 text-sm hover:bg-z-cream transition-colors">Start Your Zuit</a>
        </div>
      </nav>
    </header>
  );
}


