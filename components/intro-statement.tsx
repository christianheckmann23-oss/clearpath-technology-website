"use client";

import { motion } from "motion/react";
import { MetricValue } from "@/components/ui/motion-primitives";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion-variants";

export function IntroStatement() {
  return (
    <section className="intro-statement">
      <div className="container">
        <h2>
          Most small business websites<br />
          <em>sit there and hope.</em><br />
          We build ones that work for you.
        </h2>
        <div className="intro-divider"></div>
        <div className="intro-cols">
          <p className="intro-col-text">
            A website that just exists isn&apos;t doing its job. We build sites, search visibility, and automation
            that actively bring in and follow up on leads — priced as a flat package, not a surprise invoice. You
            know exactly what you&apos;re getting before we start.
          </p>
          <motion.div
            className="intro-col-stats"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div className="stat-cell" variants={fadeUpItem}>
              <div className="stat-number"><MetricValue value="3" /></div>
              <div className="stat-label">Fixed packages — Foundation, Growth, Accelerate — priced before we start</div>
            </motion.div>
            <motion.div className="stat-cell-dark" variants={fadeUpItem}>
              <div className="stat-number" style={{ color: "#60A5FA" }}><MetricValue value="<60s" /></div>
              <div className="stat-label">Target automated lead response time with an AI call agent or automation in place</div>
            </motion.div>
            <motion.div className="stat-cell-dark" variants={fadeUpItem}>
              <div className="stat-number" style={{ color: "#60A5FA" }}>24/7</div>
              <div className="stat-label">Availability with an AI call agent on the Accelerate package</div>
            </motion.div>
            <motion.div className="stat-cell" variants={fadeUpItem}>
              <div className="stat-number"><MetricValue value="1" /></div>
              <div className="stat-label">Partner for your website, SEO, and automation — not three separate vendors</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
