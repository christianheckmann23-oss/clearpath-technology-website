"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { staggerContainer, flattenIn, viewportOnce } from "@/lib/motion-variants";

const STEPS = [
  {
    num: "Phase 01",
    title: "Free Assessment",
    body: "30 minutes mapping what your business needs — website, search visibility, automation — and where you stand today. No commitment required.",
  },
  {
    num: "Phase 02",
    title: "Package & Blueprint",
    body: "A written scope matched to one of our three packages, or a custom quote for larger projects — services included, timeline, and flat price, before we start anything.",
  },
  {
    num: "Phase 03",
    title: "Build & Launch",
    body: "Your site, SEO, and automations are built and tested, then launched. We keep you in the loop the whole way — no surprises at handoff.",
  },
  {
    num: "Phase 04",
    title: "Ongoing Growth",
    body: "Flat monthly coverage for hosting, SEO, blog content, and automation upkeep — plus a partner who actually answers when you call.",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The connecting line draws in as the section scrolls through view —
  // the "clear path" through the four phases.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section className="process-section" id="process">
      <div className="container">
        <span className="eyebrow">Our Process</span>
        <h2>Four phases.<br />No surprises.</h2>
        <div ref={ref} className="process-steps-wrap">
          {!reduce && (
            <svg className="process-line" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
              <motion.line
                x1="0"
                y1="2"
                x2="100"
                y2="2"
                stroke="url(#process-grad)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="process-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
            </svg>
          )}
          <motion.div
            className="process-steps has-depth"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {STEPS.map((step) => (
              <motion.div className="process-step" key={step.num} variants={flattenIn}>
                <span className="process-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
