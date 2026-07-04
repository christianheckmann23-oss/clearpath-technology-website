"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SPRING_SOFT } from "@/lib/motion-variants";
import { FAQS } from "@/lib/data/faqs";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  // Reduced motion: native <details> keeps full semantics with zero animation.
  if (reduce) {
    return (
      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className="faq-item" key={item.q}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={SPRING_SOFT}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ ...SPRING_SOFT, opacity: { duration: 0.2 } }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
