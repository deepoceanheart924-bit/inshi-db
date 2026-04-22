"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const THEMES = [
  { id: "default", label: "Default", hue: 260, desc: "標準（紫青）" },
  { id: "optics", label: "Optics", hue: 25, desc: "光学（スペクトル）" },
  { id: "quantum", label: "Quantum", hue: 180, desc: "量子（シアン）" },
  { id: "relativity", label: "Relativity", hue: 320, desc: "相対論（時空）" },
  { id: "thermal", label: "Thermal", hue: 0, desc: "熱力学（赤）" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

function applyHue(hue: number) {
  const root = document.documentElement;
  root.style.setProperty("--primary", `oklch(0.5 0.2 ${hue})`);
  root.style.setProperty("--ring", `oklch(0.55 0.2 ${hue})`);
  root.style.setProperty("--accent", `oklch(0.94 0.02 ${hue})`);
  root.style.setProperty("--sidebar-primary", `oklch(0.5 0.2 ${hue})`);
}

export function ThemeSelector() {
  const [theme, setTheme] = useState<ThemeId>("default");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("physics-theme") as ThemeId | null;
    if (stored && THEMES.find((t) => t.id === stored)) {
      setTheme(stored);
      const t = THEMES.find((x) => x.id === stored);
      if (t) applyHue(t.hue);
    }
  }, []);

  const choose = (id: ThemeId) => {
    const t = THEMES.find((x) => x.id === id);
    if (!t) return;
    setTheme(id);
    applyHue(t.hue);
    localStorage.setItem("physics-theme", id);
    setOpen(false);
  };

  const current = THEMES.find((t) => t.id === theme);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-md px-2 h-7 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        aria-label="Physics theme"
        title={`Theme: ${current?.label}`}
      >
        <span
          className="size-3 rounded-full ring-1 ring-border"
          style={{ background: `oklch(0.5 0.2 ${current?.hue})` }}
        />
        <span className="hidden sm:inline">{current?.label}</span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 mt-2 w-48 rounded-xl border bg-popover shadow-lg z-50 p-1.5">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 py-2">
              Physics Theme
            </p>
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => choose(t.id)}
                className={cn(
                  "w-full flex items-center gap-3 rounded-md px-3 py-2 text-xs text-left transition-colors",
                  theme === t.id ? "bg-accent" : "hover:bg-muted"
                )}
              >
                <span
                  className="size-4 rounded-full ring-2 ring-background shrink-0"
                  style={{ background: `oklch(0.5 0.2 ${t.hue})` }}
                />
                <span className="flex-1">
                  <span className="font-medium">{t.label}</span>
                  <span className="text-muted-foreground ml-2 text-[10px]">
                    {t.desc}
                  </span>
                </span>
                {theme === t.id && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
