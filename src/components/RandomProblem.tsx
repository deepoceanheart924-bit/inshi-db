"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { problems } from "@/data/problems";
import { cn } from "@/lib/utils";

export function RandomProblem() {
  const router = useRouter();
  const [isSpinning, setIsSpinning] = useState(false);

  const go = () => {
    setIsSpinning(true);
    const p = problems[Math.floor(Math.random() * problems.length)];
    setTimeout(() => {
      router.push(`/problems/${p.id}`);
    }, 600);
  };

  return (
    <button
      onClick={go}
      disabled={isSpinning}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/5",
        "p-8 text-left w-full transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
        "disabled:cursor-not-allowed"
      )}
    >
      {/* Animated sparkles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute size-1 rounded-full bg-primary/40"
            style={{
              left: `${(i * 13 + 7) % 90}%`,
              top: `${(i * 17 + 11) % 80}%`,
              animation: `sparkle 2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes sparkle {
          0%, 100% { transform: scale(0.5); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        @keyframes spin-dice {
          0% { transform: rotate(0); }
          100% { transform: rotate(720deg); }
        }
      `}</style>

      <div className="relative flex items-center gap-6">
        <div
          className={cn(
            "flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shrink-0 ring-4 ring-primary/20",
            isSpinning && "animate-[spin-dice_600ms_ease-out]"
          )}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8" cy="8" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            <circle cx="16" cy="8" r="1.5" fill="currentColor" />
            <circle cx="8" cy="16" r="1.5" fill="currentColor" />
          </svg>
        </div>

        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-1">
            Surprise me
          </p>
          <h3 className="text-xl font-bold tracking-tight">
            ランダムに1問見る
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            何が出るかはクリックしてからのお楽しみ
          </p>
        </div>

        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
