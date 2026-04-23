import Link from "next/link";
import { notFound } from "next/navigation";
import { getUniversity, getSubject } from "@/data/universities";
import {
  getExams,
  getExamProblems,
  SUBJECT_FROM_SLUG,
} from "@/data/problems";
import { ExamView } from "@/components/ExamView";
import { ExamRuleCard } from "@/components/ExamRuleCard";
import { FadeIn } from "@/components/animations";
import { DotPattern } from "@/components/patterns";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/ui/particles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  JsonLd,
  breadcrumbSchema,
  learningResourceSchema,
} from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getExams().map((e) => ({
    uniSlug: e.universitySlug,
    year: String(e.year),
    subject: e.subjectSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uniSlug: string; year: string; subject: string }>;
}): Promise<Metadata> {
  const { uniSlug, year, subject } = await params;
  const uni = getUniversity(uniSlug);
  const subjectName = SUBJECT_FROM_SLUG[subject];
  if (!uni || !subjectName) return { title: "Not Found" };
  const title = `${uni.name} ${year}年度 ${subjectName} 模擬演習`;
  const description = `${uni.name} ${uni.department} ${year}年度 ${subjectName} の大学院入試問題を1ページにまとめて模擬演習。各大問の解説はトグルで開閉可能。`;
  const url = `/exams/${uniSlug}/${year}/${subject}`;
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

export default async function ExamPage({
  params,
}: {
  params: Promise<{ uniSlug: string; year: string; subject: string }>;
}) {
  const { uniSlug, year: yearStr, subject } = await params;
  const year = Number(yearStr);
  const uni = getUniversity(uniSlug);
  const subjectName = SUBJECT_FROM_SLUG[subject];
  if (!uni || !subjectName || isNaN(year)) notFound();

  const problems = getExamProblems(uniSlug, year, subject);
  if (problems.length === 0) notFound();

  // 受験ルール（大学定義の SubjectDef から取得、なければ undefined）
  const subjectDef = getSubject(uniSlug, subject);

  const canonicalPath = `/exams/${uniSlug}/${year}/${subject}`;
  const examTitle = `${uni.name} ${year}年度 ${subjectName} 模擬演習`;
  const examDesc = `${uni.name} ${uni.department} ${year}年度 ${subjectName} の入試問題を1ページにまとめて模擬演習。${problems.length}問収録。`;

  return (
    <div className="relative min-h-screen">
      <JsonLd
        data={learningResourceSchema({
          url: canonicalPath,
          name: examTitle,
          description: examDesc,
          educationalLevel: "Graduate",
          teaches: subjectName,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", url: "/" },
          { name: uni.name, url: `/universities/${uniSlug}` },
          { name: `${year}年度`, url: `/universities/${uniSlug}/${year}` },
          { name: `${subjectName} 模擬演習` },
        ])}
      />
      <DotPattern className="opacity-20" />
      <Particles className="text-primary/40" quantity={30} staticity={70} />

      <div className="relative mx-auto max-w-4xl px-6 py-12">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">
              ホーム
            </Link>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <Link
              href={`/universities/${uniSlug}`}
              className="hover:text-foreground transition-colors"
            >
              {uni.name}
            </Link>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <Link
              href={`/universities/${uniSlug}/${year}`}
              className="hover:text-foreground transition-colors"
            >
              {year}年度
            </Link>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-foreground font-medium">
              {subjectName} 模擬演習
            </span>
          </nav>
        </FadeIn>

        {/* Header */}
        <FadeIn>
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-[10px] tracking-widest uppercase">
              Practice Mode
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              <TextGenerateEffect
                words={`${uni.name} ${year}年度 ${subjectName}`}
                splitBy="char"
                stagger={0.015}
                duration={0.35}
              />
            </h1>
            <p className="text-sm text-muted-foreground">
              {uni.department}
            </p>
          </div>
        </FadeIn>

        {/* Exam Rules */}
        <FadeIn delay={0.05}>
          <div className="mb-8">
            <ExamRuleCard rule={subjectDef?.rule} problemCount={problems.length} />
          </div>
        </FadeIn>

        {/* Quick nav */}
        <FadeIn delay={0.08}>
          <div className="mb-10 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground mr-2">大問へジャンプ:</span>
            {problems.map((p) => (
              <a
                key={p.id}
                href={`#problem-${p.problemNumber}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "text-xs",
                )}
              >
                第{p.problemNumber}問
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Exam content */}
        <FadeIn delay={0.1}>
          <ExamView problems={problems} />
        </FadeIn>

        {/* Footer nav */}
        <FadeIn delay={0.2}>
          <div className="mt-16 pt-8 border-t flex items-center justify-between">
            <Link
              href={`/universities/${uniSlug}/${year}`}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              ← {year}年度 に戻る
            </Link>
            <Link
              href={`/universities/${uniSlug}`}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              {uni.name} 全年度を見る
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
