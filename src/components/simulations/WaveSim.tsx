"use client";

import { useEffect, useRef } from "react";

/**
 * Two-mode beats visualization: two sine waves with close frequencies
 * summed to produce a beat envelope. Connected to the 連成振動 problem.
 */
export function WaveSim({ className = "" }: { className?: string }) {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const envelopeTopRef = useRef<SVGPathElement>(null);
  const envelopeBottomRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let raf = 0;
    let t = 0;
    const W = 400;
    const H = 180;
    const N = 120; // samples
    const omega1 = 2.4;
    const omega2 = 2.8;

    const step = () => {
      t += 0.016;
      const A = 40;
      const midY = H / 2;

      // Sum wave: x1 = A cos(ω1 t) + A cos(ω2 t)
      // Beat envelope: ±2A |cos((ω2-ω1)/2 · t)|... we plot vs x (space) here
      // For visual clarity, we animate in x and time together.
      let d1 = "M ";
      let d2 = "M ";
      let dEnvT = "M ";
      let dEnvB = "M ";
      for (let i = 0; i <= N; i++) {
        const x = (i / N) * W;
        const phase = (i / N) * 8; // spatial phase
        const wave1 = A * Math.cos(phase * omega1 + t * omega1 * 2);
        const wave2 = A * Math.cos(phase * omega2 + t * omega2 * 2);
        const sum = 0.5 * (wave1 + wave2); // ×0.5 to keep amplitude similar visually
        const env = 2 * A * Math.cos(((omega2 - omega1) / 2) * (phase + t * 2));
        const envAbs = Math.abs(env) * 0.5;

        d1 += `${i === 0 ? "" : "L "}${x.toFixed(1)},${(midY + sum).toFixed(1)} `;
        d2 += `${i === 0 ? "" : "L "}${x.toFixed(1)},${(midY + env * 0.5).toFixed(1)} `;
        dEnvT += `${i === 0 ? "" : "L "}${x.toFixed(1)},${(midY - envAbs).toFixed(1)} `;
        dEnvB += `${i === 0 ? "" : "L "}${x.toFixed(1)},${(midY + envAbs).toFixed(1)} `;
      }
      if (path1Ref.current) path1Ref.current.setAttribute("d", d1);
      if (path2Ref.current) path2Ref.current.setAttribute("d", d2);
      if (envelopeTopRef.current) envelopeTopRef.current.setAttribute("d", dEnvT);
      if (envelopeBottomRef.current) envelopeBottomRef.current.setAttribute("d", dEnvB);

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 400 180" className={className} aria-hidden>
      {/* Center line */}
      <line x1="0" y1="90" x2="400" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.3" />

      {/* Envelope */}
      <path ref={envelopeTopRef} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity="0.35" />
      <path ref={envelopeBottomRef} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity="0.35" />

      {/* Slow beat (envelope wave) */}
      <path ref={path2Ref} fill="none" stroke="oklch(0.65 0.2 330)" strokeWidth="1.5" opacity="0.6" />

      {/* Main sum wave */}
      <path ref={path1Ref} fill="none" stroke="oklch(0.55 0.2 260)" strokeWidth="2" />

      {/* Legend */}
      <text x="10" y="170" fontSize="9" fill="currentColor" opacity="0.5" className="font-mono">
        A cos(ω₁t) + A cos(ω₂t) — うなり
      </text>
    </svg>
  );
}
