import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">院試DB</span>
          <span className="text-sm text-gray-500 hidden sm:inline">大学院入試 過去問データベース</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            大学一覧
          </Link>
          <Link href="/fields/all" className="text-gray-600 hover:text-gray-900 transition-colors">
            分野別
          </Link>
          <span className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
            無料で始める
          </span>
        </nav>
      </div>
    </header>
  );
}
