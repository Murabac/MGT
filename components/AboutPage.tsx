import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  COMPANY_INFO,
  COMPANY_STORY_PARAGRAPHS,
  GM_FULL_MESSAGE,
  VALUES,
  VISION_MISSION,
} from "@/content/site";
import { siteImages, valueImages } from "@/lib/assets";
import { telHref } from "@/lib/phone";

export function AboutPage() {
  return (
    <main id="main" className="w-full bg-page text-ink">
      <PageHero
        eyebrow="About MGT Group"
        title="Institutional logistics from Hargeisa."
        description={COMPANY_INFO.whatTheySell}
        meta={
          <>
            <span className="font-bold text-white">
              Established {COMPANY_INFO.established}
            </span>
            <span className="text-[#1b5ec2]">·</span>
            <span>{COMPANY_INFO.office}</span>
          </>
        }
      />

      <section className="border-b border-line py-12 md:py-16">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-5 lg:col-span-7">
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
                Our Story
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Built for field programs that cannot wait.
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {COMPANY_STORY_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-brand border border-line bg-page">
                <div className="relative aspect-[4/3] bg-surface">
                  <Image
                    src={siteImages.fieldTransportVehicle.src}
                    alt={siteImages.fieldTransportVehicle.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                </div>
                <div className="space-y-1 border-t border-line p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue">
                    Field operations
                  </p>
                  <p className="text-xs leading-relaxed text-muted">
                    Fleet, freight, customs, and storage coordinated from Kodbuur
                    District for UN, INGO, and public programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-12 md:py-14">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-brand bg-deep px-5 py-6 text-white sm:px-6 sm:py-7">
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
                Vision
              </span>
              <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                {VISION_MISSION.vision}
              </p>
            </div>
            <div className="rounded-brand bg-green px-5 py-6 text-white sm:px-6 sm:py-7">
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
                Mission
              </span>
              <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                {VISION_MISSION.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-12 md:py-16">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
              Operating Principles
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Values that guide every dispatch
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => {
              const image = valueImages[value.id];
              return (
                <article
                  key={value.id}
                  className="overflow-hidden rounded-brand border border-line bg-page"
                >
                  <div className="relative aspect-[16/10] bg-surface">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : null}
                    <span className="absolute left-2.5 top-2.5 rounded-[2px] bg-white/95 px-1.5 py-0.5 font-mono text-[10px] font-bold tabular-nums text-blue shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="space-y-1.5 p-3.5">
                    <h3 className="text-sm font-bold text-ink">{value.title}</h3>
                    <p className="text-xs leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-page py-12 md:py-16">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-brand border border-line">
                <div className="relative aspect-[3/4] bg-surface">
                  <Image
                    src={siteImages.generalManager.src}
                    alt={siteImages.generalManager.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 340px, 100vw"
                  />
                </div>
                <div className="space-y-0.5 border-t border-line bg-page p-4">
                  <p className="text-sm font-bold text-ink">
                    {COMPANY_INFO.generalManager}
                  </p>
                  <p className="text-xs font-semibold text-blue">
                    General Manager
                  </p>
                  <p className="pt-1 text-[11px] text-muted">
                    {COMPANY_INFO.legalName}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-8">
              <div>
                <span className="font-condensed text-xs font-bold uppercase tracking-widest text-green">
                  Executive Message
                </span>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  From the General Manager
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {GM_FULL_MESSAGE.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
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
                Ready to discuss a field logistics requirement?
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
