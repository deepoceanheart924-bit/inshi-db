import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, getUniversity } from "@/data/universities";
import { getProblemsByUniversity, getYears } from "@/data/problems";
import { FieldBadge } from "@/components/FieldBadge";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { FIELD_LABELS, Field } from "@/data/types";
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{uni.name}</span>
      </nav>

      {/* University Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{uni.name}</h1>
        <p className="text-gray-500 mb-4">{uni.department}</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-600">
            全 {uniProblems.length} 問
          </span>
          <a
            href={uni.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            公式サイト →
          </a>
        </div>
      </div>

      {/* Problems by Year */}
      {years.map((year) => {
        const yearProblems = uniProblems
          .filter((p) => p.year === year)
          .sort((a, b) => a.problemNumber - b.problemNumber);

        return (
          <div key={year} className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-lg">
                {year}年度
              </span>
            </h2>
            <div className="space-y-3">
              {yearProblems.map((p) => (
                <Link
                  key={p.id}
                  href={`/problems/${p.id}`}
                  className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-400">
                          {p.subject} 問{p.problemNumber}
                        </span>
                        {!p.isFree && (
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                            &#x1f512; プレミアム
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
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
