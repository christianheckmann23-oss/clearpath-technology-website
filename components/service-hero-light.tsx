"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { track } from "@vercel/analytics";
import { WordReveal, Magnetic } from "@/components/ui/motion-primitives";
import { SPRING, SPRING_SOFT, buttonHover, buttonTap } from "@/lib/motion-variants";
import { AnalyticsEvent } from "@/lib/analytics";

export interface RenderedStatChip {
  icon: ReactNode;
  value: string;
  label: string;
}

interface ServiceHeroLightProps {
  eyebrow: string;
  titleMain: string;
  titleAccent: string;
  description: string;
  heroStats: RenderedStatChip[];
  visual: ReactNode;
  serviceSlug: string;
}

/**
 * Light (non-dark-band) service hero: eyebrow pill, two-line headline
 * (black + gradient), description, dual CTAs, and a row of quick-stat
 * chips — paired with a supporting visual on the right. Used in place of
 * the dark PageHero/AIIntegrationHero specifically on service detail
 * pages, per the approved reference mockup.
 */
export function ServiceHeroLight({ eyebrow, titleMain, titleAccent, description, heroStats, visual, serviceSlug }: ServiceHeroLightProps) {
  const reduce = useReducedMotion();
  // Times the accent line's entrance to land right as the black line's
  // per-word reveal finishes, so the two read as one continuous motion.
  const mainWordCount = titleMain.trim().split(/\s+/).length;
  const accentDelay = mainWordCount * 0.06 + 0.05;

  return (
    <section className="service-hero-light">
      <div className="container">
        <div className="service-hero-light-grid">
          <div>
            <motion.span
              className="eyebrow"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={SPRING_SOFT}
            >
              {eyebrow}
            </motion.span>
            <h1 className="service-hero-light-title">
              <WordReveal>{titleMain}</WordReveal>
              <br />
              <span className="service-hero-light-accent-clip">
                <motion.span
                  className="service-hero-light-accent"
                  initial={reduce ? false : { opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ ...SPRING, delay: accentDelay }}
                >
                  {titleAccent}
                </motion.span>
              </span>
            </h1>
            <motion.p
              className="service-hero-light-desc"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_SOFT, delay: 0.2 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="service-hero-light-ctas"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_SOFT, delay: 0.3 }}
            >
              <Magnetic>
                <motion.a
                  href="/contact"
                  className="btn-solid"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  onClick={() =>
                    track(AnalyticsEvent.ContactCtaClick, { location: "service_hero", service: serviceSlug })
                  }
                >
                  Start Free Consultation →
                </motion.a>
              </Magnetic>
            </motion.div>
            <motion.div
              className="service-hero-light-stats"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_SOFT, delay: 0.4 }}
            >
              {heroStats.map((stat) => (
                <div className="service-hero-light-stat" key={stat.label}>
                  {stat.icon}
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="service-hero-light-visual"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_SOFT, delay: 0.25 }}
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
