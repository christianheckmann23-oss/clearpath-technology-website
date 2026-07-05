"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { track } from "@vercel/analytics";
import { site } from "@/lib/data/site";
import { Magnetic } from "@/components/ui/motion-primitives";
import { fadeUp, viewportOnce, buttonHover, buttonTap, SPRING } from "@/lib/motion-variants";
import { AnalyticsEvent } from "@/lib/analytics";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // The giant watermark drifts slower than the page and swells slightly —
  // background depth, same physics as the parallax tiles.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const markY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), SPRING);
  const markScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.95, 1.08]), SPRING);

  return (
    <section className="cta-section" id="contact" ref={ref}>
      <motion.div
        className="cta-bg-text"
        aria-hidden="true"
        style={reduce ? undefined : { y: markY, scale: markScale }}
      >
        GROWTH
      </motion.div>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <h2>Stop losing leads<br />to a site that <em>just sits there.</em></h2>
          <div className="cta-body">
            <p className="cta-sub">
              Schedule a free 30-minute assessment. We&apos;ll look at your website, search visibility, and follow-up
              process, and hand you a written plan — no commitment, no sales pressure.
            </p>
            <div className="cta-actions-group">
              <Magnetic strength={14}>
                <motion.a
                  href="/contact"
                  className="btn-cta-primary"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  onClick={() => track(AnalyticsEvent.ContactCtaClick, { location: "cta_section" })}
                >
                  Get My Free Assessment →
                </motion.a>
              </Magnetic>
              <p className="cta-phone">
                Or call us:{" "}
                <a href={site.phoneHref} onClick={() => track(AnalyticsEvent.PhoneClick, { location: "cta_section" })}>
                  {site.phone}
                </a>
              </p>
              <p className="cta-fine">No commitment. No spam. Just a clear picture of where you can grow.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
