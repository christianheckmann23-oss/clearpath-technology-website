"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { serviceIcon } from "@/lib/data/service-page-content";
import type { Service, ServiceCategory } from "@/lib/data/services";
import { fadeUpItem, viewportOnce, rowTap } from "@/lib/motion-variants";

type Filter = ServiceCategory | "all";

/* Filter labels mirror the nav's mega-menu groups so the vocabulary
   stays consistent across the site. */
const FILTERS: { label: string; value: Filter }[] = [
  { label: "All Services", value: "all" },
  { label: "Website", value: "website" },
  { label: "Get Found", value: "growth" },
  { label: "Automate", value: "automation" },
];

/* Honest capability stats — same rule as service-page-content.ts: never
   fabricated track-record numbers ClearPath can't back up. */
const STATS = [
  {
    value: "1–2 wks",
    label: "Typical launch window for a new small-business website.",
  },
  {
    value: "One partner",
    label: "Design, hosting, SEO, and automation under one roof — no handoffs.",
  },
  {
    value: "Flat monthly",
    label: "Packages from $20/mo, so you always know what you're paying.",
  },
];

export function ServicesGrid({ services }: { services: Service[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? services : services.filter((s) => s.category === filter);

  return (
    <>
      <div className="svc-filter" role="group" aria-label="Filter services by category">
        <span className="svc-filter-label">Filter</span>
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            className={`svc-chip${filter === value ? " active" : ""}`}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="svc-grid">
        {visible.map((service, index) => {
          const Icon = serviceIcon[service.slug];
          // Stable numbering from the full list so cards keep their
          // number when a filter narrows the grid.
          const num = String(services.indexOf(service) + 1).padStart(2, "0");
          return (
            // Entrance uses a plain CSS @keyframes animation (.svc-card-in)
            // rather than Motion's initial/animate. Cards fully unmount and
            // remount on a filter change (no `layout` prop — see globals.css
            // comment on the same class), so a native CSS animation is the
            // simplest correct tool here: it always plays on insertion and
            // never replays on a mere re-render, with no coordination with
            // the parent's own animation state needed. whileTap still uses
            // Motion for the press-down gesture feedback.
            <motion.a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="svc-card svc-card-in"
              style={{ animationDelay: `${index * 60}ms` }}
              whileTap={rowTap}
            >
              <div className="svc-card-top">
                <span className="svc-card-icon" aria-hidden="true">
                  {Icon && <Icon size={22} strokeWidth={2} />}
                </span>
                <span className="svc-card-num">{num}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.shortDesc}</p>
              <div className="svc-card-tags">
                {service.tags.map((tag) => (
                  <span className="stag" key={tag}>{tag}</span>
                ))}
              </div>
              <span className="svc-card-link">
                Learn more <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </span>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        className="svc-stats"
        variants={fadeUpItem}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="svc-stats-divider" aria-hidden="true" />
        <div className="svc-stats-grid">
          {STATS.map(({ value, label }) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
