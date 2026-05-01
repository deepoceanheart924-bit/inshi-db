import Link from "next/link";
import { universities } from "@/data/universities";
import { problems } from "@/data/problems";
import { FIELD_LABELS, Field } from "@/data/types";
import { FadeIn } from "@/components/animations";
import { EditorialButton } from "@/components/ui/editorial-button";
import { Fleuron, OrnamentRule, Kicker } from "@/components/ornaments/Ornaments";
import { ArrowUpRight } from "@/components/icons/arrows";

const ROMAN = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

function getFieldCounts(): Record<Field, number> {
  const counts = {} as Record<Field, number>;
  for (const p of problems) counts[p.field] = (counts[p.field] || 0) + 1;
  return counts;
}

export default function HomePage() {
  const fieldCounts = getFieldCounts();
  const totalProblems = problems.length;
  const fieldCount = Object.keys(fieldCounts).length;
  const allYears = [...new Set(problems.map((p) => p.year))].sort((a, b) => a - b);
  const sortedUnis = [...universities].sort(
    (a, b) =>
      problems.filter((p) => p.universitySlug === b.slug).length -
      problems.filter((p) => p.universitySlug === a.slug).length
  );

  return (
    <div className="bg-background">
      {/* ============================================================ */}
      {/*  MASTHEAD — asymmetric magazine cover                          */}
      {/* ============================================================ */}
      <section className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24 pb-24 sm:pb-32">
          {/* Top rule with edition micro-caps */}
          <FadeIn direction="none">
            <div className="flex items-baseline gap-4 sm:gap-6 pb-4 border-b border-foreground/30 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="text-foreground/80 tabular-nums">VOL. III</span>
              <span aria-hidden className="text-foreground/30">·</span>
              <span className="hidden sm:inline">No. 04 · April 2026</span>
              <span aria-hidden className="hidden sm:inline text-foreground/30">·</span>
              <span aria-hidden className="flex-1 h-px bg-foreground/15 self-center" />
              <span className="hidden md:inline">Physics · Graduate · Archive</span>
              <span aria-hidden className="hidden md:inline text-foreground/30">·</span>
              <span>JPY 0</span>
            </div>
          </FadeIn>

          {/* Asymmetric grid: left meta column / right body */}
          <div className="mt-14 sm:mt-20 grid grid-cols-12 gap-x-6 sm:gap-x-10">
            {/* Left rail: meta */}
            <FadeIn direction="none" delay={0.05} className="col-span-12 md:col-span-3 lg:col-span-2">
              <div className="md:sticky md:top-24 flex md:flex-col gap-x-8 gap-y-8 mb-10 md:mb-0">
                <MetaItem label="Issue" value="No. 04" />
                <MetaItem label="Established" value="2026" />
                <MetaItem label="Languages" value="JA · EN" />
                <MetaItem label="Access" value="Free" />
              </div>
            </FadeIn>

            {/* Right column: title + lead */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10">
              <FadeIn delay={0.08}>
                <p className="font-serif-jp italic text-[15px] sm:text-base leading-relaxed text-muted-foreground tracking-wide">
                  An open archive of past examinations <br className="hidden sm:block" />
                  for Japanese physics graduate programs.
                </p>
              </FadeIn>

              <FadeIn delay={0.12}>
                <h1 className="font-serif-jp mt-6 sm:mt-10 font-bold tracking-[-0.035em] leading-[0.95] text-[3.6rem] sm:text-[6rem] lg:text-[8.5rem]">
                  <span className="block">院試を、</span>
                  <span className="block -mt-1 sm:-mt-2">オープンに。</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.22}>
                <div className="mt-12 sm:mt-16 max-w-2xl">
                  <p className="font-serif-jp text-[15px] sm:text-[16px] leading-[2.15] text-foreground/85">
                    <span className="float-left mr-3 mt-[0.12em] font-bold text-[4.2em] leading-[0.82] tracking-[-0.05em] border-b-2 border-foreground/80 pb-0.5">
                      物
                    </span>
                    理系大学院（物理・応用物理・物性・地球惑星・天文ほか）の入試過去問を、分野別・年度別に整理しています。途中計算を省略せずに書いた解答解説を、すべて無料で公開。学部生が独力で院試に挑むための、開かれた書庫です。
                  </p>
                </div>
              </FadeIn>

              {/* Stats — large serif numerals, mono labels */}
              <FadeIn delay={0.3}>
                <div className="mt-16 sm:mt-20 pt-6 border-t border-foreground/15 grid grid-cols-3 gap-4 sm:gap-12 max-w-3xl">
                  <BigStat n={totalProblems} label="Problems" />
                  <BigStat n={universities.length} label="Universities" />
                  <BigStat n={fieldCount} label="Fields" />
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-14 flex flex-wrap items-baseline gap-x-10 gap-y-4 text-sm">
                  <EditorialButton
                    href="#contents"
                    variant="hairline"
                    kicker="Read"
                    size="lg"
                  >
                    目次を読む
                  </EditorialButton>
                  <Link
                    href="/about"
                    className="group inline-flex items-baseline gap-2 text-foreground/65 hover:text-foreground transition-colors"
                  >
                    <span className="font-serif-jp italic">manifesto</span>
                    <span aria-hidden className="text-foreground/40">/</span>
                    <span className="font-serif-jp">編集方針</span>
                    <ArrowUpRight className="size-3 ml-1 text-foreground/45 group-hover:text-foreground/75 transition-colors" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTENTS  intro                                              */}
      {/* ============================================================ */}
      <section id="contents" className="border-b border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
            <FadeIn direction="none" className="col-span-12 md:col-span-3 lg:col-span-2">
              <Kicker>Contents</Kicker>
            </FadeIn>
            <FadeIn className="col-span-12 md:col-span-9 lg:col-span-10">
              <p className="font-serif-jp text-xl sm:text-2xl leading-[1.7] tracking-tight max-w-2xl">
                本号の索引は三種——<em className="not-italic font-bold">大学別</em>、
                <em className="not-italic font-bold">分野別</em>、
                <em className="not-italic font-bold">年度別</em>。
                全{universities.length}校・{totalProblems}問の解答解説に、ここから入る。
              </p>
              <div className="mt-10 max-w-md">
                <OrnamentRule ornament="dot" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  §I.  UNIVERSITIES                                            */}
      {/* ============================================================ */}
      <Section roman="I" title="大学別索引" kicker="Universities">
        <ol>
          {sortedUnis.map((uni, i) => {
            const uniProblems = problems.filter(
              (p) => p.universitySlug === uni.slug
            );
            const years = [...new Set(uniProblems.map((p) => p.year))].sort(
              (a, b) => b - a
            );
            const yearRange =
              years.length > 1
                ? `${years[years.length - 1]}–${years[0]}`
                : years[0]?.toString() ?? "—";

            return (
              <li key={uni.slug}>
                <Link
                  href={`/universities/${uni.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 sm:gap-x-8 py-7 sm:py-8 border-b border-foreground/10 hover:bg-foreground/[0.02] -mx-3 sm:-mx-5 px-3 sm:px-5 transition-colors"
                >
                  <span className="font-serif-jp italic text-sm sm:text-base text-muted-foreground tabular-nums tracking-wide pt-2.5">
                    {ROMAN[i] ?? `${i + 1}`}.
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-x-3 flex-wrap">
                      <span className="font-serif-jp text-2xl sm:text-3xl font-bold tracking-tight group-hover:underline underline-offset-[8px] decoration-1">
                        {uni.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 tabular-nums">
                        {yearRange}
                      </span>
                    </div>
                    <div className="mt-2 font-serif-jp italic text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                      {uni.department}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 sm:gap-3 self-baseline pt-1 shrink-0">
                    <span className="font-serif-jp text-3xl sm:text-4xl font-bold tabular-nums leading-none tracking-[-0.02em]">
                      {uniProblems.length}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground translate-y-[-3px]">
                      prob.
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* ============================================================ */}
      {/*  §II. FIELDS                                                  */}
      {/* ============================================================ */}
      <Section roman="II" title="分野別索引" kicker="Fields">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 lg:gap-x-24">
          {(Object.entries(FIELD_LABELS) as [Field, string][]).map(
            ([key, label], i) => {
              const count = fieldCounts[key] || 0;
              return (
                <Link
                  href={`/fields/${key}`}
                  key={key}
                  className="group flex items-baseline gap-3 sm:gap-5 py-5 border-b border-foreground/10"
                >
                  <span className="font-mono text-[10px] text-muted-foreground/70 tabular-nums tracking-wider w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif-jp text-xl sm:text-2xl font-medium tracking-tight group-hover:underline underline-offset-[6px] decoration-1">
                    {label}
                  </span>
                  <span
                    aria-hidden
                    className="flex-1 self-end mb-2.5 border-b border-foreground/15"
                  />
                  <span className="font-serif-jp tabular-nums text-xl sm:text-2xl font-bold text-foreground shrink-0 tracking-[-0.02em]">
                    {count}
                  </span>
                </Link>
              );
            }
          )}
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  §III. YEAR INDEX                                             */}
      {/* ============================================================ */}
      <Section roman="III" title="年度別索引" kicker="Years">
        <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-foreground/30">
                <th className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground py-4 pr-6 text-left font-normal w-32 align-bottom">
                  Year
                </th>
                {allYears.map((y) => (
                  <th
                    key={y}
                    className="font-serif-jp font-bold tabular-nums text-3xl sm:text-4xl py-4 px-3 text-center tracking-[-0.02em] align-bottom"
                  >
                    {y}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-foreground/10">
                <th className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80 py-5 pr-6 text-left font-normal align-top">
                  Problems
                </th>
                {allYears.map((y) => {
                  const yp = problems.filter((p) => p.year === y).length;
                  return (
                    <td
                      key={y}
                      className="py-5 px-3 text-center font-serif-jp tabular-nums text-xl sm:text-2xl font-medium"
                    >
                      {yp}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80 py-5 pr-6 text-left font-normal align-top">
                  Universities
                </th>
                {allYears.map((y) => {
                  const yp = problems.filter((p) => p.year === y);
                  const yu = new Set(yp.map((p) => p.universitySlug)).size;
                  return (
                    <td
                      key={y}
                      className="py-5 px-3 text-center font-mono tabular-nums text-sm text-muted-foreground"
                    >
                      {yu}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  COLOPHON STRIP                                               */}
      {/* ============================================================ */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <FadeIn direction="none">
            <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10 items-end">
              <div className="col-span-12 md:col-span-3 lg:col-span-2">
                <Kicker>Colophon</Kicker>
                <Fleuron className="mt-3 text-2xl text-foreground/30 block" />
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-7 mt-6 md:mt-0">
                <p className="font-serif-jp text-lg sm:text-xl leading-[1.85] text-foreground/85 max-w-2xl">
                  解答解説は、すべて学部生の手で書かれています。途中計算を省略せず、
                  初学者がつまずく地点に注釈を残すことを編集の方針としています。
                </p>
              </div>
              <div className="col-span-12 md:col-span-2 lg:col-span-3 mt-8 md:mt-0 md:text-right">
                <EditorialButton href="/about" variant="hairline">
                  編集方針
                </EditorialButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/80">
        {label}
      </span>
      <span className="font-serif-jp mt-1.5 text-base font-medium tabular-nums tracking-tight">
        {value}
      </span>
    </div>
  );
}

function BigStat({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-serif-jp text-4xl sm:text-5xl lg:text-6xl font-bold tabular-nums tracking-[-0.03em] leading-none">
        {n}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-3">
        {label}
      </span>
    </div>
  );
}

function Section({
  roman,
  title,
  kicker,
  children,
}: {
  roman: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-foreground/15">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-10">
          {/* Left rail with section number */}
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

          {/* Body */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10 mt-12 md:mt-0">
            <FadeIn direction="none">
              <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold tracking-tight pb-5 border-b border-foreground/30">
                {title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="mt-8">{children}</div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
