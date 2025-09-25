const faqs = [
  { q: "How long does tailoring take?", a: "Typically 2–4 weeks depending on season." },
  { q: "Do you offer alterations?", a: "Yes, each Zuit includes an alteration credit." },
  { q: "What sizes do you support?", a: "All bodies. We measure and make-to-order." },
  { q: "Where are fabrics from?", a: "Sourced from acclaimed mills with premium wool." },
  { q: "What is the return policy?", a: "We’ll make it right through alterations or remakes." },
  { q: "Do you ship internationally?", a: "Select regions; contact us for details." },
  { q: "Can I rush an order?", a: "Yes, expedited timelines available when possible." },
  { q: "How do I care for my suit?", a: "Steam and brush; dry clean sparingly." },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-standard max-w-3xl">
        <h2 className="font-serif text-3xl text-z-navy mb-6">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <details key={idx} className="rounded-xl border border-z-silver/30 bg-z-cream p-4">
              <summary className="cursor-pointer font-medium text-z-navy">{item.q}</summary>
              <p className="mt-2 text-z-ink/80 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


