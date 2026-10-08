"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/content/i18n";
import { DEFAULT_LOCALE } from "@/content/i18n";
import type { Messages } from "@/content/messages/types";
import { getMessages } from "@/content/messages";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  messages: getMessages(DEFAULT_LOCALE),
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, messages: getMessages(locale) }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
