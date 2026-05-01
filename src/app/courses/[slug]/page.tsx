import Link from "next/link";
import { notFound } from "next/navigation";
import {
  courses,
  getCourse,
  getCourseTopicCount,
  flattenCourse,
} from "@/data/courses";
import { topics } from "@/data/topics";
import { CATEGORY_LABELS } from "@/data/topics";
import { FIELD_LABELS, Field } from "@/data/types";
import { FadeIn } from "@/components/animations";
import { EditorialBreadcrumb } from "@/components/EditorialBreadcrumb";
import { EditorialButton } from "@/components/ui/editorial-button";
import { Kicker, OrnamentRule } from "@/components/ornaments/Ornaments";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return { title: "Not Found" };
  const url = `/courses/${slug}`;
  return {
    title: `${c.title} — ${c.englishLabel} のコース`,
    description: c.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.title} | 院試DB`,
      description: c.intro,
      url,
      type: "article",
      locale: "ja_JP",
      siteName: "院試DB",
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const flat = flattenCourse(course);
  const total = getCourseTopicCount(course);
  const firstTopic = flat[0]?.topicId;

  return (
    <div className="bg-background">
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", url: "/" },
          { name: "コース一覧", url: "/courses" },
          { name: course.title },
        ])}
      />

      {/* ============================================================ */}
      {/*  MASTHEAD                                                     */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-24">
          <FadeIn direction="none">
            <div className="flex items-center gap-3 sm:gap-6 pb-4 border-b border-foreground/30 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="text-foreground/80">{course.englishLabel}</span>
              <span aria-hidden className="text-foreground/30">·</span>
              <span>{FIELD_LABELS[course.field as Field] ?? "総合"}</span>
              <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
              <span>{course.chapters.length} ch · {total} entries</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.04}>
            <div className="mt-8">
              <EditorialBreadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Courses", href: "/courses" },
                  { label: course.englishLabel },
                ]}
              />
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <FadeIn direction="none" delay={0.08} className="col-span-12 md:col-span-3 lg:col-span-2">
              <div className="md:sticky md:top-24 flex md:flex-col flex-wrap gap-x-8 gap-y-6">
                <Meta label="Field" value={FIELD_LABELS[course.field as Field] ?? "総合"} />
                <Meta label="Chapters" value={`${course.chapters.length}`} />
                <Meta label="Entries" value={`${total}`} />
              </div>
            </FadeIn>

            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-10 md:mt-0">
              <FadeIn delay={0.1}>
                <p className="font-serif-jp italic text-base sm:text-lg text-muted-foreground tracking-wide">
                  {course.englishLabel}
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <h1 className="font-serif-jp mt-3 sm:mt-4 font-bold tracking-[-0.03em] leading-[1.0] text-[3rem] sm:text-[5.5rem] lg:text-[6.5rem]">
                  {course.title}
                </h1>
              </FadeIn>
              {course.subtitle && (
                <FadeIn delay={0.18}>
                  <p className="mt-6 font-serif-jp italic text-lg sm:text-xl text-foreground/75 max-w-2xl">
                    {course.subtitle}
                  </p>
                </FadeIn>
              )}

              <FadeIn delay={0.24}>
                <div className="mt-12 max-w-2xl">
                  <p className="font-serif-jp text-[15px] sm:text-base leading-[2.05] text-foreground/85">
                    {course.intro}
                  </p>
                </div>
              </FadeIn>

              {firstTopic && (
                <FadeIn delay={0.32}>
                  <div className="mt-12">
                    <EditorialButton
                      href={`/topics/${firstTopic}`}
                      variant="filled"
                      kicker="Begin"
                      size="lg"
                    >
                      第1講から読み始める
                    </EditorialButton>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Audience / Prereq / Goals                                    */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15 bg-foreground/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 items-start">
            <FadeIn direction="none" className="col-span-12 md:col-span-3 lg:col-span-2">
              <Kicker prefix="¶">Brief</Kicker>
            </FadeIn>
            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-8 md:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10">
              <Card label="Audience" body={course.audience} />
              {course.prerequisites && (
                <CardList label="Prerequisites" items={course.prerequisites} />
              )}
              {course.goals && (
                <CardList label="Goals" items={course.goals} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CHAPTERED TOC                                                */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
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
                  Contents
                </div>
              </div>
            </FadeIn>

            <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-10 md:mt-0">
              <FadeIn direction="none">
                <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold tracking-tight pb-5 border-b border-foreground/30">
                  目次
                </h2>
              </FadeIn>

              <div className="mt-12 space-y-16">
                {course.chapters.map((chapter, ci) => (
                  <FadeIn key={ci} delay={0.04 * ci}>
                    <div>
                      <div className="flex items-baseline gap-4 sm:gap-6 pb-2 border-b border-foreground/20 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
                          §{ci + 1}
                        </span>
                        <h3 className="font-serif-jp text-xl sm:text-2xl font-bold tracking-tight">
                          {chapter.title}
                        </h3>
                        <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground tabular-nums">
                          {chapter.topicIds.length} entries
                        </span>
                      </div>
                      {chapter.description && (
                        <p className="font-serif-jp italic text-[13px] text-muted-foreground mb-4 max-w-xl">
                          {chapter.description}
                        </p>
                      )}

                      <ol>
                        {chapter.topicIds.map((tid, si) => {
                          const t = topics.find((x) => x.id === tid);
                          if (!t) return null;
                          return (
                            <li key={tid}>
                              <Link
                                href={`/topics/${tid}`}
                                className="group grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-x-4 sm:gap-x-6 py-4 border-b border-foreground/10 hover:bg-foreground/[0.025] -mx-3 px-3 transition-colors"
                              >
                                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80 tabular-nums">
                                  §{ci + 1}.{si + 1}
                                </span>
                                <div className="min-w-0">
                                  <div className="font-serif-jp text-lg sm:text-xl font-medium tracking-tight group-hover:underline underline-offset-[6px] decoration-1">
                                    {t.title}
                                  </div>
                                  <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/80">
                                    {CATEGORY_LABELS[t.category]}
                                    {t.readMinutes && ` · ${t.readMinutes} min`}
                                  </div>
                                </div>
                                <span
                                  aria-hidden
                                  className="hidden sm:inline-block w-12 lg:w-24 align-middle border-b border-dotted border-foreground/30 mb-1.5 self-end"
                                />
                                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40 group-hover:text-foreground transition-colors shrink-0">
                                  read →
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COLOPHON                                                      */}
      {/* ============================================================ */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <OrnamentRule ornament="fleuron" className="mb-12" />
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4">
            <EditorialButton
              href="/courses"
              variant="hairline"
              direction="left"
              kicker="Back"
            >
              コース一覧
            </EditorialButton>
            {firstTopic && (
              <EditorialButton
                href={`/topics/${firstTopic}`}
                variant="hairline"
                direction="right"
                kicker="Begin"
              >
                第1講へ
              </EditorialButton>
            )}
          </div>
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
      <span className="font-serif-jp mt-1.5 text-[15px] font-medium tabular-nums tracking-tight leading-snug">
        {value}
      </span>
    </div>
  );
}

function Card({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 pb-2 border-b border-foreground/15">
        {label}
      </span>
      <p className="font-serif-jp text-[14px] leading-[1.85] text-foreground/85">
        {body}
      </p>
    </div>
  );
}

function CardList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 pb-2 border-b border-foreground/15">
        {label}
      </span>
      <ul className="font-serif-jp text-[14px] leading-[1.85] text-foreground/85 space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="text-foreground/40">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
