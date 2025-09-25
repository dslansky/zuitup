"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useMemo } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  stagger?: boolean;
};

export const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Section({ id, className, children, stagger = false }: SectionProps) {
  const reduced = useReducedMotion();
  const variants = useMemo(() => {
    if (reduced) {
      return { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } };
    }
    return {
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          when: stagger ? "beforeChildren" : undefined,
          staggerChildren: stagger ? 0.08 : undefined,
        },
      },
    } as const;
  }, [reduced, stagger]);

  return (
    <section id={id} className={className}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={variants}>
        {children}
      </motion.div>
    </section>
  );
}


