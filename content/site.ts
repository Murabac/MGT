import type { Locale } from "@/content/i18n";
import { getMessages } from "@/content/messages";
import type {
  ClientItem,
  NavLink,
  ServiceCategory,
  ServiceItem,
  ValueItem,
} from "./types";

/**
 * Locale-invariant site structure.
 * Translatable copy lives in content/messages/{en,so,ar}.ts
 */

export const COMPANY_INFO = {
  brand: "MGT Group",
  legalName: "Maandeeq Global Transportation Ltd.",
  shortName: "Maandeeq Global Transportation",
  established: "2023",
  office: "150 Street, Kodbuur District, Hargeisa, Somaliland",
  website: "www.mgtgroup.com",
  email: "maandeeqGlobalTransportation@gmail.com",
  generalManager: "Mohamed Omar Farah",
  phones: [
    "063 484 8748",
    "065 484 8748",
    "063 441 8722",
    "065 441 8722",
    "063 752 6666",
    "063 410 8850",
    "065 410 8850",
  ],
  fourMainPhones: [
    "063 484 8748",
    "065 484 8748",
    "063 441 8722",
    "065 441 8722",
  ],
};

const SERVICE_IDS = [
  "vehicle-leasing",
  "trucks-heavy-transport",
  "road-freight",
  "sea-air-freight",
  "procurement",
  "customs-clearance",
  "tax-exemption",
  "disinfection",
  "fumigation-pest-control",
  "property-site-support",
  "warehouse-management",
  "travel-services",
] as const;

const SERVICE_NUMBERS: Record<(typeof SERVICE_IDS)[number], string> = {
  "vehicle-leasing": "01",
  "trucks-heavy-transport": "02",
  "road-freight": "03",
  "sea-air-freight": "04",
  procurement: "05",
  "customs-clearance": "06",
  "tax-exemption": "07",
  disinfection: "08",
  "fumigation-pest-control": "09",
  "property-site-support": "10",
  "warehouse-management": "11",
  "travel-services": "12",
};

export const CLIENT_STRUCTURE = [
  {
    id: "vsf-suisse",
    name: "Vétérinaires Sans Frontières Suisse (VSF Suisse)",
    shortName: "VSF Suisse",
    logo: "/partners/vsf-suisse.svg",
  },
  {
    id: "plan-international",
    name: "Plan International",
    shortName: "Plan International",
    logo: "/partners/plan-international.svg",
  },
  {
    id: "zamzam",
    name: "Zamzam Foundation",
    shortName: "Zamzam Foundation",
    logo: "/partners/zamzam.png",
  },
  {
    id: "unsom",
    name: "United Nations Assistance Mission in Somalia (UNSOM)",
    shortName: "UNSOM",
    logo: "/partners/unsom.svg",
  },
  {
    id: "wfp",
    name: "World Food Programme (WFP)",
    shortName: "World Food Programme",
    logo: "/partners/wfp.svg",
  },
  {
    id: "welthungerhilfe",
    name: "Welthungerhilfe (WHH)",
    shortName: "Welthungerhilfe",
    logo: "/partners/welthungerhilfe.png",
  },
  {
    id: "one-earth-future",
    name: "One Earth Future",
    shortName: "One Earth Future",
    logo: "/partners/one-earth-future.png",
  },
  {
    id: "ccf",
    name: "Cheetah Conservation Fund (CCF)",
    shortName: "Cheetah Conservation Fund",
    logo: "/partners/ccf.svg",
  },
  {
    id: "ministry-agriculture",
    name: "Ministry of Agricultural Development, Somaliland",
    shortName: "Ministry of Agricultural Development",
    logo: "/partners/somaliland.svg",
  },
] as const;

export const VALUE_IDS = [
  "reliability",
  "safety-and-security",
  "integrity",
  "accountability",
  "efficiency",
  "client-focus",
  "local-knowledge",
  "continuous-improvement",
] as const;

export const TESTIMONIAL_META = {
  attribution: "Eng. Abdirisak Ahmed Gas",
  organization: "Ministry of Agricultural Development, Somaliland",
};

export const GM_META = {
  author: "Mohamed Omar Farah",
};

export const NAV_HREFS = [
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/clients", key: "clients" as const },
  { href: "/contact", key: "contact" as const },
];

export const SERVICE_CATEGORY_STRUCTURE: Array<{
  id: ServiceCategory["id"];
  serviceIds?: string[];
}> = [
  { id: "all" },
  {
    id: "fleet",
    serviceIds: ["vehicle-leasing", "trucks-heavy-transport", "travel-services"],
  },
  {
    id: "freight",
    serviceIds: [
      "road-freight",
      "sea-air-freight",
      "customs-clearance",
      "tax-exemption",
    ],
  },
  {
    id: "supply",
    serviceIds: [
      "procurement",
      "warehouse-management",
      "fumigation-pest-control",
      "disinfection",
      "property-site-support",
    ],
  },
];

/** Localized helpers */

export function getServices(locale: Locale): ServiceItem[] {
  const m = getMessages(locale);
  return SERVICE_IDS.map((id) => {
    const copy = m.servicesById[id];
    return {
      id,
      number: SERVICE_NUMBERS[id],
      title: copy.title,
      summary: copy.summary,
      description: copy.description,
      fleetOrItems: copy.fleetOrItems,
      fieldNote: copy.fieldNote,
    };
  });
}

export function getClients(locale: Locale): ClientItem[] {
  const m = getMessages(locale);
  return CLIENT_STRUCTURE.map((client) => ({
    name: client.name,
    shortName: client.shortName,
    logo: client.logo,
    workDone: m.clientsById[client.id]?.workDone ?? "",
  }));
}

export function getValues(locale: Locale): ValueItem[] {
  const m = getMessages(locale);
  return VALUE_IDS.map((id) => ({
    id,
    title: m.valuesById[id].title,
    description: m.valuesById[id].description,
  }));
}

export function getNavLinks(locale: Locale): NavLink[] {
  const m = getMessages(locale);
  return NAV_HREFS.map((item) => ({
    href: item.href,
    label: m.nav[item.key],
  }));
}

export function getServiceCategories(locale: Locale): ServiceCategory[] {
  const m = getMessages(locale);
  return SERVICE_CATEGORY_STRUCTURE.map((cat) => ({
    id: cat.id,
    label: m.categories[cat.id],
    serviceIds: cat.serviceIds,
  }));
}

export function getDispatchRoutes(locale: Locale) {
  return getMessages(locale).routes;
}

export function servicesInCategory(
  locale: Locale,
  categoryId: ServiceCategory["id"],
): ServiceItem[] {
  const services = getServices(locale);
  const category = SERVICE_CATEGORY_STRUCTURE.find((c) => c.id === categoryId);
  if (!category || category.id === "all" || !category.serviceIds) {
    return services;
  }
  return services.filter((service) =>
    category.serviceIds!.includes(service.id),
  );
}

export function getServiceById(
  locale: Locale,
  id: string,
): ServiceItem | undefined {
  return getServices(locale).find((service) => service.id === id);
}

/** English-only aliases for gradual migration (prefer locale helpers). */
export const SERVICES = getServices("en");
export const CLIENTS = getClients("en");
export const VALUES = getValues("en");
export const NAV_LINKS = getNavLinks("en");
export const SERVICE_CATEGORIES = getServiceCategories("en");
export const DISPATCH_ROUTES = getDispatchRoutes("en");
export const TESTIMONIAL = {
  ...TESTIMONIAL_META,
  quote: getMessages("en").testimonial.quote,
  role: getMessages("en").testimonial.role,
  context: getMessages("en").testimonial.context,
};
export const GM_SHORT_QUOTE = {
  ...GM_META,
  quote: getMessages("en").gmShort.quote,
  role: getMessages("en").gmShort.role,
};
export const COMPANY_STORY_PARAGRAPHS =
  getMessages("en").about.storyParagraphs;
export const VISION_MISSION = {
  vision: getMessages("en").about.visionBody,
  mission: getMessages("en").about.missionBody,
};
export const GM_FULL_MESSAGE = getMessages("en").about.gmParagraphs;
export const COMPANY_COPY = {
  tagline: getMessages("en").common.tagline,
  oneSentenceDescription: getMessages("en").common.oneSentenceDescription,
  whatTheySell: getMessages("en").common.whatTheySell,
};
