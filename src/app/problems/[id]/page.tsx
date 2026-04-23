import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, getProblem } from "@/data/problems";
import { getUniversity } from "@/data/universities";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { FieldIcon } from "@/components/FieldIcon";
import { DotPattern } from "@/components/patterns";
import { MathContent } from "@/components/KaTeX";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { Prerequisites } from "@/components/Prerequisites";
import { FieldSimulation } from "@/components/FieldSimulation";
import { FloatingTOC } from "@/components/FloatingTOC";
import { ReadingProgress } from "@/components/ReadingProgress";
import { getRelatedTopics, CATEGORY_LABELS, CATEGORY_COLORS } from "@/data/topics";
import { getRelatedBooks } from "@/data/books";
import { RelatedBooks } from "@/components/RelatedBooks";
import { BOOKS_ENABLED } from "@/lib/features";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/JsonLd";
import { Particles } from "@/components/ui/particles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FIELD_LABELS } from "@/data/types";
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
  const title = `${uni?.shortName} ${problem.year}年 ${problem.title}`;
  const description = `${uni?.name} ${problem.year}年度 ${problem.subject} 問${problem.problemNumber}「${problem.title}」の解答解説。院試DBによるオリジナル解説。`;
  const url = `/problems/${problem.id}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "ja_JP",
      siteName: "院試DB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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

  const canonicalPath = `/problems/${problem.id}`;
  const articleHeadline = `${uni?.shortName ?? ""} ${problem.year}年 ${problem.title}`;
  const articleDescription = `${uni?.name ?? ""} ${problem.year}年度 ${problem.subject} 問${problem.problemNumber}「${problem.title}」の解答解説。`;

  return (
    <div className="relative mx-auto max-w-3xl px-6 py-12" data-toc-root>
      <JsonLd
        data={articleSchema({
          url: canonicalPath,
          headline: articleHeadline,
          description: articleDescription,
          keywords: problem.tags,
          about: FIELD_LABELS[problem.field],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", url: "/" },
          { name: uni?.name ?? "", url: `/universities/${problem.universitySlug}` },
          { name: `${problem.year}年度`, url: `/universities/${problem.universitySlug}/${problem.year}` },
          { name: problem.title },
        ])}
      />
      <Particles className="text-primary/30" quantity={22} staticity={80} />
      <ReadingProgress />
      <FloatingTOC />

      {/* Breadcrumb */}
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">
            ホーム
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <Link href={`/universities/${problem.universitySlug}`} className="hover:text-foreground transition-colors">
            {uni?.name}
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <Link href={`/universities/${problem.universitySlug}/${problem.year}`} className="hover:text-foreground transition-colors">
            {problem.year}年度
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium truncate">{problem.title}</span>
        </nav>
      </FadeIn>

      {/* Problem Header */}
      <FadeIn>
        <div className="relative mb-12 rounded-2xl border bg-card/50 p-8 overflow-hidden">
          <DotPattern className="text-foreground/60" size={20} opacity={0.08} />
          <div className="relative flex gap-6">
            <div className="hidden sm:flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10 shrink-0">
              <FieldIcon field={problem.field} className="size-8" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground tracking-wide mb-3">
                <span>{uni?.name}</span>
                <span className="text-border">|</span>
                <span>{problem.year}年度</span>
                <span className="text-border">|</span>
                <span>{problem.subject} 問{problem.problemNumber}</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl mb-5 leading-tight">
                <TextGenerateEffect
                  words={problem.title}
                  splitBy="char"
                  stagger={0.018}
                  duration={0.35}
                />
              </h1>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <FieldBadge field={problem.field} />
                <DifficultyBadge difficulty={problem.difficulty} />
              </div>
              <div className="flex flex-wrap gap-1">
                {problem.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px] font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Field simulation */}
      <FadeIn delay={0.05}>
        <div className="mb-10 rounded-2xl border bg-gradient-to-br from-card to-background overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Live Simulation
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground">この分野のインタラクティブ可視化</span>
          </div>
          <div className="p-4 text-foreground">
            <FieldSimulation field={problem.field} className="w-full h-auto max-h-64 mx-auto" />
          </div>
        </div>
      </FadeIn>

      {/* Prerequisites */}
      <FadeIn delay={0.08}>
        <div className="mb-10">
          <Prerequisites field={problem.field} />
        </div>
      </FadeIn>

      {/* Problem Statement */}
      <FadeIn delay={0.1}>
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="size-1.5 rounded-full bg-primary" />
            <h2 id="problem" className="text-sm font-semibold uppercase tracking-widest text-primary">
              Problem
            </h2>
          </div>
          <Card>
            <CardContent className="py-6">
              <div className="rounded-lg bg-primary/[0.02] border border-primary/[0.06] p-6">
                <MathContent content={problem.statement} className="text-foreground leading-relaxed" />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3">
                <p className="text-xs text-muted-foreground">
                  問題文は各大学の著作物のため掲載していません
                </p>
                <a
                  href={uni?.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  公式PDFで確認
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Solution */}
      <FadeIn delay={0.2}>
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="size-1.5 rounded-full bg-emerald-500" />
            <h2 id="solution" className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Solution
            </h2>
          </div>

          <Card>
            <CardContent className="py-6">
              <div className="rounded-lg bg-muted/30 border p-6">
                <MathContent content={problem.solution} className="text-foreground leading-relaxed" />
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Related topics */}
      {(() => {
        const related = getRelatedTopics(problem.id);
        if (related.length === 0) return null;
        return (
          <FadeIn delay={0.22}>
            <div className="mb-8">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="size-1.5 rounded-full bg-rose-500" />
                <h2 className="text-sm font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-400">
                  関連する物理解説
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map((t) => (
                  <Link
                    key={t.id}
                    href={`/topics/${t.id}`}
                    className="block rounded-lg border bg-card p-4 text-sm hover:shadow-md hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant="outline"
                        className={cn("text-[9px]", CATEGORY_COLORS[t.category])}
                      >
                        {CATEGORY_LABELS[t.category]}
                      </Badge>
                      {t.readMinutes && (
                        <span className="text-[10px] text-muted-foreground">
                          ⏱ {t.readMinutes}分
                        </span>
                      )}
                    </div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {t.title}
                    </div>
                    <div className="text-[11px] text-muted-foreground line-clamp-2 mt-1">
                      {t.summary}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        );
      })()}

      {/* Related books */}
      {BOOKS_ENABLED && (() => {
        const bks = getRelatedBooks(problem.id, problem.field);
        if (bks.length === 0) return null;
        return (
          <FadeIn delay={0.23}>
            <div className="mb-8">
              <RelatedBooks books={bks} />
            </div>
          </FadeIn>
        );
      })()}

      {/* Copyright notice */}
      <FadeIn delay={0.25}>
        <div className="mb-8 rounded-xl border bg-muted/20 p-5">
          <div className="flex items-start gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
              </svg>
            </div>
            <div className="flex-1 space-y-2 text-xs text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">本解説は当サイトのオリジナルです。</strong>
                問題の設定は原典の著作権に配慮し、当サイト独自の表現で再構成しています。
              </p>
              <p>
                {uni?.name}の入試問題の著作権は{uni?.name}に帰属します。
                正確な問題文は
                <a
                  href={uni?.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mx-0.5"
                >
                  公式PDF
                </a>
                をご参照ください。権利者の方からの削除依頼は
                <Link href="/takedown" className="text-primary hover:underline mx-0.5">
                  こちら
                </Link>
                。
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Navigation */}
      <FadeIn delay={0.3}>
        <div className="flex justify-between pt-4 border-t">
          <Link href={`/universities/${problem.universitySlug}/${problem.year}`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1.5"><path d="m15 18-6-6 6-6"/></svg>
            {uni?.shortName} {problem.year}年度
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
