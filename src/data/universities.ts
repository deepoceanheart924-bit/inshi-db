import { University } from "./types";

export const universities: University[] = [
  {
    slug: "todai",
    name: "東京大学",
    shortName: "東大",
    department: "理学系研究科 物理学専攻",
    officialUrl: "https://www.phys.s.u-tokyo.ac.jp/admission/",
    problemCount: 12,
  },
  {
    slug: "kyodai",
    name: "京都大学",
    shortName: "京大",
    department: "理学研究科 物理学・宇宙物理学専攻",
    officialUrl: "https://www.sci.kyoto-u.ac.jp/ja/admission/",
    problemCount: 10,
  },
  {
    slug: "titech",
    name: "東京工業大学",
    shortName: "東工大",
    department: "理学院 物理学系",
    officialUrl: "https://www.titech.ac.jp/admissions/",
    problemCount: 8,
  },
  {
    slug: "tohoku",
    name: "東北大学",
    shortName: "東北大",
    department: "理学研究科 物理学専攻",
    officialUrl: "https://www.sci.tohoku.ac.jp/admission/",
    problemCount: 6,
  },
  {
    slug: "osaka",
    name: "大阪大学",
    shortName: "阪大",
    department: "理学研究科 物理学専攻",
    officialUrl: "https://www.sci.osaka-u.ac.jp/ja/admission/",
    problemCount: 6,
  },
];

export function getUniversity(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}
