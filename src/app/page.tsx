import Link from "next/link";
import { universities } from "@/data/universities";
import { problems } from "@/data/problems";
import { FIELD_LABELS, FIELD_COLORS, Field } from "@/data/types";

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            院試過去問データベース
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            主要大学院の物理学・数学の入試過去問を
            <br className="hidden sm:block" />
            分野別・年度別に整理。丁寧な解答解説付き。
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">{universities.length}</div>
              <div className="text-blue-200 text-sm">大学</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{totalProblems}</div>
              <div className="text-blue-200 text-sm">問題数</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{freeProblems}</div>
              <div className="text-blue-200 text-sm">無料公開</div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">大学別で探す</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {universities.map((uni) => {
            const uniProblems = problems.filter(
              (p) => p.universitySlug === uni.slug
            );
            const years = [...new Set(uniProblems.map((p) => p.year))].sort(
              (a, b) => b - a
            );
            const fields = [...new Set(uniProblems.map((p) => p.field))];

            return (
              <Link
                key={uni.slug}
                href={`/universities/${uni.slug}`}
                className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {uni.name}
                    </h3>
                    <p className="text-sm text-gray-500">{uni.department}</p>
                  </div>
                  <span className="bg-blue-50 text-blue-700 text-sm font-medium px-2.5 py-1 rounded-lg">
                    {uniProblems.length}問
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {fields.map((f) => (
                    <span
                      key={f}
                      className={`text-xs px-2 py-0.5 rounded-full ${FIELD_COLORS[f]}`}
                    >
                      {FIELD_LABELS[f]}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  {years.join("・")}年度
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Fields */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">分野別で探す</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(Object.entries(FIELD_LABELS) as [Field, string][]).map(
            ([key, label]) => (
              <Link
                key={key}
                href={`/fields/${key}`}
                className="block rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition-all duration-200 bg-white"
              >
                <div className="text-2xl font-bold text-gray-800">
                  {fieldCounts[key] || 0}
                </div>
                <div
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${FIELD_COLORS[key]}`}
                >
                  {label}
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      {/* Recent Problems */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          最近追加された問題
        </h2>
        <div className="space-y-3">
          {problems.slice(0, 5).map((p) => {
            const uni = universities.find((u) => u.slug === p.universitySlug);
            return (
              <Link
                key={p.id}
                href={`/problems/${p.id}`}
                className="block bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500 w-12">
                      {uni?.shortName}
                    </span>
                    <span className="text-sm text-gray-400">{p.year}年</span>
                    <span className="font-medium text-gray-800">{p.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${FIELD_COLORS[p.field]}`}
                    >
                      {FIELD_LABELS[p.field]}
                    </span>
                    {!p.isFree && (
                      <span className="text-xs text-gray-400">&#x1f512;</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            すべての解説を読む
          </h2>
          <p className="text-gray-600 mb-8">
            無料会員で一部の解説を閲覧できます。
            <br />
            有料プラン（月額980円）ですべての解説が読み放題。
          </p>
          <div className="flex justify-center gap-4">
            <span className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-gray-50 transition-colors">
              無料で始める
            </span>
            <span className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors">
              プレミアムプラン
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
