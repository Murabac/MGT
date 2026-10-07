import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact | MGT Group",
  description:
    "Request a logistics quote or field dispatch from Maandeeq Global Transportation in Hargeisa, Somaliland.",
};

export default function Contact() {
  return (
    <Suspense
      fallback={
        <main id="main" className="mx-auto w-full max-w-page px-4 py-16 sm:px-6">
          <p className="text-sm text-muted">Loading contact form…</p>
        </main>
      }
    >
      <ContactPage />
    </Suspense>
  );
}
