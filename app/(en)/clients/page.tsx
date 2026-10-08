import type { Metadata } from "next";
import { ClientsPage } from "@/components/ClientsPage";
import { getMessages } from "@/content/messages";
import { hreflangAlternates } from "@/lib/hreflang";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: messages.meta.clientsTitle,
  description: messages.meta.clientsDescription,
  alternates: hreflangAlternates("/clients"),
};

export default function Clients() {
  return <ClientsPage />;
}
