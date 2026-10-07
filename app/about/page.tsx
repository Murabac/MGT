import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About | MGT Group",
  description:
    "Maandeeq Global Transportation Ltd. — Hargeisa 3PL partner for UN agencies, INGOs, and public institutions across Somaliland and Somalia.",
};

export default function About() {
  return <AboutPage />;
}
