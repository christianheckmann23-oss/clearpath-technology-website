"use client";

import { motion } from "motion/react";
import { track } from "@vercel/analytics";
import { coreServices } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { staggerContainer, fadeUpItem, viewportOnce } from "@/lib/motion-variants";
import { AnalyticsEvent } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <motion.div
          className="footer-top"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUpItem}>
            <a href="/" className="nav-logo" aria-label="ClearPath Technology Partners home">
              <img
                src="/assets/clearpath-logo.png"
                alt="ClearPath Technology Partners"
                height={56}
                style={{ display: "block" }}
              />
            </a>
            <p className="footer-brand-desc">
              Websites, AI search visibility, and automation for small businesses that want to look credible online
              and stop losing leads to slow follow-up.
            </p>
          </motion.div>
          <motion.div className="footer-col" variants={fadeUpItem}>
            <h4>Services</h4>
            <ul>
              {coreServices.map((service) => (
                <li key={service.slug}>
                  <a href={`/services/${service.slug}`}>{service.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="footer-col" variants={fadeUpItem}>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div className="footer-col" variants={fadeUpItem}>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/contact" onClick={() => track(AnalyticsEvent.ContactCtaClick, { location: "footer" })}>
                  Start the Conversation
                </a>
              </li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li>
                <a
                  href={`tel:${site.phoneHref.replace("tel:", "")}`}
                  onClick={() => track(AnalyticsEvent.PhoneClick, { location: "footer" })}
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <div className="footer-bottom">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
