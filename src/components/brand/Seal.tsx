import { cn } from "@/lib/utils";

/**
 * Editorial seal for the 院試DB brand.
 * Renders a Japanese-style square 落款 (rakkan) seal with the kanji 院.
 * Color is currentColor (set via text-* utility on a parent).
 */
export function Seal({
  className,
  weight = 1.25,
  withInner = true,
}: {
  className?: string;
  /** stroke width of the outer frame */
  weight?: number;
  /** show the thin secondary inset frame */
  withInner?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("inline-block", className)}
      fill="none"
      stroke="currentColor"
      role="img"
      aria-label="院試DB seal"
    >
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        rx="1.5"
        strokeWidth={weight}
      />
      {withInner && (
        <rect
          x="7.5"
          y="7.5"
          width="49"
          height="49"
          strokeWidth={0.5}
          opacity={0.45}
        />
      )}
      <text
        x="32"
        y="48"
        textAnchor="middle"
        fontSize="40"
        fontWeight={700}
        fill="currentColor"
        stroke="none"
        style={{
          fontFamily: "var(--font-serif-jp), 'Noto Serif JP', 'Yu Mincho', serif",
          letterSpacing: "-0.02em",
        }}
      >
        院
      </text>
    </svg>
  );
}
