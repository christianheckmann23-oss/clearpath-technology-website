"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WordReveal, Magnetic } from "@/components/ui/motion-primitives";
import { PillRow, INT_ROW1, INT_ROW2 } from "@/components/ui/integration-marquee";
import { SPRING_SOFT, buttonHover, buttonTap } from "@/lib/motion-variants";

interface AIIntegrationHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
}

/**
 * Dark hero variant for the AI Call Agents / AI Automations service pages:
 * same shell as PageHero (glow, grid, WordReveal H1, "clear path" divider)
 * but the visual is a full-width dark-styled integrations pill carousel
 * instead of a split product card — the "plugs into your tools" story
 * told as the hero itself, not a section further down the page.
 */
export function AIIntegrationHero({ eyebrow, title, lede }: AIIntegrationHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="page-hero ai-hero">
      <div className="page-hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="page-hero-copy ai-hero-copy">
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
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_SOFT, delay: 0.25 }}
          >
            {lede}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_SOFT, delay: 0.35 }}
          >
            <Magnetic>
              <motion.a href="/contact" className="btn-solid" whileHover={buttonHover} whileTap={buttonTap}>
                Start the Conversation →
              </motion.a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="int-carousel int-carousel-dark"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...SPRING_SOFT, delay: 0.5 }}
      >
        <PillRow items={INT_ROW1} direction="left" dark />
        <PillRow items={INT_ROW2} direction="right" dark />
      </motion.div>

      <div className="page-hero-divider" aria-hidden="true" />
    </section>
  );
}
