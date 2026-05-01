import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { HORSES } from "@/lib/horses";
import { SITE } from "@/lib/site";

export function HorsesSection() {
  const { eyebrow, heading, intro } = SITE.horses;

  return (
    <section
      id="schulpferde"
      className="bg-paper-dark px-6 py-24 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <SectionHeading parts={heading} />
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-soft">{intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HORSES.map((h) => (
            <article
              key={h.id}
              className="group overflow-hidden rounded-sm bg-cream shadow-[0_2px_8px_rgba(35,28,19,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(35,28,19,0.18)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-dark">
                <Image
                  src={h.image}
                  alt={`${h.name} — ${h.breed}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-cream">
                  <p className="font-serif text-3xl italic leading-none">
                    {h.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cream/85">
                    {h.discipline}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-saddle">
                  {h.breed}
                  {h.age ? ` · ${h.age}` : ""}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {h.story}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
