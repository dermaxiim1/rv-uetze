import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { LESSONS } from "@/lib/lessons";
import { SITE } from "@/lib/site";

export function VielseitigkeitSection() {
  const { eyebrow, heading, intro, primaryCtaLabel, note } = SITE.lessons;

  return (
    <section
      id="unterricht"
      className="bg-forest px-6 py-24 text-cream lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel className="text-cream/85">{eyebrow}</SectionLabel>
        <SectionHeading light parts={heading} />

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/85">
          {intro}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {LESSONS.map((a) => (
            <article
              key={a.name}
              className="rounded-sm bg-cream/10 p-7 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl font-normal italic text-hay">
                {a.name}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/85">
                {a.schedule}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-cream/90">
                {a.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium tracking-wider text-forest transition-all hover:-translate-y-0.5 hover:bg-hay"
          >
            {primaryCtaLabel} <span aria-hidden>→</span>
          </a>
          <span className="text-xs uppercase tracking-[0.14em] text-cream/70">
            {note}
          </span>
        </div>
      </div>
    </section>
  );
}
