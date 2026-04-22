"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import { cn } from "@/lib/utils";

const EQUATIONS = [
  "F = ma",
  "E = mc^2",
  "i\\hbar\\frac{\\partial \\psi}{\\partial t} = \\hat{H}\\psi",
  "\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}",
  "\\oint \\vec{B}\\cdot d\\vec{\\ell} = \\mu_0 I",
  "S = k_B \\ln W",
  "pV = Nk_BT",
  "\\hat{a}^\\dagger|n\\rangle = \\sqrt{n+1}|n+1\\rangle",
  "\\int_{-\\infty}^{\\infty} e^{-x^2}dx = \\sqrt{\\pi}",
  "\\frac{d^2\\theta}{dt^2} = -\\frac{g}{\\ell}\\sin\\theta",
  "\\langle \\psi | \\hat{A} | \\psi \\rangle",
  "e^{i\\pi} + 1 = 0",
  "\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}",
  "G_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}",
];

function EquationStrip({ reverse = false }: { reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll<HTMLSpanElement>("[data-eq]");
    items.forEach((el) => {
      const tex = el.getAttribute("data-eq") || "";
      try {
        el.innerHTML = katex.renderToString(tex, { throwOnError: false });
      } catch {
        el.textContent = tex;
      }
    });
  }, []);

  const EQ_LIST = reverse ? [...EQUATIONS].reverse() : EQUATIONS;

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-14 whitespace-nowrap",
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      )}
    >
      {[...EQ_LIST, ...EQ_LIST].map((eq, i) => (
        <span
          key={i}
          data-eq={eq}
          className="text-2xl text-muted-foreground/50 shrink-0"
        />
      ))}
    </div>
  );
}

export function EquationMarquee({ className = "" }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden py-6 border-y bg-muted/20", className)}>
      {/* Fade gradients on edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <EquationStrip />
    </div>
  );
}

export function EquationMarqueeDouble({ className = "" }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden py-6 border-y bg-muted/20 flex flex-col gap-4", className)}>
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <EquationStrip />
      <EquationStrip reverse />
    </div>
  );
}
