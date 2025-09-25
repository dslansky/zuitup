"use client";

import { } from "react";
import Accordion from "@/components/ui/Accordion";

const items = [
  { key: "lapels", title: "Lapels", copy: "Notch, Peak, or Shawl — the detail that defines your look.", icon: "👔" },
  { key: "vents", title: "Vents", copy: "Single, Double, or None — for movement and tradition.", icon: "🧥" },
  { key: "pockets", title: "Pockets", copy: "Flap, Welt, or Patch — subtle choices, major style points.", icon: "🧷" },
  { key: "lining", title: "Lining", copy: "Classic navy, rich burgundy, or patterned flair.", icon: "🧵" },
  { key: "buttons", title: "Buttons", copy: "Polished horn, modern matte, or gold statement.", icon: "🪙" },
  { key: "monogram", title: "Monogram", copy: "Add your initials inside for a personal touch.", icon: "✒️" },
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


