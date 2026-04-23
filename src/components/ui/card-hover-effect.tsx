"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Item = {
  title: React.ReactNode;
  description?: React.ReactNode;
  href: string;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
};

/**
 * Aceternity の card-hover-effect 風。カード群で、hover 中のカード背後に
 * ふわっと浮き出るハイライトが追従する。
 */
export function CardHoverGrid({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setActive(idx)}
          onMouseLeave={() => setActive(null)}
        >
          <AnimatePresence>
            {active === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/10 block rounded-2xl"
                layoutId="card-hover-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.12 } }}
                exit={{ opacity: 0, transition: { duration: 0.12, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 rounded-2xl h-full w-full p-5 overflow-hidden border bg-card group-hover:border-primary/30 transition-colors duration-300">
            <div className="flex items-start gap-3 mb-2">
              {item.icon && (
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground tracking-tight truncate">
                    {item.title}
                  </h3>
                  {item.badge}
                </div>
                {item.description && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
