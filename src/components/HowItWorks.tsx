"use client";

const steps = [
  { key: "design", title: "Design", copy: "Choose your base, fabric, and details.", icon: "🎨" },
  { key: "measure", title: "Measure", copy: "We capture precise measurements.", icon: "📏" },
  { key: "deliver", title: "Deliver", copy: "Tailored and delivered on time.", icon: "📦" },
];

import { motion } from "framer-motion";
import Section, { itemVariants } from "@/components/Section";

export default function HowItWorks() {
  return (
    <Section id="how" className="py-24 bg-white" stagger>
      <div className="container-standard text-center">
        <h2 className="font-serif text-3xl text-z-navy mb-10">How It Works</h2>
        <motion.div className="grid md:grid-cols-3 gap-6 text-left" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          {steps.map((s) => (
            <motion.div key={s.key} className="rounded-2xl border border-z-silver/30 bg-z-cream p-6 shadow-sm" variants={itemVariants}>
              <div className="text-3xl mb-2" aria-hidden>{s.icon}</div>
              <h3 className="font-serif text-xl text-z-navy mb-1">{s.title}</h3>
              <p className="text-z-ink/80 text-sm">{s.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}


