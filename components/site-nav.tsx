"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { track } from "@vercel/analytics";
import { megaMenuGroups, mobilePrimaryLinks, mobileServiceLinks, primaryNav } from "@/lib/data/nav";
import { site } from "@/lib/data/site";
import { overlayFade, dropdownFade, navLinkReveal, staggerContainer, buttonHover, buttonTap } from "@/lib/motion-variants";
import { useHasHover } from "@/components/ui/motion-primitives";
import { AnalyticsEvent } from "@/lib/analytics";
import { BrandLogo } from "@/components/brand-logo";

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const hasHover = useHasHover();

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside close — needed because the trigger is click-toggled
  // (no page to navigate to anymore) rather than only hover-driven.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [servicesOpen]);

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
              <span className="fullscreen-menu-label">Services</span>
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
            <a
              className="fullscreen-menu-footer"
              href={site.phoneHref}
              onClick={() => track(AnalyticsEvent.PhoneClick, { location: "nav_mobile" })}
            >
              {site.phone}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── NAV ────────────────────────────────── */}
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`} id="sitenav">
        <a href="/" className="nav-logo" aria-label="CirroFlow Technologies home">
          <BrandLogo priority />
        </a>
        <ul className="nav-links">
          <li
            className="nav-services"
            ref={servicesRef}
            onMouseEnter={hasHover ? () => setServicesOpen(true) : undefined}
            onMouseLeave={hasHover ? () => setServicesOpen(false) : undefined}
            onFocus={() => setServicesOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
            }}
          >
            <button
              type="button"
              className="nav-services-trigger"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => (hasHover ? true : !open))}
            >
              Services
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="services-mega"
                  aria-label="CirroFlow services menu"
                  variants={dropdownFade}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="services-mega-inner">
                    <div className="services-mega-intro">
                      <span className="services-mega-kicker">CirroFlow Services</span>
                      <span className="services-mega-title">
                        Explore every way we help you grow.
                      </span>
                      <p className="services-mega-text">
                        Grouped by outcome: build your website, get found, and automate the busywork.
                      </p>
                    </div>
                    {megaMenuGroups.map((group) => (
                      <div className="mega-group" key={group.title}>
                        <div className="mega-group-title">{group.title}</div>
                        {group.links.map((link) => (
                          <a href={link.href} key={link.href} onClick={() => setServicesOpen(false)}>
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
          <motion.a
            href="/contact"
            className="nav-cta-btn"
            whileHover={buttonHover}
            whileTap={buttonTap}
            onClick={() => track(AnalyticsEvent.ContactCtaClick, { location: "nav" })}
          >
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
