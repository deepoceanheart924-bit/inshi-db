"use client";

import { useEffect, useRef } from "react";

/**
 * Quantum harmonic oscillator: probability density |ψ_n|² for n=0, 1, 2.
 * Plots Hermite Gaussians which slowly oscillate due to time-dependent phase.
 * Connected to the 調和振動子 problem.
 */
export function QuantumSim({ className = "" }: { className?: string }) {
  const path0Ref = useRef<SVGPathElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    let raf = 0;
    let t = 0;
    const W = 400;
    const H = 220;
    const N = 120;

    // Hermite polynomials H_0 = 1, H_1 = 2ξ, H_2 = 4ξ² - 2
    const H0 = () => 1;
    const H1 = (xi: number) => 2 * xi;
    const H2 = (xi: number) => 4 * xi * xi - 2;

    // ψ_n(x, t) has phase factor exp(-i(n+1/2)ω t). We plot |ψ+interference|²
    // For visual: show sum of ψ0 and ψ1 with varying relative phase, plot prob density.
    const step = () => {
      t += 0.016;
      const scaleX = 60;
      const baseY = 190;

      let d0 = "";
      let d1 = "";
      let d2 = "";
      for (let i = 0; i <= N; i++) {
        const x = (i / N) * W;
        const xi = (x - W / 2) / scaleX;
        const gauss = Math.exp(-xi * xi);
        // |ψ_0|² (static)
        const p0 = gauss * gauss;
        // ψ_1 with breathing phase
        const p1 = Math.pow(H1(xi) * gauss, 2) * 0.25;
        // Superposition ψ_0 + e^(iωt) ψ_1 - this oscillates in x
        const phase = t * 1.5;
        const psiReal = gauss + Math.cos(phase) * H1(xi) * gauss * 0.5;
        const psiImag = Math.sin(phase) * H1(xi) * gauss * 0.5;
        const pSum = (psiReal * psiReal + psiImag * psiImag) * 0.35;

        const y0 = baseY - p0 * 100;
        const y1 = baseY - p1 * 150;
        const y2 = baseY - pSum * 160;

        d0 += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y0.toFixed(1)} `;
        d1 += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y1.toFixed(1)} `;
        d2 += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y2.toFixed(1)} `;
      }
      if (path0Ref.current) path0Ref.current.setAttribute("d", d0);
      if (path1Ref.current) path1Ref.current.setAttribute("d", d1);
      if (path2Ref.current) path2Ref.current.setAttribute("d", d2);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 400 220" className={className} aria-hidden>
      {/* Axis */}
      <line x1="0" y1="190" x2="400" y2="190" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="200" y1="30" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.25" />

      {/* Parabolic potential */}
      <path
        d={`M 60 30 Q 200 260 340 30`}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 3"
        opacity="0.3"
      />

      {/* Ground state |ψ_0|² (static) */}
      <path ref={path0Ref} fill="none" stroke="oklch(0.6 0.15 260)" strokeWidth="1.5" opacity="0.5" />

      {/* First excited |ψ_1|² (static) */}
      <path ref={path1Ref} fill="none" stroke="oklch(0.6 0.2 330)" strokeWidth="1.2" opacity="0.4" />

      {/* Superposition (oscillating) */}
      <path ref={path2Ref} fill="none" stroke="oklch(0.6 0.2 200)" strokeWidth="2" />

      {/* Labels */}
      <g fontSize="9" fill="currentColor" className="font-mono">
        <circle cx="20" cy="12" r="3" fill="oklch(0.6 0.15 260)" opacity="0.7" />
        <text x="28" y="15" opacity="0.6">|ψ₀|²</text>
        <circle cx="70" cy="12" r="3" fill="oklch(0.6 0.2 330)" opacity="0.7" />
        <text x="78" y="15" opacity="0.6">|ψ₁|²</text>
        <circle cx="120" cy="12" r="3" fill="oklch(0.6 0.2 200)" opacity="0.9" />
        <text x="128" y="15" opacity="0.8">重ね合わせ（振動）</text>
      </g>

      <text x="200" y="214" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5" className="font-mono">
        調和振動子 — |ψ₀ + e^(iωt)ψ₁|²
      </text>
    </svg>
  );
}
