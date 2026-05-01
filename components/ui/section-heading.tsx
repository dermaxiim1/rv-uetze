import { cn } from "@/lib/utils";
import type { SectionHeadingParts } from "@/lib/site";

type ChildrenProps = {
  light?: boolean;
  className?: string;
  children: React.ReactNode;
  parts?: never;
};

type PartsProps = {
  light?: boolean;
  className?: string;
  parts: SectionHeadingParts;
  children?: never;
};

type Props = ChildrenProps | PartsProps;

/**
 * H2 section heading — Fraunces, fluid clamp, light weight, tight letter-spacing.
 *
 * Two modes:
 *  1. `parts={{ before, em, after }}` — config-driven, renders
 *     `{before}<br/><em>{em}</em>{after}`. Default rendering for sections.
 *  2. `children` — escape hatch for nonstandard layouts.
 */
export function SectionHeading(props: Props) {
  const { light = false, className } = props;
  const emClass = light ? "italic text-hay" : "italic text-forest";

  const content =
    "parts" in props && props.parts ? (
      <>
        {props.parts.before}
        <br />
        <em className={emClass}>{props.parts.em}</em>
        {props.parts.after}
      </>
    ) : (
      props.children
    );

  return (
    <h2
      className={cn(
        "font-serif text-[clamp(40px,5.5vw,80px)] font-light leading-none tracking-[-0.03em]",
        light && "text-cream",
        className,
      )}
    >
      {content}
    </h2>
  );
}
