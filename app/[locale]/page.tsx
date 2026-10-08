import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { isPrefixedLocale, type PrefixedLocale } from "@/content/i18n";
import { getMessages } from "@/content/messages";
import { hreflangAlternates } from "@/lib/hreflang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const messages = getMessages(locale);
  return {
    title: messages.meta.homeTitle,
    description: messages.meta.homeDescription,
    alternates: hreflangAlternates("/"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  void (locale as PrefixedLocale);
  return <HomePage />;
}
