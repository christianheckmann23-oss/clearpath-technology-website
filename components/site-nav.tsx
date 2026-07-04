"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { megaMenuGroups, mobilePrimaryLinks, mobileServiceLinks, primaryNav } from "@/lib/data/nav";
import { site } from "@/lib/data/site";
import { overlayFade, dropdownFade, navLinkReveal, staggerContainer, buttonHover, buttonTap } from "@/lib/motion-variants";

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── FULLSCREEN MENU ─────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fullscreen-menu"
            id="fullscreen-menu"
            aria-label="Full screen navigation"
            variants={overlayFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="fullscreen-menu-scroll">
              <motion.ul
                className="fullscreen-menu-primary"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {mobilePrimaryLinks.map((link) => (
                  <li key={link.href}>
                    <motion.a href={link.href} variants={navLinkReveal} onClick={() => setIsOpen(false)}>
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </motion.ul>
              <motion.ul
                className="fullscreen-menu-secondary"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {mobileServiceLinks.map((link) => (
                  <li key={link.href}>
                    <motion.a href={link.href} variants={navLinkReveal} onClick={() => setIsOpen(false)}>
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </motion.ul>
            </div>
            <a className="fullscreen-menu-footer" href={site.phoneHref}>{site.phone}</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── NAV ────────────────────────────────── */}
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`} id="sitenav">
        <a href="/" className="nav-logo" aria-label="ClearPath Technology Partners home">
          <img src="/assets/clearpath-logo.png" alt="ClearPath Technology Partners" />
        </a>
        <ul className="nav-links">
          <li
            className="nav-services"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
            }}
          >
            <a href="/services" className="nav-services-trigger" aria-expanded={servicesOpen}>
              Services
            </a>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="services-mega"
                  aria-label="ClearPath services menu"
                  variants={dropdownFade}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="services-mega-inner">
                    <div className="services-mega-intro">
                      <span className="services-mega-kicker">ClearPath Services</span>
                      <a href="/services" className="services-mega-title">
                        Explore every way we help you grow.
                      </a>
                      <p className="services-mega-text">
                        Grouped by outcome: build your website, get found, and automate the busywork.
                      </p>
                    </div>
                    {megaMenuGroups.map((group) => (
                      <div className="mega-group" key={group.title}>
                        <div className="mega-group-title">{group.title}</div>
                        {group.links.map((link) => (
                          <a href={link.href} key={link.href}>
                            <strong>{link.label}</strong>
                            <span>{link.description}</span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          {primaryNav.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <motion.a href="/contact" className="nav-cta-btn" whileHover={buttonHover} whileTap={buttonTap}>
            Start the Conversation →
          </motion.a>
          <motion.button
            className="hamburger"
            id="hamburger"
            type="button"
            aria-label="Toggle menu"
            aria-controls="fullscreen-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            whileTap={buttonTap}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </nav>
    </>
  );
}
