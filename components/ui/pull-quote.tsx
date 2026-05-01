import { cn } from "@/lib/utils";

export function PullQuote({
  children,
  attribution,
  className,
}: {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative mx-auto my-12 max-w-3xl border-l-2 border-saddle/50 px-8",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute -left-3 -top-6 select-none font-serif text-[88px] italic leading-none text-saddle/40"
      >
        &ldquo;
      </span>
      <blockquote className="font-serif text-2xl font-light italic leading-relaxed text-ink md:text-3xl">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-soft">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
