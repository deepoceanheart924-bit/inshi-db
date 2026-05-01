import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, getProblem } from "@/data/problems";
import { getUniversity } from "@/data/universities";
import { MathContent } from "@/components/KaTeX";
import { FadeIn } from "@/components/animations";
import { Prerequisites } from "@/components/Prerequisites";
import { FieldSimulation } from "@/components/FieldSimulation";
import { FloatingTOC } from "@/components/FloatingTOC";
import { ReadingProgress } from "@/components/ReadingProgress";
import { EditorialBreadcrumb } from "@/components/EditorialBreadcrumb";
import { EditorialButton } from "@/components/ui/editorial-button";
import {
  Kicker,
  OrnamentRule,
  Hairline,
} from "@/components/ornaments/Ornaments";
import { ArrowUpRight } from "@/components/icons/arrows";
import { getRelatedTopics, CATEGORY_LABELS } from "@/data/topics";
import { getRelatedBooks } from "@/data/books";
import { RelatedBooks } from "@/components/RelatedBooks";
import { BOOKS_ENABLED } from "@/lib/features";
import {
  JsonLd,
  articleSchema,
  breadcrumbSchema,
} from "@/components/JsonLd";
import { FIELD_LABELS, DIFFICULTY_LABELS } from "@/data/types";
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

const FIELD_EN: Record<string, string> = {
  mechanics: "Classical Mechanics",
  electromagnetism: "Electromagnetism",
  quantum: "Quantum Mechanics",
  statistical: "Statistical Mechanics",
  thermodynamics: "Thermodynamics",
  optics: "Optics",
  relativity: "Relativity",
  math: "Mathematical Physics",
};

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
  const fieldEn = FIELD_EN[problem.field] ?? FIELD_LABELS[problem.field];
  const related = getRelatedTopics(problem.id);
  const books = BOOKS_ENABLED ? getRelatedBooks(problem.id, problem.field) : [];

  return (
    <div className="bg-background" data-toc-root>
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
          {
            name: `${problem.year}年度`,
            url: `/universities/${problem.universitySlug}/${problem.year}`,
          },
          { name: problem.title },
        ])}
      />
      <ReadingProgress />
      <FloatingTOC />

      {/* ============================================================ */}
      {/*  MASTHEAD                                                      */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-20">
          {/* Edition strip */}
          <FadeIn direction="none">
            <div className="flex items-center gap-3 sm:gap-6 pb-4 border-b border-foreground/30 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="text-foreground/80">{uni?.shortName}</span>
              <span aria-hidden className="text-foreground/30">·</span>
              <span className="tabular-nums">{problem.year}</span>
              <span aria-hidden className="text-foreground/30">·</span>
              <span>{problem.subject}</span>
              <span aria-hidden className="text-foreground/30">·</span>
              <span>問{problem.problemNumber}</span>
              <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
              <span className="hidden md:inline">{fieldEn}</span>
            </div>
          </FadeIn>

          {/* Breadcrumb */}
          <FadeIn delay={0.04}>
            <div className="mt-8">
              <EditorialBreadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: uni?.shortName ?? "", href: `/universities/${problem.universitySlug}` },
                  { label: `${problem.year}`, href: `/universities/${problem.universitySlug}/${problem.year}` },
                  { label: problem.title },
                ]}
              />
            </div>
          </FadeIn>

          <div className="mt-10 grid grid-cols-12 gap-x-6 sm:gap-x-10">
            {/* Left rail meta */}
            <FadeIn direction="none" delay={0.08} className="col-span-12 md:col-span-3 lg:col-span-2">
              <div className="md:sticky md:top-24 flex md:flex-col flex-wrap gap-x-8 gap-y-6">
                <Meta label="University" value={uni?.name ?? ""} />
                <Meta label="Year" value={`${problem.year}`} />
                <Meta label="Subject" value={problem.subject} />
                <Meta label="Item" value={`No. ${problem.problemNumber}`} />
                <Meta label="Field" value={FIELD_LABELS[problem.field]} />
                <Meta label="Level" value={DIFFICULTY_LABELS[problem.difficulty]} />
              </div>
            </FadeIn>

            {/* Title block */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-8 md:mt-0">
              <FadeIn delay={0.1}>
                <p className="font-serif-jp italic text-base sm:text-lg text-muted-foreground tracking-wide">
                  {fieldEn}
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <h1 className="font-serif-jp mt-3 sm:mt-4 font-bold tracking-[-0.025em] leading-[1.05] text-[2.4rem] sm:text-[3.4rem] lg:text-[4rem]">
                  {problem.title}
                </h1>
              </FadeIn>

              {problem.tags.length > 0 && (
                <FadeIn delay={0.2}>
                  <div className="mt-8 pt-5 border-t border-foreground/15 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span className="text-foreground/55">Tags</span>
                    <span aria-hidden>·</span>
                    {problem.tags.map((t, i) => (
                      <span key={t}>
                        {t}
                        {i < problem.tags.length - 1 && (
                          <span aria-hidden className="text-foreground/25 ml-3">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRELUDE: simulation + prerequisites                          */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15 bg-foreground/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 items-start">
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <Kicker prefix="¶">Prelude</Kicker>
              <p className="font-serif-jp italic text-sm text-muted-foreground mt-3 leading-relaxed max-w-[14rem]">
                解く前に、分野の幾何と前提を一望しておく。
              </p>
            </div>
            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-8 md:mt-0 space-y-10">
              <div>
                <Kicker className="mb-3">Live Simulation</Kicker>
                <div className="border border-foreground/20">
                  <FieldSimulation field={problem.field} className="w-full h-auto max-h-72 mx-auto" />
                </div>
              </div>
              <Prerequisites field={problem.field} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  §I.  PROBLEM                                                  */}
      {/* ============================================================ */}
      <Article roman="I" title="Problem" kicker="問題" id="problem">
        <div className="font-serif-jp text-[15.5px] sm:text-base leading-[2] text-foreground/90">
          <MathContent
            content={problem.statement}
            className="text-foreground leading-[2]"
          />
        </div>

        <div className="mt-10 pt-5 border-t border-foreground/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-serif-jp italic text-[13px] text-muted-foreground max-w-md">
            問題文は各大学の著作物のため掲載していません。原典は公式PDFをご参照ください。
          </p>
          <a
            href={uni?.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-foreground hover:text-foreground/70 transition-colors self-start sm:self-auto shrink-0"
          >
            <span>Official PDF</span>
            <ArrowUpRight className="size-3 translate-y-[1px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </Article>

      {/* ============================================================ */}
      {/*  §II. SOLUTION                                                 */}
      {/* ============================================================ */}
      <Article roman="II" title="Solution" kicker="解答" id="solution">
        <div className="font-serif-jp text-[15.5px] sm:text-base leading-[2] text-foreground/90">
          <MathContent
            content={problem.solution}
            className="text-foreground leading-[2]"
          />
        </div>
      </Article>

      {/* ============================================================ */}
      {/*  §III. RELATED                                                 */}
      {/* ============================================================ */}
      {(related.length > 0 || books.length > 0) && (
        <Article roman="III" title="Related" kicker="関連">
          <div className="space-y-12">
            {related.length > 0 && (
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-5">
                  Topics
                </h3>
                <ol className="border-t border-foreground/15">
                  {related.map((t, i) => (
                    <li key={t.id}>
                      <Link
                        href={`/topics/${t.id}`}
                        className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 py-5 border-b border-foreground/10 hover:bg-foreground/[0.025] -mx-3 px-3 transition-colors"
                      >
                        <span className="font-mono text-[10px] text-muted-foreground/70 tabular-nums tracking-wider">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <span className="font-serif-jp text-lg sm:text-xl font-medium tracking-tight group-hover:underline underline-offset-[6px] decoration-1">
                            {t.title}
                          </span>
                          <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                            {CATEGORY_LABELS[t.category]}
                            {t.readMinutes && ` · ${t.readMinutes}min`}
                          </span>
                          <p className="mt-2 font-serif-jp italic text-[13px] text-muted-foreground leading-relaxed line-clamp-2 max-w-2xl">
                            {t.summary}
                          </p>
                        </div>
                        <ArrowUpRight className="size-4 text-foreground/45 group-hover:text-foreground transition-colors self-baseline mt-1" />
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {books.length > 0 && (
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-5">
                  References
                </h3>
                <RelatedBooks books={books} />
              </div>
            )}
          </div>
        </Article>
      )}

      {/* ============================================================ */}
      {/*  COLOPHON: copyright + nav                                    */}
      {/* ============================================================ */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <OrnamentRule ornament="fleuron" className="mb-12" />
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
              <div className="col-span-12 md:col-span-3 lg:col-span-2">
                <Kicker>Notice</Kicker>
              </div>
              <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-4 md:mt-0">
                <p className="font-serif-jp text-[14px] leading-[1.95] text-foreground/80 max-w-3xl">
                  本解説は当サイトのオリジナルです。問題の設定は原典の著作権に配慮し、当サイト独自の表現で再構成しています。
                  {uni?.name}の入試問題の著作権は{uni?.name}に帰属します。正確な問題文は
                  <a
                    href={uni?.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-[5px] decoration-1 hover:decoration-2 mx-0.5"
                  >
                    公式PDF
                  </a>
                  をご参照ください。権利者の方からの削除依頼は
                  <Link
                    href="/takedown"
                    className="underline underline-offset-[5px] decoration-1 hover:decoration-2 mx-0.5"
                  >
                    こちら
                  </Link>
                  。
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-16 pt-6 border-t border-foreground/15 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4">
              <EditorialButton
                href={`/universities/${problem.universitySlug}/${problem.year}`}
                variant="hairline"
                direction="left"
                kicker="Back"
              >
                {uni?.shortName} {problem.year}年度
              </EditorialButton>
              <EditorialButton
                href={`/fields/${problem.field}`}
                variant="hairline"
                direction="right"
                kicker={fieldEn}
              >
                同じ分野の問題
              </EditorialButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/80">
        {label}
      </span>
      <span className="font-serif-jp mt-1.5 text-[14px] font-medium tracking-tight leading-snug max-w-[12rem]">
        {value}
      </span>
    </div>
  );
}

function Article({
  roman,
  title,
  kicker,
  id,
  children,
}: {
  roman: string;
  title: string;
  kicker: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-foreground/15 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
          <FadeIn direction="none" className="col-span-12 md:col-span-3 lg:col-span-2">
            <div className="md:sticky md:top-24">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">
                §{roman}
              </div>
              <div className="font-serif-jp text-7xl sm:text-8xl font-bold mt-2 tracking-[-0.04em] leading-none text-foreground/85">
                {roman}
              </div>
              <div className="font-serif-jp italic text-sm text-muted-foreground mt-4 tracking-wide">
                {kicker}
              </div>
            </div>
          </FadeIn>
          <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-10 md:mt-0">
            <FadeIn direction="none">
              <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold tracking-tight pb-5 border-b border-foreground/30">
                {title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="mt-10">{children}</div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
