"use client";

import React, { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
  animate,
} from "motion/react";
import { SPRING } from "@/lib/motion-variants";

/* ── Shared helpers ────────────────────────────────────────────── */

/** True on devices with a real pointer (desktop) — pointer-tracking
    effects are wasted battery + jank on touch screens. */
function useHasHover() {
  const [hasHover, setHasHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setHasHover(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return hasHover;
}

/* ── TiltCard: pointer-position 3D tilt ───────────────────────── */

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** max tilt in degrees */
  max?: number;
}

export function TiltCard({ children, className, style, max = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const hasHover = useHasHover();
  const rx = useSpring(useMotionValue(0), SPRING);
  const ry = useSpring(useMotionValue(0), SPRING);

  const active = hasHover && !reduce;

  function onPointerMove(e: React.PointerEvent) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * max * 2);
    ry.set(px * max * 2);
  }
  function onPointerLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        ref={ref}
        className={className}
        style={{ ...style, rotateX: active ? rx : 0, rotateY: active ? ry : 0, transformStyle: "preserve-3d" }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── MagneticButton: CTA drifts toward the cursor ─────────────── */

interface MagneticProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** how far (px) the element may drift */
  strength?: number;
}

export function Magnetic({ children, className, style, strength = 10 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const hasHover = useHasHover();
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);
  const active = hasHover && !reduce;

  function onPointerMove(e: React.PointerEvent) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * strength * 2);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * strength * 2);
  }
  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ display: "inline-block", ...style, x: active ? x : 0, y: active ? y : 0 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.div>
  );
}

/* ── ParallaxFloat: scroll-linked drift ───────────────────────── */

interface ParallaxFloatProps {
  children: ReactNode;
  className?: string;
  /** px of total drift across the element's scroll journey; negative floats up */
  distance?: number;
}

export function ParallaxFloat({ children, className, distance = -40 }: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, distance]), SPRING);

  return (
    <motion.div ref={ref} className={className} style={{ y: reduce ? 0 : y }}>
      {children}
    </motion.div>
  );
}

/* ── WordReveal: staggered clip-masked headline ───────────────── */

interface WordRevealProps {
  children: ReactNode;
  /** stagger between words, seconds */
  stagger?: number;
}

/** Splits string children into words; JSX children (e.g. the gradient
    <em>) are kept whole as single reveal units so styling survives. */
export function WordReveal({ children, stagger = 0.06 }: WordRevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  const units: ReactNode[] = [];
  const collect = (nodes: ReactNode) => {
    React.Children.forEach(nodes, (child) => {
      if (typeof child === "string") {
        child.split(/(\s+)/).forEach((part) => {
          if (part.trim() !== "") units.push(part);
          else if (part !== "") units.push(" ");
        });
      } else if (React.isValidElement(child) && child.type === React.Fragment) {
        collect((child.props as { children?: ReactNode }).children);
      } else if (child !== null && child !== undefined && child !== false) {
        units.push(child);
      }
    });
  };
  collect(children);

  let wordIndex = 0;
  return (
    <>
      {units.map((unit, i) => {
        if (unit === " ") return " ";
        const delay = wordIndex++ * stagger;
        return (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ ...SPRING, delay }}
            >
              {unit}
            </motion.span>
          </span>
        );
      })}
    </>
  );
}

/* ── CountUp: metric numbers spring from 0 in view ────────────── */

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function CountUp({ value, prefix = "", suffix = "", decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: "0px 0px 150px 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Parses metric strings like "232", "97%", "$20", "0s", "<60s", "24/7"
    and renders a CountUp when a single leading number is found;
    otherwise renders the string untouched. Keeps data files as plain
    strings. */
export function MetricValue({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^([^0-9-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <span className={className}>{value}</span>;
  const [, prefix, num, suffix] = match;
  // strings like 24/7 shouldn't count up their first half
  if (suffix.startsWith("/")) return <span className={className}>{value}</span>;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return <CountUp value={parseFloat(num)} prefix={prefix} suffix={suffix} decimals={decimals} className={className} />;
}
