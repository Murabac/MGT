import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";
import { getMessages } from "@/content/messages";
import { hreflangAlternates } from "@/lib/hreflang";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: messages.meta.servicesTitle,
  description: messages.meta.servicesDescription,
  alternates: hreflangAlternates("/services"),
};

export default function Services() {
  return <ServicesPage />;
}
