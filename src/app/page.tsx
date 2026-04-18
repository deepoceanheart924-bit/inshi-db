import Link from "next/link";
import { universities } from "@/data/universities";
import { problems } from "@/data/problems";
import { FIELD_LABELS, Field } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

function getFieldCounts(): Record<Field, number> {
  const counts = {} as Record<Field, number>;
  for (const p of problems) {
    counts[p.field] = (counts[p.field] || 0) + 1;
  }
  return counts;
}

export default function HomePage() {
  const fieldCounts = getFieldCounts();
  const totalProblems = problems.length;
  const freeProblems = problems.filter((p) => p.isFree).length;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        {/* Animated background orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/[0.05] blur-[100px]" />
          <div className="absolute top-[30%] right-[20%] h-[300px] w-[300px] rounded-full bg-cyan-500/[0.04] blur-[80px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)] opacity-40" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs tracking-wider uppercase">
              Physics & Mathematics
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-[1.08]">
              院試過去問
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                データベース
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
              主要大学院の入試過去問を分野別・年度別に整理。
              丁寧な解答解説で、効率的な院試対策を支援します。
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex justify-center gap-3">
              <Link href="/fields/all" className={cn(buttonVariants({ size: "lg" }), "px-8 h-12 text-sm")}>
                問題を探す
              </Link>
              <Link href="#universities" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8 h-12 text-sm")}>
                大学一覧
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.4}>
            <div className="mx-auto mt-16 flex max-w-xs justify-between">
              {[
                { value: universities.length, label: "大学" },
                { value: totalProblems, label: "問題数" },
                { value: freeProblems, label: "無料公開" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold tracking-tighter">{stat.value}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Universities
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">大学別で探す</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            各大学の過去問と解答解説を年度別に整理しています
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {universities.map((uni) => {
            const uniProblems = problems.filter((p) => p.universitySlug === uni.slug);
            const years = [...new Set(uniProblems.map((p) => p.year))].sort((a, b) => b - a);
            const fields = [...new Set(uniProblems.map((p) => p.field))];

            return (
              <StaggerItem key={uni.slug}>
                <Link href={`/universities/${uni.slug}`} className="group block">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:ring-2 hover:ring-primary/15">
                    <CardContent className="pt-6 pb-5">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                            {uni.name}
                          </h3>
                          <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                            {uni.department}
                          </p>
                        </div>
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-bold">
                          {uniProblems.length}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {fields.map((f) => (
                          <FieldBadge key={f} field={f} />
                        ))}
                      </div>
                      <p className="text-[11px] text-muted-foreground tracking-wide">
                        {years.join(" / ")}年度
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Fields */}
      <section className="border-y bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Fields
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">分野別で探す</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              得意分野の強化や苦手分野の克服に
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.05}>
            {(Object.entries(FIELD_LABELS) as [Field, string][]).map(([key, label]) => {
              const count = fieldCounts[key] || 0;
              return (
                <StaggerItem key={key}>
                  <Link href={`/fields/${key}`} className="group block">
                    <Card className="text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                      <CardContent className="py-8">
                        <div className="text-4xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                          {count}
                        </div>
                        <div className="mt-2">
                          <FieldBadge field={key} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Recent Problems */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Recent
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">最近追加された問題</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            最新の過去問解説をチェック
          </p>
        </FadeIn>

        <StaggerContainer className="mt-12 space-y-3" stagger={0.05}>
          {problems.slice(0, 6).map((p) => {
            const uni = universities.find((u) => u.slug === p.universitySlug);
            return (
              <StaggerItem key={p.id}>
                <Link href={`/problems/${p.id}`} className="group block">
                  <Card className="transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:ring-2 hover:ring-primary/10">
                    <CardContent className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="hidden sm:flex size-10 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground shrink-0">
                          {uni?.shortName}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-0.5">
                            <span className="sm:hidden font-semibold">{uni?.shortName}</span>
                            <span>{p.year}年度</span>
                            <span>·</span>
                            <span>{p.subject} 問{p.problemNumber}</span>
                          </div>
                          <h3 className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                            {p.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4 shrink-0">
                        <FieldBadge field={p.field} />
                        <DifficultyBadge difficulty={p.difficulty} />
                        {!p.isFree && (
                          <Badge variant="outline" className="text-[10px] text-muted-foreground">
                            PRO
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-8 text-center">
          <Link
            href="/fields/all"
            className={cn(buttonVariants({ variant: "outline" }), "px-8")}
          >
            すべての問題を見る
          </Link>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-40%] left-[20%] h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="absolute bottom-[-30%] right-[10%] h-[300px] w-[300px] rounded-full bg-purple-500/[0.04] blur-[80px]" />
        </div>
        <div className="mx-auto max-w-lg px-6 py-28 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              すべての解説に
              <br />
              アクセスする
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              無料会員で一部の解説を閲覧可能。
              プレミアムプラン（月額980円）で全問題の解説が読み放題。
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="#" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8 h-12")}>
                無料で始める
              </Link>
              <Link href="#" className={cn(buttonVariants({ size: "lg" }), "px-8 h-12")}>
                プレミアムプラン
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
