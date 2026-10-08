import type { MetadataRoute } from "next";
import { LOCALES, PAGE_PATHS, localizedHref } from "@/content/i18n";

const BASE = "https://www.mgtgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PAGE_PATHS) {
    for (const locale of LOCALES) {
      const href = localizedHref(locale, path);
      entries.push({
        url: href === "/" ? BASE : `${BASE}${href}`,
        lastModified: new Date(),
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
