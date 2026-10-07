"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/BrandLockup";
import { BrandStripe } from "@/components/BrandStripe";
import { COMPANY_INFO, NAV_LINKS } from "@/content/site";
import { telHref } from "@/lib/phone";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const urgentPhone = COMPANY_INFO.phones[0];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-page">
      <BrandStripe />

      <div className="mx-auto flex h-[88px] max-w-page items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 shrink-0 items-center">
          <Link
            href="/"
            className="flex items-center p-1 text-left"
            aria-label="MGT Group - Return to Home"
          >
            <BrandLockup variant="light" markSize={70} priority />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-semibold tracking-wide transition-colors ${
                  active ? "text-blue" : "text-ink hover:text-blue"
                }`}
              >
                {link.label}
                {active ? (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telHref(urgentPhone)}
            className="hidden items-center gap-1.5 px-3 py-2 text-xs font-bold text-ink transition-colors hover:text-blue lg:inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            <span className="font-mono">{urgentPhone}</span>
          </a>

          <Link
            href="/contact"
            className="hidden items-center justify-center whitespace-nowrap rounded-brand bg-blue px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-deep sm:inline-flex"
          >
            Request service
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 min-w-[70px] items-center justify-center rounded-brand border border-line bg-surface px-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-page md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav-drawer"
          className="w-full border-b border-line bg-page px-4 py-4 shadow-sm md:hidden"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile">
            <Link
              href="/"
              className={`flex items-center justify-between rounded-brand px-3 py-3 text-left text-sm font-semibold tracking-wide ${
                isActive("/")
                  ? "bg-surface font-bold text-blue"
                  : "text-ink hover:bg-surface"
              }`}
            >
              <span>Home</span>
              {isActive("/") ? (
                <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
              ) : null}
            </Link>
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-brand px-3 py-3 text-left text-sm font-semibold tracking-wide ${
                    active
                      ? "bg-surface font-bold text-blue"
                      : "text-ink hover:bg-surface"
                  }`}
                >
                  <span>{link.label}</span>
                  {active ? (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-blue"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-2 border-t border-line pt-3">
            <Link
              href="/contact"
              className="w-full rounded-brand bg-blue py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-deep"
            >
              Request service
            </Link>
            <p className="pt-2 text-center text-[11px] text-muted">
              Hargeisa Office · 150 Street, Kodbuur District
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
