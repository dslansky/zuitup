"use client";

import { ReactNode, useState } from "react";

type Item = { id: string; title: ReactNode; content: ReactNode };

type Props = {
  items: Item[];
  className?: string;
};

export default function Accordion({ items, className = "" }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className={`space-y-3 ${className}`} role="region" aria-label="Accordion List">
      {items.map((it) => {
        const isOpen = openId === it.id;
        return (
          <div key={it.id} className="rounded-2xl border border-z-silver/30 bg-z-cream">
            <button
              className="w-full text-left p-4 flex items-center justify-between focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-z-navy focus-visible:ring-offset-z-cream"
              aria-expanded={isOpen}
              aria-controls={`panel-${it.id}`}
              id={`accordion-${it.id}`}
              onClick={() => setOpenId(isOpen ? null : it.id)}
            >
              <div className="font-medium text-z-navy">{it.title}</div>
              <span className="text-z-ink/60" aria-hidden>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <div id={`panel-${it.id}`} role="region" aria-labelledby={`accordion-${it.id}`} className="px-4 pb-4 text-sm text-z-ink/80">
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


