import { Field } from "./types";

/**
 * 院試対策の参考書データ。
 *
 * アフィリエイト運用：
 * - `amazonAsin` があれば直リンク生成（最優先）
 * - なければ `amazonSearch` で Amazon 検索にリダイレクト（fallback）
 * - リンク生成は `getAmazonUrl()` 経由（環境変数でタグ注入）
 *
 * ASIN はプレースホルダが混在。運用前に正しい値に差し替えること。
 */

export type BookLevel = "入門" | "標準" | "上級";

export type BookField = Field | "general" | "exam";

export const BOOK_FIELD_LABELS: Record<BookField, string> = {
  mechanics: "力学",
  electromagnetism: "電磁気学",
  quantum: "量子力学",
  statistical: "統計力学",
  math: "数学",
  optics: "光学",
  thermodynamics: "熱力学",
  relativity: "相対論",
  general: "全般",
  exam: "院試対策",
};

export type Book = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  field: BookField;
  level: BookLevel;
  year?: number;            // 初版年
  pages?: number;
  description: string;      // なぜ良いか、誰におすすめか
  strongPoints?: string[];  // 強み箇条書き
  amazonAsin?: string;      // 10桁 ASIN（分かれば）
  amazonSearch?: string;    // 不明時のフォールバック検索語
  isClassic?: boolean;      // 古典の名著フラグ
  relatedTopics?: string[];
  relatedProblems?: string[];
};

export const books: Book[] = [
  // ========== 力学 ==========
  {
    id: "landau-mechanics",
    title: "力学（ランダウ=リフシッツ理論物理学教程 1）",
    author: "ランダウ・リフシッツ",
    publisher: "東京図書",
    field: "mechanics",
    level: "上級",
    isClassic: true,
    description:
      "最小作用原理からスタートする圧倒的に洗練された力学。解析力学を本気で学ぶなら避けて通れない。薄いのに密度が高く、何度も読み返す価値あり。",
    strongPoints: [
      "ラグランジアン形式が最初から主役",
      "対称性と保存則の美しい展開",
      "ロシア式の凝縮された論証",
    ],
    amazonAsin: "4489011601",
    relatedTopics: ["lagrangian-basics", "noether-theorem", "hamiltonian-formalism"],
  },
  {
    id: "goldstein-classical-mechanics",
    title: "古典力学（上・下）",
    author: "H. ゴールドスタイン",
    publisher: "吉岡書店",
    field: "mechanics",
    level: "標準",
    isClassic: true,
    description:
      "英語圏で最も標準的な古典力学教科書の邦訳。剛体・連成振動・ハミルトン形式の定番解説。演習問題が多く、院試対策としても王道。",
    strongPoints: [
      "例題・演習が豊富",
      "特殊相対論まで含む網羅性",
      "記述がランダウより丁寧",
    ],
    amazonSearch: "ゴールドスタイン 古典力学",
    relatedTopics: ["lagrangian-basics", "hamiltonian-formalism", "angular-momentum-conservation"],
  },
  {
    id: "iwanami-mechanics",
    title: "物理入門コース 力学",
    author: "戸田 盛和",
    publisher: "岩波書店",
    field: "mechanics",
    level: "入門",
    description:
      "学部1〜2年生向けの決定版。ベクトル解析や振動論の橋渡しもこの一冊で。「物理を丁寧に語る」教科書の鑑。",
    strongPoints: ["物理的直観を丁寧に養う", "図解が親切", "院試下地作りに最適"],
    amazonAsin: "4000076418",
    relatedTopics: ["equation-of-motion", "energy-conservation", "small-oscillations"],
  },
  {
    id: "harashima-mechanics",
    title: "力学 (新物理学シリーズ 2)",
    author: "原島 鮮",
    publisher: "培風館",
    field: "mechanics",
    level: "標準",
    description:
      "日本の古典的名著。剛体力学を含め標準的なトピックを深くカバー。計算が詳しく、問題を手で追いたいタイプに最適。",
    amazonAsin: "4785321059",
    relatedTopics: ["moment-of-inertia", "angular-momentum-conservation"],
  },

  // ========== 電磁気学 ==========
  {
    id: "landau-classical-theory-fields",
    title: "場の古典論（ランダウ=リフシッツ理論物理学教程 2）",
    author: "ランダウ・リフシッツ",
    publisher: "東京図書",
    field: "electromagnetism",
    level: "上級",
    isClassic: true,
    description:
      "電磁気と特殊/一般相対論が一冊に。テンソル形式でマクスウェル方程式を扱い、相対論との統一を見せる。",
    strongPoints: ["4元表記で電磁気と相対論を統一", "上級者向けの王道"],
    amazonAsin: "4489011628",
    relatedTopics: ["maxwell-intuition", "lorentz-transformation"],
  },
  {
    id: "jackson-classical-electrodynamics",
    title: "電磁気学（ジャクソン）上・下",
    author: "J.D. Jackson",
    publisher: "吉岡書店",
    field: "electromagnetism",
    level: "上級",
    isClassic: true,
    description:
      "米国大学院生の必読。特殊関数・多重極展開・放射論まで徹底。院試を超えて研究に進むなら一度は通過すべき大著。",
    strongPoints: ["放射・散乱論が充実", "境界値問題の手法が体系的"],
    amazonSearch: "ジャクソン 電磁気学",
    relatedTopics: ["method-of-images", "dipole-moment", "maxwell-intuition"],
  },
  {
    id: "sunagawa-electromagnetism",
    title: "理論電磁気学",
    author: "砂川 重信",
    publisher: "紀伊國屋書店",
    field: "electromagnetism",
    level: "標準",
    description:
      "日本語で書かれた電磁気の決定版。ベクトル解析から始まり、マクスウェル方程式の物理的意味まで徹底的に説明。",
    strongPoints: ["論理展開が透徹", "例題選定が秀逸"],
    amazonAsin: "4314008547",
    relatedTopics: ["gauss-law-uses", "maxwell-intuition", "faraday-law"],
  },
  {
    id: "ota-electromagnetism",
    title: "電磁気学の基礎 I・II",
    author: "太田 浩一",
    publisher: "東京大学出版会",
    field: "electromagnetism",
    level: "標準",
    description:
      "現代的視点で書かれた電磁気学。SI単位系、相対論的表現、応用まで。院試レベルに直結する問題意識。",
    amazonAsin: "4130626124",
    relatedTopics: ["gauss-law-uses", "fresnel-coefficients", "faraday-law"],
  },
  {
    id: "nagaoka-em-iwanami",
    title: "電磁気学 I・II（物理入門コース）",
    author: "長岡 洋介",
    publisher: "岩波書店",
    field: "electromagnetism",
    level: "入門",
    description:
      "電磁気を初めて学ぶなら。丁寧な説明と図、豊富な演習。学部2〜3年生の標準教科書。",
    amazonSearch: "長岡洋介 電磁気学 岩波",
    relatedTopics: ["gauss-law-uses", "rc-circuit", "lc-circuit"],
  },

  // ========== 量子力学 ==========
  {
    id: "inoki-kawai-qm",
    title: "量子力学 I・II",
    author: "猪木 慶治・川合 光",
    publisher: "講談社",
    field: "quantum",
    level: "標準",
    description:
      "日本の院試対策の定番中の定番。計算が詳しく、例題が豊富。とにかく「手を動かして量子力学を身につける」なら第一選択。",
    strongPoints: [
      "例題 → 演習の流れが完璧",
      "院試頻出トピックを網羅",
      "丁寧な計算で初学者に優しい",
    ],
    amazonAsin: "4061532103",
    relatedTopics: ["bra-ket-notation", "perturbation-theory", "creation-annihilation-operators"],
  },
  {
    id: "sakurai-modern-qm",
    title: "現代の量子力学（上・下）",
    author: "J.J. サクライ",
    publisher: "吉岡書店",
    field: "quantum",
    level: "標準",
    isClassic: true,
    description:
      "スピンから始める斬新な構成。現代的視点で量子力学の本質を学べる。海外大学院で最も使われるテキスト。",
    strongPoints: ["演算子形式が主役", "現代的な題材（EPR・経路積分等）"],
    amazonSearch: "サクライ 現代の量子力学",
    relatedTopics: ["bra-ket-notation", "pauli-matrices-spin", "selection-rules"],
  },
  {
    id: "griffiths-qm",
    title: "量子力学の基礎",
    author: "グリフィス",
    publisher: "丸善出版",
    field: "quantum",
    level: "入門",
    description:
      "英語圏の標準入門書の翻訳。井戸型・調和振動子から水素原子、摂動論まで、順序立てて学べる。記述が会話的で読みやすい。",
    strongPoints: ["初学者に親切", "例題選びが秀逸", "演習の難易度分けが明快"],
    amazonSearch: "グリフィス 量子力学の基礎",
    relatedTopics: ["infinite-well", "creation-annihilation-operators", "perturbation-theory"],
  },
  {
    id: "tomonaga-qm",
    title: "量子力学 I・II",
    author: "朝永 振一郎",
    publisher: "みすず書房",
    field: "quantum",
    level: "標準",
    isClassic: true,
    description:
      "朝永自身のノーベル賞級の洞察が込められた古典。「量子力学的思考」を哲学的に深く学べる稀有な書。",
    amazonSearch: "朝永振一郎 量子力学",
    relatedTopics: ["bra-ket-notation", "matrix-elements"],
  },
  {
    id: "schiff-qm",
    title: "量子力学（上・下）",
    author: "L.I. シッフ",
    publisher: "吉岡書店",
    field: "quantum",
    level: "上級",
    isClassic: true,
    description:
      "長らく大学院生のバイブル。摂動論・散乱論・相対論的量子力学まで。古い本だが核となる部分は今も有効。",
    amazonSearch: "シッフ 量子力学 吉岡書店",
    relatedTopics: ["perturbation-theory", "selection-rules"],
  },

  // ========== 統計力学・熱力学 ==========
  {
    id: "tasaki-statistical-mechanics",
    title: "統計力学 I・II（新物理学シリーズ）",
    author: "田崎 晴明",
    publisher: "培風館",
    field: "statistical",
    level: "標準",
    description:
      "現代的かつ厳密な統計力学の教科書。確率論的基礎から丁寧に積み上げ、誤解なく本質に到達。PDFが著者のサイトで一部公開されている。",
    strongPoints: ["厳密性と物理直観の両立", "脚注による深堀り解説", "問題意識が明確"],
    amazonAsin: "4563024376",
    relatedTopics: ["canonical-ensemble", "fermi-dirac-statistics", "bose-einstein-statistics"],
  },
  {
    id: "kubo-statistical-mechanics",
    title: "統計力学",
    author: "久保 亮五",
    publisher: "共立出版",
    field: "statistical",
    level: "標準",
    isClassic: true,
    description:
      "日本の統計力学教育の礎。線形応答理論で有名な久保先生の名著。院試・大学院レベルの問題意識の出発点。",
    amazonAsin: "4320031059",
    relatedTopics: ["canonical-ensemble", "density-of-states"],
  },
  {
    id: "tasaki-thermodynamics",
    title: "熱力学 — 現代的な視点から",
    author: "田崎 晴明",
    publisher: "培風館",
    field: "thermodynamics",
    level: "標準",
    description:
      "熱力学の現代的構成。エントロピーを「なぜ存在するか」から議論。読み物としても楽しく、厳密で、現代物理学の感覚で書かれた稀有な書。",
    strongPoints: ["エントロピー増大則の明快な導出", "平衡の定義から徹底的に"],
    amazonAsin: "4563024325",
    relatedTopics: ["entropy-irreversibility", "carnot-cycle", "maxwell-relations"],
  },
  {
    id: "reif-statistical-physics",
    title: "統計熱物理学の基礎（上・中・下）",
    author: "F. Reif",
    publisher: "吉岡書店",
    field: "statistical",
    level: "標準",
    isClassic: true,
    description:
      "統計力学と熱力学を統一的に扱う古典。ミクロとマクロを往復しながら体系化。McGraw-Hill 原書の翻訳。",
    amazonSearch: "Reif 統計熱物理学",
    relatedTopics: ["canonical-ensemble", "equipartition-theorem"],
  },

  // ========== 数学 ==========
  {
    id: "terasawa-mathematics",
    title: "自然科学者のための数学概論",
    author: "寺沢 寛一",
    publisher: "岩波書店",
    field: "math",
    level: "標準",
    isClassic: true,
    description:
      "物理屋の数学必携として戦前から読み継がれる名著。特殊関数・ベクトル解析・複素解析・群論入門まで一冊で。",
    amazonSearch: "寺沢寛一 自然科学者のための数学概論",
    relatedTopics: ["complex-contour-integrals", "fourier-series", "stokes-theorem"],
  },
  {
    id: "boas-mathematical-methods",
    title: "Mathematical Methods in the Physical Sciences",
    author: "Mary L. Boas",
    publisher: "Wiley",
    field: "math",
    level: "標準",
    description:
      "英語圏の定番。ベクトル解析・複素関数・PDE・特殊関数までを豊富な例題で。読みやすく、独学にも最適。",
    strongPoints: ["例題が物理の例ばかり", "独学可能な親切さ"],
    amazonSearch: "Boas Mathematical Methods Physical Sciences",
    relatedTopics: ["complex-contour-integrals", "pde-separation", "fourier-series"],
  },
  {
    id: "yano-physics-math",
    title: "物理数学（基礎物理学選書）",
    author: "小谷 正雄・矢野 健太郎",
    publisher: "裳華房",
    field: "math",
    level: "入門",
    description:
      "日本語の物理数学定番。学部向けの要点押さえ。他の物理書とセットで使うのが良い。",
    amazonSearch: "物理数学 矢野健太郎 基礎物理学選書",
    relatedTopics: ["complex-contour-integrals", "eigenvalues-eigenvectors"],
  },
  {
    id: "arfken-mathematical-methods",
    title: "Mathematical Methods for Physicists",
    author: "Arfken & Weber",
    publisher: "Academic Press",
    field: "math",
    level: "上級",
    description:
      "上級物理数学の網羅的リファレンス。特殊関数、群論、テンソル解析まで。院試対策を超えて研究に進む際の辞書的存在。",
    amazonSearch: "Arfken Mathematical Methods Physicists",
    relatedTopics: ["complex-contour-integrals", "stokes-theorem"],
  },

  // ========== 院試対策演習書 ==========
  {
    id: "shokai-physics-exercise",
    title: "詳解 物理学演習（上・下）",
    author: "後藤 憲一・他",
    publisher: "共立出版",
    field: "exam",
    level: "標準",
    description:
      "院試対策の古典。過去問ベースで力学・電磁気・熱・光学の演習問題 1000 問超。古いが本質的な問題集として今でも第一線。",
    strongPoints: [
      "院試頻出問題が網羅",
      "解答が詳しい",
      "時代を超えた良問",
    ],
    amazonSearch: "詳解 物理学演習 共立出版",
    relatedProblems: ["todai-2025-phys-1", "kyodai-2025-phys-1"],
  },
  {
    id: "shokai-mechanics-exercise",
    title: "詳解 力学演習",
    author: "後藤 憲一・山本 邦夫",
    publisher: "共立出版",
    field: "exam",
    level: "標準",
    description:
      "力学だけ深く演習したい時の定番。剛体力学・解析力学・振動論まで。院試頻出のパターンを全て含む。",
    amazonSearch: "詳解 力学演習 後藤憲一",
    relatedTopics: ["equation-of-motion", "moment-of-inertia", "small-oscillations"],
  },
  {
    id: "shokai-em-exercise",
    title: "詳解 電磁気学演習",
    author: "後藤 憲一・山崎 修一郎",
    publisher: "共立出版",
    field: "exam",
    level: "標準",
    description:
      "電磁気学の院試対策演習書の最高峰。基礎計算から境界値問題・回路まで。解説が丁寧で自習に適する。",
    amazonSearch: "詳解 電磁気学演習",
    relatedTopics: ["gauss-law-uses", "method-of-images", "faraday-law"],
  },
  {
    id: "shokai-qm-exercise",
    title: "詳解 量子力学演習",
    author: "後藤 憲一ほか",
    publisher: "共立出版",
    field: "exam",
    level: "標準",
    description:
      "量子力学の演習集。ハミルトニアン・摂動論・スピン・散乱論まで。猪木・川合や現代の量子力学と並行して使うと強力。",
    amazonSearch: "詳解 量子力学演習",
    relatedTopics: ["perturbation-theory", "pauli-matrices-spin", "selection-rules"],
  },
  {
    id: "shokai-thermal-exercise",
    title: "詳解 熱学・統計力学演習",
    author: "後藤 憲一ほか",
    publisher: "共立出版",
    field: "exam",
    level: "標準",
    description:
      "熱力学・統計力学の演習集。分配関数計算から相転移、フェルミ・ボース統計まで網羅。",
    amazonSearch: "詳解 熱学 統計力学演習",
    relatedTopics: ["canonical-ensemble", "fermi-dirac-statistics", "carnot-cycle"],
  },
  {
    id: "kakomon-tokyo",
    title: "大学院入試問題集（東大物理系）",
    author: "東大物理系サークル等",
    publisher: "各種",
    field: "exam",
    level: "上級",
    description:
      "東大の過去問を丁寧に解説した問題集群（サークル出版・個人サイト・市販書）。院試レベルの「解き方のクセ」を掴む近道。",
    amazonSearch: "大学院入試 東大 物理 過去問",
  },

  // ========== 全般 / 併用書 ==========
  {
    id: "mpr-prep",
    title: "物理数学の直観的方法",
    author: "長沼 伸一郎",
    publisher: "講談社ブルーバックス",
    field: "general",
    level: "入門",
    description:
      "テイラー展開・Fourier 変換・偏微分方程式を「なぜそうなるか」の直観で語る。教科書の行間を埋めるのに最適。",
    strongPoints: ["物理的直観を重視", "読み物として楽しめる"],
    amazonSearch: "物理数学の直観的方法 長沼伸一郎",
    relatedTopics: ["fourier-series", "polar-coords-derivatives"],
  },
  {
    id: "feynman-lectures",
    title: "ファインマン物理学 I〜V",
    author: "R.P. ファインマン",
    publisher: "岩波書店",
    field: "general",
    level: "標準",
    isClassic: true,
    description:
      "物理教育の歴史的名著。力学から量子力学まで、一流物理学者のユニークな視点で語られる。院試向けの演習書ではないが、物理観を磨くのに最適。",
    amazonSearch: "ファインマン物理学 岩波",
    relatedTopics: ["maxwell-intuition", "bra-ket-notation"],
  },
  {
    id: "feynman-qed",
    title: "光と物質のふしぎな理論 — 私の量子電磁力学",
    author: "R.P. ファインマン",
    publisher: "岩波書店",
    field: "quantum",
    level: "入門",
    description:
      "量子電磁力学を一般向けに語ったファインマンの名講演録。経路積分の直観をつけるのに最高の一冊。",
    amazonSearch: "光と物質のふしぎな理論 ファインマン",
    relatedTopics: ["variational-principle"],
  },
];

// ---------- Utilities ----------

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getBooksByField(field: BookField): Book[] {
  return books.filter((b) => b.field === field);
}

/**
 * Books whose `relatedProblems` include the given problem id, plus books
 * whose field matches the problem's field (as a softer fallback).
 * Limits total to 3 to avoid overwhelming problem pages.
 */
export function getRelatedBooks(problemId: string, problemField: string): Book[] {
  const direct = books.filter((b) => b.relatedProblems?.includes(problemId));
  const fieldMatch = books
    .filter((b) => b.field === problemField && !direct.includes(b))
    .slice(0, 3 - direct.length);
  return [...direct, ...fieldMatch].slice(0, 3);
}

export function getBooksForTopic(topicId: string, topicField: string): Book[] {
  const direct = books.filter((b) => b.relatedTopics?.includes(topicId));
  const fieldMatch = books
    .filter((b) => b.field === topicField && !direct.includes(b))
    .slice(0, 3 - direct.length);
  return [...direct, ...fieldMatch].slice(0, 3);
}

/**
 * Generate an Amazon URL for a book, using the configured affiliate tag
 * (NEXT_PUBLIC_AMAZON_TAG). Falls back to search if no ASIN.
 * If no tag is set, still returns a working Amazon URL (no commission).
 */
export function getAmazonUrl(book: Book): string {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG || "";
  const base = "https://www.amazon.co.jp";
  if (book.amazonAsin) {
    const suffix = tag ? `?tag=${tag}` : "";
    return `${base}/dp/${book.amazonAsin}/${suffix}`;
  }
  const q = encodeURIComponent(book.amazonSearch || book.title);
  const tagPart = tag ? `&tag=${tag}` : "";
  return `${base}/s?k=${q}${tagPart}`;
}
