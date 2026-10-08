"use client";

import { useEffect } from "react";
import type { Locale } from "@/content/i18n";
import { localeDir, localeLang } from "@/content/i18n";

/** Syncs <html lang/dir> for locale-prefixed routes (root layout owns <html>). */
export function DocumentLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeLang(locale);
    document.documentElement.dir = localeDir(locale);
    return () => {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    };
  }, [locale]);

  return null;
}
