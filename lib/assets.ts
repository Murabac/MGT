/** Public asset paths for the site. Source originals live in /brand and the design reference. */

export const brandAssets = {
  logoOnLight: "/brand/logo-horizontal-on-light.png",
  logoOnBlue: "/brand/logo-horizontal.png",
  mark: "/brand/mgt-mark.png",
  markOnLight: "/brand/mgt-mark-on-light.png",
  ogImage: "/brand/og-image.png",
  appleTouchIcon: "/brand/apple-touch-icon.png",
  icon192: "/brand/icon-192.png",
  icon512: "/brand/icon-512.png",
} as const;

export const siteImages = {
  portContainersDusk: {
    src: "/images/port-containers-dusk.jpg",
    alt: "Shipping containers at dusk near a logistics corridor",
  },
  fieldTransportVehicle: {
    src: "/images/field-transport-vehicle.jpg",
    alt: "MGT field transport vehicle on a Somaliland route",
  },
  warehouseCargoDepot: {
    src: "/images/warehouse-cargo-depot.jpg",
    alt: "Cargo and supplies staged in a warehouse depot",
  },
  generalManager: {
    src: "/images/general-manager.jpg",
    alt: "Mohamed Omar Farah, General Manager of MGT Group",
  },
} as const;

export const valueImages: Record<string, { src: string; alt: string }> = {
  reliability: {
    src: "/images/values/reliability.jpg",
    alt: "Cargo truck arriving on schedule for a reliable handoff",
  },
  "safety-and-security": {
    src: "/images/values/safety-and-security.jpg",
    alt: "Mechanic performing a fleet safety inspection",
  },
  integrity: {
    src: "/images/values/integrity.jpg",
    alt: "Transparent compliance documents prepared for review",
  },
  accountability: {
    src: "/images/values/accountability.jpg",
    alt: "Coordinator checking consignments against a ledger",
  },
  efficiency: {
    src: "/images/values/efficiency.jpg",
    alt: "Forklift loading cargo for efficient dispatch",
  },
  "client-focus": {
    src: "/images/values/client-focus.jpg",
    alt: "Logistics team planning a client fleet solution",
  },
  "local-knowledge": {
    src: "/images/values/local-knowledge.jpg",
    alt: "Driver assessing a Somaliland corridor route",
  },
  "continuous-improvement": {
    src: "/images/values/continuous-improvement.jpg",
    alt: "Team training on upgraded fleet safety protocols",
  },
};

export const serviceImages: Record<string, { src: string; alt: string }> = {
  "vehicle-leasing": {
    src: "/images/services/vehicle-leasing.jpg",
    alt: "4x4 field vehicles ready for leasing",
  },
  "trucks-heavy-transport": {
    src: "/images/services/trucks-heavy-transport.jpg",
    alt: "Heavy trucks for bulk cargo haulage",
  },
  "road-freight": {
    src: "/images/services/road-freight.jpg",
    alt: "Road freight convoy on an overland corridor",
  },
  "sea-air-freight": {
    src: "/images/services/sea-air-freight.jpg",
    alt: "Port containers and air cargo staging",
  },
  procurement: {
    src: "/images/services/procurement.jpg",
    alt: "Food and NFI supplies staged for procurement",
  },
  "customs-clearance": {
    src: "/images/services/customs-clearance.jpg",
    alt: "Customs clearance documents and cargo",
  },
  "tax-exemption": {
    src: "/images/services/tax-exemption.jpg",
    alt: "Tax exemption dossiers for accredited organizations",
  },
  disinfection: {
    src: "/images/services/disinfection.jpg",
    alt: "Facility disinfection in a warehouse aisle",
  },
  "fumigation-pest-control": {
    src: "/images/services/fumigation-pest-control.jpg",
    alt: "Grain storage fumigation and pest control",
  },
  "property-site-support": {
    src: "/images/services/property-site-support.jpg",
    alt: "Material transfer and compound site support",
  },
  "warehouse-management": {
    src: "/images/services/warehouse-management.jpg",
    alt: "Secure warehouse with inventory racking",
  },
  "travel-services": {
    src: "/images/services/travel-services.jpg",
    alt: "Passenger transfer vehicle at a regional airport",
  },
};
