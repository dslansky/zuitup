"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section, { itemVariants } from "@/components/Section";
import Image from "next/image";

type Swatch = { id: number; color: string; season: string; price: string };

const allSwatches: Swatch[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  color: ["Navy", "Charcoal", "Black", "Blue", "Brown", "Olive"][i % 6],
  season: ["All-Season", "Winter", "Summer"][i % 3],
  price: ["$", "$$", "$$$"][i % 3],
}));

export default function Fabrics() {
  const [color, setColor] = useState<string>("All");
  const [season, setSeason] = useState<string>("All");
  const [price, setPrice] = useState<string>("All");

  const filtered = useMemo(() => {
    return allSwatches.filter((s) =>
      (color === "All" || s.color === color) &&
      (season === "All" || s.season === season) &&
      (price === "All" || s.price === price)
    );
  }, [color, season, price]);

  return (
    <Section id="fabrics" className="py-24" stagger>
      <div className="container-standard">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-3xl text-z-navy">Fabric Teaser</h2>
          <div className="flex gap-3">
            <select value={color} onChange={(e) => setColor(e.target.value)} className="border border-z-silver/40 rounded-md text-sm px-2 py-1 bg-white">
              {(["All", "Navy", "Charcoal", "Black", "Blue", "Brown", "Olive"]) .map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select value={season} onChange={(e) => setSeason(e.target.value)} className="border border-z-silver/40 rounded-md text-sm px-2 py-1 bg-white">
              {(["All", "All-Season", "Winter", "Summer"]).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select value={price} onChange={(e) => setPrice(e.target.value)} className="border border-z-silver/40 rounded-md text-sm px-2 py-1 bg-white">
              {(["All", "$", "$$", "$$$"]).map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-z-ink/80 mb-4">Choose from a wide range of all-season and premium wool fabrics. From deep navy to rich charcoal, every swatch is crafted for comfort, style, and durability.</p>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          {filtered.map((s) => (
            <motion.div key={s.id} className="aspect-square rounded-2xl border border-z-silver/30 overflow-hidden bg-white shadow-sm" variants={itemVariants}>
              <div className="relative h-2/3">
                <Image src="/brand/swatch-navy.svg" alt={`${s.color} fabric swatch`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="p-2 text-xs text-z-ink/80 flex items-center justify-between">
                <span>{s.color}</span>
                <span>{s.season}</span>
                <span>{s.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}


