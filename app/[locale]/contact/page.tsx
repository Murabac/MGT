import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContactPage } from "@/components/ContactPage";
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
    title: messages.meta.contactTitle,
    description: messages.meta.contactDescription,
    alternates: hreflangAlternates("/contact"),
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return (
    <Suspense
      fallback={
        <main id="main" className="mx-auto w-full max-w-page px-4 py-16 sm:px-6">
          <p className="text-sm text-muted">…</p>
        </main>
      }
    >
      <ContactPage />
    </Suspense>
  );
}
