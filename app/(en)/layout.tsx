import { SiteChrome } from "@/components/SiteChrome";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteChrome locale="en">{children}</SiteChrome>;
}
