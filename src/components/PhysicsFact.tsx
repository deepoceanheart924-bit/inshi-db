"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FACTS: { fact: string; detail: string; emoji?: string }[] = [
  {
    fact: "宇宙で最も強い磁場はマグネター",
    detail: "中性子星の一種で、表面磁場は地球の1000兆倍（10¹⁵ガウス）。その磁気圧だけで原子を引き裂ける。",
  },
  {
    fact: "光は宇宙の「制限速度」",
    detail: "真空中の光速 c ≈ 3×10⁸ m/s は情報伝達の絶対上限。相対論では c を超える因果伝達はあり得ない。",
  },
  {
    fact: "零点振動は絶対零度でも存在する",
    detail: "量子調和振動子の基底状態エネルギー E₀ = ℏω/2 ≠ 0。不確定性関係の直接の帰結で、ヘリウムが絶対零度でも液体である理由。",
  },
  {
    fact: "エントロピーは情報の欠如",
    detail: "ボルツマンの S = k_B ln W はミクロ状態数の対数。シャノンが情報理論で再発見し、熱力学と情報が本質的に同じ概念と判明。",
  },
  {
    fact: "二重スリット実験で電子も干渉",
    detail: "1個ずつ発射した電子でも干渉縞ができる。粒子は「観測されないとき」波のように振る舞う。",
  },
  {
    fact: "フラクタル次元は整数じゃない",
    detail: "コッホ雪片の次元は log 4 / log 3 ≈ 1.26、イギリス海岸線の次元は約 1.25。自然界は整数次元には収まらない。",
  },
  {
    fact: "白色矮星は電子の縮退圧で支えられる",
    detail: "絶対零度でも存在する量子力学的圧力（フェルミ圧）が重力崩壊を防ぐ。質量が 1.4 M☉ を超えると負けて中性子星・ブラックホールに。",
  },
  {
    fact: "超伝導では電気抵抗が完全に0",
    detail: "BCS理論によれば、電子がフォノンを介して対（クーパー対）を組み、ボース粒子のように振る舞って流れる。",
  },
  {
    fact: "時間は重力で遅れる",
    detail: "GPS 衛星の時計は地表より毎日 45μs 速く進む（一般相対論）。補正なしでは位置誤差が 1 日 10 km にも。",
  },
  {
    fact: "宇宙マイクロ波背景放射は約 3 K",
    detail: "ビッグバンの残光。方向による温度のわずかなゆらぎ（10⁻⁵）が、現在の銀河大規模構造の種。",
  },
  {
    fact: "ブラウン運動はアインシュタインの隠れた大発見",
    detail: "1905年の論文で、花粉の動きから分子の存在を決定的に証明した。同年に特殊相対論・光量子仮説も発表（奇跡の年）。",
  },
  {
    fact: "不確定性関係は測定の問題ではなく自然の性質",
    detail: "ΔxΔp ≥ ℏ/2 は測定機器の精度限界ではなく、波動関数そのものが持つ根本的な性質。観測しなくても存在する。",
  },
];

export function PhysicsFact() {
  const [idx, setIdx] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setIdx((prev) => {
        let next = prev;
        while (next === prev) next = Math.floor(Math.random() * FACTS.length);
        return next;
      });
      setIsShuffling(false);
    }, 200);
  };

  const fact = FACTS[idx];

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-purple-500/5 p-8">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-3">
        Did you know?
      </p>
      <div
        key={idx}
        className={cn(
          "transition-all duration-200",
          isShuffling ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0 animate-fade-in"
        )}
      >
        <h3 className="text-xl font-bold mb-3">{fact.fact}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {fact.detail}
        </p>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.35s ease-out; }
      `}</style>
      <div className="flex items-center justify-between mt-6 pt-4 border-t">
        <span className="text-[11px] text-muted-foreground">
          {idx + 1} / {FACTS.length}
        </span>
        <button
          onClick={shuffle}
          disabled={isShuffling}
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={cn(isShuffling && "animate-spin")}
          >
            <path d="M16 3h5v5" />
            <path d="M4 20L21 3" />
            <path d="M21 16v5h-5" />
            <path d="M15 15l6 6" />
            <path d="M4 4l5 5" />
          </svg>
          次のおもしろ事実
        </button>
      </div>
    </div>
  );
}
