"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Character-by-character reveal typography.
 */
export function KineticText({
  text,
  className = "",
  stagger = 0.03,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  const chars = Array.from(text);

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
      aria-label={text}
    >
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: "40%", filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
            },
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}
