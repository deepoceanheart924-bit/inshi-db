import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, getUniversity } from "@/data/universities";
import { getProblemsByUniversity, getYears } from "@/data/problems";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
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
        <div className="mb-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
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
          <div className="mt-8 h-px bg-border" />
        </div>
      </FadeIn>

      {/* Problems by Year */}
      {years.map((year, yi) => {
        const yearProblems = uniProblems
          .filter((p) => p.year === year)
          .sort((a, b) => a.problemNumber - b.problemNumber);

        return (
          <div key={year} className="mb-16">
            <FadeIn>
              <div className="mb-6 flex items-center gap-4">
                <Badge className="text-sm px-4 py-1.5">{year}年度</Badge>
                <div className="flex-1 h-px bg-border" />
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-3" stagger={0.06}>
              {yearProblems.map((p) => (
                <StaggerItem key={p.id}>
                  <Link href={`/problems/${p.id}`} className="group block">
                    <Card className="transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5 hover:ring-2 hover:ring-primary/10">
                      <CardContent className="flex items-start justify-between py-5">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] text-muted-foreground tracking-wide">
                              {p.subject} 問{p.problemNumber}
                            </span>
                            {!p.isFree && (
                              <Badge variant="outline" className="text-[9px] text-muted-foreground px-1.5">
                                PRO
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors mb-3">
                            {p.title}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {p.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-[10px] font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="ml-6 flex flex-col items-end gap-2 shrink-0">
                          <FieldBadge field={p.field} />
                          <DifficultyBadge difficulty={p.difficulty} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        );
      })}
    </div>
  );
}
