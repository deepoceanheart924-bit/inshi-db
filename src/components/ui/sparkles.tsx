"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Sparkle = {
  id: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

/**
 * キラキラ演出。子要素の背面に小さな星が散る。
 * CTA ボタンやヒーローのハイライトに。
 */
export function Sparkles({
  count = 14,
  children,
  className,
}: {
  count?: number;
  children?: React.ReactNode;
  className?: string;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const list = Array.from({ length: count }, (_, i) => ({
      id: `s-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 6,
      delay: Math.random() * 2,
      duration: 1.4 + Math.random() * 1.6,
    }));
    setSparkles(list);
  }, [count]);

  return (
    <span className={cn("relative inline-flex", className)}>
      <span className="absolute inset-0 pointer-events-none" aria-hidden>
        {sparkles.map((s) => (
          <svg
            key={s.id}
            className="absolute"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              animation: `sparkle-pop ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
            viewBox="0 0 68 68"
            fill="currentColor"
          >
            <path d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.648 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z" />
          </svg>
        ))}
        <style>{`
          @keyframes sparkle-pop {
            0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
            50%      { opacity: 0.8; transform: scale(1) rotate(180deg); }
          }
        `}</style>
      </span>
      <span className="relative z-10">{children}</span>
    </span>
  );
}
