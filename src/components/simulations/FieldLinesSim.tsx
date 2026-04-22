"use client";

import { useEffect, useRef } from "react";

/**
 * Animated field lines around a dipole (positive and negative charges).
 * Particles flow along field lines from + to -.
 * Connected to the 導体球問題.
 */
type Particle = { x: number; y: number; r: number; hue: number };

export function FieldLinesSim({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const W = 400;
    const H = 260;
    const posCharge = { x: 140, y: 130, q: 1 };
    const negCharge = { x: 260, y: 130, q: -1 };

    // Compute E field at (x, y)
    const field = (x: number, y: number) => {
      let ex = 0;
      let ey = 0;
      for (const c of [posCharge, negCharge]) {
        const dx = x - c.x;
        const dy = y - c.y;
        const r2 = dx * dx + dy * dy;
        if (r2 < 100) continue;
        const r = Math.sqrt(r2);
        ex += (c.q * dx) / (r2 * r);
        ey += (c.q * dy) / (r2 * r);
      }
      return { ex, ey };
    };

    // Init particles on small circle around + charge
    const particles: Particle[] = [];
    const N = 40;
    for (let i = 0; i < N; i++) {
      const ang = (i / N) * 2 * Math.PI;
      particles.push({
        x: posCharge.x + Math.cos(ang) * 14,
        y: posCharge.y + Math.sin(ang) * 14,
        r: 2,
        hue: 260 + (i % 5) * 10,
      });
    }

    // Create particle elements
    const particleGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svg.appendChild(particleGroup);
    const circles: SVGCircleElement[] = particles.map((p) => {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("r", String(p.r));
      c.setAttribute("fill", `oklch(0.6 0.2 ${p.hue})`);
      c.setAttribute("opacity", "0.8");
      particleGroup.appendChild(c);
      return c;
    });

    let raf = 0;
    const step = () => {
      particles.forEach((p, i) => {
        const f = field(p.x, p.y);
        const mag = Math.sqrt(f.ex * f.ex + f.ey * f.ey) + 1e-9;
        const speed = 3;
        p.x += (f.ex / mag) * speed;
        p.y += (f.ey / mag) * speed;

        // If it reached the negative charge or went out, reset at + charge
        const dxNeg = p.x - negCharge.x;
        const dyNeg = p.y - negCharge.y;
        const distNeg = Math.sqrt(dxNeg * dxNeg + dyNeg * dyNeg);
        if (distNeg < 14 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          const ang = Math.random() * 2 * Math.PI;
          p.x = posCharge.x + Math.cos(ang) * 14;
          p.y = posCharge.y + Math.sin(ang) * 14;
        }
        circles[i].setAttribute("cx", String(p.x));
        circles[i].setAttribute("cy", String(p.y));
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      particleGroup.remove();
    };
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 400 260" className={className} aria-hidden>
      {/* Field line hints (static) */}
      <g opacity="0.15" stroke="currentColor" fill="none" strokeWidth="0.5">
        {Array.from({ length: 12 }, (_, i) => i).map((i) => {
          const ang = (i / 12) * 2 * Math.PI;
          const r1 = 30;
          const r2 = 100;
          const startX = 140 + Math.cos(ang) * r1;
          const startY = 130 + Math.sin(ang) * r1;
          const endX = 260 + Math.cos(Math.PI - ang) * r1;
          const endY = 130 + Math.sin(Math.PI - ang) * r1;
          const cx = 200 + (i < 6 ? -r2 : r2) * Math.sin(ang);
          const cy = 130 + (i < 6 ? -r2 : r2) * Math.cos(ang);
          return (
            <path
              key={i}
              d={`M ${startX.toFixed(1)} ${startY.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`}
            />
          );
        })}
      </g>

      {/* Positive charge */}
      <circle cx="140" cy="130" r="14" fill="oklch(0.55 0.2 30)" stroke="currentColor" strokeWidth="0.8" />
      <line x1="134" y1="130" x2="146" y2="130" stroke="white" strokeWidth="1.5" />
      <line x1="140" y1="124" x2="140" y2="136" stroke="white" strokeWidth="1.5" />

      {/* Negative charge */}
      <circle cx="260" cy="130" r="14" fill="oklch(0.4 0.15 260)" stroke="currentColor" strokeWidth="0.8" />
      <line x1="254" y1="130" x2="266" y2="130" stroke="white" strokeWidth="1.5" />

      <text x="200" y="250" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5" className="font-mono">
        E = kQ/r² · r̂ — 電気双極子
      </text>
    </svg>
  );
}
