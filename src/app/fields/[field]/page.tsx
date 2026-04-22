import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, getProblemsByField } from "@/data/problems";
import { universities } from "@/data/universities";
import { FIELD_LABELS, Field } from "@/data/types";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { FieldIcon } from "@/components/FieldIcon";
import { DotPattern } from "@/components/patterns";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const ALL_FIELDS = Object.keys(FIELD_LABELS) as Field[];

export function generateStaticParams() {
  return [...ALL_FIELDS.map((f) => ({ field: f })), { field: "all" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ field: string }>;
}): Promise<Metadata> {
  const { field } = await params;
  if (field === "all") {
    const title = "分野別問題一覧";
    const description = "大学院入試の物理学・数学の問題を分野別に整理。力学・電磁気・量子・統計力学・熱力学・光学・相対論・数学。";
    return {
      title,
      description,
      alternates: { canonical: "/fields/all" },
      openGraph: { title, description, url: "/fields/all", type: "website", locale: "ja_JP", siteName: "院試DB" },
      twitter: { card: "summary_large_image", title, description },
    };
  }
  const label = FIELD_LABELS[field as Field];
  if (!label) return { title: "Not Found" };
  const title = `${label}の問題一覧`;
  const description = `大学院入試の${label}の過去問・解答解説。年度・大学横断で一覧表示。`;
  const url = `/fields/${field}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: "ja_JP", siteName: "院試DB" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function FieldPage({
  params,
}: {
  params: Promise<{ field: string }>;
}) {
  const { field } = await params;

  const isAll = field === "all";
  if (!isAll && !FIELD_LABELS[field as Field]) {
    notFound();
  }

  const filteredProblems = isAll ? problems : getProblemsByField(field);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", url: "/" },
          { name: isAll ? "分野別一覧" : FIELD_LABELS[field as Field] },
        ])}
      />
      {/* Breadcrumb */}
      <FadeIn>
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            ホーム
          </Link>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          <span className="text-foreground font-medium">
            {isAll ? "分野別一覧" : FIELD_LABELS[field as Field]}
          </span>
        </nav>
      </FadeIn>

      <FadeIn>
        <div className="relative mb-12 rounded-2xl border bg-card/50 p-8 overflow-hidden">
          <DotPattern className="text-foreground/60" size={20} opacity={0.1} />
          <div className="relative flex items-center gap-6">
            {!isAll && (
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/10 shrink-0">
                <FieldIcon field={field as Field} className="size-10" />
              </div>
            )}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                Fields
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {isAll ? "分野別 問題一覧" : `${FIELD_LABELS[field as Field]}の問題`}
              </h1>
              <p className="mt-2 text-muted-foreground text-sm">
                {isAll
                  ? "すべての分野から問題を一覧"
                  : `${FIELD_LABELS[field as Field]}に関する院試過去問`}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Field Filter */}
      <FadeIn delay={0.1}>
        <div className="mb-12 flex flex-wrap gap-2">
          <Link
            href="/fields/all"
            className={cn(
              buttonVariants({ variant: isAll ? "default" : "outline", size: "sm" }),
              "text-xs"
            )}
          >
            すべて ({problems.length})
          </Link>
          {ALL_FIELDS.map((f) => {
            const count = getProblemsByField(f).length;
            if (count === 0) return null;
            const isActive = field === f;
            return (
              <Link
                key={f}
                href={`/fields/${f}`}
                className={cn(
                  buttonVariants({ variant: isActive ? "default" : "outline", size: "sm" }),
                  "text-xs"
                )}
              >
                {FIELD_LABELS[f]} ({count})
              </Link>
            );
          })}
        </div>
      </FadeIn>

      {/* Problem List */}
      <StaggerContainer className="space-y-3" stagger={0.04}>
        {filteredProblems.map((p) => {
          const uni = universities.find((u) => u.slug === p.universitySlug);
          return (
            <StaggerItem key={p.id}>
              <Link href={`/problems/${p.id}`} className="group block">
                <Card className="transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5 hover:ring-2 hover:ring-primary/10">
                  <CardContent className="flex items-start justify-between py-5">
                    <div className="flex items-start gap-4 min-w-0">
                      <span className="hidden sm:flex size-10 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground shrink-0 mt-0.5">
                        {uni?.shortName}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-1.5">
                          <span className="sm:hidden font-semibold">{uni?.shortName}</span>
                          <span>{p.year}年度</span>
                          <span>·</span>
                          <span>{p.subject} 問{p.problemNumber}</span>
                        </div>
                        <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors mb-2">
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
                    </div>
                    <div className="ml-4 flex flex-col items-end gap-2 shrink-0">
                      <FieldBadge field={p.field} />
                      <DifficultyBadge difficulty={p.difficulty} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {filteredProblems.length === 0 && (
        <FadeIn>
          <div className="text-center py-24">
            <p className="text-lg text-muted-foreground mb-6">
              この分野の問題はまだありません
            </p>
            <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
              ホームに戻る
            </Link>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
