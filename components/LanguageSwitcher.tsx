"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  localeFromPathname,
  switchLocalePath,
  type Locale,
} from "@/content/i18n";
import { useLocale } from "@/components/LocaleProvider";

const LABELS: Record<Locale, string> = {
  en: "EN",
  so: "SO",
  ar: "AR",
};

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const { messages } = useLocale();
  const current = localeFromPathname(pathname);

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-brand border border-line bg-surface p-0.5 ${className}`}
      role="navigation"
      aria-label={messages.common.language}
    >
      {LOCALES.map((locale) => {
        const active = locale === current;
        const href = switchLocalePath(pathname, locale);
        return (
          <Link
            key={locale}
            href={href}
            hrefLang={locale}
            className={`rounded-[2px] px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${
              active
                ? "bg-blue text-white"
                : "text-ink hover:bg-page"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {LABELS[locale]}
          </Link>
        );
      })}
    </div>
  );
}
