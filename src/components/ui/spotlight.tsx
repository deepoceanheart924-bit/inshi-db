"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function Spotlight({
  children,
  className = "",
  size = 400,
}: {
  children?: React.ReactNode;
  className?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        className="pointer-events-none absolute -z-[5] rounded-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent transition-opacity duration-300"
        style={{
          width: size,
          height: size,
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity,
        }}
      />
      {children}
    </div>
  );
}
