import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/lib/site";
import { TEAM } from "@/lib/team";

export function TeamSection() {
  const { eyebrow, heading } = SITE.team;

  return (
    <section className="bg-paper px-6 py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionLabel>{eyebrow}</SectionLabel>
        <SectionHeading parts={heading} />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {TEAM.map((m, i) => (
            <article key={m.id} className="group relative pt-8">
              <span
                aria-hidden
                className="absolute left-0 top-0 font-serif text-5xl italic text-saddle/35"
              >
                0{i + 1}
              </span>
              <h3 className="mt-4 font-serif text-3xl font-normal leading-tight">
                {m.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-forest">
                {m.role}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
