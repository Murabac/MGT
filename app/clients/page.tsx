import type { Metadata } from "next";
import { ClientsPage } from "@/components/ClientsPage";

export const metadata: Metadata = {
  title: "Clients | MGT Group",
  description:
    "UN agencies, INGOs, and public institutions that trust Maandeeq Global Transportation for logistics across Somaliland and Somalia.",
};

export default function Clients() {
  return <ClientsPage />;
}
