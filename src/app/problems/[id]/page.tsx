import Link from "next/link";
import { notFound } from "next/navigation";
import { problems, getProblem } from "@/data/problems";
import { getUniversity } from "@/data/universities";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { MathContent } from "@/components/KaTeX";
import type { Metadata } from "next";

export function generateStaticParams() {
  return problems.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const problem = getProblem(id);
  if (!problem) return { title: "Not Found" };
  const uni = getUniversity(problem.universitySlug);
  return {
    title: `${uni?.shortName} ${problem.year}年 ${problem.title} — 院試DB`,
    description: `${uni?.name} ${problem.year}年度 ${problem.subject} 問${problem.problemNumber}「${problem.title}」の解答解説`,
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = getProblem(id);
  if (!problem) notFound();

  const uni = getUniversity(problem.universitySlug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/universities/${problem.universitySlug}`}
          className="hover:text-blue-600"
        >
          {uni?.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{problem.title}</span>
      </nav>

      {/* Problem Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>{uni?.name}</span>
          <span>·</span>
          <span>{problem.year}年度</span>
          <span>·</span>
          <span>
            {problem.subject} 問{problem.problemNumber}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          {problem.title}
        </h1>
        <div className="flex items-center gap-3 mb-4">
          <FieldBadge field={problem.field} />
          <DifficultyBadge difficulty={problem.difficulty} />
          {!problem.isFree && (
            <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">
              &#x1f512; プレミアム
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Problem Statement */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
          問題文
        </h2>
        <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
          <MathContent content={problem.statement} className="text-gray-800" />
        </div>
        <p className="text-xs text-gray-400 mt-3">
          ※ 問題文は学習目的で要約したものです。正確な問題文は
          <a
            href={uni?.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-1"
          >
            公式サイト
          </a>
          をご確認ください。
        </p>
      </div>

      {/* Solution */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-green-600 rounded-full inline-block"></span>
          解答・解説
        </h2>

        {problem.isFree ? (
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <MathContent
              content={problem.solution}
              className="text-gray-800"
            />
          </div>
        ) : (
          <div className="relative">
            {/* Blurred preview */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100 max-h-48 overflow-hidden relative">
              <div className="blur-sm select-none pointer-events-none">
                <MathContent
                  content={problem.solution.slice(0, 300)}
                  className="text-gray-800"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
            </div>

            {/* Premium CTA */}
            <div className="text-center py-8">
              <p className="text-lg font-bold text-gray-800 mb-2">
                この解説はプレミアム会員限定です
              </p>
              <p className="text-sm text-gray-500 mb-6">
                月額980円ですべての解説が読み放題
              </p>
              <span className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors">
                プレミアムプランに登録
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link
          href={`/universities/${problem.universitySlug}`}
          className="text-blue-600 hover:underline text-sm"
        >
          ← {uni?.name}の問題一覧
        </Link>
        <Link
          href={`/fields/${problem.field}`}
          className="text-blue-600 hover:underline text-sm"
        >
          同じ分野の問題 →
        </Link>
      </div>
    </div>
  );
}
