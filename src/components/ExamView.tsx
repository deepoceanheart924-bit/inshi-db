"use client";

import { useState, useRef } from "react";
import { Problem } from "@/data/types";
import { MathContent } from "@/components/KaTeX";
import { FIELD_LABELS, DIFFICULTY_LABELS } from "@/data/types";
import { EditorialButton } from "@/components/ui/editorial-button";
import { OrnamentRule } from "@/components/ornaments/Ornaments";
import { ArrowUpRight } from "@/components/icons/arrows";
import Link from "next/link";

type Props = { problems: Problem[] };

export function ExamView({ problems }: Props) {
  const [showAnswers, setShowAnswers] = useState(false);
  const answersRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShowAnswers(true);
    setTimeout(() => {
      answersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <div className="space-y-16">
      {/* ===== Problems ===== */}
      <ol className="space-y-14 sm:space-y-16">
        {problems.map((p, idx) => (
          <li
            key={p.id}
            id={`problem-${p.problemNumber}`}
            className="scroll-mt-24"
          >
            {/* Item header */}
            <header className="flex items-baseline gap-4 pb-3 border-b border-foreground/25">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="font-serif-jp text-3xl sm:text-4xl font-bold tracking-tight">
                第{p.problemNumber}問
              </span>
              <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
              <div className="hidden sm:flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>{FIELD_LABELS[p.field]}</span>
                <span aria-hidden className="text-foreground/30">·</span>
                <span>{DIFFICULTY_LABELS[p.difficulty]}</span>
                {!p.isFree && (
                  <>
                    <span aria-hidden className="text-foreground/30">·</span>
                    <span className="text-foreground">Premium</span>
                  </>
                )}
              </div>
            </header>

            {/* Title */}
            <h3 className="font-serif-jp italic text-xl sm:text-2xl text-foreground/85 mt-6 tracking-tight max-w-3xl">
              {p.title}
            </h3>

            {/* Statement */}
            <div className="mt-8 font-serif-jp text-[15.5px] sm:text-base leading-[2] text-foreground/90">
              <MathContent
                content={p.statement}
                className="text-foreground leading-[2]"
              />
            </div>

            {/* Tags strip */}
            {p.tags && p.tags.length > 0 && (
              <div className="mt-6 pt-4 border-t border-foreground/10 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="text-foreground/55">Tags</span>
                <span aria-hidden>·</span>
                {p.tags.slice(0, 5).map((t, i, arr) => (
                  <span key={t}>
                    {t}
                    {i < arr.length - 1 && (
                      <span aria-hidden className="text-foreground/25 ml-3">/</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* ===== Solutions toggle ===== */}
      <div className="pt-8 border-t border-foreground/15">
        {!showAnswers ? (
          <div className="flex flex-col items-start gap-5">
            <p className="font-serif-jp italic text-base text-muted-foreground max-w-md">
              すべての大問を解き終えたら、解答へ進む。
            </p>
            <EditorialButton
              variant="filled"
              size="lg"
              onClick={handleShow}
              kicker="Reveal"
            >
              解答を見る
            </EditorialButton>
          </div>
        ) : (
          <div className="flex justify-center">
            <EditorialButton
              variant="hairline"
              direction="none"
              onClick={() => setShowAnswers(false)}
            >
              解答を隠す
            </EditorialButton>
          </div>
        )}
      </div>

      {/* ===== Solutions ===== */}
      {showAnswers && (
        <div ref={answersRef} className="space-y-16 scroll-mt-24">
          <OrnamentRule ornament="section" />

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground mb-3">
              §II · Solutions
            </div>
            <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold tracking-tight pb-5 border-b border-foreground/30">
              解答
            </h2>
          </div>

          <ol className="space-y-14 sm:space-y-16">
            {problems.map((p, idx) => (
              <li
                key={`sol-${p.id}`}
                id={`solution-${p.problemNumber}`}
                className="scroll-mt-24"
              >
                <header className="flex items-baseline gap-4 pb-3 border-b border-foreground/25">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif-jp text-3xl sm:text-4xl font-bold tracking-tight">
                    第{p.problemNumber}問 <span className="text-foreground/55">解答</span>
                  </span>
                  <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
                  <Link
                    href={`/problems/${p.id}`}
                    className="group hidden sm:inline-flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground hover:text-foreground/70 transition-colors"
                  >
                    <span>Single Page</span>
                    <ArrowUpRight className="size-3 translate-y-[1px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </header>

                <div className="mt-8 font-serif-jp text-[15.5px] sm:text-base leading-[2] text-foreground/90">
                  <MathContent
                    content={p.solution}
                    className="text-foreground leading-[2]"
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
