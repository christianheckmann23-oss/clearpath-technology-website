"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { staggerContainer, flattenIn, viewportOnce } from "@/lib/motion-variants";

export interface RenderedProcessStep {
  icon: ReactNode;
  title: string;
  desc: string;
}

/** Horizontal numbered "see it in action" stepper — icon, title, and a
    one-line description per step, connected by arrows on desktop and
    stacked on mobile. */
export function ProcessStepper({ steps, id }: { steps: RenderedProcessStep[]; id?: string }) {
  return (
    <div className="process-stepper-card" id={id}>
      <span className="eyebrow process-stepper-eyebrow">See It In Action</span>
      <motion.div
        className="process-stepper has-depth"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {steps.map((step, i) => (
          <motion.div className="process-stepper-item" key={step.title} variants={flattenIn}>
            <div className="process-stepper-node">
              <span className="process-stepper-num">{i + 1}</span>
              {step.icon}
            </div>
            <div className="process-stepper-title">{step.title}</div>
            <p className="process-stepper-desc">{step.desc}</p>
            {i < steps.length - 1 && <span className="process-stepper-arrow" aria-hidden="true">→</span>}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
