"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "RIGHT" | "BOTTOM" | "LEFT";

const MAP: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(var(--primary) / 0.8) 0%, rgba(255,255,255,0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(var(--primary) / 0.8) 0%, rgba(255,255,255,0) 100%)",
  BOTTOM:
    "radial-gradient(20.7% 50% at 50% 100%, hsl(var(--primary) / 0.8) 0%, rgba(255,255,255,0) 100%)",
  RIGHT:
    "radial-gradient(16.2% 41.2% at 100% 50%, hsl(var(--primary) / 0.8) 0%, rgba(255,255,255,0) 100%)",
};

/**
 * 四辺を時計回りに走るグラデーションボーダー。
 * Hover 時はアクセント色にハイライト。
 */
export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1.8,
  clockwise = true,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  containerClassName?: string;
  duration?: number;
  clockwise?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [dir, setDir] = useState<Direction>("TOP");

  useEffect(() => {
    if (hovered) return;
    const order: Direction[] = clockwise
      ? ["TOP", "LEFT", "BOTTOM", "RIGHT"]
      : ["TOP", "RIGHT", "BOTTOM", "LEFT"];
    const id = setInterval(() => {
      setDir((prev) => order[(order.indexOf(prev) + 1) % order.length]);
    }, duration * 1000);
    return () => clearInterval(id);
  }, [hovered, clockwise, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex items-center overflow-hidden rounded-full border border-transparent bg-background/50 p-px transition duration-500",
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 flex items-center gap-2 rounded-[inherit] bg-background px-4 py-2 text-sm",
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{ filter: "blur(2px)" }}
        initial={{ background: MAP.TOP }}
        animate={{
          background: hovered
            ? `radial-gradient(75% 181.16% at 50% 50%, hsl(var(--primary)) 0%, rgba(255,255,255,0) 100%)`
            : MAP[dir],
        }}
        transition={{ ease: "linear", duration: duration }}
      />
      <div className="absolute inset-px z-[1] rounded-[inherit] bg-background" />
    </Tag>
  );
}
