import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/SiteChrome";
import { isPrefixedLocale, type PrefixedLocale } from "@/content/i18n";

export function generateStaticParams() {
  return [{ locale: "so" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();

  return (
    <SiteChrome locale={locale as PrefixedLocale}>{children}</SiteChrome>
  );
}
