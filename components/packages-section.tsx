"use client";

import { motion } from "motion/react";
import { track } from "@vercel/analytics";
import { packages, addOns, scalesNote } from "@/lib/data/packages";
import { TiltCard, Magnetic, CountUp } from "@/components/ui/motion-primitives";
import { staggerContainer, flattenIn, fadeUpItem, viewportOnce, buttonHover, buttonTap } from "@/lib/motion-variants";
import { AnalyticsEvent } from "@/lib/analytics";

export function PackagesSection() {
  return (
    <section className="pricing-section">
      <div className="container">
        <motion.div
          className="pricing-grid has-depth"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.slug} variants={flattenIn} style={{ display: "flex" }}>
              <TiltCard
                className={`pricing-card${pkg.highlight ? " highlight glow-pulse" : ""}`}
                max={3}
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                {pkg.highlight && <span className="pricing-badge">Most Popular</span>}
                <div className="pricing-card-head">
                  <div className="pricing-name">{pkg.name}</div>
                  <p className="pricing-tagline">{pkg.tagline}</p>
                </div>
                <div className="pricing-card-body">
                  <div className="pricing-cost">
                    <span className="setup">
                      <CountUp value={pkg.setupFee} prefix="$" />
                    </span>
                    <span className="monthly">
                      + <CountUp value={pkg.monthly} prefix="$" suffix="/mo" />
                    </span>
                  </div>
                  <ul className="pricing-included">
                    {pkg.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Magnetic style={{ display: "block" }}>
                    <motion.a
                      href="/contact"
                      className="pricing-cta"
                      style={{ display: "block" }}
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                      onClick={() => track(AnalyticsEvent.ContactCtaClick, { location: "packages", tier: pkg.name })}
                    >
                      Get Started →
                    </motion.a>
                  </Magnetic>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
        <p className="pricing-scales-note">{scalesNote}</p>
      </div>
    </section>
  );
}

export function AddOnsSection() {
  return (
    <section className="addons-section">
      <div className="container">
        <span className="eyebrow addons-eyebrow">Add-Ons</span>
        <h2>Extend any package.</h2>
        <motion.div
          className="addons-grid has-depth"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {addOns.map((addOn) => (
            <motion.div key={addOn.slug} variants={flattenIn}>
              <TiltCard className="addon-card" max={4}>
                <div className="addon-name">{addOn.name}</div>
                <div className="addon-pricing">{addOn.pricing}</div>
                <p className="addon-desc">{addOn.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
