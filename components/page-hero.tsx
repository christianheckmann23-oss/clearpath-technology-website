"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { WordReveal, ParallaxFloat } from "@/components/ui/motion-primitives";
import { SPRING_SOFT } from "@/lib/motion-variants";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  visual?: ReactNode;
  children?: ReactNode;
}

/**
 * Shared dark hero band for inner pages — word-staggered H1, a light
 * scroll-exit fade, and a floating visual, all sharing the site's spring
 * physics. Deliberately kept to ONE scroll-linked transform (fade only,
 * no chained y + pointer-glow springs): layering scroll springs, pointer
 * tracking, and 3D tilt on the same element read as janky rather than
 * premium, so this stays restrained. Ends in the "clear path" divider.
 */
export function PageHero({ eyebrow, title, lede, visual, children }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  return (
    <section ref={ref} className={`page-hero${visual ? " page-hero-split" : ""}`}>
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container page-hero-inner">
        <motion.div className="page-hero-copy" style={reduce ? undefined : { opacity: copyOpacity }}>
          <motion.span
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={SPRING_SOFT}
          >
            {eyebrow}
          </motion.span>
          <h1>
            <WordReveal>{title}</WordReveal>
          </h1>
          {lede && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_SOFT, delay: 0.25 }}
            >
              {lede}
            </motion.p>
          )}
          {children}
        </motion.div>
        {visual && (
          <motion.div
            className="page-hero-visual"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_SOFT, delay: 0.2 }}
          >
            <ParallaxFloat distance={-20}>{visual}</ParallaxFloat>
          </motion.div>
        )}
      </div>
      <div className="page-hero-divider" aria-hidden="true" />
    </section>
  );
}
