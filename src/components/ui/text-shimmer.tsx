import { cn } from "@/lib/utils";

export function TextShimmer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block bg-[linear-gradient(110deg,var(--muted-foreground),45%,var(--foreground),55%,var(--muted-foreground))] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer",
        className
      )}
    >
      {children}
    </span>
  );
}
