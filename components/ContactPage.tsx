"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { COMPANY_INFO, SERVICES } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/phone";

export function ContactPage() {
  const searchParams = useSearchParams();
  const prefillService = searchParams.get("service") ?? "";

  const resolvedService = useMemo(() => {
    if (!prefillService) return SERVICES[0].title;
    const match = SERVICES.find(
      (service) =>
        service.title === prefillService ||
        service.id === prefillService ||
        service.title.toLowerCase() === prefillService.toLowerCase(),
    );
    return match?.title ?? prefillService;
  }, [prefillService]);

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(resolvedService);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setService(resolvedService);
  }, [resolvedService]);

  const urgentPhone = COMPANY_INFO.phones[0];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      "Hello MGT Group,",
      "",
      "I would like to submit a logistics enquiry.",
      `Name: ${name.trim() || "—"}`,
      `Organization: ${organization.trim() || "—"}`,
      `Phone: ${phone.trim() || "—"}`,
      `Service: ${service}`,
    ];
    if (message.trim()) {
      lines.push("", "Details:", message.trim());
    }
    lines.push("", "Please advise on availability and next steps.");

    window.open(
      whatsappHref(urgentPhone, lines.join("\n")),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main id="main" className="w-full bg-page text-ink">
      <PageHero
        eyebrow="Contact & Dispatch"
        title="Request a quote or field dispatch."
        description="Send your requirement to the Hargeisa desk. We coordinate fleet, freight, customs, procurement, and warehousing for UN, INGO, and public programs."
        meta={
          <>
            <span className="font-bold text-white">{COMPANY_INFO.office}</span>
            <span className="text-[#1b5ec2]">·</span>
            <span>Response via WhatsApp or phone</span>
          </>
        }
      />

      <section className="border-b border-line py-12 md:py-16">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
                  Enquiry form
                </span>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink">
                  Tell us what you need
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Submitting opens WhatsApp with your details ready to send to
                  our dispatch line.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-ink"
                    >
                      Full name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      autoComplete="name"
                      className="h-[46px] w-full rounded-brand border border-line bg-surface px-3.5 text-sm font-medium text-ink outline-none focus:border-blue"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-org"
                      className="block text-xs font-bold uppercase tracking-wider text-ink"
                    >
                      Organization
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={organization}
                      onChange={(event) => setOrganization(event.target.value)}
                      autoComplete="organization"
                      className="h-[46px] w-full rounded-brand border border-line bg-surface px-3.5 text-sm font-medium text-ink outline-none focus:border-blue"
                      placeholder="Agency / NGO / company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-ink"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      autoComplete="tel"
                      className="h-[46px] w-full rounded-brand border border-line bg-surface px-3.5 text-sm font-medium text-ink outline-none focus:border-blue"
                      placeholder="Your contact number"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-bold uppercase tracking-wider text-ink"
                    >
                      Service needed
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(event) => setService(event.target.value)}
                      className="h-[46px] w-full rounded-brand border border-line bg-surface px-3.5 text-sm font-medium text-ink outline-none focus:border-blue"
                    >
                      {SERVICES.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.number}. {item.title}
                        </option>
                      ))}
                      {!SERVICES.some((item) => item.title === service) &&
                      service ? (
                        <option value={service}>{service}</option>
                      ) : null}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-ink"
                  >
                    Route, cargo, or additional details
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={5}
                    className="w-full resize-y rounded-brand border border-line bg-surface px-3.5 py-3 text-sm font-medium text-ink outline-none focus:border-blue"
                    placeholder="Corridor, dates, cargo type, passenger count, or any special requirements…"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-brand bg-blue px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-deep"
                  >
                    Send on WhatsApp →
                  </button>
                  <a
                    href={telHref(urgentPhone)}
                    className="text-xs font-bold text-ink hover:text-blue"
                  >
                    Or call {urgentPhone}
                  </a>
                </div>
              </form>
            </div>

            <aside className="space-y-5 lg:col-span-5">
              <div className="rounded-brand border border-line bg-surface p-5 sm:p-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-ink">
                  Hargeisa operations
                </h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">
                      Office
                    </dt>
                    <dd className="mt-1 text-ink">{COMPANY_INFO.office}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-medium text-blue hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">
                      Dispatch lines
                    </dt>
                    <dd className="mt-1.5 space-y-1.5">
                      {COMPANY_INFO.fourMainPhones.map((number) => (
                        <a
                          key={number}
                          href={telHref(number)}
                          className="block font-mono font-bold text-ink hover:text-blue"
                        >
                          {number}
                        </a>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-brand border border-line bg-page p-5 sm:p-6">
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
                  Prefer WhatsApp directly?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Message the main dispatch number without the form — useful for
                  urgent field requests.
                </p>
                <a
                  href={whatsappHref(
                    urgentPhone,
                    "Hello MGT Group, I need urgent logistics support.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-brand bg-[#25D366] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#1ebe57]"
                >
                  Open WhatsApp chat
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-[#167a2a] bg-green py-12 text-white">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-2">
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
                Work with MGT
              </span>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Review our services before you enquire
              </h2>
              <p className="text-xs text-white/80 sm:text-sm">
                Twelve logistics capabilities across Somaliland and Somalia.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-brand border border-white/35 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View services
              </Link>
              <Link
                href="/clients"
                className="rounded-brand bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-green transition-colors hover:bg-yellow hover:text-ink"
              >
                See partners
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
