import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { REVIEWS } from "@/lib/reviews";
import { SITE } from "@/lib/site";

export function ReviewsSection() {
  const { eyebrow, heading } = SITE.reviews;

  return (
    <section className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>{eyebrow}</SectionLabel>
        <SectionHeading parts={heading} />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-sm bg-cream p-10 lg:p-12"
            >
              <span
                aria-hidden
                className="absolute -left-2 -top-4 select-none font-serif text-[140px] italic leading-none text-forest/20"
              >
                &ldquo;
              </span>
              <blockquote className="relative z-10 font-serif text-xl font-light italic leading-snug md:text-2xl lg:text-[28px]">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-5 text-sm leading-snug">
                <strong className="font-semibold text-ink">{r.author}</strong>
                <span className="ml-2 text-ink-soft">{r.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
