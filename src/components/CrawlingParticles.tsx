"use client";

/**
 * antscr.co.jp 風の「キャラクターが画面を横切る」背景アニメーション。
 * 物理サイトなので歩く蟻ではなく、物理記号が右から左へ（あるいは左から右へ）
 * ゆっくりと漂う。position: fixed で viewport 追従、下層に配置。
 */

const SYMBOLS = [
  { ch: "∫", size: 34 },
  { ch: "∂", size: 28 },
  { ch: "∇", size: 30 },
  { ch: "ℏ", size: 26 },
  { ch: "Ψ", size: 32 },
  { ch: "π", size: 24 },
  { ch: "Σ", size: 30 },
  { ch: "ε", size: 22 },
  { ch: "λ", size: 26 },
  { ch: "φ", size: 28 },
  { ch: "∮", size: 30 },
  { ch: "∞", size: 28 },
];

type ParticleCfg = {
  ch: string;
  size: number;
  top: string;
  duration: number; // seconds for one full drift
  delay: number;
  direction: "ltr" | "rtl";
  opacity: number;
};

const PARTICLES: ParticleCfg[] = [
  { ch: "∫", size: 38, top: "8%", duration: 55, delay: 0, direction: "ltr", opacity: 0.08 },
  { ch: "∂", size: 32, top: "17%", duration: 72, delay: -10, direction: "rtl", opacity: 0.07 },
  { ch: "∇", size: 28, top: "26%", duration: 60, delay: -25, direction: "ltr", opacity: 0.09 },
  { ch: "Ψ", size: 36, top: "34%", duration: 80, delay: -5, direction: "rtl", opacity: 0.08 },
  { ch: "ℏ", size: 26, top: "43%", duration: 65, delay: -18, direction: "ltr", opacity: 0.07 },
  { ch: "π", size: 30, top: "52%", duration: 58, delay: -30, direction: "rtl", opacity: 0.09 },
  { ch: "Σ", size: 34, top: "61%", duration: 70, delay: 0, direction: "ltr", opacity: 0.07 },
  { ch: "ε", size: 24, top: "69%", duration: 62, delay: -15, direction: "rtl", opacity: 0.08 },
  { ch: "λ", size: 28, top: "78%", duration: 68, delay: -22, direction: "ltr", opacity: 0.09 },
  { ch: "∮", size: 32, top: "87%", duration: 75, delay: -8, direction: "rtl", opacity: 0.07 },
  { ch: "∞", size: 30, top: "94%", duration: 60, delay: -12, direction: "ltr", opacity: 0.08 },
  { ch: "φ", size: 26, top: "3%", duration: 82, delay: -40, direction: "rtl", opacity: 0.08 },
];

export function CrawlingParticles({ color = "currentColor" }: { color?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={p.direction === "ltr" ? "particle-ltr" : "particle-rtl"}
          style={{
            position: "absolute",
            top: p.top,
            left: p.direction === "ltr" ? "-10%" : "auto",
            right: p.direction === "rtl" ? "-10%" : "auto",
            fontSize: `${p.size}px`,
            color,
            opacity: p.opacity,
            fontFamily: "'Times New Roman', 'Noto Serif JP', serif",
            fontStyle: "italic",
            fontWeight: 400,
            animationName: p.direction === "ltr" ? "drift-ltr" : "drift-rtl",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            willChange: "transform",
          }}
        >
          {p.ch}
        </span>
      ))}
      <style>{`
        @keyframes drift-ltr {
          0% {
            transform: translateX(0) translateY(0) rotate(0);
          }
          25% {
            transform: translateX(30vw) translateY(-8px) rotate(5deg);
          }
          50% {
            transform: translateX(60vw) translateY(4px) rotate(-3deg);
          }
          75% {
            transform: translateX(90vw) translateY(-6px) rotate(4deg);
          }
          100% {
            transform: translateX(120vw) translateY(0) rotate(0);
          }
        }
        @keyframes drift-rtl {
          0% {
            transform: translateX(0) translateY(0) rotate(0);
          }
          25% {
            transform: translateX(-30vw) translateY(6px) rotate(-4deg);
          }
          50% {
            transform: translateX(-60vw) translateY(-4px) rotate(3deg);
          }
          75% {
            transform: translateX(-90vw) translateY(8px) rotate(-5deg);
          }
          100% {
            transform: translateX(-120vw) translateY(0) rotate(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .particle-ltr, .particle-rtl {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
