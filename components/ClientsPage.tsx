"use client";

import Link from "next/link";
import { useMemo } from "react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";
import { localizedHref } from "@/content/i18n";
import { COMPANY_INFO, TESTIMONIAL_META, getClients } from "@/content/site";
import { telHref } from "@/lib/phone";

export function ClientsPage() {
  const { locale, messages } = useLocale();
  const clients = useMemo(() => getClients(locale), [locale]);
  const urgentPhone = COMPANY_INFO.phones[0];

  return (
    <main id="main" className="w-full bg-page text-ink">
      <PageHero
        eyebrow={messages.clients.eyebrow}
        title={messages.clients.title}
        description={messages.clients.description}
        meta={
          <>
            <span className="font-bold text-white">
              {clients.length}+ {messages.clients.metaPartners}
            </span>
            <span className="text-[#1b5ec2]">·</span>
            <span>{messages.clients.metaHub}</span>
          </>
        }
      />

      <section className="border-b border-line py-12 md:py-16">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
              {messages.clients.listEyebrow}
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {messages.clients.listTitle}
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              {messages.clients.listIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <article
                key={client.name}
                className="flex flex-col justify-between rounded-brand border border-line bg-page p-5 transition-colors hover:border-blue/50"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-20 items-center justify-center rounded-[2px] border border-line bg-white px-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.logo}
                      alt={`${client.shortName} logo`}
                      className="max-h-14 w-auto max-w-[200px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold leading-snug text-ink">
                      {client.shortName}
                    </h3>
                    {client.shortName !== client.name ? (
                      <p className="text-[11px] leading-snug text-muted">
                        {client.name}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-4 border-t border-line pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue">
                    {messages.common.scopeOfWork}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {client.workDone}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#093c8b] bg-deep py-14 text-white md:py-16">
        <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 bg-yellow" aria-hidden="true" />
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
                {messages.clients.testimonialEyebrow}
              </span>
            </div>

            <blockquote className="text-xl font-bold leading-relaxed tracking-tight text-white sm:text-2xl md:text-3xl">
              “{messages.testimonial.quote}”
            </blockquote>

            <div className="border-t border-[#1b5ec2]/60 pt-4">
              <cite className="block text-base font-bold not-italic text-white sm:text-lg">
                {TESTIMONIAL_META.attribution}
              </cite>
              <span className="mt-0.5 block text-sm font-semibold text-yellow">
                {messages.testimonial.role}, {TESTIMONIAL_META.organization}
              </span>
              <span className="mt-1 block text-xs text-line">
                {messages.clients.testimonialContext}{" "}
                {messages.testimonial.context}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#167a2a] bg-green py-12 text-white">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-2">
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
                {messages.common.workWithMgt}
              </span>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {messages.clients.ctaTitle}
              </h2>
              <p className="text-xs text-white/80 sm:text-sm">
                {messages.services.dispatchDesk}{" "}
                <a
                  href={telHref(urgentPhone)}
                  className="font-mono font-bold text-white hover:text-yellow"
                >
                  {urgentPhone}
                </a>
                {" · "}
                {COMPANY_INFO.office}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={localizedHref(locale, "/services")}
                className="rounded-brand border border-white/35 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {messages.common.viewServices}
              </Link>
              <Link
                href={localizedHref(locale, "/contact")}
                className="rounded-brand bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-green transition-colors hover:bg-yellow hover:text-ink"
              >
                {messages.common.sendEnquiry}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
