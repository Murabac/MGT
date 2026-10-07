import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: ReactNode;
};

export function PageHero({ eyebrow, title, description, meta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#093c8b] bg-deep pb-12 pt-10 text-white md:pb-16 md:pt-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(23,118,233,0.35),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-page px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <span className="font-condensed text-xs font-bold uppercase tracking-widest text-yellow">
            {eyebrow}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-[42px]">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-base leading-relaxed text-line sm:text-lg">
              {description}
            </p>
          ) : null}
          {meta ? (
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-line">
              {meta}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
