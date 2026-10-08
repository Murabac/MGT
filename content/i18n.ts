export const LOCALES = ["en", "so", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const PREFIXED_LOCALES = ["so", "ar"] as const;
export type PrefixedLocale = (typeof PREFIXED_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isPrefixedLocale(value: string): value is PrefixedLocale {
  return (PREFIXED_LOCALES as readonly string[]).includes(value);
}

export function localeDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localeLang(locale: Locale): string {
  return locale;
}

/** Strip /so or /ar prefix from a pathname. */
export function stripLocalePrefix(pathname: string): string {
  const match = pathname.match(/^\/(so|ar)(?=\/|$)/);
  if (!match) return pathname || "/";
  const rest = pathname.slice(match[0].length);
  return rest.length === 0 ? "/" : rest;
}

/** Detect locale from pathname (`/so/...` → so, else en). */
export function localeFromPathname(pathname: string): Locale {
  const match = pathname.match(/^\/(so|ar)(?=\/|$)/);
  if (match && isPrefixedLocale(match[1])) return match[1];
  return DEFAULT_LOCALE;
}

/** Build a localized href for a locale-invariant path like `/services`. */
export function localizedHref(locale: Locale, path: string): string {
  const normalized =
    !path || path === "/"
      ? "/"
      : path.startsWith("/")
        ? path
        : `/${path}`;
  if (locale === DEFAULT_LOCALE) return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

/** Switch current pathname to another locale, preserving hash. */
export function switchLocalePath(
  pathname: string,
  nextLocale: Locale,
  hash = "",
): string {
  const bare = stripLocalePrefix(pathname);
  const href = localizedHref(nextLocale, bare);
  return hash ? `${href}${hash.startsWith("#") ? hash : `#${hash}`}` : href;
}

export const PAGE_PATHS = [
  "/",
  "/about",
  "/services",
  "/clients",
  "/contact",
] as const;
