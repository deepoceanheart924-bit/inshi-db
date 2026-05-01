import { Field } from "./types";
import { topics } from "./topics";

/**
 * Course = a serialised reading curriculum that bundles many Topics into
 * an ordered sequence with chapter grouping.
 *
 * Numbering: §<chapterIndex>.<sectionIndex> within the chapter.
 * Topics not listed in any course are still browsable via /topics.
 */

export type Chapter = {
  /** Chapter title shown above its topic list. e.g. "I. 古典力学の基礎" */
  title: string;
  /** Optional one-line description below the chapter title */
  description?: string;
  /** Ordered topic ids that compose this chapter */
  topicIds: string[];
};

export type Course = {
  slug: string;
  title: string;
  /** Short tagline shown under the title on the course page */
  subtitle?: string;
  /** English subject label used as italic kicker on the course masthead */
  englishLabel: string;
  field: Field | "general";
  /** 序文 paragraph (Markdown-lite, plain string) */
  intro: string;
  /** 対象読者 */
  audience: string;
  /** 前提知識（free text bullet items） */
  prerequisites?: string[];
  /** 学習目標 */
  goals?: string[];
  /** Chapters in order */
  chapters: Chapter[];
};

export const courses: Course[] = [
  /* ============================================================ */
  /*  力学の基礎                                                    */
  /* ============================================================ */
  {
    slug: "classical-mechanics",
    title: "古典力学",
    subtitle: "ニュートン力学から剛体・連続体まで",
    englishLabel: "Classical Mechanics",
    field: "mechanics",
    intro:
      "ニュートンの運動方程式を起点に、エネルギー・運動量・角運動量の保存則をどう使うかを身につけ、剛体・振動・流体抵抗まで一気通貫で扱える視野を作るコース。",
    audience:
      "学部1〜2年で力学の講義を一度は受けた学生。院試対策として網を張り直したい人。",
    prerequisites: [
      "微積分（偏微分・線積分）",
      "ベクトル解析の初歩",
      "簡単な常微分方程式",
    ],
    goals: [
      "保存則を使い分けて典型問題を10分以内で立式できる",
      "微小振動・減衰・共鳴を統一視点で扱える",
      "剛体回転と慣性モーメントの計算技法を持つ",
    ],
    chapters: [
      {
        title: "I. 運動方程式と保存則",
        description: "立式と保存則の使い所",
        topicIds: [
          "equation-of-motion",
          "energy-conservation",
          "angular-momentum-conservation",
          "gravitational-escape",
        ],
      },
      {
        title: "II. 振動と共鳴",
        description: "微小振動近似から共鳴・うなりまで",
        topicIds: [
          "small-oscillations",
          "damped-oscillation",
          "resonance-q-factor",
          "beat-phenomenon",
        ],
      },
      {
        title: "III. 剛体と回転",
        description: "慣性モーメント・回転運動・コマ",
        topicIds: [
          "moment-of-inertia",
          "parallel-axis-theorem",
          "rigid-body-top",
          "coriolis-force",
        ],
      },
      {
        title: "IV. 流体・連続体・波の入口",
        description: "抵抗・浮力・波動方程式",
        topicIds: ["buoyancy", "stokes-drag", "doppler-effect", "mach-number"],
      },
    ],
  },

  /* ============================================================ */
  /*  解析力学                                                     */
  /* ============================================================ */
  {
    slug: "analytical-mechanics",
    title: "解析力学",
    subtitle: "ラグランジアンからハミルトニアンまで",
    englishLabel: "Analytical Mechanics",
    field: "mechanics",
    intro:
      "ニュートン力学の枠を一段抽象化し、ラグランジアン・ハミルトニアン形式で運動を記述する。対称性と保存則の関係（ネーターの定理）を軸に、量子力学・場の理論への橋渡しまで含めた骨格を作る。",
    audience: "古典力学を一通り終え、解析力学を改めて整理したい学部生。",
    prerequisites: [
      "古典力学の基礎",
      "変分法のごく初歩",
      "偏微分・常微分方程式",
    ],
    goals: [
      "ラグランジアンを与えてオイラー・ラグランジュ方程式を機械的に書ける",
      "対称性から保存量を読み取れる（ネーターの定理）",
      "ハミルトニアン形式に変換し、正準方程式を扱える",
    ],
    chapters: [
      {
        title: "I. 変分原理とラグランジアン",
        topicIds: [
          "variational-principle",
          "lagrangian-basics",
          "euler-lagrange",
        ],
      },
      {
        title: "II. 対称性と保存則",
        topicIds: ["noether-theorem"],
      },
      {
        title: "III. ハミルトニアン形式",
        topicIds: ["hamiltonian-formalism", "effective-potential"],
      },
    ],
  },

  /* ============================================================ */
  /*  電磁気学                                                     */
  /* ============================================================ */
  {
    slug: "electromagnetism",
    title: "電磁気学",
    subtitle: "Maxwell 方程式と回路への展開",
    englishLabel: "Electromagnetism",
    field: "electromagnetism",
    intro:
      "電場・磁場の局所方程式（Maxwell 方程式）を起点に、ガウスの法則・鏡像法・誘導といった具体技法と、回路理論への接続を扱う。",
    audience: "電磁気I/IIを終え、院試レベルでまとめ直したい学生。",
    prerequisites: ["ベクトル解析（grad/div/rot）", "簡単な複素関数論"],
    goals: [
      "Maxwell 方程式の積分形・微分形を行き来できる",
      "対称性のある問題でガウスの法則・鏡像法を即座に選べる",
      "RC/LC 回路の応答をインピーダンスで処理できる",
    ],
    chapters: [
      {
        title: "I. 静電場・静磁場の核",
        topicIds: [
          "maxwell-intuition",
          "gauss-law-uses",
          "dipole-moment",
          "method-of-images",
        ],
      },
      {
        title: "II. 動的場と電磁誘導",
        topicIds: ["faraday-law", "lorentz-force-cyclotron"],
      },
      {
        title: "III. 回路の電磁気",
        topicIds: ["impedance", "rc-circuit", "lc-circuit"],
      },
    ],
  },

  /* ============================================================ */
  /*  量子力学                                                     */
  /* ============================================================ */
  {
    slug: "quantum-mechanics",
    title: "量子力学",
    subtitle: "ブラケット記法から摂動論まで",
    englishLabel: "Quantum Mechanics",
    field: "quantum",
    intro:
      "波動関数からブラケット記法へ移行し、線形代数の言語で量子状態と演算子を扱う。代表的な可解模型・摂動論・スピンを通して院試に必要な技法をひと通り回す。",
    audience: "学部2〜3年で量子力学Iを履修した学生。",
    prerequisites: [
      "線形代数（固有値・固有ベクトル）",
      "簡単な偏微分方程式",
      "古典力学のハミルトニアン形式",
    ],
    goals: [
      "ブラケット記法で行列要素を計算できる",
      "1次・2次摂動論を機械的に適用できる",
      "スピン1/2と Pauli 行列の扱いに習熟する",
    ],
    chapters: [
      {
        title: "I. 量子論の言語",
        topicIds: [
          "bohr-model",
          "photoelectric-effect",
          "bra-ket-notation",
          "matrix-elements",
        ],
      },
      {
        title: "II. 代表的な可解模型",
        topicIds: [
          "infinite-well",
          "creation-annihilation-operators",
          "zero-point-energy",
          "tunneling",
        ],
      },
      {
        title: "III. 角運動量とスピン",
        topicIds: ["pauli-matrices-spin", "stern-gerlach", "clebsch-gordan"],
      },
      {
        title: "IV. 摂動と遷移",
        topicIds: ["perturbation-theory", "selection-rules"],
      },
    ],
  },

  /* ============================================================ */
  /*  統計力学・熱力学                                              */
  /* ============================================================ */
  {
    slug: "statistical-thermodynamics",
    title: "統計力学・熱力学",
    subtitle: "アンサンブルからフェルミ・ボーズ統計へ",
    englishLabel: "Statistical & Thermal Physics",
    field: "statistical",
    intro:
      "熱力学の四法則と Maxwell 関係式を整理したうえで、正準集団・大正準集団でミクロからマクロへ橋を架け、フェルミ・ボーズ統計や輻射場まで踏み込む。",
    audience: "熱力学・統計力学Iを終えた学生。",
    prerequisites: ["微積分", "簡単な線形代数", "量子力学の初歩"],
    goals: [
      "正準集団から自由エネルギーを導出できる",
      "状態密度を使って物理量を温度で微分できる",
      "Fermi/Bose 統計の典型例（Debye, Planck）を扱える",
    ],
    chapters: [
      {
        title: "I. 熱力学の整備",
        topicIds: [
          "entropy-irreversibility",
          "carnot-cycle",
          "maxwell-relations",
          "dulong-petit",
        ],
      },
      {
        title: "II. 統計力学の核",
        topicIds: [
          "canonical-ensemble",
          "equipartition-theorem",
          "density-of-states",
          "heat-capacity-temperature",
        ],
      },
      {
        title: "III. 量子統計と応用",
        topicIds: [
          "fermi-dirac-statistics",
          "bose-einstein-statistics",
          "debye-model",
          "planck-radiation",
          "bloch-theorem",
        ],
      },
    ],
  },

  /* ============================================================ */
  /*  物理数学                                                     */
  /* ============================================================ */
  {
    slug: "mathematical-physics",
    title: "物理数学",
    subtitle: "院試で出る計算技法を一通り",
    englishLabel: "Mathematical Physics",
    field: "math",
    intro:
      "院試で頻出の計算技法を分野横断で集めたコース。固有値問題・偏微分方程式の変数分離・複素積分・Fourier 級数・Stokes の定理など、武器を揃える。",
    audience: "物理を専攻する学部2〜3年。",
    prerequisites: ["線形代数", "微積分", "ベクトル解析"],
    goals: [
      "固有値問題を物理に翻訳できる",
      "偏微分方程式を変数分離で解ける",
      "複素積分の経路選択ができる",
    ],
    chapters: [
      {
        title: "I. 線形代数の物理的応用",
        topicIds: ["eigenvalues-eigenvectors"],
      },
      {
        title: "II. 偏微分方程式と変換",
        topicIds: ["pde-separation", "fourier-series", "wave-equation"],
      },
      {
        title: "III. 複素関数論とベクトル解析",
        topicIds: ["complex-contour-integrals", "stokes-theorem"],
      },
      {
        title: "IV. 確率・統計の基礎",
        topicIds: ["central-limit-theorem"],
      },
      {
        title: "V. 計算ミスを防ぐ",
        topicIds: [
          "polar-coords-derivatives",
          "sign-conventions",
          "units-and-dimensions",
        ],
      },
    ],
  },

  /* ============================================================ */
  /*  光学・相対論                                                 */
  /* ============================================================ */
  {
    slug: "optics-relativity",
    title: "光学・相対論",
    subtitle: "光と時空の幾何",
    englishLabel: "Optics & Relativity",
    field: "optics",
    intro:
      "光の反射・屈折・回折と、特殊相対論のローレンツ変換をまとめて扱う短編コース。",
    audience: "光学・相対論を体系立てて整理したい学生。",
    prerequisites: ["電磁気学の波動", "古典力学"],
    goals: [
      "Fresnel 係数と Brewster 角を導出できる",
      "Lorentz 変換で時間遅れ・長さ収縮を扱える",
    ],
    chapters: [
      {
        title: "I. 波としての光",
        topicIds: [
          "dispersion-relation",
          "fresnel-coefficients",
          "brewster-angle",
          "fresnel-diffraction",
        ],
      },
      {
        title: "II. 相対論の入口",
        topicIds: ["lorentz-transformation"],
      },
    ],
  },
];

/* ============================================================
 *  Helpers
 * ============================================================ */

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

/**
 * Reverse-lookup: given a topicId, return its course context with §X.Y numbering.
 * Returns null if the topic is not part of any course.
 */
export type TopicLocation = {
  course: Course;
  chapterIndex: number; // 0-based
  sectionIndex: number; // 0-based
  /** Roman numeral chapter (I, II, III…) */
  chapterRoman: string;
  /** Display number §X.Y (1-based) */
  sectionLabel: string;
};

const ROMAN = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

export function getTopicLocation(topicId: string): TopicLocation | null {
  for (const course of courses) {
    for (let ci = 0; ci < course.chapters.length; ci++) {
      const ch = course.chapters[ci];
      const si = ch.topicIds.indexOf(topicId);
      if (si >= 0) {
        return {
          course,
          chapterIndex: ci,
          sectionIndex: si,
          chapterRoman: ROMAN[ci] ?? `${ci + 1}`,
          sectionLabel: `§${ci + 1}.${si + 1}`,
        };
      }
    }
  }
  return null;
}

/**
 * Flat ordered topic list for a course (chapter1 + chapter2 + …).
 * Returned items keep their chapter info for nav rendering.
 */
export function flattenCourse(
  course: Course
): Array<{ topicId: string; chapterIndex: number; sectionIndex: number }> {
  const out: Array<{ topicId: string; chapterIndex: number; sectionIndex: number }> = [];
  course.chapters.forEach((ch, ci) =>
    ch.topicIds.forEach((id, si) =>
      out.push({ topicId: id, chapterIndex: ci, sectionIndex: si })
    )
  );
  return out;
}

export type TopicNav = {
  prev: { topicId: string; title: string; sectionLabel: string } | null;
  next: { topicId: string; title: string; sectionLabel: string } | null;
};

export function getTopicNav(topicId: string): TopicNav | null {
  const loc = getTopicLocation(topicId);
  if (!loc) return null;
  const flat = flattenCourse(loc.course);
  const idx = flat.findIndex((t) => t.topicId === topicId);
  if (idx < 0) return null;

  const decorate = (entry?: { topicId: string; chapterIndex: number; sectionIndex: number }) => {
    if (!entry) return null;
    const t = topics.find((x) => x.id === entry.topicId);
    return t
      ? {
          topicId: entry.topicId,
          title: t.title,
          sectionLabel: `§${entry.chapterIndex + 1}.${entry.sectionIndex + 1}`,
        }
      : null;
  };

  return {
    prev: decorate(flat[idx - 1]),
    next: decorate(flat[idx + 1]),
  };
}

/** Total topic count in a course (for masthead stats) */
export function getCourseTopicCount(course: Course): number {
  return course.chapters.reduce((acc, c) => acc + c.topicIds.length, 0);
}

/** Group courses by field for /courses index page */
export function getCoursesByField(): Record<string, Course[]> {
  const out: Record<string, Course[]> = {};
  for (const c of courses) {
    const k = c.field;
    if (!out[k]) out[k] = [];
    out[k].push(c);
  }
  return out;
}
