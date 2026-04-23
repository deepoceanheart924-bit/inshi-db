"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  targetAlpha: number;
};

/**
 * Magic UI 風のインタラクティブ粒子背景。canvas ベースでマウスに反応。
 * 軽量化のため IntersectionObserver で画面外では描画停止。
 */
export function Particles({
  className,
  quantity = 50,
  staticity = 50,
  ease = 50,
  color = "currentColor",
}: {
  className?: string;
  quantity?: number;
  /** マウス追従の鈍さ。大きいほど動かない */
  staticity?: number;
  /** 復元力の鈍さ */
  ease?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const makeParticle = (): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      size: 0.8 + Math.random() * 1.4,
      alpha: 0,
      targetAlpha: 0.1 + Math.random() * 0.5,
    });

    resize();
    particlesRef.current = Array.from({ length: quantity }, makeParticle);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", onMove);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particlesRef.current) {
        // マウス引力
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const f = (120 - dist) / (120 * staticity);
          p.vx += (dx / dist) * f;
          p.vy += (dy / dist) * f;
        }
        // 減衰
        p.vx *= 1 - 1 / ease;
        p.vy *= 1 - 1 / ease;

        p.x += p.vx;
        p.y += p.vy;

        // 画面外から反対側へ
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        p.alpha += (p.targetAlpha - p.alpha) * 0.02;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      ro.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [quantity, staticity, ease, color]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      aria-hidden
    />
  );
}
