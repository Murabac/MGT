import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getMessages } from "@/content/messages";
import { hreflangAlternates } from "@/lib/hreflang";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: messages.meta.homeTitle,
  description: messages.meta.homeDescription,
  alternates: hreflangAlternates("/"),
};

export default function Page() {
  return <HomePage />;
}
