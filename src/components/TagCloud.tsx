"use client";

import Link from "next/link";
import { useMemo } from "react";
import { problems } from "@/data/problems";
import { cn } from "@/lib/utils";

/**
 * Visualizes all tags from all problems with size proportional to frequency.
 * Clicking a tag navigates to the first problem containing it.
 */
export function TagCloud() {
  const { tagCounts, firstProblemByTag } = useMemo(() => {
    const counts: Record<string, number> = {};
    const firstP: Record<string, string> = {};
    for (const p of problems) {
      for (const t of p.tags) {
        counts[t] = (counts[t] || 0) + 1;
        if (!firstP[t]) firstP[t] = p.id;
      }
    }
    return { tagCounts: counts, firstProblemByTag: firstP };
  }, []);

  const entries = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(...Object.values(tagCounts));

  return (
    <div className="flex flex-wrap gap-2 items-center justify-center leading-relaxed">
      {entries.map(([tag, count]) => {
        const size = 0.75 + (count / max) * 1.0;
        const intensity = 0.4 + (count / max) * 0.6;
        return (
          <Link
            key={tag}
            href={`/problems/${firstProblemByTag[tag]}`}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
              "transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-md"
            )}
            style={{
              fontSize: `${size}rem`,
              opacity: intensity,
            }}
            title={`${count}問`}
          >
            <span>{tag}</span>
            <span className="text-[0.65em] opacity-60">{count}</span>
          </Link>
        );
      })}
    </div>
  );
}
