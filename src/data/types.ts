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

export interface University {
  slug: string;
  name: string;
  shortName: string;
  department: string;
  officialUrl: string;
  problemCount: number;
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
