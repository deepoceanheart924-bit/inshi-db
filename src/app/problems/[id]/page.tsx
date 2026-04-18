import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, getProblem } from "@/data/problems";
import { getUniversity } from "@/data/universities";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { MathContent } from "@/components/KaTeX";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  return problems.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const problem = getProblem(id);
  if (!problem) return { title: "Not Found" };
  const uni = getUniversity(problem.universitySlug);
  return {
    title: `${uni?.shortName} ${problem.year}年 ${problem.title} — 院試DB`,
    description: `${uni?.name} ${problem.year}年度 ${problem.subject} 問${problem.problemNumber}「${problem.title}」の解答解説`,
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = getProblem(id);
  if (!problem) notFound();

  const uni = getUniversity(problem.universitySlug);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Breadcrumb */}
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            ホーム
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <Link href={`/universities/${problem.universitySlug}`} className="hover:text-foreground transition-colors">
            {uni?.name}
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium truncate">{problem.title}</span>
        </nav>
      </FadeIn>

      {/* Problem Header */}
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground tracking-wide mb-3">
            <span>{uni?.name}</span>
            <span className="text-border">|</span>
            <span>{problem.year}年度</span>
            <span className="text-border">|</span>
            <span>{problem.subject} 問{problem.problemNumber}</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl mb-5">
            {problem.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <FieldBadge field={problem.field} />
            <DifficultyBadge difficulty={problem.difficulty} />
            {!problem.isFree && (
              <Badge variant="outline" className="text-amber-600 dark:text-amber-400 border-amber-500/30 bg-amber-500/5 text-[10px]">
                Premium
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {problem.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Problem Statement */}
      <FadeIn delay={0.1}>
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="size-1.5 rounded-full bg-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Problem
            </h2>
          </div>
          <Card>
            <CardContent className="py-6">
              <div className="rounded-lg bg-primary/[0.02] border border-primary/[0.06] p-6">
                <MathContent content={problem.statement} className="text-foreground leading-relaxed" />
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground/60">
                ※ 問題文は学習目的で要約したものです。正確な問題文は
                <a
                  href={uni?.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-0.5"
                >
                  公式サイト
                </a>
                をご確認ください。
              </p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Solution */}
      <FadeIn delay={0.2}>
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="size-1.5 rounded-full bg-emerald-500" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Solution
            </h2>
          </div>

          {problem.isFree ? (
            <Card>
              <CardContent className="py-6">
                <div className="rounded-lg bg-muted/30 border p-6">
                  <MathContent content={problem.solution} className="text-foreground leading-relaxed" />
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-6">
                {/* Blurred preview */}
                <div className="relative rounded-lg bg-muted/30 border p-6 max-h-56 overflow-hidden">
                  <div className="blur-[6px] select-none pointer-events-none opacity-50">
                    <MathContent content={problem.solution.slice(0, 400)} className="text-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
                </div>

                {/* Premium CTA */}
                <div className="text-center py-12">
                  <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">プレミアム会員限定</h3>
                  <p className="text-sm text-muted-foreground mb-8">
                    月額980円ですべての解説が読み放題
                  </p>
                  <Button size="lg" className="px-10 h-12">
                    プレミアムプランに登録
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </FadeIn>

      {/* Navigation */}
      <FadeIn delay={0.3}>
        <div className="flex justify-between pt-4 border-t">
          <Link href={`/universities/${problem.universitySlug}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1.5"><path d="m15 18-6-6 6-6"/></svg>
            {uni?.name}
          </Link>
          <Link href={`/fields/${problem.field}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}>
            同じ分野の問題
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1.5"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
