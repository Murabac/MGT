import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPage } from "@/components/ContactPage";
import { getMessages } from "@/content/messages";
import { hreflangAlternates } from "@/lib/hreflang";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: messages.meta.contactTitle,
  description: messages.meta.contactDescription,
  alternates: hreflangAlternates("/contact"),
};

export default function Contact() {
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
