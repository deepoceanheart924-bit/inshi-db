import Link from "next/link";
import { topics, CATEGORY_LABELS, CATEGORY_COLORS, TopicCategory } from "@/data/topics";
import { FIELD_LABELS, Field } from "@/data/types";
import { FieldIcon } from "@/components/FieldIcon";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { CrawlingParticles } from "@/components/CrawlingParticles";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "物理解説 — 院試DB",
  description: "物理学・数学の基本概念、定理、計算技法、躓きやすいポイントを丁寧に解説",
};

const CATEGORIES: TopicCategory[] = ["concept", "theorem", "technique", "stumbling", "math"];

const CATEGORY_EN: Record<TopicCategory, string> = {
  concept: "Concepts",
  theorem: "Theorems & Laws",
  technique: "Techniques",
  stumbling: "Stumbling Points",
  math: "Mathematical Tools",
};

export default function TopicsPage() {
  return (
    <div className="creative min-h-[80vh] relative">
      <CrawlingParticles color="var(--cr-ink)" />
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-24" style={{ color: "var(--cr-ink)", zIndex: 1 }}>
        {/* Breadcrumb */}
        <FadeIn>
          <nav
            className="mb-10 flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase"
            style={{ color: "var(--cr-ink-muted)" }}
          >
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span>/</span>
            <span>Topics</span>
          </nav>
        </FadeIn>

        {/* ========= HERO ========= */}
        <section className="relative pb-16 mb-4">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="size-2 rounded-full animate-pulse"
                style={{ background: "var(--cr-accent)" }}
              />
              <p
                className="text-[11px] font-bold tracking-[0.4em] uppercase"
                style={{ color: "var(--cr-accent)" }}
              >
                Knowledge Base
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1
              className="font-black leading-[0.9] tracking-tighter mb-8"
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                color: "var(--cr-ink)",
              }}
            >
              物理を、<br />
              <span
                className="inline-block"
                style={{
                  color: "var(--cr-accent)",
                  fontStyle: "italic",
                }}
              >
                ひもとく。
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl">
              <p
                className="text-base sm:text-lg leading-[1.9] font-medium"
                style={{ color: "var(--cr-ink)" }}
              >
                基本概念・定理・計算技法・よく躓くポイントを、
                <span style={{ color: "var(--cr-accent)" }}>理系大学生初学者向け</span>
                に丁寧に解説。
              </p>
              <p
                className="mt-4 text-[14px] leading-[1.9]"
                style={{ color: "var(--cr-ink-muted)" }}
              >
                問題ページの解説でつまずいた時のバックアップとして、または学習ロードマップとしてお使いください。
              </p>
            </div>
          </FadeIn>

          {/* Big decorative numerals / stats block */}
          <FadeIn delay={0.15}>
            <div
              className="mt-14 grid grid-cols-3 border-y"
              style={{ borderColor: "var(--cr-ink)" }}
            >
              <div className="py-5 pr-4">
                <div
                  className="font-black tracking-tighter leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    color: "var(--cr-ink)",
                  }}
                >
                  {topics.length}
                </div>
                <div
                  className="mt-2 text-[10px] tracking-[0.3em] uppercase font-bold"
                  style={{ color: "var(--cr-ink-muted)" }}
                >
                  Topics
                </div>
              </div>
              <div
                className="py-5 px-4 border-x"
                style={{ borderColor: "var(--cr-rule)" }}
              >
                <div
                  className="font-black tracking-tighter leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    color: "var(--cr-accent)",
                  }}
                >
                  {new Set(topics.map((t) => t.field)).size}
                </div>
                <div
                  className="mt-2 text-[10px] tracking-[0.3em] uppercase font-bold"
                  style={{ color: "var(--cr-ink-muted)" }}
                >
                  Fields
                </div>
              </div>
              <div className="py-5 pl-4">
                <div
                  className="font-black tracking-tighter leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    color: "var(--cr-ink)",
                  }}
                >
                  {CATEGORIES.length}
                </div>
                <div
                  className="mt-2 text-[10px] tracking-[0.3em] uppercase font-bold"
                  style={{ color: "var(--cr-ink-muted)" }}
                >
                  Categories
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ========= BY CATEGORY ========= */}
        <div className="mt-24 space-y-20">
          {CATEGORIES.map((cat, ci) => {
            const catTopics = topics.filter((t) => t.category === cat);
            if (catTopics.length === 0) return null;

            // Accent color rotates per category for vividness
            const accentColor =
              ci % 3 === 0
                ? "var(--cr-accent)"
                : ci % 3 === 1
                ? "var(--cr-accent-2)"
                : "var(--cr-accent-3)";

            return (
              <section key={cat}>
                <FadeIn>
                  <div className="flex items-baseline gap-6 mb-10 flex-wrap">
                    <div
                      className="font-black tracking-tighter leading-none"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: "var(--cr-ink)",
                      }}
                    >
                      {String(ci + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p
                        className="text-[11px] font-bold tracking-[0.3em] uppercase mb-1"
                        style={{ color: accentColor }}
                      >
                        {CATEGORY_EN[cat]}
                      </p>
                      <h2
                        className="text-2xl sm:text-3xl font-black tracking-tight"
                        style={{ color: "var(--cr-ink)" }}
                      >
                        {CATEGORY_LABELS[cat]}
                      </h2>
                    </div>
                    <div
                      className="ml-auto text-[10px] tracking-[0.25em] uppercase"
                      style={{ color: "var(--cr-ink-muted)" }}
                    >
                      {catTopics.length} Topics
                    </div>
                  </div>
                </FadeIn>

                <StaggerContainer
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  stagger={0.04}
                >
                  {catTopics.map((t) => (
                    <StaggerItem key={t.id}>
                      <Link href={`/topics/${t.id}`} className="group block h-full">
                        <article
                          className="relative h-full p-6 transition-all duration-200 hover:-translate-y-1"
                          style={{
                            background: "var(--cr-bg-alt)",
                            border: "1px solid var(--cr-rule)",
                            borderRadius: "0px",
                          }}
                        >
                          {/* Hover accent bar */}
                          <div
                            aria-hidden
                            className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300"
                            style={{ background: accentColor }}
                          />

                          <div className="flex items-center justify-between mb-4">
                            <div
                              className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase"
                              style={{ color: "var(--cr-ink-muted)" }}
                            >
                              {t.field !== "general" && (
                                <span
                                  className="flex size-7 items-center justify-center rounded-sm"
                                  style={{
                                    background: "var(--cr-bg)",
                                    color: "var(--cr-ink)",
                                  }}
                                >
                                  <FieldIcon field={t.field} className="size-4" />
                                </span>
                              )}
                              <span>
                                {t.field === "general" ? "共通" : FIELD_LABELS[t.field as Field]}
                              </span>
                            </div>
                            <span
                              className={cn(
                                "text-[9px] tracking-widest px-2 py-1 uppercase font-bold",
                                CATEGORY_COLORS[t.category]
                              )}
                            >
                              {CATEGORY_LABELS[t.category]}
                            </span>
                          </div>

                          <h3
                            className="text-lg font-bold leading-snug mb-3 transition-colors"
                            style={{ color: "var(--cr-ink)" }}
                          >
                            {t.title}
                          </h3>

                          <p
                            className="text-[13px] leading-relaxed line-clamp-3 mb-5"
                            style={{ color: "var(--cr-ink-muted)" }}
                          >
                            {t.summary}
                          </p>

                          <div
                            className="flex items-center justify-between pt-3 text-[11px]"
                            style={{
                              borderTop: "1px solid var(--cr-rule)",
                              color: "var(--cr-ink-muted)",
                            }}
                          >
                            {t.readMinutes && (
                              <span className="tracking-wider">{t.readMinutes} min read</span>
                            )}
                            <span
                              className="font-bold tracking-[0.15em] uppercase transition-all group-hover:translate-x-1 inline-flex items-center gap-1"
                              style={{ color: accentColor }}
                            >
                              Read
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </article>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
