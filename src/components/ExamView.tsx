"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Problem } from "@/data/types";
import { MathContent } from "@/components/KaTeX";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sparkles } from "@/components/ui/sparkles";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

type Props = {
  problems: Problem[];
};

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
    <div className="space-y-12">
      {/* ===== 問題セクション ===== */}
      <div className="space-y-12">
        {problems.map((p, idx) => (
          <BlurFade key={p.id} delay={idx * 0.06}>
          <section
            id={`problem-${p.problemNumber}`}
            className="scroll-mt-20"
          >
            <div className="mb-3 flex items-center gap-3 flex-wrap">
              <span className="text-2xl font-bold tracking-tight">
                第{p.problemNumber}問
              </span>
              <FieldBadge field={p.field} />
              <DifficultyBadge difficulty={p.difficulty} />
              {!p.isFree && (
                <Badge
                  variant="outline"
                  className="border-amber-500/50 text-amber-600 dark:text-amber-400"
                >
                  Premium
                </Badge>
              )}
              {p.tags?.slice(0, 3).map((t) => (
                <Badge key={t} variant="secondary" className="text-[10px]">
                  {t}
                </Badge>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">{p.title}</h2>

            <Card className="border-l-4 border-l-primary/60">
              <CardContent className="py-6">
                <MathContent
                  content={p.statement}
                  className="text-foreground leading-relaxed"
                />
              </CardContent>
            </Card>

            {idx < problems.length - 1 && (
              <div className="mt-12 border-t border-dashed" />
            )}
          </section>
          </BlurFade>
        ))}
      </div>

      {/* ===== 解答ボタン（試験全体で1つ） ===== */}
      <div className="border-t pt-10">
        {!showAnswers ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <p className="text-sm text-muted-foreground">
              すべての大問を解き終えたら、解答を確認しましょう。
            </p>
            <Sparkles count={10} className="text-primary/70">
              <Button size="lg" onClick={handleShow} className="px-10">
                解答を見る
              </Button>
            </Sparkles>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAnswers(false)}
            >
              解答を隠す
            </Button>
          </div>
        )}
      </div>

      {/* ===== 解答セクション（押下後に表示） ===== */}
      {showAnswers && (
        <div ref={answersRef} className="space-y-12">
          <div className="flex items-center gap-3">
            <svg width="24" height="2" className="text-emerald-600 dark:text-emerald-400">
              <line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Solutions
            </p>
          </div>

          {problems.map((p, idx) => (
            <section
              key={`sol-${p.id}`}
              id={`solution-${p.problemNumber}`}
              className="scroll-mt-20"
            >
              <div className="mb-4 flex items-center gap-3 flex-wrap">
                <span className="text-xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400">
                  第{p.problemNumber}問 解答
                </span>
                <FieldBadge field={p.field} />
                <Link
                  href={`/problems/${p.id}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "text-xs ml-auto",
                  )}
                >
                  個別ページで開く →
                </Link>
              </div>

              <Card className="border-l-4 border-l-emerald-500/60 bg-muted/20">
                <CardContent className="py-6">
                  <MathContent
                    content={p.solution}
                    className="text-foreground leading-relaxed"
                  />
                </CardContent>
              </Card>

              {idx < problems.length - 1 && (
                <div className="mt-12 border-t border-dashed" />
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
