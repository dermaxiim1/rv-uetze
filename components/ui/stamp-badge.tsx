import { cn } from "@/lib/utils";

export function StampBadge({
  big,
  small,
  className,
}: {
  big: string;
  small: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-full border-[1.5px] border-saddle bg-cream text-center font-serif italic text-saddle",
        className,
      )}
    >
      <span className="text-[28px] leading-none md:text-[32px]">{big}</span>
      <span className="mt-1 font-sans text-[10px] uppercase not-italic tracking-[0.2em]">
        {small}
      </span>
    </div>
  );
}
