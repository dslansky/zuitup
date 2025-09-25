"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
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
          <a href="#styles" className="hover:text-z-gold text-z-ink">Styles</a>
          <a href="#fabrics" className="hover:text-z-gold text-z-ink">Fabrics</a>
          <a href="#details" className="hover:text-z-gold text-z-ink">Details</a>
          <a href="#how" className="hover:text-z-gold text-z-ink">How It Works</a>
          <a href="#testimonials" className="hover:text-z-gold text-z-ink">Testimonials</a>
          <a href="#faq" className="hover:text-z-gold text-z-ink">FAQ</a>
          <a href="#contact" className="hover:text-z-gold text-z-ink">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#cta" className="inline-flex items-center rounded-full bg-z-navy text-z-cream px-4 py-2 text-sm hover:bg-z-gold hover:text-z-ink transition-colors">Get started</a>
        </div>
      </nav>
    </header>
  );
}


