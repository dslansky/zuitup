"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section, { itemVariants } from "@/components/Section";
import Image from "next/image";
import Drawer from "@/components/ui/Drawer";
import Button from "@/components/ui/Button";

type StyleCard = {
  key: string;
  name: string;
  image: string;
  blurb: string;
};

const styles: StyleCard[] = [
  { key: "single", name: "Single-Breasted Classic", image: "/brand/shabboszuit.jpg", blurb: "The timeless Shabbos go-to." },
  { key: "double", name: "Double-Breasted Bold", image: "/brand/weddingzuit.jpg", blurb: "Strong presence for yom tov or black-tie simchas." },
  { key: "tux", name: "Tuxedo", image: "/brand/blacktiezuit.jpg", blurb: "Sleek, refined, wedding-ready." },
  { key: "three", name: "Three-Piece Tradition", image: "/brand/ytzuit.jpg", blurb: "Extra polish for bar mitzvahs and special occasions." },
];

export default function Styles() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const close = () => setOpenKey(null);
  return (
    <Section id="styles" className="py-24 bg-white" stagger>
      <div className="container-standard">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl text-z-navy">Pick Your Base</h2>
        </div>
        <motion.div className="grid md:grid-cols-4 gap-6" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          {styles.map((s) => (
            <motion.div key={s.key} className="group rounded-2xl overflow-hidden border border-z-silver/30 bg-z-cream shadow-sm" variants={itemVariants}>
              <div className="relative h-56">
                <Image src={s.image} alt={`${s.name} style`} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl text-z-navy">{s.name}</h3>
                <p className="text-sm text-z-ink/80 mt-1">{s.blurb}</p>
                <Button variant="outline" size="sm" className="mt-3" onClick={() => setOpenKey(s.key)}>View Details</Button>
                {openKey === s.key && (
                  <Drawer open={true} onClose={close} title={`${s.name} — Details`}>
                    <div className="space-y-3 text-sm text-z-ink/80">
                      <p>{s.blurb}</p>
                      <p>Fit guidance, best occasions, and tailoring notes for {s.name}.</p>
                    </div>
                  </Drawer>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}


