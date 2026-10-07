/** Format and dial helpers for Somaliland numbers shown on the public site. */

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return phone.trim();
}

/** Convert a displayed Somaliland number (e.g. 063 484 8748) to tel:+252... */
export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const national = digits.startsWith("0") ? digits.slice(1) : digits;
  return `tel:+252${national}`;
}
