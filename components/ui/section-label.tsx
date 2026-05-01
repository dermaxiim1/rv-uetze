import { cn } from "@/lib/utils";

/**
 * Small editorial eyebrow above each section heading.
 * Italic serif marker + thin uppercase tracking — anchors the section visually.
 */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-forest",
        className,
      )}
    >
      <span aria-hidden className="font-serif text-base italic leading-none">
        ✻
      </span>
      {children}
    </div>
  );
}
