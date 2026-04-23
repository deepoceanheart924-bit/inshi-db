"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * IntersectionObserver ベースの blur + translate + fade の入場アニメ。
 * 既存の `FadeIn` より柔らかく、コンテンツが多い一覧で使うと美しい。
 */
export function BlurFade({
  children,
  delay = 0,
  duration = 0.55,
  offset = 10,
  blur = 6,
  inView = true,
  once = true,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  offset?: number;
  blur?: number;
  inView?: boolean;
  once?: boolean;
  className?: string;
}) {
  const ref = useRef(null);
  const visible = useInView(ref, { once, margin: "0px 0px -100px 0px" });
  const show = inView ? visible : true;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={cn(className)}
        initial={{ opacity: 0, y: offset, filter: `blur(${blur}px)` }}
        animate={
          show
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: offset, filter: `blur(${blur}px)` }
        }
        exit={{ opacity: 0, y: offset, filter: `blur(${blur}px)` }}
        transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
