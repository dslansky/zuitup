export default function Hero() {
  return (
    <section id="hero" className="relative h-[70vh] min-h-[520px] w-full">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2100&auto=format&fit=crop)'
        }}
      />
      <div className="absolute inset-0 bg-z-ink/30" />
      <div className="relative h-full container-standard flex items-center">
        <div className="max-w-2xl text-z-cream">
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight">Zuit Up</h1>
          <p className="mt-4 text-lg sm:text-xl text-z-cream/90">Your Fit. Your Future. Your Zuit.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#styles" className="inline-flex items-center rounded-full bg-z-gold text-z-ink px-6 py-3 text-sm sm:text-base hover:bg-z-cream transition-colors">Start Your Zuit</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-z-cream/70 text-z-cream px-6 py-3 text-sm sm:text-base hover:bg-z-cream/10 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}


