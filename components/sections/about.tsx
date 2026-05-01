import { DividerFlourish } from "@/components/ui/divider-flourish";
import { PullQuote } from "@/components/ui/pull-quote";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/lib/site";

export function About() {
  const { eyebrow, heading, paragraphs, quote } = SITE.about;
  const [first, ...rest] = paragraphs;

  return (
    <section
      id="verein"
      className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>{eyebrow}</SectionLabel>
        <SectionHeading parts={heading} />

        <div className="mt-10 grid gap-12 text-lg leading-relaxed text-ink-soft lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            {first && (
              <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-light first-letter:leading-none first-letter:text-forest">
                {first}
              </p>
            )}
            {rest.slice(0, 1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="space-y-5">
            {rest.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <DividerFlourish className="mt-16" />

        <PullQuote attribution={quote.attribution}>{quote.text}</PullQuote>
      </div>
    </section>
  );
}
