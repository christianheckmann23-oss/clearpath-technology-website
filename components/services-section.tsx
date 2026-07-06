"use client";

import { coreServices } from "@/lib/data/services";
import { ServicesGrid } from "@/components/services-grid";

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

        <ServicesGrid services={coreServices} />
      </div>
    </section>
  );
}
