export type Field =
  | "mechanics"
  | "electromagnetism"
  | "quantum"
  | "statistical"
  | "math"
  | "optics"
  | "thermodynamics"
  | "relativity";

export const FIELD_LABELS: Record<Field, string> = {
  mechanics: "力学",
  electromagnetism: "電磁気学",
  quantum: "量子力学",
  statistical: "統計力学",
  math: "数学",
  optics: "光学",
  thermodynamics: "熱力学",
  relativity: "相対論",
};

export const FIELD_COLORS: Record<Field, string> = {
  mechanics: "bg-blue-100 text-blue-800",
  electromagnetism: "bg-amber-100 text-amber-800",
  quantum: "bg-purple-100 text-purple-800",
  statistical: "bg-green-100 text-green-800",
  math: "bg-rose-100 text-rose-800",
  optics: "bg-cyan-100 text-cyan-800",
  thermodynamics: "bg-orange-100 text-orange-800",
  relativity: "bg-indigo-100 text-indigo-800",
};

export type Difficulty = "basic" | "standard" | "advanced";

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  basic: "基礎",
  standard: "標準",
  advanced: "発展",
};

/**
 * 試験の受験ルール（科目ごと固有）
 * Phase 1 では最低限の3項目のみ。将来的に拡張可。
 */
export interface ExamRule {
  /** 大問の総数（例: 4 = 4問出題） */
  totalQuestions?: number;
  /** 解答が必要な大問数（例: 2 = 2問選択） */
  requiredCount?: number;
  /** 制限時間（分） */
  durationMinutes?: number;
  /** 補足注記（電卓持込可・特定範囲除外など） */
  notes?: string;
}

/**
 * 大学ごと固有の科目定義
 * 東大なら物理学I/II/III の3要素、京大なら物理学のみの1要素など。
 */
export interface SubjectDef {
  /** URL slug（例: "phys", "phys-1"） */
  slug: string;
  /** 表示名（例: "物理学I"） */
  name: string;
  description?: string;
  rule?: ExamRule;
}

export interface University {
  slug: string;
  name: string;
  shortName: string;
  department: string;
  officialUrl: string;
  problemCount: number;
  /** 科目構成（必須）。データ未整備の大学も最低 1 要素は持つ。 */
  subjects: SubjectDef[];
}

export interface Problem {
  id: string;
  universitySlug: string;
  year: number;
  subject: string;
  problemNumber: number;
  title: string;
  field: Field;
  difficulty: Difficulty;
  tags: string[];
  statement: string;
  solution: string;
  isFree: boolean;
}
