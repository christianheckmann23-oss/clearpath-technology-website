"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { industries, getCaseStudiesByIndustry } from "@/lib/data/case-studies";
import { BrowserMockup } from "@/components/ui/browser-mockup";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { TiltCard, MetricValue } from "@/components/ui/motion-primitives";
import { buttonHover, buttonTap } from "@/lib/motion-variants";

const tabContentVariants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.15 } },
  visible: { opacity: 1, transition: { duration: 0.25, delay: 0.05 } },
};

export function CaseStudyTabs() {
  const [active, setActive] = useState(industries[0].slug);
  const activeIndustry = industries.find((i) => i.slug === active)!;
  const caseStudies = getCaseStudiesByIndustry(active);

  return (
    <div>
      <div className="industry-tabs" role="tablist" aria-label="Case studies by industry">
        {industries.map((industry) => (
          <button
            key={industry.slug}
            type="button"
            role="tab"
            aria-selected={active === industry.slug}
            className={`industry-tab${active === industry.slug ? " active" : ""}`}
            onClick={() => setActive(industry.slug)}
          >
            {industry.label}
            {active === industry.slug && (
              <motion.div className="industry-tab-underline" layoutId="industry-tab-underline" />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={active}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={tabContentVariants}
        >
          <p className="industry-tabs-desc">{activeIndustry.description}</p>

          {caseStudies.length > 0 ? (
            <div className="case-study-cards">
              {caseStudies.map((cs) => (
                <TiltCard key={cs.slug} max={2}>
                  <motion.a
                    href={`/case-studies/${cs.slug}`}
                    className="case-study-card"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    {cs.heroImage && (
                      <div className="browser-mockup-tile">
                        <BrowserMockup src={cs.heroImage} alt={`${cs.clientName} website`} url={cs.clientUrl?.replace(/^https?:\/\//, "")} />
                      </div>
                    )}
                    <div className="case-study-card-client">
                      {cs.clientName}
                      {cs.clientLocation ? ` · ${cs.clientLocation}` : ""}
                    </div>
                    <div className="case-study-card-headline">{cs.headline}</div>
                    <div className="case-study-card-metrics">
                      {cs.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="metric-big blue">
                            <MetricValue value={metric.value} />
                          </div>
                          <div className="metric-desc">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.a>
                </TiltCard>
              ))}
            </div>
          ) : (
            <div className="case-study-empty">
              <div style={{ maxWidth: "480px", margin: "0 auto 24px" }}>
                <ImagePlaceholder
                  label={`${activeIndustry.label} case study`}
                  sub="In progress with a real client"
                  ratio="wide"
                />
              </div>
              <div className="case-study-empty-title">More case studies coming soon</div>
              <p>We&apos;re actively working with {activeIndustry.label.toLowerCase()} businesses — check back soon.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
