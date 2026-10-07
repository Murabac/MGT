export type PageId = 'home' | 'about' | 'services' | 'clients' | 'contact';

export type ViewMode = 'live' | 'figma-frames' | 'components' | 'rationale';

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
