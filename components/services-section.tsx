"use client";

import { motion } from "motion/react";
import { coreServices } from "@/lib/data/services";
import { staggerContainer, fadeUpItem, viewportOnce, rowTap } from "@/lib/motion-variants";

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="eyebrow">What We Deliver</span>
            <h2>Services built<br />to grow your business.</h2>
          </div>
          <p>Not a do-everything agency — a focused set of services that gets you found and turns visitors into customers.</p>
        </div>

        <motion.div
          className="services-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {coreServices.map((service, index) => (
            <motion.a
              href={`/services/${service.slug}`}
              className="service-row"
              key={service.slug}
              variants={fadeUpItem}
              whileTap={rowTap}
            >
              <span className="service-num">{String(index + 1).padStart(2, "0")}</span>
              <div className="service-content">
                <div className="service-name">{service.name}</div>
                <div className="service-desc">{service.shortDesc}</div>
                <div className="service-tags-row">
                  {service.tags.map((tag) => (
                    <span className="stag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="service-arrow">→</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
