"use client";

import { useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tooltip({
  children,
  content,
  className = "",
}: {
  children: ReactNode;
  content: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  const show = () => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: r.left + r.width / 2, y: r.top });
    setOpen(true);
  };

  return (
    <>
      <span
        ref={ref}
        className={cn(
          "inline underline decoration-dotted decoration-primary/60 underline-offset-4 cursor-help",
          className
        )}
        onMouseEnter={show}
        onMouseLeave={() => setOpen(false)}
        onFocus={show}
        onBlur={() => setOpen(false)}
        tabIndex={0}
      >
        {children}
      </span>
      {open && pos && (
        <span
          className="fixed z-[100] -translate-x-1/2 -translate-y-full px-3 py-2 rounded-lg bg-popover text-popover-foreground text-xs shadow-xl border max-w-xs pointer-events-none leading-relaxed"
          style={{ left: pos.x, top: pos.y - 8 }}
        >
          {content}
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-popover"
          />
        </span>
      )}
    </>
  );
}
