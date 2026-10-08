import type { Locale } from "@/content/i18n";
import { ar } from "./ar";
import { en } from "./en";
import { so } from "./so";
import type { Messages } from "./types";

const ALL: Record<Locale, Messages> = { en, so, ar };

export function getMessages(locale: Locale): Messages {
  return ALL[locale] ?? en;
}

export type { Messages };
