"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Meteor = {
  id: number;
  left: number;
  delay: number;
  duration: number;
};

/**
 * 流星群風の装飾効果。数十の斜線が上から下に流れる。
 * Hero セクションや注目領域の背景として使う。
 */
export function Meteors({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const list = Array.from({ length: number }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 6,
    }));
    setMeteors(list);
  }, [number]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {meteors.map((m) => (
        <span
          key={m.id}
          className="absolute top-0 h-0.5 w-0.5 rounded-full bg-primary/80 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
          style={{
            left: `${m.left}%`,
            animation: `meteor ${m.duration}s linear ${m.delay}s infinite`,
          }}
        >
          <span className="absolute top-1/2 left-0 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-primary/80 to-transparent" />
        </span>
      ))}
      <style>{`
        @keyframes meteor {
          0%   { transform: translate(0, -20px) rotate(215deg); opacity: 0; }
          10%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(-600px, 600px) rotate(215deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
