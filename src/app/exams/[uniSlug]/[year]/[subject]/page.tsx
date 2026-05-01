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
import { EditorialBreadcrumb } from "@/components/EditorialBreadcrumb";
import { EditorialButton } from "@/components/ui/editorial-button";
import { Kicker, OrnamentRule } from "@/components/ornaments/Ornaments";
import {
  JsonLd,
  breadcrumbSchema,
  learningResourceSchema,
} from "@/components/JsonLd";
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

  const subjectDef = getSubject(uniSlug, subject);

  const canonicalPath = `/exams/${uniSlug}/${year}/${subject}`;
  const examTitle = `${uni.name} ${year}年度 ${subjectName} 模擬演習`;
  const examDesc = `${uni.name} ${uni.department} ${year}年度 ${subjectName} の入試問題を1ページにまとめて模擬演習。${problems.length}問収録。`;

  return (
    <div className="bg-background">
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

      {/* ============================================================ */}
      {/*  MASTHEAD                                                      */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-20">
          {/* Edition strip */}
          <FadeIn direction="none">
            <div className="flex items-center gap-3 sm:gap-6 pb-4 border-b border-foreground/30 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="text-foreground/80">{uni.shortName}</span>
              <span aria-hidden className="text-foreground/30">·</span>
              <span className="tabular-nums">{year}</span>
              <span aria-hidden className="text-foreground/30">·</span>
              <span>{subjectName}</span>
              <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
              <span className="text-foreground/80">Practice Mode</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.04}>
            <div className="mt-8">
              <EditorialBreadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: uni.shortName, href: `/universities/${uniSlug}` },
                  { label: `${year}`, href: `/universities/${uniSlug}/${year}` },
                  { label: `${subjectName} 模擬演習` },
                ]}
              />
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <FadeIn direction="none" delay={0.08} className="col-span-12 md:col-span-3 lg:col-span-2">
              <div className="md:sticky md:top-24 flex md:flex-col flex-wrap gap-x-8 gap-y-6">
                <Meta label="University" value={uni.name} />
                <Meta label="Department" value={uni.department} />
                <Meta label="Year" value={`${year}`} />
                <Meta label="Subject" value={subjectName} />
                <Meta label="Items" value={`${problems.length}`} />
              </div>
            </FadeIn>

            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-10 md:mt-0">
              <FadeIn delay={0.1}>
                <p className="font-serif-jp italic text-base sm:text-lg text-muted-foreground tracking-wide">
                  Mock Examination · {subjectName}
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <h1 className="font-serif-jp mt-3 sm:mt-4 font-bold tracking-[-0.025em] leading-[1.05] text-[2.4rem] sm:text-[3.6rem] lg:text-[4.5rem]">
                  {uni.name}
                  <br />
                  <span className="text-foreground/85">
                    {year}年度 {subjectName}
                  </span>
                </h1>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RULE CARD + QUICK NAV                                         */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15 bg-foreground/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 items-start">
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <Kicker prefix="¶">Brief</Kicker>
              <p className="font-serif-jp italic text-sm text-muted-foreground mt-3 leading-relaxed max-w-[14rem]">
                受験ルールに目を通したら、好きな大問から取り掛かる。
              </p>
            </div>
            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-8 md:mt-0 space-y-10">
              <ExamRuleCard rule={subjectDef?.rule} problemCount={problems.length} />

              <div>
                <Kicker className="mb-4">Jump to Item</Kicker>
                <ol className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
                  {problems.map((p, i) => (
                    <li key={p.id}>
                      <a
                        href={`#problem-${p.problemNumber}`}
                        className="group inline-flex items-baseline gap-2 font-serif-jp text-base hover:underline underline-offset-[6px] decoration-1"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>第{p.problemNumber}問</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  §I.  PROBLEMS                                                 */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <FadeIn direction="none" className="col-span-12 md:col-span-3 lg:col-span-2">
              <div className="md:sticky md:top-24">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80">
                  §I
                </div>
                <div className="font-serif-jp text-7xl sm:text-8xl font-bold mt-2 tracking-[-0.04em] leading-none text-foreground/85">
                  I
                </div>
                <div className="font-serif-jp italic text-sm text-muted-foreground mt-4 tracking-wide">
                  Problems
                </div>
              </div>
            </FadeIn>

            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-10 md:mt-0">
              <FadeIn direction="none">
                <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold tracking-tight pb-5 border-b border-foreground/30">
                  本日の出題
                </h2>
              </FadeIn>
              <FadeIn delay={0.05}>
                <div className="mt-10">
                  <ExamView problems={problems} />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COLOPHON                                                       */}
      {/* ============================================================ */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <OrnamentRule ornament="fleuron" className="mb-12" />
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4">
              <EditorialButton
                href={`/universities/${uniSlug}/${year}`}
                variant="hairline"
                direction="left"
                kicker="Back"
              >
                {year}年度の目次
              </EditorialButton>
              <EditorialButton
                href={`/universities/${uniSlug}`}
                variant="hairline"
                direction="right"
                kicker={uni.shortName}
              >
                全年度を見る
              </EditorialButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

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
