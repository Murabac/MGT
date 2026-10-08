"use client";

import { useLocale } from "@/components/LocaleProvider";
import { COMPANY_INFO } from "@/content/site";
import { whatsappHref } from "@/lib/phone";

export function FloatingWhatsApp() {
  const { messages } = useLocale();
  const phone = COMPANY_INFO.phones[0];
  const defaultMessage =
    messages.contact.directPrefill.trim() ||
    messages.home.whatsappPrefill.split("\n")[0] ||
    "Hello MGT Group,";
  const href = whatsappHref(phone, defaultMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={messages.contact.openWhatsApp}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.88 0 1.74.46 3.44 1.33 4.94L2 22l5.33-1.39c1.45.79 3.08 1.21 4.71 1.21h.01c5.46 0 9.91-4.43 9.91-9.88C21.96 6.43 17.5 2 12.04 2zm5.8 14.07c-.24.67-1.4 1.23-1.93 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.29.59-.37.79-.37h.58c.18 0 .43-.07.67.51.24.59.82 2.01.89 2.15.07.15.12.32.02.51-.1.19-.15.32-.29.49-.15.17-.3.37-.43.5-.15.14-.3.29-.13.57.17.27.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1 1.71.81 2 .95.29.15.48.22.55.34.07.12.07.71-.17 1.38z" />
      </svg>
    </a>
  );
}
