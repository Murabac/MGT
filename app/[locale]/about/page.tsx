import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPage } from "@/components/AboutPage";
import { isPrefixedLocale } from "@/content/i18n";
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
    title: messages.meta.aboutTitle,
    description: messages.meta.aboutDescription,
    alternates: hreflangAlternates("/about"),
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <AboutPage />;
}
