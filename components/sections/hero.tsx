import Image from "next/image";

import { StampBadge } from "@/components/ui/stamp-badge";
import { SITE } from "@/lib/site";

export function Hero() {
  const { hero } = SITE;

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0 motion-safe:animate-hero-zoom">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/45 to-ink/85"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 lg:px-14 lg:pb-32 lg:pt-48">
        <div className="mb-7 inline-flex items-center gap-3 self-start text-xs uppercase tracking-[0.22em] text-cream/85">
          <span className="h-px w-7 bg-cream/60" />
          {SITE.region}
          <span className="h-px w-7 bg-cream/60" />
        </div>

        <h1 className="font-serif text-[clamp(48px,8vw,120px)] font-light leading-[0.95] tracking-[-0.03em] text-cream">
          {hero.title.line1}
          <br />
          <em className="italic text-hay">{hero.title.em}</em> {hero.title.line2After}
          <br />
          {hero.title.line3}
        </h1>

        <p className="mt-9 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
          {hero.body}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {SITE.contact.phoneTel && (
            <a
              href={`tel:${SITE.contact.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:bg-hay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              {SITE.contact.phone} <span aria-hidden>→</span>
            </a>
          )}
          <a
            href={`mailto:${SITE.contact.email}`}
            className={
              SITE.contact.phoneTel
                ? "inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-medium tracking-wider text-cream transition-all hover:-translate-y-0.5 hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                : "inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:bg-hay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            }
          >
            {hero.secondaryCtaLabel} <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-cream/70">
          {hero.stats.map((stat, i) => (
            <span key={stat} className="contents">
              {i > 0 && (
                <span aria-hidden className="opacity-50">
                  ·
                </span>
              )}
              <span>{stat}</span>
            </span>
          ))}
        </div>
      </div>

      <StampBadge
        big={hero.badge.big}
        small={hero.badge.small}
        className="absolute right-6 top-28 z-10 size-32 rotate-[8deg] md:right-14 md:top-32 md:size-36"
      />

      <a
        href={SITE.nav[0]?.href ?? "#verein"}
        aria-label={`${hero.scrollHint} – zum nächsten Abschnitt scrollen`}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-cream md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.22em]">{hero.scrollHint}</span>
        <span
          aria-hidden
          className="block h-10 w-px bg-cream/50 motion-safe:animate-scroll-hint"
        />
      </a>
    </section>
  );
}
