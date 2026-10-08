"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { localizedHref } from "@/content/i18n";
import {
  COMPANY_INFO,
  GM_META,
  TESTIMONIAL_META,
  getClients,
  getDispatchRoutes,
  getServiceCategories,
  getServices,
  servicesInCategory,
} from "@/content/site";
import type { ServiceCategoryId } from "@/content/types";
import { brandAssets, serviceImages, siteImages } from "@/lib/assets";
import { telHref, whatsappHref } from "@/lib/phone";

export function HomePage() {
  const { locale, messages } = useLocale();
  const router = useRouter();
  const services = useMemo(() => getServices(locale), [locale]);
  const dispatchRoutes = useMemo(() => getDispatchRoutes(locale), [locale]);
  const serviceCategories = useMemo(
    () => getServiceCategories(locale),
    [locale],
  );
  const clients = useMemo(() => getClients(locale), [locale]);

  const [activeCategory, setActiveCategory] = useState<ServiceCategoryId>("all");
  const [quickService, setQuickService] = useState(services[0].title);
  const [quickRoute, setQuickRoute] = useState<string>(dispatchRoutes[1].value);
  const urgentPhone = COMPANY_INFO.phones[0];

  useEffect(() => {
    setQuickService(services[0].title);
    setQuickRoute(dispatchRoutes[1].value);
  }, [locale, services, dispatchRoutes]);

  const filteredServices = useMemo(
    () => servicesInCategory(locale, activeCategory),
    [locale, activeCategory],
  );

  const goToContact = (serviceHint?: string) => {
    const query = serviceHint
      ? `?service=${encodeURIComponent(serviceHint)}`
      : "";
    router.push(localizedHref(locale, `/contact${query}`));
  };

  const handleQuickEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const routeLabel =
      dispatchRoutes.find((route) => route.value === quickRoute)?.label ??
      quickRoute;
    const message = messages.home.whatsappPrefill
      .replace("{{service}}", quickService)
      .replace("{{route}}", routeLabel);

    window.open(whatsappHref(urgentPhone, message), "_blank", "noopener,noreferrer");
  };

  return (
    <main id="main" className="w-full bg-page text-ink">
      <section className="relative overflow-hidden border-b border-line pb-16 pt-8 md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface via-white to-white" />

        <div className="relative z-10 mx-auto max-w-page px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-muted">
                <span
                  className="h-2 w-2 animate-pulse rounded-full bg-green"
                  aria-hidden="true"
                />
                <span className="font-bold text-ink">
                  {messages.home.locationLine}
                </span>
                <span className="text-line">·</span>
                <span>
                  {messages.home.establishedLabel} {COMPANY_INFO.established}
                </span>
                <span className="text-line">·</span>
                <span className="font-bold text-blue">
                  {messages.home.partnerBadge}
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[54px]">
                  {messages.home.heroTitle}
                </h1>
                <p className="text-base font-bold tracking-wide text-blue sm:text-lg">
                  {messages.common.tagline}
                </p>
              </div>

              <p className="max-w-[620px] text-base leading-relaxed text-muted sm:text-lg">
                {messages.common.oneSentenceDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={localizedHref(locale, "/contact")}
                  className="inline-flex items-center gap-2 rounded-brand bg-blue px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-deep"
                >
                  <span>{messages.home.requestQuote}</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={localizedHref(locale, "/services")}
                  className="rounded-brand border border-line bg-page px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-blue hover:bg-surface"
                >
                  {messages.home.exploreServices}
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted">
                <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
                <span>{messages.home.urgentDispatch}</span>
                <a
                  href={telHref(urgentPhone)}
                  className="font-mono font-bold text-ink underline underline-offset-2 hover:text-blue"
                >
                  {urgentPhone}
                </a>
                <span className="text-line">·</span>
                <span className="text-[11px] text-muted">
                  {messages.home.priorityLine}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] border border-line bg-page p-2.5 shadow-sm">
                <div className="relative aspect-video w-full overflow-hidden rounded-[2px] bg-ink">
                  <Image
                    src={siteImages.portContainersDusk.src}
                    alt={siteImages.portContainersDusk.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 480px, 100vw"
                    priority
                  />
                  <div className="absolute right-3 top-3 flex items-center gap-2 rounded-[2px] border border-line bg-white/95 px-3 py-1.5 shadow-sm">
                    <Image
                      src={brandAssets.markOnLight}
                      alt=""
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px]"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink">
                      {messages.home.berberaHub}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 bg-page p-3">
                  <div className="flex items-center justify-between border-b border-line pb-2 text-xs font-semibold text-ink">
                    <span>{messages.home.heroCardTitle}</span>
                    <span className="text-[11px] font-bold text-green">
                      {messages.home.heroCardBadge}
                    </span>
                  </div>
                  <p className="text-[11px] italic leading-tight text-muted">
                    {messages.home.heroCardBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-page py-8">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {messages.home.metrics.map((metric, index) => {
              const labelColor =
                index === 1
                  ? "text-green"
                  : index === 2
                    ? "text-ink"
                    : "text-blue";
              return (
                <div key={metric.label} className="space-y-0.5">
                  <span className="font-mono text-3xl font-extrabold tabular-nums text-ink">
                    {metric.value}
                  </span>
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${labelColor}`}
                  >
                    {metric.label}
                  </p>
                  <p className="text-[11px] text-muted">{metric.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-12">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="rounded-[4px] border border-line bg-page p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-line pb-4 md:flex-row md:items-center">
              <div>
                <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
                  {messages.home.dispatchEyebrow}
                </span>
                <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {messages.home.dispatchTitle}
                </h2>
              </div>
              <p className="max-w-sm text-xs text-muted">
                {messages.home.dispatchHelp}
              </p>
            </div>

            <form
              onSubmit={handleQuickEnquiry}
              className="grid grid-cols-1 items-end gap-4 sm:grid-cols-12"
            >
              <div className="space-y-1.5 sm:col-span-5">
                <label
                  htmlFor="quick-service"
                  className="block text-xs font-bold uppercase tracking-wider text-ink"
                >
                  {messages.home.serviceLabel}
                </label>
                <select
                  id="quick-service"
                  value={quickService}
                  onChange={(event) => setQuickService(event.target.value)}
                  className="h-[46px] w-full rounded-brand border border-line bg-surface px-3.5 text-sm font-medium text-ink"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.number}. {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-4">
                <label
                  htmlFor="quick-route"
                  className="block text-xs font-bold uppercase tracking-wider text-ink"
                >
                  {messages.home.routeLabel}
                </label>
                <select
                  id="quick-route"
                  value={quickRoute}
                  onChange={(event) => setQuickRoute(event.target.value)}
                  className="h-[46px] w-full rounded-brand border border-line bg-surface px-3.5 text-sm font-medium text-ink"
                >
                  {dispatchRoutes.map((route) => (
                    <option key={route.value} value={route.value}>
                      {route.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="flex h-[46px] w-full items-center justify-center gap-2 rounded-brand bg-blue text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-deep"
                >
                  <span>{messages.home.sendWhatsApp}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-12 md:py-14">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
                {messages.home.servicesEyebrow}
              </span>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {messages.home.servicesTitle}
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted">
                {messages.home.servicesIntro}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1 rounded-brand border border-line bg-surface p-1">
              {serviceCategories.map((category) => {
                const active = activeCategory === category.id;
                const label =
                  category.id === "all"
                    ? `${messages.home.categoryAll} (${services.length})`
                    : category.label;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-[2px] px-2.5 py-1.5 text-[11px] font-bold transition-colors ${
                      active
                        ? "bg-blue text-white shadow-sm"
                        : "text-ink hover:bg-page"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => {
              const image = serviceImages[service.id];
              return (
                <article
                  key={service.id}
                  className="group overflow-hidden rounded-brand border border-line bg-page transition-all hover:border-blue hover:shadow-sm"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : null}
                    <span className="absolute left-2.5 top-2.5 rounded-[2px] bg-white/95 px-1.5 py-0.5 font-mono text-[10px] font-bold tabular-nums text-blue shadow-sm">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 p-3.5">
                    <h3 className="text-sm font-bold leading-snug text-ink transition-colors group-hover:text-blue">
                      {service.title}
                    </h3>
                    <p className="line-clamp-2 text-[11px] leading-relaxed text-muted">
                      {service.summary}
                    </p>
                    <div className="mt-1 flex items-center justify-between border-t border-line pt-2">
                      <button
                        type="button"
                        onClick={() => goToContact(service.title)}
                        className="text-[11px] font-bold text-blue transition-colors hover:text-deep"
                      >
                        {messages.nav.requestService} →
                      </button>
                      <Link
                        href={localizedHref(locale, `/services#${service.id}`)}
                        className="text-[11px] text-muted hover:text-ink hover:underline"
                      >
                        {messages.common.details}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={localizedHref(locale, "/services")}
              className="inline-flex text-xs font-bold uppercase tracking-wider text-blue hover:underline"
            >
              {messages.home.viewFullSpecs}
            </Link>
          </div>
        </div>
      </section>

      <section id="partners" className="border-b border-line bg-surface py-14">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
              {messages.home.partnersEyebrow}
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {messages.home.partnersTitle}
            </h2>
            <p className="mt-1.5 text-xs text-muted sm:text-sm">
              {messages.home.partnersIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.name}
                title={client.name}
                className="flex flex-col justify-between rounded-brand border border-line bg-page p-5 transition-colors hover:border-blue/50"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-16 items-center justify-center rounded-[2px] border border-line bg-white px-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.logo}
                      alt={`${client.shortName} logo`}
                      className="max-h-12 w-auto max-w-[180px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-center text-sm font-bold leading-snug text-ink">
                    {client.shortName}
                  </h3>
                </div>
                <div className="mt-3 border-t border-line pt-3 text-center text-xs text-muted">
                  <span className="font-semibold text-ink">
                    {messages.common.scopeOfWork}:{" "}
                  </span>
                  {client.workDone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#093c8b] bg-deep py-16 text-white">
        <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 bg-yellow" aria-hidden="true" />
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
                {messages.home.testimonialEyebrow}
              </span>
            </div>

            <blockquote className="text-xl font-bold leading-relaxed tracking-tight text-white sm:text-2xl md:text-3xl">
              “{messages.testimonial.quote}”
            </blockquote>

            <div className="flex flex-col justify-between gap-4 border-t border-[#1b5ec2]/60 pt-4 sm:flex-row sm:items-center">
              <div>
                <cite className="block text-base font-bold not-italic text-white sm:text-lg">
                  {TESTIMONIAL_META.attribution}
                </cite>
                <span className="mt-0.5 block text-sm font-semibold text-yellow">
                  {messages.testimonial.role}, {TESTIMONIAL_META.organization}
                </span>
                <span className="mt-1 block text-xs text-line">
                  {messages.home.testimonialContext}{" "}
                  {messages.testimonial.context}
                </span>
              </div>
              <Link
                href={localizedHref(locale, "/contact")}
                className="rounded-brand bg-blue px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-deep"
              >
                {messages.home.contactTeam}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-page py-14">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="max-w-3xl border-l-4 border-blue py-1 pl-6">
            <p className="mb-1 font-condensed text-xs font-bold uppercase tracking-widest text-blue">
              {messages.home.gmEyebrow}
            </p>
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              “{messages.gmShort.quote}”
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-2">
              <div>
                <strong className="block text-sm font-bold text-ink">
                  {GM_META.author}
                </strong>
                <span className="text-xs text-muted">
                  {messages.home.gmRole}, {COMPANY_INFO.legalName}
                </span>
              </div>
              <Link
                href={localizedHref(locale, "/about")}
                className="text-xs font-bold text-blue hover:underline"
              >
                {messages.home.readFullMessage}
              </Link>
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
                {messages.home.ctaTitle}
              </h2>
              <p className="text-xs text-white/80 sm:text-sm">
                {messages.contact.office}: {COMPANY_INFO.office} ·{" "}
                {messages.services.dispatchDesk}{" "}
                <a
                  href={telHref(urgentPhone)}
                  className="font-mono font-bold text-white hover:text-yellow"
                >
                  {urgentPhone}
                </a>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={telHref(urgentPhone)}
                className="rounded-brand border border-white/35 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {messages.common.call}: {urgentPhone}
              </a>
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
