"use client";

import { motion } from "motion/react";
import { TiltCard } from "@/components/ui/motion-primitives";
import { staggerContainer, flattenIn, viewportOnce } from "@/lib/motion-variants";

const CELLS = [
  {
    num: "01",
    title: "Fixed Package Pricing",
    body: "Three packages, clearly scoped. You know the price before we start — larger projects get a custom quote, not a surprise invoice.",
  },
  {
    num: "02",
    title: "Built to Convert",
    body: "Not just a nice-looking site — pages designed around turning visitors into calls, forms, and booked jobs.",
  },
  {
    num: "03",
    title: "Found Everywhere",
    body: "Traditional SEO and AI Search Optimization together, so you show up in Google results and in ChatGPT, Google AI, and Perplexity answers.",
  },
  {
    num: "04",
    title: "Automation That Actually Runs",
    body: "AI call agents and automations we build, wire up, and monitor — not a consulting deck that never gets implemented.",
  },
  {
    num: "05",
    title: "No Lock-in Contracts",
    body: "Month-to-month agreements. We keep clients by doing good work, not binding them to multi-year commitments.",
  },
  {
    num: "06",
    title: "One Partner, Full Coverage",
    body: "Instead of juggling a web agency, an SEO consultant, and an automation vendor, you get one team that handles all of it.",
  },
];

export function WhySection() {
  return (
    <section className="why-section">
      <div className="container">
        <h2>We sell outcomes.<br /><em>Not hours.</em></h2>
        <motion.div
          className="why-grid has-depth"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {CELLS.map((cell) => (
            <motion.div key={cell.num} variants={flattenIn}>
              <TiltCard className="why-cell" max={4}>
                <span className="why-cell-num">{cell.num}</span>
                <h3>{cell.title}</h3>
                <p>{cell.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
