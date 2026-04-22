import { cn } from "@/lib/utils";

/** Dot pattern (Hero background etc) */
export function DotPattern({
  className = "",
  size = 24,
  opacity = 0.5,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg className={cn("absolute inset-0 h-full w-full", className)} style={{ opacity }} aria-hidden>
      <defs>
        <pattern id="dots" width={size} height={size} patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

/** Grid pattern */
export function GridPattern({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg className={cn("absolute inset-0 h-full w-full", className)} aria-hidden>
      <defs>
        <pattern id="grid" width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

/** Hexagon pattern */
export function HexagonPattern({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  const a = size;
  const h = (a * Math.sqrt(3)) / 2;
  return (
    <svg className={cn("absolute inset-0 h-full w-full", className)} aria-hidden>
      <defs>
        <pattern id="hex" width={a * 1.5} height={h * 2} patternUnits="userSpaceOnUse">
          <path
            d={`M ${a / 4},0 L ${(a * 3) / 4},0 L ${a},${h} L ${(a * 3) / 4},${h * 2} L ${a / 4},${h * 2} L 0,${h} Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}

/** Diagonal lines (subtle texture) */
export function DiagonalPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={cn("absolute inset-0 h-full w-full", className)} aria-hidden>
      <defs>
        <pattern id="diag" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag)" />
    </svg>
  );
}

/** Floating math symbols for hero */
export function MathSymbolsBackground({ className = "" }: { className?: string }) {
  const symbols = [
    { s: "∫", x: "8%", y: "20%", size: 80, dur: "18s" },
    { s: "∂", x: "88%", y: "15%", size: 60, dur: "22s" },
    { s: "∇", x: "15%", y: "75%", size: 70, dur: "20s" },
    { s: "ℏ", x: "82%", y: "78%", size: 55, dur: "24s" },
    { s: "Σ", x: "50%", y: "10%", size: 65, dur: "19s" },
    { s: "π", x: "48%", y: "85%", size: 58, dur: "21s" },
    { s: "Ψ", x: "25%", y: "45%", size: 50, dur: "23s" },
    { s: "∞", x: "75%", y: "45%", size: 62, dur: "17s" },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden>
      {symbols.map((sym, i) => (
        <span
          key={i}
          className="absolute font-serif italic select-none"
          style={{
            left: sym.x,
            top: sym.y,
            fontSize: `${sym.size}px`,
            color: "currentColor",
            opacity: 0.06,
            animation: `float-${i % 3} ${sym.dur} ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {sym.s}
        </span>
      ))}
      <style>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -15px) rotate(5deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-12px, 10px) rotate(-5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(8px, 12px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
}

/** Decorative section divider with geometry */
export function GeometricDivider({ className = "" }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center py-8", className)}>
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative flex items-center gap-2 bg-background px-4">
        <div className="size-1.5 rounded-full bg-primary/30" />
        <div className="size-2 rounded-full bg-primary/50" />
        <div className="size-2.5 rounded-full bg-primary" />
        <div className="size-2 rounded-full bg-primary/50" />
        <div className="size-1.5 rounded-full bg-primary/30" />
      </div>
    </div>
  );
}

/** Corner ornament */
export function CornerOrnament({ className = "", position = "top-left" }: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotations = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  };
  return (
    <svg
      className={cn("absolute size-16", className)}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden
    >
      <g transform={rotations[position]} style={{ transformOrigin: "32px 32px" }}>
        <path d="M 4 4 L 28 4" opacity="0.6" />
        <path d="M 4 4 L 4 28" opacity="0.6" />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
        <circle cx="12" cy="4" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="4" cy="12" r="1" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}

/** Decorative physics formulas as background watermarks */
export function FormulaWatermark({ className = "" }: { className?: string }) {
  const formulas = [
    { f: "E = mc²", x: "10%", y: "30%", size: "2rem" },
    { f: "iℏ∂ψ/∂t = Ĥψ", x: "70%", y: "60%", size: "1.5rem" },
    { f: "∇·E = ρ/ε₀", x: "15%", y: "75%", size: "1.25rem" },
    { f: "F = ma", x: "85%", y: "25%", size: "2.5rem" },
  ];
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden>
      {formulas.map((f, i) => (
        <span
          key={i}
          className="absolute font-serif italic select-none whitespace-nowrap"
          style={{
            left: f.x,
            top: f.y,
            fontSize: f.size,
            color: "currentColor",
            opacity: 0.05,
          }}
        >
          {f.f}
        </span>
      ))}
    </div>
  );
}
