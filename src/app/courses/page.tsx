import Link from "next/link";
import { courses, getCourseTopicCount } from "@/data/courses";
import { FIELD_LABELS, Field } from "@/data/types";
import { FadeIn } from "@/components/animations";
import { Kicker, OrnamentRule } from "@/components/ornaments/Ornaments";
import { ArrowUpRight } from "@/components/icons/arrows";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "コース一覧 — 物理を順序立てて学ぶ",
  description:
    "古典力学・解析力学・電磁気学・量子力学・統計力学・物理数学のコース。第1講から順に読み進めれば、院試レベルの体系が完成します。",
  alternates: { canonical: "/courses" },
};

const FIELD_ORDER: (Field | "general")[] = [
  "mechanics",
  "electromagnetism",
  "quantum",
  "statistical",
  "thermodynamics",
  "optics",
  "relativity",
  "math",
  "general",
];

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function CoursesIndex() {
  const ordered = [...courses].sort(
    (a, b) =>
      FIELD_ORDER.indexOf(a.field) - FIELD_ORDER.indexOf(b.field)
  );

  return (
    <div className="bg-background">
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", url: "/" },
          { name: "コース一覧" },
        ])}
      />

      {/* Masthead */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24 pb-20 sm:pb-24">
          <FadeIn direction="none">
            <div className="flex items-center gap-3 sm:gap-6 pb-4 border-b border-foreground/30 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span aria-hidden className="h-px w-8 bg-foreground/40" />
              <span>Courses · 連載で読む物理</span>
              <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
              <span>{courses.length} courses</span>
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <FadeIn direction="none" delay={0.05} className="col-span-12 md:col-span-3 lg:col-span-2">
              <Kicker>Series</Kicker>
              <p className="font-serif-jp italic text-sm text-muted-foreground mt-3 leading-relaxed max-w-[14rem]">
                第1講から順に読めば、院試レベルの体系が立ち上がる。
              </p>
            </FadeIn>

            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-8 md:mt-0">
              <FadeIn delay={0.08}>
                <p className="font-serif-jp italic text-base sm:text-lg text-muted-foreground tracking-wide">
                  Read physics in order, chapter by chapter.
                </p>
              </FadeIn>
              <FadeIn delay={0.12}>
                <h1 className="font-serif-jp mt-3 sm:mt-4 font-bold tracking-[-0.03em] leading-[0.98] text-[3rem] sm:text-[5rem] lg:text-[6rem]">
                  コース一覧
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-10 max-w-2xl font-serif-jp text-[15px] sm:text-base leading-[2.05] text-foreground/85">
                  分野ごとに組まれた連載講義。各コースには対象読者・前提知識・学習目標が冒頭で示され、
                  章番号 §X.Y を辿って前後の話を行き来できる。トピック単位の散読では掴みにくい
                  「分野の輪郭」を、順序立てて作るための道具立てです。
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <FadeIn direction="none">
            <div className="flex items-baseline gap-4 sm:gap-6 border-b border-foreground/30 pb-3 mb-12">
              <span className="font-serif-jp text-sm font-bold text-foreground/70">§I.</span>
              <h2 className="font-serif-jp text-2xl sm:text-3xl font-bold tracking-tight">
                収録コース
              </h2>
              <span aria-hidden className="flex-1 self-center h-px bg-foreground/15" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground hidden sm:inline">
                All Series
              </span>
            </div>
          </FadeIn>

          <ol>
            {ordered.map((course, i) => {
              const count = getCourseTopicCount(course);
              return (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 sm:gap-x-8 py-7 sm:py-9 border-b border-foreground/10 hover:bg-foreground/[0.02] -mx-3 sm:-mx-5 px-3 sm:px-5 transition-colors"
                  >
                    <span className="font-serif-jp italic text-base sm:text-lg text-muted-foreground tabular-nums tracking-wide pt-2.5">
                      {ROMAN[i] ?? `${i + 1}`}.
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-x-3 flex-wrap">
                        <span className="font-serif-jp text-2xl sm:text-3xl font-bold tracking-tight group-hover:underline underline-offset-[8px] decoration-1">
                          {course.title}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                          {course.englishLabel}
                        </span>
                      </div>
                      {course.subtitle && (
                        <div className="mt-2 font-serif-jp italic text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                          {course.subtitle}
                        </div>
                      )}
                      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80 flex items-baseline gap-x-3 flex-wrap">
                        <span>{FIELD_LABELS[course.field as Field] ?? "総合"}</span>
                        <span aria-hidden>·</span>
                        <span>{course.chapters.length} chapters</span>
                        <span aria-hidden>·</span>
                        <span className="tabular-nums">{count} entries</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 self-baseline shrink-0">
                      <span className="font-serif-jp text-3xl sm:text-4xl font-bold tabular-nums leading-none tracking-[-0.02em]">
                        {count}
                      </span>
                      <ArrowUpRight className="size-4 text-foreground/40 group-hover:text-foreground transition-colors" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Colophon */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <OrnamentRule ornament="fleuron" className="mb-12" />
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <Kicker>About</Kicker>
            </div>
            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-4 md:mt-0">
              <p className="font-serif-jp text-[14px] leading-[1.95] text-foreground/80 max-w-2xl">
                各記事は単体で読み切れますが、コース順に読むと前後関係が滑らかにつながります。
                好みに応じて
                <Link
                  href="/topics"
                  className="underline underline-offset-[5px] decoration-1 hover:decoration-2 mx-1"
                >
                  全トピック索引
                </Link>
                からも自由に選べます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
