import { University } from "./types";

/**
 * 大学院入試の対象大学一覧。
 *
 * subjects: 各大学固有の科目構成。Phase 1 暫定として代表的な科目を1要素ずつ。
 *           東大などは将来 phys-1 / phys-2 / phys-3 に分割予定。
 *           rule の数値は公開情報に基づく目安（最新版は各大学公式PDFを要確認）。
 */
export const universities: University[] = [
  {
    slug: "todai",
    name: "東京大学",
    shortName: "東大",
    department: "理学系研究科 物理学専攻",
    officialUrl: "https://www.phys.s.u-tokyo.ac.jp/about/147/",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        description:
          "本番では物理学I・II・IIIに分かれ、各回ごとに大問が設けられる。",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 150,
          notes: "本番では物理学I・II・IIIの試験区分があり、各セットから所定数を選択。",
        },
      },
      {
        slug: "math",
        name: "数学",
        description: "出題されない年もあるため、最新の募集要項を要確認。",
      },
    ],
  },
  {
    slug: "kyodai",
    name: "京都大学",
    shortName: "京大",
    department: "理学研究科 物理学・宇宙物理学専攻",
    officialUrl: "https://www.scphys.kyoto-u.ac.jp/education/inshi/",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 180,
        },
      },
      {
        slug: "math",
        name: "数学",
      },
    ],
  },
  {
    slug: "titech",
    name: "東京科学大学（旧 東工大）",
    shortName: "東工大",
    department: "理学院 物理学系",
    officialUrl: "https://admissions.isct.ac.jp/ja/013/graduate/examination-questions",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 5,
          requiredCount: 3,
          durationMinutes: 180,
        },
      },
    ],
  },
  {
    slug: "tohoku",
    name: "東北大学",
    shortName: "東北大",
    department: "理学研究科 物理学専攻",
    officialUrl:
      "https://www.phys.tohoku.ac.jp/admission/graduate-school_entrance/nyushimondai-archives/",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 5,
          requiredCount: 3,
          durationMinutes: 180,
        },
      },
    ],
  },
  {
    slug: "osaka",
    name: "大阪大学",
    shortName: "阪大",
    department: "理学研究科 物理学専攻",
    officialUrl: "https://www.phys.sci.osaka-u.ac.jp/ja/grad/undergraduate_exam.html",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 150,
        },
      },
      {
        slug: "math",
        name: "数学",
      },
    ],
  },
  {
    slug: "nagoya",
    name: "名古屋大学",
    shortName: "名大",
    department: "理学研究科 物質理学専攻（物理系）",
    officialUrl: "https://www.phys.nagoya-u.ac.jp/graduate/admission.html",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 150,
        },
      },
    ],
  },
  {
    slug: "kyushu",
    name: "九州大学",
    shortName: "九大",
    department: "理学府 物理学専攻",
    officialUrl: "https://www.phys.kyushu-u.ac.jp/admissions/",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 150,
        },
      },
    ],
  },
  {
    slug: "hokkaido",
    name: "北海道大学",
    shortName: "北大",
    department: "理学院 物性物理学専攻",
    officialUrl: "https://www.sci.hokudai.ac.jp/graduate/exam/",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 150,
        },
      },
    ],
  },
  {
    slug: "ynu",
    name: "横浜国立大学",
    shortName: "横国",
    department: "工学府 物理工学専攻",
    officialUrl: "https://www.ynu.ac.jp/education/admission/graduate/",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 120,
        },
      },
    ],
  },
  {
    slug: "tsukuba",
    name: "筑波大学",
    shortName: "筑波",
    department: "数理物質科学研究群 物理学学位プログラム",
    officialUrl: "https://www.tsukuba.ac.jp/admission/graduate/",
    problemCount: 10,
    subjects: [
      {
        slug: "phys",
        name: "物理学",
        rule: {
          totalQuestions: 4,
          requiredCount: 2,
          durationMinutes: 120,
        },
      },
    ],
  },
];

export function getUniversity(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

/** 大学・科目スラッグから SubjectDef を取得 */
export function getSubject(uniSlug: string, subjectSlug: string) {
  const uni = getUniversity(uniSlug);
  return uni?.subjects.find((s) => s.slug === subjectSlug);
}
