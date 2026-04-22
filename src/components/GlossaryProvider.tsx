"use client";

import { useEffect, useState } from "react";

/**
 * Listens for hover/focus on any `.glossary-term` element in the document
 * and displays a global tooltip with the definition from data-term.
 */
export function GlossaryProvider() {
  const [state, setState] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const term = target.closest<HTMLElement>(".glossary-term");
      if (!term) return;
      const def = term.getAttribute("data-term");
      if (!def) return;
      const r = term.getBoundingClientRect();
      setState({ text: def, x: r.left + r.width / 2, y: r.top });
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".glossary-term")) setState(null);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!state) return null;

  return (
    <div
      role="tooltip"
      className="fixed z-[1000] -translate-x-1/2 -translate-y-full px-3 py-2 rounded-lg bg-popover text-popover-foreground text-xs shadow-xl border max-w-xs pointer-events-none leading-relaxed"
      style={{ left: state.x, top: state.y - 10 }}
    >
      {state.text}
      <span
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-popover"
      />
    </div>
  );
}
