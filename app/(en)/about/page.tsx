import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { getMessages } from "@/content/messages";
import { hreflangAlternates } from "@/lib/hreflang";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: messages.meta.aboutTitle,
  description: messages.meta.aboutDescription,
  alternates: hreflangAlternates("/about"),
};

export default function About() {
  return <AboutPage />;
}
