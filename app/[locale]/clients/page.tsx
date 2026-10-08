import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClientsPage } from "@/components/ClientsPage";
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
    title: messages.meta.clientsTitle,
    description: messages.meta.clientsDescription,
    alternates: hreflangAlternates("/clients"),
  };
}

export default async function Clients({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <ClientsPage />;
}
