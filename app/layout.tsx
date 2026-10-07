import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SubtleParticles } from "@/components/SubtleParticles";
import { brandAssets } from "@/lib/assets";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const condensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mgtgroup.com"),
  title: {
    default: "MGT Group | Maandeeq Global Transportation",
    template: "%s",
  },
  description:
    "Hargeisa 3PL partner for UN agencies, INGOs, and public institutions — fleet, freight, customs, procurement, and warehousing across Somaliland and Somalia.",
  icons: {
    icon: [{ url: brandAssets.icon192, sizes: "192x192", type: "image/png" }],
    apple: [{ url: brandAssets.appleTouchIcon, sizes: "180x180" }],
  },
  openGraph: {
    title: "MGT Group | Maandeeq Global Transportation",
    description:
      "Third-party logistics across Somaliland and Somalia for UN agencies, INGOs, and public institutions.",
    images: [{ url: brandAssets.ogImage, width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${condensed.variable}`}>
      <body
        className="flex min-h-screen flex-col bg-page font-sans text-ink antialiased"
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only rounded-brand bg-blue px-4 py-2 text-xs font-bold uppercase tracking-wider text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <SubtleParticles />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
