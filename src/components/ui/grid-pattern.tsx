"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Magic UI 風の SVG グリッド背景。セクションの背景装飾として使う。
 * square prop で枠線のみ、dot prop でドット交差点のみの表示に切替可能。
 */
export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  className,
  strokeDasharray = "0",
  ...props
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
  strokeDasharray?: string;
} & React.SVGProps<SVGSVGElement>) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/10 stroke-neutral-400/10",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
