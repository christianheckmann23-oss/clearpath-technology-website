"use client";

import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLMotionProps, Transition, motion } from "motion/react";

import { cn } from "@/lib/utils";

export type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z";

export interface BgGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: keyof typeof GRADIENT_SIZES | { width: string; height: string };
  gradientPosition?: keyof typeof GRADIENT_POSITIONS | { x: string; y: string };
  gradientColors?:
    | keyof typeof GRADIENT_COLORS
    | { color: string; start: string }[];
  className?: string;
}

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  word: string;
  transition?: Transition;
  direction?: TransformDirectionType;
}

export interface HeroProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof heroVariants> {}

interface TextStaggerProps extends HTMLMotionProps<"div"> {
  text: string;
  stagger?: number;
  /** Seconds to wait before the first character animates (delayChildren). */
  delay?: number;
  direction?: TransformDirectionType;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export interface AnimatedContainerProps extends HTMLMotionProps<"div"> {
  transformDirection?: TransformDirectionType;
  className?: string;
}

export const transformVariants = (direction?: TransformDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
});

export const GRADIENT_COLORS = {
  // ClearPath brand: --blue (#2563EB) glow settling into the black hero band.
  clearpath: [
    { color: "#3B82F6", start: "0%" },
    { color: "#1D4ED8", start: "22.92%" },
    { color: "#1E3A8A", start: "42.71%" },
    { color: "#000000", start: "88.54%" },
  ],
  black: [
    { color: "#333333", start: "0%" },
    { color: "#292929", start: "22.92%" },
    { color: "#1F1F1F", start: "42.71%" },
    { color: "#0A0A0A", start: "88.54%" },
  ],
};

const GRADIENT_SIZES = {
  default: { width: "70%", height: "55%" },
  sm: { width: "50%", height: "35%" },
  lg: { width: "85%", height: "70%" },
};

const GRADIENT_POSITIONS = {
  top: { x: "50%", y: "-10%" },
  center: { x: "50%", y: "50%" },
  bottom: { x: "50%", y: "110%" },
  left: { x: "-10%", y: "0%" },
  right: { x: "110%", y: "0%" },
};

const TRANSITION_CONFIG: Transition = { ease: [0.25, 0.1, 0.25, 1], duration: 0.5 };

const heroVariants = cva("relative min-h-svh w-full overflow-hidden", {
  variants: {
    layout: {
      default:
        "flex flex-col items-center justify-center place-content-center text-center",
      colLeft: "flex flex-col justify-center items-start",
    },
  },
  defaultVariants: {
    layout: "default",
  },
});

export function Hero({ children, className, layout, ...props }: HeroProps) {
  return (
    <section className={cn(heroVariants({ layout }), className)} {...props}>
      {children}
    </section>
  );
}
Hero.displayName = "Hero";

export function BgGradient({
  gradientSize = GRADIENT_SIZES["default"],
  gradientPosition = GRADIENT_POSITIONS["top"],
  gradientColors = GRADIENT_COLORS["clearpath"],
  className,
  ...props
}: BgGradientProps) {
  const stops = Array.isArray(gradientColors)
    ? gradientColors
    : GRADIENT_COLORS[gradientColors];
  const gradientString = stops
    .map(({ color, start }) => `${color} ${start}`)
    .join(", ");

  const size =
    typeof gradientSize === "string" ? GRADIENT_SIZES[gradientSize] : gradientSize;
  const position =
    typeof gradientPosition === "string"
      ? GRADIENT_POSITIONS[gradientPosition]
      : gradientPosition;

  const gradientStyle = `radial-gradient(${size.width} ${size.height} at ${position.x} ${position.y}, ${gradientString})`;
  const dominantColor = stops[stops.length - 1].color;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 size-full select-none",
        className
      )}
      {...props}
      style={{
        background: dominantColor,
        backgroundImage: gradientStyle,
        ...props.style,
      }}
    />
  );
}

function Word({
  word,
  transition = TRANSITION_CONFIG,
  direction = "bottom",
}: WordProps) {
  const characters = word.split("");
  return (
    <span className="inline-block text-nowrap align-top">
      {characters.map((char, index) => (
        <span key={index} className="inline-block">
          <motion.span
            className="inline-block"
            variants={transformVariants(direction)}
            transition={transition}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function TextStagger({
  text,
  stagger = 0.05,
  delay = 0,
  transition,
  direction,
  className,
  as: Component = "span",
  ...props
}: TextStaggerProps) {
  const words = text.split(" ");

  const MotionComp = React.useMemo(
    () => motion.create(Component as React.ElementType),
    [Component]
  );
  return (
    <MotionComp
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("relative", className)}
      {...props}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <Word transition={transition} direction={direction} word={word} />
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </MotionComp>
  );
}
TextStagger.displayName = "TextStagger";

export const AnimatedContainer = React.forwardRef<
  HTMLDivElement,
  AnimatedContainerProps
>(
  (
    { children, className, transformDirection = "bottom", transition, viewport, ...props },
    ref
  ) => {
    return (
      <motion.div
        className={cn("relative z-10", className)}
        ref={ref}
        variants={transformVariants(transformDirection)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, ...viewport }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
          ...transition,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
AnimatedContainer.displayName = "AnimatedContainer";
