import Link from "next/link";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/**
 * Editorial breadcrumb: monospace small-caps with hairline separators.
 * Last item rendered as plain serif (current).
 */
export function EditorialBreadcrumb({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        "flex items-baseline flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
        className
      )}
    >
      {items.map((c, i) => {
        const isLast = i === items.length - 1;
        const node = c.href && !isLast ? (
          <Link
            href={c.href}
            className="hover:text-foreground transition-colors"
          >
            {c.label}
          </Link>
        ) : (
          <span
            className={cn(
              isLast && "font-serif-jp normal-case tracking-normal text-[12px] text-foreground"
            )}
          >
            {c.label}
          </span>
        );

        return (
          <span key={i} className="inline-flex items-baseline gap-2">
            {node}
            {!isLast && (
              <span aria-hidden className="text-foreground/30">
                /
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
