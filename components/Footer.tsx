"use client";

import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { useLocale } from "@/components/LocaleProvider";
import { localizedHref } from "@/content/i18n";
import { COMPANY_INFO, NAV_HREFS } from "@/content/site";
import { telHref } from "@/lib/phone";

export function Footer() {
  const year = new Date().getFullYear();
  const { locale, messages } = useLocale();

  return (
    <footer className="w-full border-t border-[#093c8b] bg-deep text-white">
      <div className="mx-auto max-w-page px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-[#1b5ec2]/40 pb-12 md:grid-cols-12 lg:gap-12">
          <div className="flex flex-col space-y-4 md:col-span-5">
            <BrandLockup variant="blue" markSize={48} />
            <p className="mt-2 font-condensed text-sm font-bold uppercase tracking-widest text-yellow">
              {messages.common.tagline}
            </p>
            <p className="max-w-md pt-1 text-sm leading-relaxed text-line">
              {messages.footer.blurb}
            </p>
            <div className="pt-2">
              <span className="inline-block rounded-[2px] bg-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {messages.footer.established} {COMPANY_INFO.established} ·
                Hargeisa
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:col-span-3">
            <h2 className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
              {messages.footer.navigation}
            </h2>
            <ul className="space-y-2.5 text-sm text-line">
              <li>
                <Link
                  href={localizedHref(locale, "/")}
                  className="text-start transition-colors hover:text-white"
                >
                  {messages.nav.home}
                </Link>
              </li>
              {NAV_HREFS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizedHref(locale, link.href)}
                    className="text-start transition-colors hover:text-white"
                  >
                    {messages.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-3 md:col-span-4">
            <h2 className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
              {messages.footer.operations}
            </h2>
            <div className="space-y-2 text-sm text-line">
              <p>
                <strong className="mb-0.5 block font-semibold text-white">
                  {messages.footer.officeAddress}
                </strong>
                {COMPANY_INFO.office}
              </p>
              <p className="pt-1">
                <strong className="mb-0.5 block font-semibold text-white">
                  {messages.footer.directEmail}
                </strong>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="break-all text-white underline-offset-2 hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <div className="pt-1">
                <strong className="mb-1 block font-semibold text-white">
                  {messages.footer.dispatchPhones}
                </strong>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {COMPANY_INFO.fourMainPhones.map((phone) => (
                    <a
                      key={phone}
                      href={telHref(phone)}
                      className="py-0.5 transition-colors hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-line/80 sm:flex-row">
          <p>
            © {year} {COMPANY_INFO.legalName}
          </p>
          <p className="text-end">{messages.footer.bottomTag}</p>
        </div>
      </div>
    </footer>
  );
}
