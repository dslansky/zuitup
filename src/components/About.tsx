export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-standard grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-serif text-3xl text-z-navy mb-2">About Zuit Up</h2>
          <p className="text-z-ink/80">Founded by <span className="font-medium text-z-navy">Yaakov Zand</span>, Zuit Up brings premium, made-to-measure suiting to the next generation. From Shabbos to simchas, Yaakov’s focus is simple: fit that flatters, fabrics that last, and service that feels personal.</p>
        </div>
        <div className="rounded-2xl border border-z-silver/30 bg-z-cream p-6 text-sm text-z-ink/80">
          <p>With years of hands-on tailoring experience and a keen eye for modern taste, Yaakov guides clients from selection to delivery—ensuring every Zuit arrives simcha-ready.</p>
        </div>
      </div>
    </section>
  );
}


