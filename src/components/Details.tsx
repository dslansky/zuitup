"use client";

import { } from "react";
import Accordion from "@/components/ui/Accordion";

const items = [
  { key: "lapels", title: "Lapels", copy: "Choose notch, peak, or shawl lapels.", icon: "👔" },
  { key: "vents", title: "Vents", copy: "Single or double vents for movement.", icon: "🧥" },
  { key: "pockets", title: "Pockets", copy: "Flap, patch, or jetted pockets.", icon: "🧷" },
  { key: "lining", title: "Lining", copy: "Breathable bemberg or statement patterns.", icon: "🧵" },
  { key: "buttons", title: "Buttons", copy: "Horn, corozo, or covered buttons.", icon: "🪙" },
  { key: "monogram", title: "Monogram", copy: "Personalize with subtle monogram.", icon: "✒️" },
];

export default function Details() {
  return (
    <section id="details" className="py-24 bg-white">
      <div className="container-standard">
        <h2 className="font-serif text-3xl text-z-navy mb-6">Style Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Accordion
            items={items.slice(0, 3).map((it) => ({ id: it.key, title: (
              <div className="flex items-center gap-3"><span className="text-xl" aria-hidden>{it.icon}</span><span>{it.title}</span></div>
            ), content: (
              <div>
                <div className="h-28 w-full mb-3 rounded-lg bg-white border border-z-silver/30" />
                <p>{it.copy}</p>
              </div>
            ) }))}
          />
          <Accordion
            items={items.slice(3).map((it) => ({ id: it.key, title: (
              <div className="flex items-center gap-3"><span className="text-xl" aria-hidden>{it.icon}</span><span>{it.title}</span></div>
            ), content: (
              <div>
                <div className="h-28 w-full mb-3 rounded-lg bg-white border border-z-silver/30" />
                <p>{it.copy}</p>
              </div>
            ) }))}
          />
        </div>
      </div>
    </section>
  );
}


