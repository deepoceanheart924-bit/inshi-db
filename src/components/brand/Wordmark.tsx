import Link from "next/link";
import { Seal } from "./Seal";
import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg";

const SEAL_SIZE: Record<Size, string> = {
  xs: "size-6",
  sm: "size-8",
  md: "size-10",
  lg: "size-14",
};

const NAME_SIZE: Record<Size, string> = {
  xs: "text-[13px]",
  sm: "text-[15px]",
  md: "text-base",
  lg: "text-2xl",
};

const TAG_SIZE: Record<Size, string> = {
  xs: "text-[8px]",
  sm: "text-[9px]",
  md: "text-[9px]",
  lg: "text-[10px]",
};

/**
 * Composite brand mark: editorial seal + wordmark + tagline.
 * Use in headers, footers, and OG-image-style hero areas.
 */
export function Wordmark({
  size = "md",
  showTag = true,
  withInner = true,
  href = "/",
  tagline = "Physics · Graduate · Archive",
  className,
}: {
  size?: Size;
  showTag?: boolean;
  withInner?: boolean;
  href?: string | null;
  tagline?: string;
  className?: string;
}) {
  const inner = (
    <span
      className={cn(
        "inline-flex items-baseline gap-3 group leading-none",
        className
      )}
    >
      <Seal className={SEAL_SIZE[size]} withInner={withInner} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif-jp font-bold leading-none tracking-tight",
            NAME_SIZE[size]
          )}
        >
          院試DB
        </span>
        {showTag && (
          <span
            className={cn(
              "font-mono uppercase tracking-[0.28em] text-muted-foreground leading-none mt-1.5",
              TAG_SIZE[size]
            )}
          >
            {tagline}
          </span>
        )}
      </span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-block shrink-0">
      {inner}
    </Link>
  );
}
