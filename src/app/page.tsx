import Link from "next/link";
import { universities } from "@/data/universities";
import { problems } from "@/data/problems";
import { FIELD_LABELS, Field } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { FieldIcon } from "@/components/FieldIcon";
import { Pendulum } from "@/components/Pendulum";
import { EquationMarqueeDouble } from "@/components/EquationMarquee";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern, HexagonPattern, MathSymbolsBackground } from "@/components/patterns";
import { SimulationShowcase } from "@/components/SimulationShowcase";
import { JapanMap } from "@/components/JapanMap";
import { RandomProblem } from "@/components/RandomProblem";
import { MiniQuiz } from "@/components/MiniQuiz";
import { TagCloud } from "@/components/TagCloud";
import { PhysicsFact } from "@/components/PhysicsFact";
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
  const featured = problems[0]; // Hero featured problem
  const featuredUni = universities.find((u) => u.slug === featured?.universitySlug);
  const allYears = [...new Set(problems.map((p) => p.year))].sort((a, b) => a - b);

  return (
    <div>
      {/* ====== HERO: Asymmetric split ====== */}
      <section className="relative overflow-hidden">
        <MathSymbolsBackground className="text-primary" />
        <DotPattern className="text-foreground/40" size={32} opacity={0.12} />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Big typography */}
          <div className="lg:col-span-7 relative">
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
              <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-lg">
                主要大学院の物理学・数学の入試過去問を
                <strong className="text-foreground">分野別・年度別</strong>に整理。
                途中計算まで丁寧に書いた解答解説を、
                <strong className="text-foreground">すべて無料</strong>で公開しています。
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-3">
                <ShimmerButton href="/fields/all" className="px-10 h-12">
                  問題を探す →
                </ShimmerButton>
                <Link
                  href="#universities"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "px-8 h-12 text-sm backdrop-blur-sm bg-background/50"
                  )}
                >
                  大学一覧
                </Link>
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.35}>
              <div className="mt-14 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { value: universities.length, label: "大学", tone: "primary" },
                  { value: totalProblems, label: "問題", tone: "purple" },
                  { value: fieldCount, label: "分野", tone: "cyan" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
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

          {/* Right: Interactive pendulum */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.1} direction="left">
              <div className="relative rounded-3xl border bg-gradient-to-br from-card to-background overflow-hidden">
                <DotPattern className="text-primary/40" size={18} opacity={0.15} />
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                      Live Physics
                    </p>
                    <span className="text-[10px] text-muted-foreground">RK4 simulation</span>
                  </div>
                  <div className="aspect-[5/4] flex items-center justify-center text-foreground">
                    <Pendulum className="size-full" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground text-center">
                    剛体振り子の実時間シミュレーション — 大学院レベルの物理がここに
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====== Equation marquee ====== */}
      <EquationMarqueeDouble />

      {/* ====== Featured Problem (Editorial) ====== */}
      {featured && featuredUni && (
        <section className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <svg width="20" height="2" className="text-primary">
                    <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Featured
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">今週の注目問題</h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <Link href={`/problems/${featured.id}`} className="group block">
              <Card className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <BorderBeam size={250} duration={10} />
                <CardContent className="relative grid md:grid-cols-5 gap-0 p-0">
                  {/* Left accent panel */}
                  <div className="md:col-span-2 relative bg-gradient-to-br from-primary/10 via-purple-500/5 to-primary/5 p-8 sm:p-12 min-h-[280px] flex flex-col justify-between overflow-hidden">
                    <HexagonPattern className="text-primary/20" size={40} />
                    <div className="relative">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-2">
                        Physics
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">{featuredUni.shortName}</span>
                        <span>·</span>
                        <span>{featured.year}年度</span>
                        <span>·</span>
                        <span>問{featured.problemNumber}</span>
                      </div>
                    </div>
                    <div className="relative mt-8 flex size-24 items-center justify-center rounded-3xl bg-background/60 backdrop-blur-sm text-primary ring-1 ring-primary/20">
                      <FieldIcon field={featured.field} className="size-16" />
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="md:col-span-3 p-8 sm:p-12">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <FieldBadge field={featured.field} />
                      <DifficultyBadge difficulty={featured.difficulty} />
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featured.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="text-[10px] font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-6 border-t flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">丁寧な解答・解説を読む</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>
        </section>
      )}

      {/* ====== Random Problem + Physics Fact ====== */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-5">
          <FadeIn>
            <RandomProblem />
          </FadeIn>
          <FadeIn delay={0.1}>
            <PhysicsFact />
          </FadeIn>
        </div>
      </section>

      {/* ====== Simulation Showcase ====== */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <svg width="20" height="2" className="text-primary">
              <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Live Physics
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">物理を、目で見る</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            実際の物理現象をリアルタイムでシミュレート。静止画では伝わらない動きを体感してください
          </p>
        </FadeIn>
        <div className="mt-12">
          <SimulationShowcase />
        </div>
      </section>

      {/* ====== Universities Bento Grid ====== */}
      <section id="universities" className="border-y bg-muted/10 relative overflow-hidden">
        <HexagonPattern className="text-foreground/5" size={60} />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <svg width="20" height="2" className="text-primary">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Universities
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">大学別で探す</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              各大学の過去問を年度別に整理。気になる大学から始めよう
            </p>
          </FadeIn>

          {/* Japan Map */}
          <FadeIn>
            <div className="mt-12 rounded-2xl border bg-card/50 p-8 text-muted-foreground">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-4 text-center">
                全国の収録大学
              </p>
              <JapanMap />
            </div>
          </FadeIn>

          {/* Bento grid */}
          <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.05}>
            {universities.map((uni, idx) => {
              const uniProblems = problems.filter((p) => p.universitySlug === uni.slug);
              const years = [...new Set(uniProblems.map((p) => p.year))].sort((a, b) => b - a);
              const fields = [...new Set(uniProblems.map((p) => p.field))];
              // First card is bigger (bento style)
              const isFeatured = idx === 0;

              return (
                <StaggerItem
                  key={uni.slug}
                  className={cn(
                    isFeatured && "sm:col-span-2 lg:col-span-2 sm:row-span-2"
                  )}
                >
                  <TiltCard intensity={5}>
                    <Link href={`/universities/${uni.slug}`} className="group block h-full">
                      <Card
                        className={cn(
                          "relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10",
                          isFeatured && "bg-gradient-to-br from-primary/5 via-background to-background"
                        )}
                      >
                        {/* Big corner polygon decor */}
                        <div className="absolute top-0 right-0 size-32 opacity-40 group-hover:opacity-70 transition-opacity">
                          <svg viewBox="0 0 100 100" className="text-primary/20" fill="currentColor">
                            <polygon points="100,0 100,100 0,0" />
                          </svg>
                        </div>

                        <CardContent className={cn("relative h-full flex flex-col", isFeatured ? "p-8 justify-between" : "p-5")}>
                          <div>
                            {isFeatured && (
                              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-2">
                                Featured
                              </p>
                            )}
                            <div className="flex items-start justify-between mb-3">
                              <div className="min-w-0">
                                <h3
                                  className={cn(
                                    "font-bold tracking-tight group-hover:text-primary transition-colors",
                                    isFeatured ? "text-3xl sm:text-4xl leading-tight" : "text-base leading-snug"
                                  )}
                                >
                                  {uni.name}
                                </h3>
                                <p
                                  className={cn(
                                    "text-muted-foreground leading-relaxed",
                                    isFeatured ? "text-sm mt-2" : "text-[11px] mt-0.5"
                                  )}
                                >
                                  {uni.department}
                                </p>
                              </div>
                              <span
                                className={cn(
                                  "flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-bold ring-1 ring-primary/10 shrink-0",
                                  isFeatured ? "size-14 text-lg ml-4" : "size-9 text-xs ml-2"
                                )}
                              >
                                {uniProblems.length}
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {fields.slice(0, isFeatured ? 8 : 4).map((f) => (
                                <FieldBadge key={f} field={f} />
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                              <span>{years.join(" / ")}</span>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="group-hover:text-primary group-hover:translate-x-1 transition-all"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
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

      {/* ====== Year Timeline ====== */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <svg width="20" height="2" className="text-primary">
              <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Timeline
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">収録年度</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            各年度に含まれる問題数と大学の内訳
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 relative">
            {/* Timeline axis */}
            <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {allYears.map((year) => {
                const yearProblems = problems.filter((p) => p.year === year);
                const yearUnis = [...new Set(yearProblems.map((p) => p.universitySlug))];

                return (
                  <div key={year} className="relative">
                    {/* Dot on axis */}
                    <div className="absolute left-1/2 top-9 -translate-x-1/2 size-3 rounded-full bg-primary ring-4 ring-background" />
                    {/* Year label above */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-black tracking-tighter bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
                        {year}
                      </div>
                    </div>
                    {/* Content card below axis */}
                    <div className="pt-6">
                      <div className="rounded-xl border bg-card p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {yearProblems.length}
                        </div>
                        <div className="text-[10px] text-muted-foreground mb-3 uppercase tracking-widest">
                          問題
                        </div>
                        <div className="flex justify-center flex-wrap gap-1">
                          {yearUnis.map((slug) => {
                            const u = universities.find((x) => x.slug === slug);
                            return (
                              <span
                                key={slug}
                                className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground"
                              >
                                {u?.shortName}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ====== Fields Bento ====== */}
      <section className="border-y bg-muted/10 relative overflow-hidden">
        <DotPattern className="text-foreground/30" size={24} opacity={0.1} />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <svg width="20" height="2" className="text-primary">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Fields
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">分野別で探す</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              得意分野の強化や苦手分野の克服に
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4" stagger={0.05}>
            {(Object.entries(FIELD_LABELS) as [Field, string][]).map(([key]) => {
              const count = fieldCounts[key] || 0;
              return (
                <StaggerItem key={key}>
                  <TiltCard intensity={5}>
                    <Link href={`/fields/${key}`} className="group block">
                      <Card className="relative text-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm bg-card/80">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <DotPattern className="text-primary/20" size={16} opacity={1} />
                        </div>
                        <CardContent
                          className="py-7 relative"
                          style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                        >
                          <div className="mx-auto mb-3 flex size-14 items-center justify-center text-primary/70 group-hover:text-primary transition-colors">
                            <FieldIcon field={key} className="size-full" />
                          </div>
                          <div className="text-3xl font-black tracking-tighter group-hover:text-primary transition-colors">
                            <NumberTicker value={count} />
                          </div>
                          <div className="mt-1.5">
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

      {/* ====== Quiz + TagCloud ====== */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <FadeIn className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <svg width="20" height="2" className="text-primary">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Quiz
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              3問だけ、腕試し
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              院試レベルの物理小テスト。間違えても大丈夫、ヒント付き。
            </p>
            <MiniQuiz />
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <svg width="20" height="2" className="text-primary">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
              </svg>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Topics
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              収録トピック
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              頻出キーワードから問題を探す。大きなタグは登場回数が多い分野
            </p>
            <div className="rounded-2xl border bg-muted/20 p-6">
              <TagCloud />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== Closing Statement ====== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-40%] left-[20%] h-[500px] w-[500px] rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute bottom-[-30%] right-[10%] h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[100px]" />
        </div>
        <MathSymbolsBackground className="text-primary" />

        <div className="mx-auto max-w-5xl px-6 py-32 text-center">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.0]">
              情報格差を、
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                オープンに崩す。
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-xl mx-auto text-base text-muted-foreground leading-relaxed">
              院試対策は、情報を持つ人だけが有利な時代ではない。
              全ての学生が同じスタートラインに立てる場所を目指して。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex justify-center gap-3">
              <ShimmerButton href="/fields/all" className="px-10 h-12">
                無料で問題を見る →
              </ShimmerButton>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-8 h-12 backdrop-blur-sm bg-background/50"
                )}
              >
                運営について
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
