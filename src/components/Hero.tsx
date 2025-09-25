import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[70vh] min-h-[520px] w-full">
      <Image
        src="/brand/hero.jpg"
        alt="Tailored suit editorial backdrop, navy suit at golden hour"
        priority
        fetchPriority="high"
        sizes="100vw"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-z-ink/30" />
      <div className="relative h-full container-standard flex items-center">
        <div className="max-w-2xl text-z-cream">
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight">Zuit Up</h1>
          <p className="mt-3 text-lg sm:text-xl text-z-cream/95">Your Fit. Your Future. Your Zuit.</p>
          <p className="mt-2 text-base sm:text-lg text-z-cream/90 max-w-2xl">Custom suiting designed for Shabbos, Yom Tov, and every simcha. Look sharp, feel confident, and celebrate in style.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#styles" className="inline-flex items-center rounded-full bg-z-gold text-z-ink px-6 py-3 text-sm sm:text-base hover:bg-z-cream transition-colors">Start Your Zuit</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-z-cream/70 text-z-cream px-6 py-3 text-sm sm:text-base hover:bg-z-cream/10 transition-colors">Book a Fitting</a>
          </div>
        </div>
      </div>
    </section>
  );
}


