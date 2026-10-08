import { DocumentLang } from "@/components/DocumentLang";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SubtleParticles } from "@/components/SubtleParticles";
import type { Locale } from "@/content/i18n";
import { getMessages } from "@/content/messages";

export function SiteChrome({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const messages = getMessages(locale);

  return (
    <LocaleProvider locale={locale}>
      <DocumentLang locale={locale} />
      <div
        className={`flex min-h-screen flex-1 flex-col ${
          locale === "ar" ? "font-arabic" : ""
        }`}
      >
        <a
          href="#main"
          className="sr-only rounded-brand bg-blue px-4 py-2 text-xs font-bold uppercase tracking-wider text-white focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50"
        >
          {messages.nav.skipToContent}
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <SubtleParticles />
        <FloatingWhatsApp />
      </div>
    </LocaleProvider>
  );
}
