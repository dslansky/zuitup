"use client";

import { useState } from "react";

const quotes = [
  { name: "Avi", quote: "The fit is unreal. Got compliments all night." },
  { name: "Leah", quote: "Elegant and comfortable. The fabric quality shows." },
  { name: "David", quote: "Tailoring was spot on. I'd order again." },
  { name: "Miriam", quote: "Loved the customization options and timeline." },
  { name: "Yosef", quote: "From consult to delivery, five stars." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);
  return (
    <section id="testimonials" className="py-24">
      <div className="container-standard">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-3xl text-z-navy">What clients say</h2>
          <div className="flex gap-2">
            <button onClick={prev} className="border border-z-silver/40 rounded-md px-3 py-1 text-sm">Prev</button>
            <button onClick={next} className="border border-z-silver/40 rounded-md px-3 py-1 text-sm">Next</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 overflow-hidden">
          {[0,1,2].map((offset) => {
            const q = quotes[(index + offset) % quotes.length];
            return (
              <div key={offset} className="rounded-2xl border border-z-silver/30 bg-white p-6">
                <p className="text-z-ink/90">“{q.quote}”</p>
                <p className="mt-3 text-sm text-z-ink/60">— {q.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


