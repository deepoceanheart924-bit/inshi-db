import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, getUniversity } from "@/data/universities";
import {
  getProblemsByUniversity,
  getYears,
  getSubjectSlugsForYear,
  SUBJECT_FROM_SLUG,
} from "@/data/problems";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { DotPattern } from "@/components/patterns";
import { FieldIcon } from "@/components/FieldIcon";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { slug: string; year: string }[] = [];
  for (const uni of universities) {
    const years = getYears(uni.slug);
    for (const year of years) {
      params.push({ slug: uni.slug, year: String(year) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}): Promise<Metadata> {
  const { slug, year } = await params;
  const uni = getUniversity(slug);
  if (!uni) return { title: "Not Found" };
  const title = `${uni.name} ${year}年度 過去問`;
  const description = `${uni.name} ${uni.department} ${year}年度の大学院入試過去問・解答解説。科目別に模擬演習ページへの導線付き。`;
  const url = `/universities/${slug}/${year}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "ja_JP",
      siteName: "院試DB",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function UniversityYearPage({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}) {
  const { slug, year: yearStr } = await params;
  const year = Number(yearStr);
  const uni = getUniversity(slug);
  if (!uni || isNaN(year)) notFound();

  const allProblems = getProblemsByUniversity(slug);
  const yearProblems = allProblems
    .filter((p) => p.year === year)
    .sort((a, b) => a.problemNumber - b.problemNumber);

  if (yearProblems.length === 0) notFound();

  const allYears = getYears(slug);
  const yearIdx = allYears.indexOf(year);
  const prevYear = yearIdx < allYears.length - 1 ? allYears[yearIdx + 1] : null;
  const nextYear = yearIdx > 0 ? allYears[yearIdx - 1] : null;

  const fields = [...new Set(yearProblems.map((p) => p.field))];
  const subjects = [...new Set(yearProblems.map((p) => p.subject))];
  const subjectSlugs = getSubjectSlugsForYear(slug, year);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", url: "/" },
          { name: uni.name, url: `/universities/${slug}` },
          { name: `${year}年度` },
        ])}
      />
      {/* Breadcrumb */}
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <Link href={`/universities/${slug}`} className="hover:text-foreground transition-colors">
            {uni.name}
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium">{year}年度</span>
        </nav>
      </FadeIn>

      {/* Header */}
      <FadeIn>
        <div className="relative mb-12 rounded-2xl border bg-card/50 p-8 overflow-hidden">
          <DotPattern className="text-foreground/60" size={20} opacity={0.08} />
          {/* Field icons decoration */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-30">
            {fields.slice(0, 3).map((f) => (
              <div key={f} className="size-8 text-primary">
                <FieldIcon field={f} className="size-full" />
              </div>
            ))}
          </div>

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              {uni.name}
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-2">
              {year}<span className="text-xl ml-1 text-muted-foreground font-normal">年度</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-5">{uni.department}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                {yearProblems.length} 問
              </Badge>
              {subjects.map((s) => (
                <Badge key={s} variant="outline">{s}</Badge>
              ))}
              <a
                href={uni.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "ml-auto")}
              >
                公式PDFで原題を確認
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ===== 主役: 科目選択（試験への動線） ===== */}
      <FadeIn>
        <div className="mb-4 flex items-center gap-3">
          <svg width="20" height="2" className="text-primary">
            <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
          </svg>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Select Subject
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          科目を選ぶと、その試験を1ページにまとめて模擬演習できます。
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16" stagger={0.06}>
        {subjectSlugs.map((sslug) => {
          const subjectName = SUBJECT_FROM_SLUG[sslug] ?? sslug;
          const subjectProblems = yearProblems.filter((p) => p.subject === subjectName);
          const subjectFields = [...new Set(subjectProblems.map((p) => p.field))];
          return (
            <StaggerItem key={sslug}>
              <Link href={`/exams/${slug}/${year}/${sslug}`} className="group block h-full">
                <Card className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 hover:ring-2 hover:ring-primary/20 border-primary/20">
                  <CardContent className="py-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1">
                          {year}年度
                        </p>
                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                          {subjectName}
                        </h3>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      登録済み {subjectProblems.length} 問・分野 {subjectFields.length} 種
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {subjectFields.map((f) => (
                        <FieldBadge key={f} field={f} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* ===== 補助: 個別大問への直接アクセス（リファレンス用途） ===== */}
      <FadeIn>
        <details className="mb-12 group">
          <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 select-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-open:rotate-90 transition-transform">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span>個別大問にアクセス（リファレンス用途）</span>
          </summary>
          <div className="mt-4 space-y-3">
            {yearProblems.map((p) => (
              <Link key={p.id} href={`/problems/${p.id}`} className="group/item block">
                <Card className="relative overflow-hidden transition-all duration-200 hover:shadow-sm hover:bg-muted/30">
                  <CardContent className="flex items-start gap-4 py-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground/70 text-xs font-bold shrink-0">
                      問{p.problemNumber}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] text-muted-foreground tracking-wide">
                          {p.subject}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold leading-snug group-hover/item:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <FieldBadge field={p.field} />
                      <DifficultyBadge difficulty={p.difficulty} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </details>
      </FadeIn>

      {/* Year nav */}
      <FadeIn>
        <div className="flex items-center justify-between pt-6 border-t">
          {prevYear ? (
            <Link
              href={`/universities/${slug}/${prevYear}`}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1.5"><path d="m15 18-6-6 6-6"/></svg>
              {prevYear}年度
            </Link>
          ) : (
            <span />
          )}

          <Link
            href={`/universities/${slug}`}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs")}
          >
            年度一覧に戻る
          </Link>

          {nextYear ? (
            <Link
              href={`/universities/${slug}/${nextYear}`}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-xs")}
            >
              {nextYear}年度
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1.5"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </FadeIn>
    </div>
  );
}
