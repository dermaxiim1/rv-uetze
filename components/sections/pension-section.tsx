import { Check } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { PENSION_FEATURES } from "@/lib/pension-features";
import { SITE } from "@/lib/site";

export function PensionSection() {
  const { eyebrow, heading, contactNote } = SITE.pension;

  return (
    <section id="stallungen" className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>{eyebrow}</SectionLabel>
        <SectionHeading parts={heading} />

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {PENSION_FEATURES.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-1 shrink-0 rounded-full bg-forest/10 p-1.5 text-forest">
                <Check className="size-4" aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-2xl border-l-2 border-forest/40 pl-6 text-base italic leading-relaxed text-ink-soft">
          {contactNote.prefix}
          <a
            href={`tel:${SITE.contact.phoneTel}`}
            className="text-forest underline decoration-1 underline-offset-4"
          >
            {SITE.contact.phone}
          </a>
          {contactNote.join}
          <a
            href={`mailto:${SITE.contact.email}`}
            className="text-forest underline decoration-1 underline-offset-4"
          >
            {SITE.contact.email}
          </a>
          {contactNote.suffix}
        </p>
      </div>
    </section>
  );
}
