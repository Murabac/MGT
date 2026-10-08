import type { Metadata } from "next";
import { localizedHref, type Locale } from "@/content/i18n";

const BASE = "https://www.mgtgroup.com";

export function absoluteLocalizedUrl(locale: Locale, path: string): string {
  const href = localizedHref(locale, path);
  return href === "/" ? BASE : `${BASE}${href}`;
}

export function hreflangAlternates(path: string): Metadata["alternates"] {
  return {
    canonical: absoluteLocalizedUrl("en", path),
    languages: {
      en: absoluteLocalizedUrl("en", path),
      so: absoluteLocalizedUrl("so", path),
      ar: absoluteLocalizedUrl("ar", path),
      "x-default": absoluteLocalizedUrl("en", path),
    },
  };
}
