import { cn } from "@/lib/utils";

/**
 * Huge decorative background typography for sections.
 * Adds magazine-style layered depth.
 */
export function BigBackgroundType({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute select-none font-black uppercase tracking-tighter",
        "text-[10rem] sm:text-[14rem] lg:text-[18rem] leading-[0.8]",
        "text-transparent [-webkit-text-stroke:1px_var(--border)]",
        "opacity-30",
        className
      )}
    >
      {text}
    </span>
  );
}
