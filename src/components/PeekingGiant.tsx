"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type PeekSide = "top" | "right" | "bottom" | "left";

const HIDDEN: Record<PeekSide, { x: string; y: string; rotate: number }> = {
  top: { x: "0%", y: "-115%", rotate: 0 },
  right: { x: "115%", y: "0%", rotate: 0 },
  bottom: { x: "0%", y: "115%", rotate: 180 },
  left: { x: "-115%", y: "0%", rotate: 0 },
};

const PEEK: Record<PeekSide, { x: string; y: string; rotate: number }> = {
  top: { x: "20%", y: "-55%", rotate: 12 },
  right: { x: "50%", y: "10%", rotate: -8 },
  bottom: { x: "-15%", y: "55%", rotate: 188 },
  left: { x: "-50%", y: "10%", rotate: 8 },
};

const SIDES: PeekSide[] = ["top", "right", "bottom", "left"];

/**
 * 画面外に潜む「巨人」。25〜60秒ごとにランダムな方角から覗き込み、
 * 5秒ほど見つめてから引っ込む。pointer-events-none で操作妨害なし。
 */
export function PeekingGiant() {
  const [visible, setVisible] = useState(false);
  const [side, setSide] = useState<PeekSide>("right");

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    const schedule = (initial = false) => {
      const wait = initial
        ? 8000 + Math.random() * 5000
        : 25000 + Math.random() * 35000;
      id = setTimeout(() => {
        setSide(SIDES[Math.floor(Math.random() * SIDES.length)]);
        setVisible(true);
        id = setTimeout(() => {
          setVisible(false);
          schedule(false);
        }, 5000);
      }, wait);
    };

    schedule(true);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="text-foreground/15 dark:text-primary/25"
        animate={visible ? PEEK[side] : HIDDEN[side]}
        transition={{ type: "spring", damping: 14, stiffness: 50, mass: 1.5 }}
      >
        <svg
          viewBox="0 0 400 420"
          className="size-[80vmin] max-w-[640px]"
          fill="currentColor"
        >
          {/* Giant head silhouette */}
          <ellipse cx="200" cy="210" rx="170" ry="180" />
          {/* Eye whites */}
          <ellipse cx="150" cy="190" rx="26" ry="20" fill="rgba(255,255,255,0.9)" />
          <ellipse cx="250" cy="190" rx="26" ry="20" fill="rgba(255,255,255,0.9)" />
          {/* Pupils (purple glow) */}
          <circle cx="150" cy="195" r="11" fill="#a78bfa" />
          <circle cx="250" cy="195" r="11" fill="#a78bfa" />
          {/* Eye highlights */}
          <circle cx="154" cy="190" r="3" fill="white" />
          <circle cx="254" cy="190" r="3" fill="white" />
          {/* Friendly smile */}
          <path
            d="M 158 270 Q 200 312 242 270"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
