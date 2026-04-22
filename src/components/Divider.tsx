import { cn } from "@/lib/utils";

/**
 * Diagonal section divider with slight gradient.
 */
export function DiagonalDivider({
  className = "",
  flip = false,
  color = "var(--background)",
}: {
  className?: string;
  flip?: boolean;
  color?: string;
}) {
  return (
    <div className={cn("relative h-16 overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <polygon
          points={flip ? "0,100 100,0 100,100" : "0,0 100,100 0,100"}
          fill={color}
        />
      </svg>
    </div>
  );
}

/** Wavy divider */
export function WavyDivider({ className = "", color = "var(--background)" }: { className?: string; color?: string }) {
  return (
    <div className={cn("relative h-20 overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,60 Q300,120 600,60 T1200,60 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
