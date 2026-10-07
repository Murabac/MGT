import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services | MGT Group",
  description:
    "Vehicle leasing, heavy transport, road/sea/air freight, customs clearance, procurement, warehousing, and travel services across Somaliland and Somalia.",
};

export default function Services() {
  return <ServicesPage />;
}
