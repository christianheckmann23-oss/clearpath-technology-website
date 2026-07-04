import type { TargetAndTransition, Transition, Variants } from "motion/react";

/* ── Site-wide physics ─────────────────────────────────────────────
   One spring vocabulary, taken from the case-studies HeroParallax so
   every interaction on the site shares the same snap. Tune here, not
   inline. */
export const SPRING: Transition = { type: "spring", stiffness: 300, damping: 30 };
export const SPRING_SOFT: Transition = { type: "spring", stiffness: 120, damping: 20 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: SPRING_SOFT },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: SPRING_SOFT },
};

/* The parallax's tilt-flatten as an entrance: cards arrive from a
   slight 3D pitch and settle flat. Parent needs `perspective` (the
   .has-depth utility class in globals.css). */
export const flattenIn: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 12 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: SPRING_SOFT },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export const viewportOnce = { once: true, amount: 0.3 } as const;

export const navLinkReveal: Variants = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export const dropdownFade: Variants = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: SPRING },
};

// Shared tap/hover "pop" for anything clickable (buttons, CTAs, cards).
export const buttonHover: TargetAndTransition = { scale: 1.035, y: -1, transition: SPRING };
export const buttonTap: TargetAndTransition = { scale: 0.94, transition: SPRING };

// Gentler tap for wide list rows / cards where a big scale would look jarring.
export const rowTap: TargetAndTransition = { scale: 0.985, transition: SPRING };
