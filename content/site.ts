import type {
  ServiceItem,
  ClientItem,
  ValueItem,
  ServiceCategory,
  NavLink,
} from "./types";

/**
 * Public site copy from the design reference.
 * Keep content/site-context.json as the company-profile source of record.
 * Confirm before launch: GM name, 100% corridor coverage, and 24/7 NGO emergency line.
 */

export const COMPANY_INFO = {
  brand: 'MGT Group',
  legalName: 'Maandeeq Global Transportation Ltd.',
  shortName: 'Maandeeq Global Transportation',
  established: '2023',
  office: '150 Street, Kodbuur District, Hargeisa, Somaliland',
  website: 'www.mgtgroup.com',
  tagline: 'MGT is your strongest service provider',
  email: 'maandeeqGlobalTransportation@gmail.com',
  generalManager: 'Mohamed Omar Farah',
  gmNote: 'Confirm with the client before the name is locked in the design.',
  oneSentenceDescription:
    'Maandeeq Global Transportation is a Hargeisa logistics company. It moves people and cargo across Somaliland and Somalia, and supports NGOs, UN agencies, and public projects with transport, freight, customs, procurement, and warehousing.',
  whatTheySell:
    'Third-party logistics. MGT sits between the organization that needs something moved or supplied and the vehicles, warehouses, and clearances that get it done.',
  phones: [
    '063 484 8748',
    '065 484 8748',
    '063 441 8722',
    '065 441 8722',
    '063 752 6666',
    '063 410 8850',
    '065 410 8850',
  ],
  fourMainPhones: [
    '063 484 8748',
    '065 484 8748',
    '063 441 8722',
    '065 441 8722',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'vehicle-leasing',
    number: '01',
    title: 'Vehicle leasing and light transport',
    summary: 'Reliable 4x4 vehicles and passenger transport for field missions and urban operations.',
    description:
      'We supply light vehicles, passenger transport, and rugged four-wheel drives on flexible daily, monthly, or project-length leases. All vehicles undergo routine mechanical inspection, carry emergency recovery equipment, and can be contracted with vetted, professional drivers experienced in Somaliland and Somalia routes.',
    fleetOrItems: [
      '4x4 Surf',
      'Toyota Prado',
      'Toyota Hilux',
      'Toyota Land Cruiser',
      'Passenger van',
      'Mini bus',
      '30-seater bus',
    ],
    fieldNote:
      'Used by INGOs and UN teams across Somaliland, including VSF Suisse, Zamzam Foundation, and the Ministry of Agricultural Development on the Barwaaqo project.',
  },
  {
    id: 'trucks-heavy-transport',
    number: '02',
    title: 'Trucks and heavy transport',
    summary: 'Medium and heavy-duty commercial haulage for bulk cargo and aid consignments.',
    description:
      'Heavy haulage solutions designed for bulk supplies, construction supplies, container transfers, and humanitarian distributions. Managed with load security protocols, stowage planning, and dedicated dispatch coordinators.',
    fleetOrItems: [
      '24-truck rental',
      '12-tonne rental',
      'Lorry rental',
    ],
  },
  {
    id: 'road-freight',
    number: '03',
    title: 'Road freight forwarding',
    summary: 'Overland corridor freight across Somaliland and Somalia with established security protocols.',
    description:
      'Overland freight to Somaliland and Somalia, with security and a set delivery time. Loading and stowage depend on the type of goods to ensure intact arrival even on unpaved secondary corridors.',
  },
  {
    id: 'sea-air-freight',
    number: '04',
    title: 'Sea and air freight',
    summary: 'Ocean container shipping through regional ports and expedited air cargo connections.',
    description:
      'Sea freight when the shipment should travel by ocean via Berbera and regional gateways. Air freight, through established associates at Egal International Airport and regional hubs, when the cargo is time-sensitive or urgently required.',
  },
  {
    id: 'procurement',
    number: '05',
    title: 'Procurement',
    summary: 'Sourcing food items, non-food items, and hygiene materials with audit-ready documentation.',
    description:
      'The job is to buy what the client actually needs, at a lower total cost. We conduct verifiable market surveys, quality assurance checks, and source compliant consignments meeting strict donor standards.',
    fleetOrItems: [
      'Food items',
      'Non-food items (NFI kits)',
      'Hygiene materials and health kits',
    ],
  },
  {
    id: 'customs-clearance',
    number: '06',
    title: 'Customs clearance',
    summary: 'Full administrative clearance for air, sea, and overland cross-border cargo.',
    description:
      'Cargo entering Somaliland by air, sea, or road requires rigorous document vetting, tariff classification, and port clearance. We coordinate with port authorities, customs desks, and line ministries to prevent storage demurrage and release delays.',
  },
  {
    id: 'tax-exemption',
    number: '07',
    title: 'Tax exemption processing',
    summary: 'Expedited duty and tax waivers for qualifying UN agencies and accredited INGOs.',
    description:
      'For international NGOs and UN organizations that are entitled to exemption in Somaliland. We prepare official dossiers, process approvals through relevant government ministries, and manage verification protocols.',
  },
  {
    id: 'disinfection',
    number: '08',
    title: 'Disinfection',
    summary: 'Sanitation of operational compounds, transport assets, and storage facilities.',
    description:
      'Premises and goods disinfection against infectious bacteria, viruses, and malaria risk. Conducted using certified biocidal compounds safe for working offices, clinics, and supply chains.',
  },
  {
    id: 'fumigation-pest-control',
    number: '09',
    title: 'Fumigation and pest control',
    summary: 'Phytosanitary treatment, packing, and crating for stored grain and vulnerable goods.',
    description:
      'Professional fumigation against grain borers, rodents, and termites. Also packing and crating, including cargo that must be treated before storage or cross-border transport.',
  },
  {
    id: 'property-site-support',
    number: '10',
    title: 'Property and site support',
    summary: 'Material transfers between institutional compounds and essential facility maintenance.',
    description:
      'Moving materials between compounds, office relocation support, loading crews, and light site maintenance for humanitarian organizations managing multiple project bases.',
  },
  {
    id: 'warehouse-management',
    number: '11',
    title: 'Warehouse management',
    summary: 'Secure short- and long-term storage facilities with 24/7 security and inventory controls.',
    description:
      'Short- and long-term storage, loading and unloading, labeling and packing, fumigation, pest control, packing and crating. Warehouses have theft and fire alarms and round-the-clock guards with strict ledger tracking.',
  },
  {
    id: 'travel-services',
    number: '12',
    title: 'Travel services',
    summary: 'Coordinated passenger travel support alongside freight and leasing operations.',
    description:
      'A travel unit beside car rental and freight, for organizations that need people moved as well as cargo. Route planning, airport transfers, regional ticketing, and vetted transit itineraries.',
  },
];

export const CLIENTS: ClientItem[] = [
  {
    name: 'Vétérinaires Sans Frontières Suisse (VSF Suisse)',
    workDone: 'Vehicle rental',
  },
  {
    name: 'Plan International',
    workDone: 'Motor-vehicle hire, Somaliland and Somalia',
  },
  {
    name: 'Zamzam Foundation',
    workDone: 'Vehicle rental',
  },
  {
    name: 'United Nations Assistance Mission in Somalia (UNSOM)',
    workDone: 'Client',
  },
  {
    name: 'World Food Programme (WFP)',
    workDone: 'Procurement and delivery of supplies',
  },
  {
    name: 'Welthungerhilfe (WHH)',
    workDone: 'Distribution of hygiene kits and tools in the Sanaag region',
  },
  {
    name: 'One Earth Future',
    workDone: 'Client',
  },
  {
    name: 'Cheetah Conservation Fund (CCF)',
    workDone: 'Vehicle rental for field work in Maroodi Jeex',
  },
  {
    name: 'Ministry of Agricultural Development, Somaliland',
    workDone: 'Transport for the World Bank Barwaaqo project',
  },
];

export const TESTIMONIAL = {
  quote:
    'Throughout our collaboration, your company has demonstrated a high level of professionalism, reliability, and efficiency in meeting our logistical needs.',
  attribution: 'Eng. Abdirisak Ahmed Gas',
  role: 'Director General',
  organization: 'Ministry of Agricultural Development, Somaliland',
  context: 'Recommendation for transport on the World Bank Barwaaqo project.',
};

export const GM_SHORT_QUOTE = {
  quote:
    'MGT sits between the organization that needs something moved or supplied and the vehicles, warehouses, and clearances that get it done. We are committed to speed, accountability, and dependable field operations.',
  author: 'Mohamed Omar Farah',
  role: 'General Manager',
};

export const COMPANY_STORY_PARAGRAPHS = [
  'Maandeeq Global Transportation Ltd. (MGT Group) was established in 2023 in Hargeisa to deliver third-party logistics across Somaliland and Somalia. We operate directly at the critical junction between international organizations, public institutions, and the ground assets needed to deliver field programs.',
  'Operating in the Horn of Africa requires practical knowledge of road corridors, regional port processes, and rigorous administrative compliance. MGT maintains a diverse transport fleet, experienced drivers, bonded customs personnel, and clean storage facilities that satisfy the audit standards of international donors.',
  'Whether moving personnel across Maroodi Jeex, forwarding consignments into Sanaag, or clearing sea cargo through Berbera, our focus remains unchanged: plain, reliable communication, agreed timelines, and absolute duty of care for cargo and passengers.',
];

export const VISION_MISSION = {
  vision:
    'To be the most reliable and trusted logistics partner across Somaliland and the broader Horn of Africa, recognized by humanitarian agencies and public institutions for institutional discipline and operational integrity.',
  mission:
    'To provide dependable, safe, and cost-efficient transportation, procurement, customs clearance, and warehousing services that enable our clients to achieve their program objectives without logistical delay.',
};

export const VALUES: ValueItem[] = [
  {
    title: 'Reliability',
    description: 'We fulfill contracted schedules and delivery commitments without compromise.',
  },
  {
    title: 'Safety and Security',
    description: 'We maintain rigorous standards for fleet mechanics, route risk management, and cargo stowage.',
  },
  {
    title: 'Integrity',
    description: 'We operate with transparent pricing, honest reporting, and zero tolerance for non-compliance.',
  },
  {
    title: 'Accountability',
    description: 'Every consignment, vehicle dispatch, and customs dossier has a designated operational owner.',
  },
  {
    title: 'Efficiency',
    description: 'We eliminate procedural friction and port delays to deliver lowest total operational cost.',
  },
  {
    title: 'Client Focus',
    description: 'We adapt fleet configurations and supply solutions to the exact operational needs of donor projects.',
  },
  {
    title: 'Local Knowledge',
    description: 'Our ground teams bring deep familiarity with terrain, authorities, and corridor realities.',
  },
  {
    title: 'Continuous Improvement',
    description: 'We regularly upgrade our fleet safety protocols, facility standards, and team skills.',
  },
];

export const GM_FULL_MESSAGE = [
  'Welcome to Maandeeq Global Transportation Ltd. Since our founding in Hargeisa in 2023, our mission has been straightforward: to give international non-governmental organizations, United Nations bodies, and government development initiatives a dependable logistical spine in Somaliland and Somalia.',
  'Logistics in our region is not simply a matter of dispatching vehicles; it is about accountability, strict adherence to duty of care, and understanding the complex conditions of cross-country corridors. When a project team heads into Maroodi Jeex or supplies are moved into Sanaag, reliability is non-negotiable.',
  'At MGT, we view ourselves as an operational bridge. We take on the operational friction of vehicle leasing, preventative maintenance, customs paperwork, tax exemptions, and warehouse security so that humanitarian and development professionals can concentrate on their core mandate.',
  'Every member of our team—from our logistics coordinators in Kodbuur District to our drivers and clearing agents at the port—is trained to communicate plainly, respect agreed timetables, and uphold institutional standards.',
  'We thank our partners, including VSF Suisse, Plan International, WFP, WHH, CCF, and the Ministry of Agricultural Development, for their ongoing trust. We look forward to supporting your upcoming missions with the same diligence.',
];

export const ORG_CHART_UNITS = [
  {
    title: 'General Director',
    role: 'Executive Oversight & Strategic Governance',
    isLead: true,
  },
  {
    title: 'Deputy Director',
    role: 'Operational Coordination & Institutional Relations',
    isDeputy: true,
  },
  {
    title: 'Human Resource Manager',
    subtitle: 'Personnel, vetting, driver training & compliance',
    unitId: 'hr',
  },
  {
    title: 'Operational Manager',
    subtitle: 'Daily dispatch, fleet tracking & route coordination',
    unitId: 'ops',
  },
  {
    title: 'Freight Forwarding & Warehouse',
    subtitle: 'Sea/air/road freight, customs & secure storage',
    unitId: 'freight',
  },
  {
    title: 'Car Rental',
    subtitle: '4x4 fleet leasing, passenger transport & vehicle maintenance',
    unitId: 'rental',
  },
  {
    title: 'Travel and Tourist Services',
    subtitle: 'Passenger itineraries, tickets & liaison services',
    unitId: 'travel',
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "all", label: "All" },
  {
    id: "fleet",
    label: "Fleet & Haulage",
    serviceIds: ["vehicle-leasing", "trucks-heavy-transport", "travel-services"],
  },
  {
    id: "freight",
    label: "Freight & Customs",
    serviceIds: [
      "road-freight",
      "sea-air-freight",
      "customs-clearance",
      "tax-exemption",
    ],
  },
  {
    id: "supply",
    label: "Warehousing & Supply",
    serviceIds: [
      "procurement",
      "warehouse-management",
      "fumigation-pest-control",
      "disinfection",
      "property-site-support",
    ],
  },
];

export const DISPATCH_ROUTES = [
  {
    value: "Hargeisa Urban & Regional",
    label: "Hargeisa & Surrounding Districts",
  },
  {
    value: "Hargeisa to Burao corridor",
    label: "Hargeisa — Burao Corridor",
  },
  {
    value: "Berbera Port maritime clearance",
    label: "Berbera Port Gateway & Customs",
  },
  {
    value: "Sanaag / Erigavo field mission",
    label: "Sanaag Region (Erigavo & Eastern)",
  },
  {
    value: "Maroodi Jeex field operations",
    label: "Maroodi Jeex Field Operations",
  },
  {
    value: "Cross-border Somaliland to Somalia",
    label: "Overland Transit to Somalia",
  },
] as const;

export const HOME_METRICS = [
  {
    value: "12",
    label: "Specialized Services",
    detail: null,
  },
  {
    value: "9+",
    label: "Institutional Partners",
    detail: null,
  },
  {
    value: "100%",
    label: "Corridor Coverage",
    detail: "Hargeisa, Berbera Port, Burao, Sanaag, Somalia",
    note: "Design claim beyond the company profile — confirm before launch.",
  },
  {
    value: "24/7",
    label: "Dispatch Support",
    detail: null,
    note: "Design claim for NGO emergency line — confirm before launch.",
  },
] as const;

export function servicesInCategory(
  categoryId: ServiceCategory["id"],
): ServiceItem[] {
  const category = SERVICE_CATEGORIES.find((c) => c.id === categoryId);
  if (!category || category.id === "all" || !category.serviceIds) {
    return SERVICES;
  }
  return SERVICES.filter((service) =>
    category.serviceIds!.includes(service.id),
  );
}

export function getServiceById(id: string): ServiceItem | undefined {
  return SERVICES.find((service) => service.id === id);
}

