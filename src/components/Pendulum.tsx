"use client";

import { useEffect, useRef } from "react";

/**
 * Physical pendulum animation (SVG).
 * Simulates θ̈ = -(g/L) sin θ — matches the 東大 2025 問1 problem.
 */
export function Pendulum({ className = "" }: { className?: string }) {
  const groupRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const arcRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let raf = 0;
    const initialTheta = Math.PI / 4; // 45° — natural swing
    let theta = initialTheta;
    let omega = 0;
    const g = 9.8;
    const L = 1.0;
    const dt = 1 / 60;
    const damping = 0.9996; // gentle decay
    const trail: { x: number; y: number; age: number }[] = [];

    const pivotX = 150;
    const pivotY = 50;
    const len = 130;

    // Pre-draw the exact trajectory arc at the bob's radius
    const arcStart = { x: pivotX + len * Math.sin(-initialTheta), y: pivotY + len * Math.cos(-initialTheta) };
    const arcEnd = { x: pivotX + len * Math.sin(initialTheta), y: pivotY + len * Math.cos(initialTheta) };
    if (arcRef.current) {
      arcRef.current.setAttribute(
        "d",
        `M ${arcStart.x.toFixed(1)} ${arcStart.y.toFixed(1)} A ${len} ${len} 0 0 1 ${arcEnd.x.toFixed(1)} ${arcEnd.y.toFixed(1)}`
      );
    }

    const step = () => {
      // RK4 integration for θ̈ = -(g/L) sin θ
      const f = (o: number, th: number): [number, number] => [o, -(g / L) * Math.sin(th)];
      const [k1a, k1b] = f(omega, theta);
      const [k2a, k2b] = f(omega + (dt / 2) * k1b, theta + (dt / 2) * k1a);
      const [k3a, k3b] = f(omega + (dt / 2) * k2b, theta + (dt / 2) * k2a);
      const [k4a, k4b] = f(omega + dt * k3b, theta + dt * k3a);
      theta += (dt / 6) * (k1a + 2 * k2a + 2 * k3a + k4a);
      omega += (dt / 6) * (k1b + 2 * k2b + 2 * k3b + k4b);
      omega *= damping;

      // If energy drops too low, give a little push back
      if (Math.abs(theta) < 0.03 && Math.abs(omega) < 0.08) {
        theta = initialTheta;
        omega = 0;
        trail.length = 0;
      }

      // Compute bob position in world frame (SVG y-down)
      // θ>0 rotates the bob to the right of vertical.
      const bx = pivotX + len * Math.sin(theta);
      const by = pivotY + len * Math.cos(theta);

      // SVG rotate(+angle) rotates clockwise (visually), which swings a
      // downward-hanging rod to the LEFT. Our physics convention puts +θ
      // to the RIGHT, so we flip the sign here to keep rod & bob in sync.
      if (groupRef.current) {
        groupRef.current.setAttribute(
          "transform",
          `rotate(${(-theta * 180) / Math.PI} ${pivotX} ${pivotY})`
        );
      }
      trail.push({ x: bx, y: by, age: 0 });
      trail.forEach((p) => p.age++);
      if (trail.length > 50) trail.shift();

      if (pathRef.current && trail.length > 1) {
        const d = trail.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
        pathRef.current.setAttribute("d", d);
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 300 240" className={className} aria-hidden>
      <defs>
        <radialGradient id="bob-grad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="oklch(0.75 0.22 260)" />
          <stop offset="100%" stopColor="oklch(0.4 0.2 260)" />
        </radialGradient>
        <linearGradient id="trail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.55 0.18 260)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 260)" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Ceiling with hatch marks */}
      <line x1={80} y1={50} x2={220} y2={50} stroke="currentColor" strokeWidth={2} opacity="0.5" />
      {Array.from({ length: 14 }, (_, i) => i).map((i) => (
        <line
          key={i}
          x1={85 + i * 10}
          y1={50}
          x2={80 + i * 10}
          y2={44}
          stroke="currentColor"
          strokeWidth={0.6}
          opacity="0.35"
        />
      ))}

      {/* Mathematically correct trajectory arc (bob's actual path) */}
      <path ref={arcRef} fill="none" stroke="currentColor" strokeWidth={0.6} strokeDasharray="2 4" opacity="0.25" />

      {/* Vertical reference (equilibrium) */}
      <line
        x1={150}
        y1={50}
        x2={150}
        y2={50 + 130}
        stroke="currentColor"
        strokeWidth={0.5}
        strokeDasharray="1 3"
        opacity="0.2"
      />

      {/* Trail (bob's recent positions) */}
      <path ref={pathRef} fill="none" stroke="url(#trail-grad)" strokeWidth={2} strokeLinecap="round" opacity="0.75" />

      {/* Pivot */}
      <circle cx={150} cy={50} r={3.5} fill="currentColor" />
      <circle cx={150} cy={50} r={1.5} fill="var(--background)" />

      {/* Rod + Bob rotate together (always in sync) */}
      <g ref={groupRef}>
        <line x1={150} y1={50} x2={150} y2={50 + 130} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        <circle cx={150} cy={50 + 130} r={11} fill="url(#bob-grad)" stroke="currentColor" strokeWidth={0.6} />
        <circle cx={148} cy={50 + 128} r={3} fill="white" opacity="0.35" />
      </g>

      {/* Equation caption */}
      <text x={150} y={225} textAnchor="middle" fontSize={10} fill="currentColor" opacity="0.5" className="font-mono">
        θ̈ = −(g/L) sinθ
      </text>
    </svg>
  );
}
