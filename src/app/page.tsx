import Link from "next/link";
import { universities } from "@/data/universities";
import { problems } from "@/data/problems";
import { FIELD_LABELS, Field } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { FieldBadge } from "@/components/FieldBadge";
import { FieldIcon } from "@/components/FieldIcon";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TiltCard } from "@/components/ui/tilt-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern, MathSymbolsBackground } from "@/components/patterns";
import { JapanMap } from "@/components/JapanMap";
import { cn } from "@/lib/utils";

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

  return (
    <div>
      {/* ====== HERO: Compact, single column ====== */}
      <section className="relative overflow-hidden">
        <MathSymbolsBackground className="text-primary" />
        <DotPattern className="text-foreground/40" size={32} opacity={0.12} />

        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-3 py-1">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-widest">
                Open Exam Database
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black tracking-tighter leading-[0.95]">
              <span className="block">院試を、</span>
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                オープンに。
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
              主要大学院の物理学・数学の入試過去問を
              <strong className="text-foreground">分野別・年度別</strong>に整理。
              途中計算まで丁寧に書いた解答解説を、
              <strong className="text-foreground">すべて無料</strong>で公開しています。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                Updating
              </span>
              <span className="h-3 w-px bg-primary/30" />
              <span className="text-[11px] font-medium text-foreground/80">
                今後随時情報更新予定
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ShimmerButton href="#universities" className="px-10 h-12">
                過去問を探す →
              </ShimmerButton>
              <Link
                href="/fields/all"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-8 h-12 text-sm backdrop-blur-sm bg-background/50"
                )}
              >
                分野別で見る
              </Link>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={0.35}>
            <div className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto">
              {[
                { value: universities.length, label: "大学" },
                { value: totalProblems, label: "問題" },
                { value: fieldCount, label: "分野" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary/40 pl-4 text-left">
                  <div className="text-4xl font-black tracking-tighter">
                    <NumberTicker value={stat.value} />
                  </div>
                  <div className="mt-1 text-[10px] text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== Universities ====== */}
      <section id="universities" className="border-t bg-muted/[0.04]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                By University
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">大学別で探す</h2>
              <p className="text-sm text-muted-foreground">気になる大学から始めよう</p>
            </div>
          </FadeIn>

          {/* Japan Map */}
          <FadeIn delay={0.1}>
            <div className="mb-12 border rounded-xl p-6 bg-card">
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary mb-3 text-center">
                全国の収録大学
              </p>
              <JapanMap />
            </div>
          </FadeIn>

          {/* University grid */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            stagger={0.05}
          >
            {universities.map((uni) => {
              const uniProblems = problems.filter((p) => p.universitySlug === uni.slug);
              const years = [...new Set(uniProblems.map((p) => p.year))].sort((a, b) => b - a);
              const fields = [...new Set(uniProblems.map((p) => p.field))];

              return (
                <StaggerItem key={uni.slug}>
                  <TiltCard intensity={2}>
                    <Link href={`/universities/${uni.slug}`} className="group block h-full">
                      <Card className="relative h-full overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-md">
                        <CardContent className="p-5 flex flex-col h-full">
                          <div className="flex items-start justify-between mb-3">
                            <div className="min-w-0">
                              <h3 className="font-bold text-base tracking-tight group-hover:text-primary transition-colors">
                                {uni.name}
                              </h3>
                              <p className="text-[11px] text-muted-foreground mt-1">
                                {uni.department}
                              </p>
                            </div>
                            <span className="flex items-center justify-center size-9 text-xs font-bold text-primary border rounded-md ml-2 shrink-0">
                              {uniProblems.length}
                            </span>
                          </div>

                          <div className="mt-auto">
                            <div className="flex flex-wrap gap-1 mb-3">
                              {fields.slice(0, 4).map((f) => (
                                <FieldBadge key={f} field={f} />
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono tracking-wide">
                              <span className="truncate">{years.join(" / ")}</span>
                              <span className="group-hover:text-primary group-hover:translate-x-1 transition-all ml-2">
                                →
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== Fields ====== */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                By Field
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">分野別で探す</h2>
              <p className="text-sm text-muted-foreground">
                得意分野の強化や、苦手分野の克服に
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            stagger={0.05}
          >
            {(Object.entries(FIELD_LABELS) as [Field, string][]).map(([key]) => {
              const count = fieldCounts[key] || 0;
              return (
                <StaggerItem key={key}>
                  <TiltCard intensity={2}>
                    <Link href={`/fields/${key}`} className="group block">
                      <Card className="relative text-center overflow-hidden transition-all duration-300 hover:border-primary">
                        <CardContent className="py-8">
                          <div className="mx-auto mb-4 flex size-12 items-center justify-center text-foreground/70 group-hover:text-primary transition-colors">
                            <FieldIcon field={key} className="size-full" />
                          </div>
                          <div className="text-3xl font-black tracking-tighter group-hover:text-primary transition-colors">
                            <NumberTicker value={count} />
                          </div>
                          <div className="mt-3">
                            <FieldBadge field={key} />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ====== Year Index ====== */}
      <section className="border-t bg-muted/[0.04]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                By Year
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">年度別で探す</h2>
              <p className="text-sm text-muted-foreground">各年度の問題数と大学の内訳</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {allYears.map((year) => {
                const yearProblems = problems.filter((p) => p.year === year);
                const yearUnis = [...new Set(yearProblems.map((p) => p.universitySlug))];

                return (
                  <div key={year} className="border rounded-xl p-5 bg-card text-center">
                    <div className="text-3xl font-black tracking-tighter mb-2">{year}</div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {yearProblems.length}
                    </div>
                    <div className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] mb-3">
                      Problems
                    </div>
                    <div className="flex justify-center flex-wrap gap-1">
                      {yearUnis.map((slug) => {
                        const u = universities.find((x) => x.slug === slug);
                        return (
                          <span
                            key={slug}
                            className="text-[9px] px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground font-mono"
                          >
                            {u?.shortName}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
