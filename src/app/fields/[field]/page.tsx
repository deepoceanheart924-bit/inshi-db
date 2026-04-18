import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, getProblemsByField } from "@/data/problems";
import { universities } from "@/data/universities";
import { FIELD_LABELS, FIELD_COLORS, Field } from "@/data/types";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
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
    return {
      title: "分野別問題一覧 — 院試DB",
      description: "大学院入試の物理学・数学の問題を分野別に整理",
    };
  }
  const label = FIELD_LABELS[field as Field];
  if (!label) return { title: "Not Found" };
  return {
    title: `${label}の問題一覧 — 院試DB`,
    description: `大学院入試の${label}の過去問・解答解説`,
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">
          {isAll ? "分野別一覧" : FIELD_LABELS[field as Field]}
        </span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {isAll ? "分野別 問題一覧" : `${FIELD_LABELS[field as Field]}の問題`}
      </h1>

      {/* Field Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/fields/all"
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isAll
              ? "bg-gray-800 text-white"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? `${FIELD_COLORS[f]} ring-2 ring-offset-1 ring-gray-300`
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {FIELD_LABELS[f]} ({count})
            </Link>
          );
        })}
      </div>

      {/* Problem List */}
      <div className="space-y-3">
        {filteredProblems.map((p) => {
          const uni = universities.find((u) => u.slug === p.universitySlug);
          return (
            <Link
              key={p.id}
              href={`/problems/${p.id}`}
              className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <span className="font-medium">{uni?.shortName}</span>
                    <span>·</span>
                    <span>{p.year}年度</span>
                    <span>·</span>
                    <span>
                      {p.subject} 問{p.problemNumber}
                    </span>
                    {!p.isFree && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        &#x1f512;
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 ml-4">
                  <FieldBadge field={p.field} />
                  <DifficultyBadge difficulty={p.difficulty} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredProblems.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg mb-2">この分野の問題はまだありません</p>
          <Link href="/" className="text-blue-600 hover:underline">
            ホームに戻る
          </Link>
        </div>
      )}
    </div>
  );
}
