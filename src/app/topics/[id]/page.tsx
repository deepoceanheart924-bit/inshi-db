import Link from "next/link";
import { notFound } from "next/navigation";
import {
  topics,
  getTopic,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
} from "@/data/topics";
import { FIELD_LABELS, Field } from "@/data/types";
import { getProblem } from "@/data/problems";
import { getUniversity } from "@/data/universities";
import { FieldIcon } from "@/components/FieldIcon";
import { MathContent } from "@/components/KaTeX";
import { FadeIn } from "@/components/animations";
import { FloatingTOC } from "@/components/FloatingTOC";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CrawlingParticles } from "@/components/CrawlingParticles";
import { getBooksForTopic } from "@/data/books";
import { RelatedBooks } from "@/components/RelatedBooks";
import { BOOKS_ENABLED } from "@/lib/features";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  return topics.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) return { title: "Not Found" };
  const title = `${topic.title}`;
  const description = topic.summary;
  const url = `/topics/${topic.id}`;
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
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) notFound();

  return (
    <div className="creative min-h-[80vh] relative" data-toc-root>
      <JsonLd
        data={articleSchema({
          url: `/topics/${topic.id}`,
          headline: topic.title,
          description: topic.summary,
          about:
            topic.field && topic.field !== "general"
              ? FIELD_LABELS[topic.field as Field]
              : undefined,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", url: "/" },
          { name: "物理解説", url: "/topics" },
          { name: topic.title },
        ])}
      />
      <ReadingProgress />
      <FloatingTOC />
      <CrawlingParticles color="var(--cr-ink)" />

      <div
        className="relative mx-auto max-w-3xl px-6 pt-16 pb-24"
        style={{ color: "var(--cr-ink)", zIndex: 1 }}
      >
        {/* Breadcrumb */}
        <FadeIn>
          <nav
            className="mb-14 flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase flex-wrap"
            style={{ color: "var(--cr-ink-muted)" }}
          >
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span>/</span>
            <Link href="/topics" className="hover:opacity-60 transition-opacity">Topics</Link>
            <span>/</span>
            <span className="truncate">{topic.title}</span>
          </nav>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.05}>
          <div className="mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {topic.field !== "general" && (
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] tracking-[0.2em] uppercase font-bold"
                  style={{
                    background: "var(--cr-bg-alt)",
                    border: "1px solid var(--cr-rule)",
                    color: "var(--cr-ink)",
                  }}
                >
                  <FieldIcon field={topic.field as Field} className="size-3.5" />
                  {FIELD_LABELS[topic.field as Field]}
                </div>
              )}
              <span
                className={cn(
                  "text-[10px] tracking-[0.25em] uppercase font-bold px-3 py-1.5",
                  CATEGORY_COLORS[topic.category]
                )}
              >
                {CATEGORY_LABELS[topic.category]}
              </span>
              {topic.readMinutes && (
                <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--cr-ink-muted)" }}>
                  {topic.readMinutes} min read
                </span>
              )}
            </div>

            <h1
              className="font-black tracking-tighter leading-[1.1] mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "var(--cr-ink)",
              }}
            >
              {topic.title}
            </h1>

            <p
              className="text-base leading-[1.9] max-w-2xl"
              style={{ color: "var(--cr-ink-muted)" }}
            >
              {topic.summary}
            </p>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.1}>
          <div
            className="h-px mb-12"
            style={{ background: "var(--cr-rule)" }}
          />
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.15}>
          <article
            className="p-8 sm:p-10 mb-10"
            style={{
              background: "var(--cr-bg-alt)",
              border: "1px solid var(--cr-rule)",
            }}
          >
            <MathContent content={topic.content} className="leading-relaxed" />
          </article>
        </FadeIn>

        {/* Related problems */}
        {topic.relatedProblems && topic.relatedProblems.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <p
                  className="text-[11px] font-bold tracking-[0.3em] uppercase"
                  style={{ color: "var(--cr-accent)" }}
                >
                  Related Problems
                </p>
                <div className="h-px flex-1" style={{ background: "var(--cr-rule)" }} />
              </div>
              <div className="space-y-3">
                {topic.relatedProblems.map((pid) => {
                  const p = getProblem(pid);
                  if (!p) return null;
                  const uni = getUniversity(p.universitySlug);
                  return (
                    <Link
                      key={pid}
                      href={`/problems/${pid}`}
                      className="group block p-5 transition-all hover:-translate-y-0.5"
                      style={{
                        background: "var(--cr-bg-alt)",
                        border: "1px solid var(--cr-rule)",
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div
                            className="text-[10px] tracking-[0.2em] uppercase mb-1"
                            style={{ color: "var(--cr-ink-muted)" }}
                          >
                            {uni?.shortName} {p.year}年度 · {p.subject} 問{p.problemNumber}
                          </div>
                          <div
                            className="font-bold truncate transition-colors group-hover:opacity-70"
                            style={{ color: "var(--cr-ink)" }}
                          >
                            {p.title}
                          </div>
                        </div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="shrink-0 transition-all group-hover:translate-x-1"
                          style={{ color: "var(--cr-accent)" }}
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Related topics */}
        {topic.relatedTopics && topic.relatedTopics.length > 0 && (
          <FadeIn delay={0.25}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <p
                  className="text-[11px] font-bold tracking-[0.3em] uppercase"
                  style={{ color: "var(--cr-accent-2)" }}
                >
                  Related Topics
                </p>
                <div className="h-px flex-1" style={{ background: "var(--cr-rule)" }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.relatedTopics.map((tid) => {
                  const t = getTopic(tid);
                  if (!t) return null;
                  return (
                    <Link
                      key={tid}
                      href={`/topics/${tid}`}
                      className="group block p-4 transition-all hover:-translate-y-0.5"
                      style={{
                        background: "var(--cr-bg-alt)",
                        border: "1px solid var(--cr-rule)",
                      }}
                    >
                      <div
                        className="text-[9px] tracking-[0.25em] uppercase mb-2"
                        style={{ color: "var(--cr-ink-muted)" }}
                      >
                        {CATEGORY_LABELS[t.category]}
                      </div>
                      <div
                        className="font-bold mb-1 transition-colors group-hover:opacity-70"
                        style={{ color: "var(--cr-ink)" }}
                      >
                        {t.title}
                      </div>
                      <div
                        className="text-[11px] line-clamp-2"
                        style={{ color: "var(--cr-ink-muted)" }}
                      >
                        {t.summary}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Related books */}
        {BOOKS_ENABLED && (() => {
          const bks = getBooksForTopic(topic.id, topic.field);
          if (bks.length === 0) return null;
          return (
            <FadeIn delay={0.3}>
              <div className="mb-10">
                <RelatedBooks books={bks} />
              </div>
            </FadeIn>
          );
        })()}

        {/* Footer nav */}
        <FadeIn delay={0.35}>
          <div
            className="mt-16 pt-8 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--cr-rule)" }}
          >
            <Link
              href="/topics"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
              style={{ color: "var(--cr-ink)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
              All Topics
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
