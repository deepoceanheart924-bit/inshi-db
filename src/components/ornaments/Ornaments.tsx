import { cn } from "@/lib/utils";

type Props = { className?: string; "aria-hidden"?: boolean };

/* ============================================================
 *  Glyph ornaments (typographic — render via Noto Serif JP)
 *  Use as section dividers, list bullets, end-of-article marks.
 * ============================================================ */

export function Fleuron({ className }: Props) {
  return (
    <span
      aria-hidden
      className={cn("inline-block font-serif-jp leading-none", className)}
    >
      ❦
    </span>
  );
}

export function SectionMark({ className }: Props) {
  return (
    <span
      aria-hidden
      className={cn("inline-block font-serif-jp leading-none", className)}
    >
      §
    </span>
  );
}

export function Pilcrow({ className }: Props) {
  return (
    <span
      aria-hidden
      className={cn("inline-block font-serif-jp leading-none", className)}
    >
      ¶
    </span>
  );
}

export function Asterism({ className }: Props) {
  return (
    <span
      aria-hidden
      className={cn("inline-block font-serif-jp leading-none", className)}
    >
      ⁂
    </span>
  );
}

/** End-of-article mark (Halmos tombstone) */
export function Tombstone({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("inline-block size-3", className)}
      fill="currentColor"
    >
      <rect x="6" y="6" width="12" height="12" rx="0.5" />
    </svg>
  );
}

/** Crossed reference mark (※) for footnotes / Editor's note */
export function Reference({ className }: Props) {
  return (
    <span
      aria-hidden
      className={cn("inline-block font-serif-jp leading-none", className)}
    >
      ※
    </span>
  );
}

/* ============================================================
 *  Decorative rules
 *  Horizontal dividers with optional center ornament.
 * ============================================================ */

/**
 * Hairline rule with a center ornament (default ❦).
 * Use between major sections in long-form pages.
 */
export function OrnamentRule({
  ornament = "fleuron",
  className,
  width = "full",
}: {
  ornament?: "fleuron" | "asterism" | "section" | "dot";
  width?: "full" | "narrow";
  className?: string;
}) {
  const Glyph =
    ornament === "asterism"
      ? Asterism
      : ornament === "section"
      ? SectionMark
      : ornament === "dot"
      ? () => (
          <span aria-hidden className="block size-1 rounded-full bg-foreground/40" />
        )
      : Fleuron;

  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center gap-4 text-foreground/45",
        width === "narrow" ? "max-w-xs mx-auto" : "w-full",
        className
      )}
    >
      <span className="flex-1 h-px bg-foreground/15" />
      <Glyph className="text-base" />
      <span className="flex-1 h-px bg-foreground/15" />
    </div>
  );
}

/**
 * Plain hairline. Use with optional `top` and `bottom` for editorial section breaks.
 */
export function Hairline({
  className,
  weight = "thin",
}: {
  className?: string;
  weight?: "thin" | "regular" | "double";
}) {
  if (weight === "double") {
    return (
      <div aria-hidden className={cn("space-y-1", className)}>
        <span className="block h-px bg-foreground/35" />
        <span className="block h-px bg-foreground/15" />
      </div>
    );
  }
  return (
    <span
      aria-hidden
      className={cn(
        "block h-px",
        weight === "thin" ? "bg-foreground/15" : "bg-foreground/35",
        className
      )}
    />
  );
}

/**
 * Dotted leader (table of contents style).
 * Renders as `<span aria-hidden>` filling available space.
 */
export function Leader({ className }: Props) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex-1 self-end mb-1.5 border-b border-dotted border-foreground/30",
        className
      )}
    />
  );
}

/**
 * Bracket pair for editorial pull-quotes / kicker labels.
 *   « Featured »
 */
export function Brackets({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-2 font-serif-jp italic",
        className
      )}
    >
      <span aria-hidden className="text-foreground/45">
        «
      </span>
      <span>{children}</span>
      <span aria-hidden className="text-foreground/45">
        »
      </span>
    </span>
  );
}

/**
 * Small caps kicker label with optional ornament prefix.
 * Use inside section headers ("§ III · By Year").
 */
export function Kicker({
  children,
  prefix,
  className,
}: {
  children: React.ReactNode;
  prefix?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
        className
      )}
    >
      {prefix && (
        <span aria-hidden className="text-foreground/45 font-serif-jp text-base leading-none translate-y-px">
          {prefix}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
