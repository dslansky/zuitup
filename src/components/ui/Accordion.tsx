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
    <div className={`space-y-3 ${className}`}>
      {items.map((it) => (
        <div key={it.id} className="rounded-2xl border border-z-silver/30 bg-z-cream">
          <button className="w-full text-left p-4 flex items-center justify-between" onClick={() => setOpenId(openId === it.id ? null : it.id)}>
            <div className="font-medium text-z-navy">{it.title}</div>
            <span className="text-z-ink/60">{openId === it.id ? "–" : "+"}</span>
          </button>
          {openId === it.id && <div className="px-4 pb-4 text-sm text-z-ink/80">{it.content}</div>}
        </div>
      ))}
    </div>
  );
}


