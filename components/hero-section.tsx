"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { ClearPathHeroBackground } from "@/components/ui/clearpath-hero";
import { HeroForm } from "@/components/hero-form";
import { WordReveal, Magnetic } from "@/components/ui/motion-primitives";
import { SPRING, SPRING_SOFT, buttonHover, buttonTap } from "@/lib/motion-variants";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Scroll-exit choreography: headline, sub, and form card leave at
  // different rates — same "world moves with you" physics as the
  // case-studies parallax.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -140]), SPRING);
  const subY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), SPRING);
  const formY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), SPRING);
  const fade = useSpring(useTransform(scrollYProgress, [0, 0.7], [1, 0]), SPRING);

  return (
    <section className="hero" id="top" ref={ref}>
      <ClearPathHeroBackground />
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-left">
          <motion.h1 style={reduce ? undefined : { y: headlineY, opacity: fade }}>
            <WordReveal>A ClearPath</WordReveal>
            <br />
            <WordReveal stagger={0.09}>
              to <em>growth.</em>
            </WordReveal>
          </motion.h1>
          <motion.div className="hero-body" style={reduce ? undefined : { y: subY, opacity: fade }}>
            <motion.p
              className="hero-sub"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_SOFT, delay: 0.3 }}
            >
              We help small businesses <strong>look credible online, get found in Google and AI search, and stop losing leads to slow follow-up.</strong> <strong>Flat monthly pricing.</strong> Real results from day one.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_SOFT, delay: 0.45 }}
            >
              <Magnetic>
                <motion.a href="/packages" className="btn-solid" whileHover={buttonHover} whileTap={buttonTap}>
                  See Our Packages →
                </motion.a>
              </Magnetic>
              <Magnetic>
                <motion.a href="#case-study" className="btn-ghost" whileHover={buttonHover} whileTap={buttonTap}>
                  See Our Work
                </motion.a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="hero-form-card"
          style={reduce ? undefined : { y: formY }}
          initial={reduce ? false : { opacity: 0, y: 32, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ ...SPRING_SOFT, delay: 0.2 }}
        >
          <HeroForm />
        </motion.div>
      </div>
    </section>
  );
}
