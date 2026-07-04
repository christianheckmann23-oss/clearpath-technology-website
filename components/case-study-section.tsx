"use client";

import { motion } from "motion/react";
import { publishedCaseStudies } from "@/lib/data/case-studies";
import { DeviceShowcase } from "@/components/ui/device-showcase";
import { ParallaxFloat, MetricValue } from "@/components/ui/motion-primitives";
import { staggerContainer, fadeUpItem, viewportOnce, fadeUp } from "@/lib/motion-variants";

export function CaseStudySection() {
  const caseStudy = publishedCaseStudies[0];
  if (!caseStudy) return null;

  return (
    <section className="case-study-section" id="case-study">
      <div className="container">
        <span className="case-eyebrow">Live Case Study</span>
        <h2>
          {caseStudy.headline.split(". ").map((sentence, i, arr) => (
            <span key={sentence}>
              {sentence}
              {i < arr.length - 1 ? "." : ""}
              <br />
            </span>
          ))}
        </h2>
        {caseStudy.heroImage && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            style={{ marginBottom: "64px", maxWidth: "900px" }}
          >
            <ParallaxFloat distance={-50}>
              <DeviceShowcase
                desktopSrc={caseStudy.heroImage}
                phoneSrc="/assets/case-jw-services.jpg"
                alt={`${caseStudy.clientName} website`}
                url={caseStudy.clientUrl?.replace(/^https?:\/\//, "")}
              />
            </ParallaxFloat>
          </motion.div>
        )}
        <div className="case-grid">
          <div>
            <p className="case-client-name">
              {caseStudy.clientName}
              {caseStudy.clientLocation ? ` · ${caseStudy.clientLocation}` : ""}
            </p>
            <p className="case-text">
              {caseStudy.clientUrl ? (
                <a
                  href={caseStudy.clientUrl}
                  target="_blank"
                  rel="noopener"
                  style={{ color: "inherit", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  {caseStudy.clientName}
                </a>
              ) : (
                caseStudy.clientName
              )}{" "}
              {caseStudy.challenge}
            </p>
            <p className="case-text">{caseStudy.solution}</p>
          </div>
          <div>
            <motion.div
              className="case-metrics"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {caseStudy.metrics.map((metric, i) => (
                <motion.div className="metric-box" key={metric.label} variants={fadeUpItem}>
                  <div className={`metric-big${i % 2 === 0 ? " blue" : ""}`}>
                    <MetricValue value={metric.value} />
                  </div>
                  <div className="metric-desc">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.a
              href={`/case-studies/${caseStudy.slug}`}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "32px",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--blue-lt)",
                letterSpacing: ".3px",
                textDecoration: "none",
              }}
            >
              Read the full case study →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
