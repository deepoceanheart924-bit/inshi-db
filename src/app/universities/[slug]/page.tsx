import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, getUniversity } from "@/data/universities";
import { getProblemsByUniversity, getYears } from "@/data/problems";
import { FieldBadge } from "@/components/FieldBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { DotPattern } from "@/components/patterns";
import { FieldIcon } from "@/components/FieldIcon";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const uni = getUniversity(slug);
  if (!uni) return { title: "Not Found" };
  return {
    title: `${uni.name} ${uni.department} — 院試DB`,
    description: `${uni.name} ${uni.department}の大学院入試過去問・解答解説`,
  };
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const uni = getUniversity(slug);
  if (!uni) notFound();

  const uniProblems = getProblemsByUniversity(slug);
  const years = getYears(slug);
  const fields = [...new Set(uniProblems.map((p) => p.field))];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Breadcrumb */}
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            ホーム
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium">{uni.name}</span>
        </nav>
      </FadeIn>

      {/* Header */}
      <FadeIn>
        <div className="relative mb-16 rounded-2xl border bg-card/50 p-8 overflow-hidden">
          <DotPattern className="text-foreground/60" size={20} opacity={0.08} />
          {/* Decorative field icons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-30">
            {fields.slice(0, 3).map((f) => (
              <div key={f} className="size-8 text-primary">
                <FieldIcon field={f} className="size-full" />
              </div>
            ))}
          </div>
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                University
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{uni.name}</h1>
              <p className="mt-2 text-sm text-muted-foreground">{uni.department}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {fields.map((f) => (
                  <FieldBadge key={f} field={f} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm px-4 py-1.5">
                {uniProblems.length} 問
              </Badge>
              <a
                href={uni.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                公式サイト
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Year selection */}
      <FadeIn>
        <div className="flex items-center gap-3 mb-8">
          <svg width="20" height="2" className="text-primary">
            <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
          </svg>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Select Year
          </p>
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-8">年度を選ぶ</h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {years.map((year) => {
          const yearProblems = uniProblems.filter((p) => p.year === year);
          const yearFields = [...new Set(yearProblems.map((p) => p.field))];
          const subjects = [...new Set(yearProblems.map((p) => p.subject))];

          return (
            <StaggerItem key={year}>
              <Link href={`/universities/${slug}/${year}`} className="group block">
                <Card className="relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:ring-2 hover:ring-primary/15">
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 size-28 -z-0 opacity-30 group-hover:opacity-60 transition-opacity">
                    <svg viewBox="0 0 100 100" className="text-primary/30" fill="currentColor">
                      <polygon points="100,0 100,100 0,0" />
                    </svg>
                  </div>

                  <CardContent className="relative pt-6 pb-5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                          Year
                        </p>
                        <h3 className="text-3xl font-bold tracking-tighter group-hover:text-primary transition-colors">
                          {year}
                          <span className="text-sm ml-1 text-muted-foreground font-normal">年度</span>
                        </h3>
                      </div>
                      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-bold ring-1 ring-primary/10">
                        {yearProblems.length}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {yearFields.map((f) => (
                        <FieldBadge key={f} field={f} />
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <p className="text-[11px] text-muted-foreground">
                        {subjects.join(" / ")}
                      </p>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {years.length === 0 && (
        <FadeIn>
          <div className="text-center py-16 text-muted-foreground">
            <p>この大学の問題はまだ登録されていません</p>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
