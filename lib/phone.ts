/** Format and dial helpers for Somaliland numbers shown on the public site. */

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return phone.trim();
}

/** Digits only, Somaliland international form without + (e.g. 252634848748). */
export function whatsappDigits(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const national = digits.startsWith("0") ? digits.slice(1) : digits;
  return national.startsWith("252") ? national : `252${national}`;
}

/** Convert a displayed Somaliland number (e.g. 063 484 8748) to tel:+252... */
export function telHref(phone: string): string {
  return `tel:+${whatsappDigits(phone)}`;
}

/**
 * Open WhatsApp with an optional pre-filled message.
 * Uses WhatsApp Web so desktop browsers go straight into chat
 * instead of the api.whatsapp.com "Open app / Download" landing page.
 */
export function whatsappHref(phone: string, message?: string): string {
  const params = new URLSearchParams({ phone: whatsappDigits(phone) });
  if (message?.trim()) {
    params.set("text", message.trim());
  }
  return `https://web.whatsapp.com/send?${params.toString()}`;
}
