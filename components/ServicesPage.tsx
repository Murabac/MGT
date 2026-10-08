"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";
import { localizedHref } from "@/content/i18n";
import {
  COMPANY_INFO,
  getServiceCategories,
  getServices,
  servicesInCategory,
} from "@/content/site";
import type { ServiceCategoryId } from "@/content/types";
import { serviceImages } from "@/lib/assets";
import { telHref } from "@/lib/phone";

export function ServicesPage() {
  const { locale, messages } = useLocale();
  const services = useMemo(() => getServices(locale), [locale]);
  const serviceCategories = useMemo(
    () => getServiceCategories(locale),
    [locale],
  );
  const urgentPhone = COMPANY_INFO.phones[0];

  const [activeCategory, setActiveCategory] =
    useState<ServiceCategoryId>("all");

  const filteredServices = useMemo(
    () => servicesInCategory(locale, activeCategory),
    [locale, activeCategory],
  );

  return (
    <main id="main" className="w-full bg-page text-ink">
      <PageHero
        eyebrow={messages.services.eyebrow}
        title={messages.services.title}
        description={messages.services.description}
        meta={
          <>
            <span className="font-bold text-white">
              {services.length} {messages.services.metaServices}
            </span>
            <span className="text-[#1b5ec2]">·</span>
            <span>{messages.services.metaCorridors}</span>
          </>
        }
      />

      <section className="sticky top-[96px] z-20 border-b border-line bg-page/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-page flex-wrap items-center gap-1.5 px-4 py-3 sm:px-6">
          {serviceCategories.map((category) => {
            const active = activeCategory === category.id;
            const label =
              category.id === "all"
                ? `${messages.categories.all} (${services.length})`
                : category.label;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-[2px] px-3 py-1.5 text-[11px] font-bold transition-colors ${
                  active
                    ? "bg-blue text-white shadow-sm"
                    : "bg-surface text-ink hover:bg-line/60"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="border-b border-line py-10 md:py-14">
        <div className="mx-auto max-w-page space-y-8 px-4 sm:px-6 md:space-y-10">
          {filteredServices.map((service) => {
            const image = serviceImages[service.id];
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-[160px] overflow-hidden rounded-brand border border-line bg-page"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="relative aspect-[16/10] bg-surface lg:col-span-5 lg:aspect-auto lg:min-h-[280px]">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 420px, 100vw"
                      />
                    ) : null}
                    <span className="absolute left-3 top-3 rounded-[2px] bg-white/95 px-2 py-0.5 font-mono text-xs font-bold tabular-nums text-blue shadow-sm">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-5 p-5 sm:p-6 lg:col-span-7 lg:p-8">
                    <div className="space-y-3">
                      <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                        {service.title}
                      </h2>
                      <p className="text-sm font-medium text-blue">
                        {service.summary}
                      </p>
                      <p className="text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>

                      {service.fleetOrItems && service.fleetOrItems.length > 0 ? (
                        <div className="border-t border-line pt-3">
                          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ink">
                            {service.id === "procurement"
                              ? messages.common.categories
                              : messages.common.availableFleet}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {service.fleetOrItems.map((item) => (
                              <span
                                key={item}
                                className="rounded-[2px] border border-line bg-surface px-2.5 py-1 text-[11px] text-muted"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {service.fieldNote ? (
                        <p className="border-l-2 border-green pl-3 text-xs leading-relaxed text-muted">
                          <span className="font-bold text-green">
                            {messages.common.fieldNote}{" "}
                          </span>
                          {service.fieldNote}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
                      <Link
                        href={localizedHref(
                          locale,
                          `/contact?service=${encodeURIComponent(service.title)}`,
                        )}
                        className="rounded-brand bg-blue px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-deep"
                      >
                        {messages.common.requestThisService}
                      </Link>
                      <a
                        href={telHref(urgentPhone)}
                        className="text-xs font-bold text-ink hover:text-blue"
                      >
                        {messages.common.call} {urgentPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[#167a2a] bg-green py-12 text-white">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-2">
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
                {messages.services.ctaEyebrow}
              </span>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {messages.services.ctaTitle}
              </h2>
              <p className="text-xs text-white/80 sm:text-sm">
                {messages.services.dispatchDesk}{" "}
                <a
                  href={telHref(urgentPhone)}
                  className="font-mono font-bold text-white hover:text-yellow"
                >
                  {urgentPhone}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={localizedHref(locale, "/clients")}
                className="rounded-brand border border-white/35 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {messages.common.seePartners}
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
