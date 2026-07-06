"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { track } from "@vercel/analytics";
import { WordReveal, Magnetic } from "@/components/ui/motion-primitives";
import { PillRow, INT_ROW1, INT_ROW2 } from "@/components/ui/integration-marquee";
import { SPRING_SOFT, buttonHover, buttonTap } from "@/lib/motion-variants";
import { AnalyticsEvent } from "@/lib/analytics";

interface AIIntegrationHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  /** Renders the dark tool-pill marquee below the copy. Only honest for
      the two services that actually plug into third-party tools — the
      other four service pages use this same shell without it. */
  integrations?: boolean;
  serviceSlug: string;
}

/**
 * Dark hero shared by every service detail page: same shell, band size,
 * and left-aligned copy as PageHero (glow, grid, WordReveal H1, "clear
 * path" divider) with a single CTA baked in. On ai-call-agents/ai-automations it also carries
 * a full-width dark-styled integrations pill carousel — the "plugs into
 * your tools" story told as the hero itself.
 */
export function AIIntegrationHero({ eyebrow, title, lede, integrations = true, serviceSlug }: AIIntegrationHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className={`page-hero ai-hero${integrations ? " ai-hero-integrations" : ""}`}>
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
              <motion.a
                href="/contact"
                className="btn-solid"
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() =>
                  track(AnalyticsEvent.ContactCtaClick, { location: "service_dark_hero", service: serviceSlug })
                }
              >
                Start the Conversation →
              </motion.a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {integrations && (
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
      )}

      <div className="page-hero-divider" aria-hidden="true" />
    </section>
  );
}
