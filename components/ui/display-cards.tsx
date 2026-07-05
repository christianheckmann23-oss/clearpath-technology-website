"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  /** Renders the card as a link when set. */
  href?: string;
  iconClassName?: string;
  titleClassName?: string;
}

export function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-[#2563EB]" />,
  title = "Featured",
  description = "Discover amazing content",
  footer = "Just now",
  href,
  iconClassName,
  titleClassName,
}: DisplayCardProps) {
  const Comp = (href ? "a" : "div") as "a";
  return (
    <Comp
      href={href}
      className={cn(
        // Light-surface card: white on the site's warm-neutral borders, with
        // the shared card shadow. The skew/fan treatment only applies from md
        // up — on phones the cards render as a plain vertical list.
        "relative flex h-40 w-full max-w-[22rem] select-none flex-col justify-between rounded-xl border border-[#E8E8E4] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-700",
        "hover:border-[#2563EB]/50 hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]",
        "md:-skew-y-[8deg] md:after:absolute md:after:-right-1 md:after:top-[-5%] md:after:h-[110%] md:after:w-[20rem] md:after:bg-gradient-to-l md:after:from-white md:after:to-transparent md:after:content-['']",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span
          className={cn(
            "relative inline-flex items-center justify-center rounded-full bg-[#EFF6FF] p-1.5",
            iconClassName
          )}
        >
          {icon}
        </span>
        <p
          className={cn(
            "line-clamp-1 text-lg font-bold tracking-tight text-[#0A0A0A]",
            titleClassName
          )}
        >
          {title}
        </p>
      </div>
      <p className="line-clamp-2 text-sm leading-snug text-[#4B5563]">{description}</p>
      <p className="text-[13px] font-semibold text-[#2563EB]">{footer}</p>
    </Comp>
  );
}

/**
 * Per-card positioning for a fanned stack, keyed by stack size. Back cards
 * sit greyscaled under a translucent white wash (via ::before) and pop to
 * full color as they rise on hover; the front card starts fully visible.
 * All of it is md+ only — phones get an ordinary card list.
 */
const CARD_WASH =
  "md:grayscale-[100%] md:hover:grayscale-0 md:before:absolute md:before:left-0 md:before:top-0 md:before:h-full md:before:w-full md:before:rounded-xl md:before:bg-white/60 md:before:transition-opacity md:before:duration-700 md:before:content-[''] md:hover:before:opacity-0";

export const STACK_POSITIONS: Record<number, string[]> = {
  2: [
    `md:[grid-area:stack] md:hover:-translate-y-10 ${CARD_WASH}`,
    "md:[grid-area:stack] md:translate-x-16 md:translate-y-12 md:hover:translate-y-4",
  ],
  3: [
    `md:[grid-area:stack] md:hover:-translate-y-10 ${CARD_WASH}`,
    `md:[grid-area:stack] md:translate-x-12 md:translate-y-10 md:hover:-translate-y-1 ${CARD_WASH}`,
    "md:[grid-area:stack] md:translate-x-24 md:translate-y-20 md:hover:translate-y-10",
  ],
};

interface DisplayCardsProps {
  cards: DisplayCardProps[];
  className?: string;
}

/**
 * A single fanned stack of up to three cards. Reserves room on the right and
 * bottom for the translated front card so the fan never clips.
 */
export default function DisplayCards({ cards, className }: DisplayCardsProps) {
  const positions = STACK_POSITIONS[cards.length] ?? STACK_POSITIONS[3];
  return (
    <div
      className={cn(
        "grid w-full max-w-[22rem] grid-cols-1 place-items-center gap-4",
        "md:w-auto md:max-w-none md:gap-0 md:pb-28 md:pr-24 md:[grid-template-areas:'stack']",
        className
      )}
    >
      {cards.map((cardProps, index) => (
        <DisplayCard
          key={index}
          {...cardProps}
          className={cn(positions[index], cardProps.className)}
        />
      ))}
    </div>
  );
}
