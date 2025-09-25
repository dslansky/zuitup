"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section, { itemVariants } from "@/components/Section";
import Drawer from "@/components/ui/Drawer";
import Button from "@/components/ui/Button";

type StyleCard = {
  key: string;
  name: string;
  image: string;
  blurb: string;
};

const styles: StyleCard[] = [
  { key: "single", name: "Single-Breasted", image: "https://images.unsplash.com/photo-1520975922326-4deab0f7f3ae?q=80&w=1200&auto=format&fit=crop", blurb: "Classic and versatile for any occasion." },
  { key: "double", name: "Double-Breasted", image: "https://images.unsplash.com/photo-1479065476818-424362c3a854?q=80&w=1200&auto=format&fit=crop", blurb: "Bold silhouette with timeless appeal." },
  { key: "tux", name: "Tuxedo", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", blurb: "Black-tie ready elegance." },
  { key: "three", name: "Three-Piece", image: "https://images.unsplash.com/photo-1516727003284-a96541e51e1f?q=80&w=1200&auto=format&fit=crop", blurb: "Refined vest set for elevated formality." },
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
                <div className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${s.image})` }} />
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


