"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Question = {
  q: string;
  choices: string[];
  correct: number;
  hint: string;
};

const QUESTIONS: Question[] = [
  {
    q: "ブリュースター角で反射が消えるのは何偏光？",
    choices: ["s偏光", "p偏光", "円偏光", "楕円偏光"],
    correct: 1,
    hint: "入射面内に電場がある偏光。電子の双極子放射方向との兼ね合いで反射が消える。",
  },
  {
    q: "エネルギーの揺らぎは何に比例する？",
    choices: ["温度 T", "比熱 C_V", "粒子数 N", "分配関数 Z"],
    correct: 1,
    hint: "⟨(ΔE)²⟩ = k_B T² C_V （揺動散逸定理）",
  },
  {
    q: "量子調和振動子のゼロ点エネルギーは？",
    choices: ["0", "ℏω/4", "ℏω/2", "ℏω"],
    correct: 2,
    hint: "E_n = ℏω(n + 1/2)、n=0 で E_0 = ℏω/2",
  },
];

export function MiniQuiz() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const q = QUESTIONS[idx];

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx < QUESTIONS.length - 1) {
      setIdx(idx + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    return (
      <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-background p-8 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-3">
          Result
        </p>
        <div className="text-6xl font-black tracking-tighter mb-2 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent">
          {score}/{QUESTIONS.length}
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          {pct === 100 ? "完璧です！" : pct >= 67 ? "いい感じ！" : "もう一度挑戦しよう"}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9" />
            <path d="M3 4v5h5" />
          </svg>
          もう一度
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-card p-8">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
          Quiz
        </p>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 w-6 rounded-full transition-colors",
                i < idx ? "bg-primary" : i === idx ? "bg-primary/50" : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-5">{q.q}</h3>

      <div className="space-y-2 mb-4">
        {q.choices.map((c, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correct;
          const show = selected !== null;
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={cn(
                "w-full flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all",
                selected === null && "hover:border-primary hover:bg-primary/5",
                show && isCorrect && "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
                show && isSelected && !isCorrect && "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400",
                show && !isSelected && !isCorrect && "opacity-50"
              )}
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full border text-[10px] font-bold shrink-0",
                  show && isCorrect && "border-emerald-500 bg-emerald-500 text-white",
                  show && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white"
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{c}</span>
              {show && isCorrect && <span>✓</span>}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="rounded-lg bg-muted/50 p-4 mb-4 text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">ヒント: </span>
          {q.hint}
        </div>
      )}

      {selected !== null && (
        <button
          onClick={next}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {idx < QUESTIONS.length - 1 ? "次の問題" : "結果を見る"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
