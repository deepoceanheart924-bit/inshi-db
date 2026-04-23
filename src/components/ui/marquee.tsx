"use client";

import { cn } from "@/lib/utils";

/**
 * Magic UI 風の Marquee（横スクロールループ）。子要素を複製して無限ループ。
 * 既存 EquationMarquee より汎用。タグクラウド、分野チップ一覧等に。
 */
export function Marquee({
  children,
  pauseOnHover = true,
  reverse = false,
  speed = 40,
  className,
}: {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  /** 1ループの秒数。大きいほどゆっくり */
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex gap-6 overflow-hidden py-4 [--gap:24px]",
        className,
      )}
      style={{ maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)" }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i === 1 ? true : undefined}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)]",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{ animationDuration: `${speed}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
