import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "MGT Group | Maandeeq Global Transportation",
  description:
    "Hargeisa 3PL partner for UN agencies, INGOs, and public institutions — fleet leasing, freight, customs, procurement, and warehousing across Somaliland and Somalia.",
};

export default function Page() {
  return <HomePage />;
}
