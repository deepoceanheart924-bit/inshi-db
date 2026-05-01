import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** stroke width override (default: 1.25) */
  weight?: number;
  /** decorative — passed to aria-hidden when no aria-label given */
  "aria-label"?: string;
};

const baseSvg = (className?: string) =>
  cn("inline-block size-4 shrink-0", className);

const baseAttrs = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ============================================================
 *  Editorial arrow glyphs.
 *  Hairline 1.25, currentColor, square-cap-tunable via `weight`.
 * ============================================================ */

export function ArrowRight({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <polyline points="14,5.5 20.5,12 14,18.5" />
    </svg>
  );
}

export function ArrowLeft({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <polyline points="10,5.5 3.5,12 10,18.5" />
    </svg>
  );
}

export function ArrowUpRight({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="9,6 18,6 18,15" />
    </svg>
  );
}

export function ArrowDownRight({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <polyline points="9,18 18,18 18,9" />
    </svg>
  );
}

export function DoubleArrowRight({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <polyline points="6,5.5 12.5,12 6,18.5" />
      <polyline points="12,5.5 18.5,12 12,18.5" />
    </svg>
  );
}

export function DoubleArrowLeft({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <polyline points="18,5.5 11.5,12 18,18.5" />
      <polyline points="12,5.5 5.5,12 12,18.5" />
    </svg>
  );
}

export function ChevronRight({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <polyline points="9,5.5 15.5,12 9,18.5" />
    </svg>
  );
}

export function ChevronLeft({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <polyline points="15,5.5 8.5,12 15,18.5" />
    </svg>
  );
}

export function ChevronDown({ className, weight = 1.25, ...rest }: Props) {
  return (
    <svg
      {...baseAttrs}
      strokeWidth={weight}
      className={baseSvg(className)}
      aria-hidden={!rest["aria-label"]}
      {...rest}
    >
      <polyline points="5.5,9 12,15.5 18.5,9" />
    </svg>
  );
}

/**
 * Hairline arrow that lengthens on hover (good inside `group` parents).
 * Renders as: `[—— →]` where the rule extends and arrow nudges.
 */
export function HairlineArrow({
  className,
  length = "md",
}: {
  className?: string;
  length?: "sm" | "md" | "lg";
}) {
  const w = length === "sm" ? "w-6" : length === "lg" ? "w-12" : "w-9";
  const wHover =
    length === "sm" ? "group-hover:w-10" : length === "lg" ? "group-hover:w-20" : "group-hover:w-14";
  return (
    <span
      aria-hidden
      className={cn("inline-flex items-center gap-2 align-middle", className)}
    >
      <span
        className={cn(
          "h-px bg-foreground/55 transition-all duration-300 ease-out",
          w,
          wHover
        )}
      />
      <ArrowRight className="size-3.5 text-foreground/65 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );
}
