import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CLIENTS, COMPANY_INFO, TESTIMONIAL } from "@/content/site";
import { telHref } from "@/lib/phone";

export function ClientsPage() {
  return (
    <main id="main" className="w-full bg-page text-ink">
      <PageHero
        eyebrow="Institutional Partners"
        title="Trusted by UN agencies, INGOs, and public institutions."
        description="Verified third-party logistics support across Somaliland and Somalia — fleet, freight, procurement, and field dispatch for programs that require accountability."
        meta={
          <>
            <span className="font-bold text-white">
              {CLIENTS.length}+ partner organizations
            </span>
            <span className="text-[#1b5ec2]">·</span>
            <span>Hargeisa operations hub</span>
          </>
        }
      />

      <section className="border-b border-line py-12 md:py-16">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
              Proven Track Record
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Organizations we support
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              Partner logos and the operational scope delivered under each
              engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENTS.map((client) => (
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
                    Scope of work
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
                Official Institutional Recommendation
              </span>
            </div>

            <blockquote className="text-xl font-bold leading-relaxed tracking-tight text-white sm:text-2xl md:text-3xl">
              “{TESTIMONIAL.quote}”
            </blockquote>

            <div className="border-t border-[#1b5ec2]/60 pt-4">
              <cite className="block text-base font-bold not-italic text-white sm:text-lg">
                {TESTIMONIAL.attribution}
              </cite>
              <span className="mt-0.5 block text-sm font-semibold text-yellow">
                {TESTIMONIAL.role}, {TESTIMONIAL.organization}
              </span>
              <span className="mt-1 block text-xs text-line">
                Context: {TESTIMONIAL.context}
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
                Work with MGT
              </span>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Looking for a dependable field logistics partner?
              </h2>
              <p className="text-xs text-white/80 sm:text-sm">
                Dispatch:{" "}
                <a
                  href={telHref(COMPANY_INFO.phones[0])}
                  className="font-mono font-bold text-white hover:text-yellow"
                >
                  {COMPANY_INFO.phones[0]}
                </a>
                {" · "}
                {COMPANY_INFO.office}
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
                href="/contact"
                className="rounded-brand bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-green transition-colors hover:bg-yellow hover:text-ink"
              >
                Send enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
