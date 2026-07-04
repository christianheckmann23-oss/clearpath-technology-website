"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "motion/react";

const TAGS = [
  "Web Design",
  "Website Hosting",
  "SEO",
  "AI Search Optimization",
  "AI Call Agents",
  "AI Automations",
  "Google Business Profile",
  "Flat Monthly Pricing",
  "Lead Automation",
  "Newsletters",
];

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/**
 * Scroll-velocity-reactive marquee: drifts on its own, then speeds up
 * (and reverses) with your scrolling — the classic Motion velocity
 * pattern, sharing the site's spring physics. Falls back to the pure
 * CSS keyframe loop when reduced motion is set.
 */
export function MarqueeBar() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-4, 4], { clamp: false });
  const directionRef = useRef(1);

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionRef.current * -1.5 * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionRef.current = 1;
    else if (vf > 0) directionRef.current = 1; // keep leftward base drift; velocity adds kick
    moveBy += moveBy * Math.abs(vf) + directionRef.current * -0.4 * vf * (delta / 1000) * 60 * 0.02;
    baseX.set(baseX.get() + moveBy);
  });

  const tags = [...TAGS, ...TAGS];

  if (reduce) {
    // Static CSS loop fallback (the original keyframe marquee)
    return (
      <div className="marquee-bar" aria-hidden="true">
        <div className="marquee-track">
          {tags.map((tag, i) => (
            <span key={`${tag}-${i}`}>{tag}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="marquee-bar" aria-hidden="true">
      <motion.div className="marquee-track marquee-track-js" style={{ x }}>
        {tags.map((tag, i) => (
          <span key={`${tag}-${i}`}>{tag}</span>
        ))}
      </motion.div>
    </div>
  );
}
