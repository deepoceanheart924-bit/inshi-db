export const SITE_URL = "https://inshi-db.vercel.app";
export const SITE_NAME = "院試DB";

type JsonLdData = Record<string, unknown> | Array<Record<string, unknown>>;

/**
 * JSON-LD 構造化データを <script type="application/ld+json"> として埋め込む。
 * Server Component 前提（静的HTMLに含まれ、クローラが直接読める）。
 */
export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description:
      "大学院入試（院試）の過去問を、丁寧な解答解説とともに整理する物理学・数学中心のオープンデータベース。",
    inLanguage: "ja",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "ja",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * 階層ナビを表す BreadcrumbList。
 * items は順序付き: [{name: "ホーム", url: "/"}, {name: "東大", url: "/universities/todai"}, ...]
 * 末端（現在ページ）は url を省略可（Schema.org では item 無しで可）。
 */
export function breadcrumbSchema(items: Array<{ name: string; url?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: `${SITE_URL}${it.url}` } : {}),
    })),
  };
}

/**
 * 個別解答ページ向け。オリジナルの解説コンテンツを Article として公開。
 * 問題文は著作権上再掲していないので、ここでは「解答解説」の記事として扱う。
 */
export function articleSchema(args: {
  url: string;
  headline: string;
  description: string;
  keywords?: string[];
  about?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${args.url}`,
    },
    headline: args.headline,
    description: args.description,
    inLanguage: "ja",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(args.keywords ? { keywords: args.keywords.join(", ") } : {}),
    ...(args.about ? { about: args.about } : {}),
  };
}

/**
 * 試験（大学×年度×科目）ページ向け。学習リソースとして扱う。
 */
export function learningResourceSchema(args: {
  url: string;
  name: string;
  description: string;
  educationalLevel?: string;
  teaches?: string;
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: args.name,
    url: `${SITE_URL}${args.url}`,
    description: args.description,
    inLanguage: args.inLanguage ?? "ja",
    ...(args.educationalLevel ? { educationalLevel: args.educationalLevel } : {}),
    ...(args.teaches ? { teaches: args.teaches } : {}),
    learningResourceType: "ExamPrep",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * 一覧ページ向け（大学の全問題一覧など）。
 */
export function itemListSchema(args: {
  url: string;
  name: string;
  items: Array<{ url: string; name: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: args.name,
    url: `${SITE_URL}${args.url}`,
    numberOfItems: args.items.length,
    itemListElement: args.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${it.url}`,
      name: it.name,
    })),
  };
}
