import type { MetadataRoute } from "next";
import { universities } from "@/data/universities";
import { problems, getYears, getExams } from "@/data/problems";
import { topics } from "@/data/topics";
import { books, BookField } from "@/data/books";
import { FIELD_LABELS, Field } from "@/data/types";
import { BOOKS_ENABLED } from "@/lib/features";

const BASE_URL = "https://inshi-db.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/takedown`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/fields/all`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/topics`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ...(BOOKS_ENABLED
      ? [{ url: `${BASE_URL}/books`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 }]
      : []),
  ];

  const topicPages: MetadataRoute.Sitemap = topics.map((t) => ({
    url: `${BASE_URL}/topics/${t.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const bookFields = Array.from(new Set(books.map((b) => b.field))) as BookField[];
  const bookFieldPages: MetadataRoute.Sitemap = BOOKS_ENABLED
    ? bookFields.map((f) => ({
        url: `${BASE_URL}/books/${f}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }))
    : [];

  const fieldPages: MetadataRoute.Sitemap = (Object.keys(FIELD_LABELS) as Field[]).map((f) => ({
    url: `${BASE_URL}/fields/${f}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const universityPages: MetadataRoute.Sitemap = universities.map((u) => ({
    url: `${BASE_URL}/universities/${u.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const universityYearPages: MetadataRoute.Sitemap = universities.flatMap((u) =>
    getYears(u.slug).map((year) => ({
      url: `${BASE_URL}/universities/${u.slug}/${year}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }))
  );

  const problemPages: MetadataRoute.Sitemap = problems.map((p) => ({
    url: `${BASE_URL}/problems/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const examPages: MetadataRoute.Sitemap = getExams().map((e) => ({
    url: `${BASE_URL}/exams/${e.universitySlug}/${e.year}/${e.subjectSlug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...fieldPages, ...universityPages, ...universityYearPages, ...examPages, ...problemPages, ...topicPages, ...bookFieldPages];
}
