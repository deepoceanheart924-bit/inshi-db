"use client";

import { useEffect, useRef } from "react";

/**
 * Kepler orbit simulation (symplectic leapfrog).
 * Connected to the 中心力場 problem.
 */
export function OrbitSim({ className = "" }: { className?: string }) {
  const planetRef = useRef<SVGCircleElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const velRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    let raf = 0;
    const cx = 200;
    const cy = 130;
    const GM = 8000;
    // Initial elliptical orbit
    let x = 260;
    let y = 130;
    let vx = 0;
    let vy = 3.5;
    const dt = 0.2;
    const trail: { x: number; y: number }[] = [];

    const step = () => {
      // Leapfrog-like integration with force update
      const dx = cx - x;
      const dy = cy - y;
      const r2 = dx * dx + dy * dy;
      const r = Math.sqrt(r2);
      const ax = (GM * dx) / (r2 * r);
      const ay = (GM * dy) / (r2 * r);
      vx += ax * dt;
      vy += ay * dt;
      x += vx * dt;
      y += vy * dt;

      trail.push({ x, y });
      if (trail.length > 300) trail.shift();

      if (planetRef.current) {
        planetRef.current.setAttribute("cx", String(x));
        planetRef.current.setAttribute("cy", String(y));
      }
      if (trailRef.current && trail.length > 2) {
        const d = trail.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
        trailRef.current.setAttribute("d", d);
      }
      if (velRef.current) {
        const vmag = Math.sqrt(vx * vx + vy * vy);
        const scale = 15 / (vmag + 0.01);
        velRef.current.setAttribute("x1", String(x));
        velRef.current.setAttribute("y1", String(y));
        velRef.current.setAttribute("x2", String(x + vx * scale));
        velRef.current.setAttribute("y2", String(y + vy * scale));
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <defs>
        <radialGradient id="sun-grad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="oklch(0.85 0.2 80)" />
          <stop offset="100%" stopColor="oklch(0.55 0.2 40)" />
        </radialGradient>
        <linearGradient id="orbit-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.55 0.18 260)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 260)" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Reference ellipse (approximate) */}
      <ellipse cx="190" cy="130" rx="110" ry="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />

      {/* Trail */}
      <path ref={trailRef} fill="none" stroke="url(#orbit-trail)" strokeWidth="1.5" opacity="0.7" />

      {/* Central mass */}
      <circle cx="200" cy="130" r="16" fill="url(#sun-grad)" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="130" r="24" fill="none" stroke="oklch(0.85 0.15 60)" strokeWidth="0.5" opacity="0.3" />

      {/* Velocity vector */}
      <line ref={velRef} stroke="oklch(0.7 0.2 330)" strokeWidth="1.5" opacity="0.8" />

      {/* Planet */}
      <circle ref={planetRef} r="5" fill="oklch(0.55 0.2 260)" stroke="currentColor" strokeWidth="0.5" />

      <text x="200" y="250" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5" className="font-mono">
        F = −GMm/r² · r̂ — ケプラー軌道
      </text>
    </svg>
  );
}
