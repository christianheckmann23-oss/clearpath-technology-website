"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion-variants";

export interface RenderedStatChip {
  icon: ReactNode;
  value: string;
  label: string;
}

/** Bottom stats bar — capability/target framing, never a fabricated
    track-record number ("100+ clients"-style claims a solo shop can't
    back up). */
export function StatsBar({ stats }: { stats: RenderedStatChip[] }) {
  return (
    <motion.div
      className="stats-bar"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {stats.map((stat) => (
        <motion.div className="stats-bar-item" key={stat.label} variants={fadeUpItem}>
          {stat.icon}
          <div>
            <div className="stats-bar-value">{stat.value}</div>
            <div className="stats-bar-label">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
