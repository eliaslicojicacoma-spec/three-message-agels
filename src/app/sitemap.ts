import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getStudies } from "@/content/studies";
import { getBooks } from "@/content/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/bible",
    "/bible/search",
    "/bible/verse-favorites",
    "/studies",
    "/books",
    "/verse-of-day",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const studyPages = getStudies().map((study) => ({
    url: `${baseUrl}/studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const bookPages = getBooks().map((book) => ({
    url: `${baseUrl}/books/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...studyPages, ...bookPages];
}
