"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/** Thin gradient progress bar fixed to the top of the viewport —
    the site-wide cue that every page shares the same scroll-driven
    motion language. Doubles as reading progress on blog posts. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30, restDelta: 0.001 });
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "var(--grad-blue)",
        transformOrigin: "0%",
        scaleX: reduce ? scrollYProgress : scaleX,
        zIndex: 300,
        pointerEvents: "none",
      }}
    />
  );
}
