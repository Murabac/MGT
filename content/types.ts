export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  fleetOrItems?: string[];
  fieldNote?: string;
}

export interface ClientItem {
  name: string;
  workDone: string;
  locationOrProject?: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ContactFormState {
  name: string;
  organization: string;
  phone: string;
  service: string;
  message: string;
}

export type ServiceCategoryId = "all" | "fleet" | "freight" | "supply";

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  serviceIds?: string[];
}

export interface NavLink {
  href: string;
  label: string;
}
