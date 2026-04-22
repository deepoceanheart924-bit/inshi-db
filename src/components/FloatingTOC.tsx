"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string; level: number };

export function FloatingTOC() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Scan h2 and h3 inside the main article area
    const scan = () => {
      const area = document.querySelector<HTMLElement>("[data-toc-root]");
      if (!area) return;
      const headings = area.querySelectorAll<HTMLElement>("h2, h3");
      const arr: Item[] = [];
      headings.forEach((h, i) => {
        if (!h.id) h.id = `sec-${i}-${h.textContent?.replace(/\s+/g, "-").slice(0, 20)}`;
        arr.push({
          id: h.id,
          label: h.textContent || "",
          level: h.tagName === "H3" ? 3 : 2,
        });
      });
      setItems(arr);
    };
    scan();
    // Re-scan after a short delay in case content hydrates later
    const t = setTimeout(scan, 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <aside className="hidden xl:block fixed right-8 top-28 w-60 z-30 max-h-[calc(100vh-200px)] overflow-auto">
      <div className="rounded-xl border bg-background/60 backdrop-blur-md p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3"
        >
          <span>On this page</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className={cn("transition-transform", collapsed ? "-rotate-90" : "")}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {!collapsed && (
          <nav className="space-y-1">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={cn(
                  "block text-xs leading-snug py-1 border-l-2 pl-3 transition-all",
                  it.level === 3 && "pl-5",
                  activeId === it.id
                    ? "border-primary text-foreground font-medium"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/40"
                )}
              >
                {it.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </aside>
  );
}
