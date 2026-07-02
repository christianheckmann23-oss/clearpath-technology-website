"use client";

import { useEffect, useState } from "react";

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── FULLSCREEN MENU ─────────────────── */}
      <nav className="fullscreen-menu" id="fullscreen-menu" aria-label="Full screen navigation">
        <ul>
          <li>
            <a href="/services/" onClick={() => setIsOpen(false)}>Services</a>
          </li>
          <li>
            <a href="/services/microsoft-cloud/" onClick={() => setIsOpen(false)}>Microsoft Cloud</a>
          </li>
          <li>
            <a href="/services/workflow-automation-ai/" onClick={() => setIsOpen(false)}>Automation + AI</a>
          </li>
          <li>
            <a href="/services/seo-optimization/" onClick={() => setIsOpen(false)}>SEO Optimization</a>
          </li>
          <li>
            <a href="/case-studies/just-windows/" onClick={() => setIsOpen(false)}>Our Work</a>
          </li>
          <li>
            <a href="#process" onClick={() => setIsOpen(false)}>Our Process</a>
          </li>
          <li>
            <a href="/stack/" onClick={() => setIsOpen(false)}>Our Stack</a>
          </li>
          <li>
            <a href="/contact/" onClick={() => setIsOpen(false)}>Get in Touch</a>
          </li>
        </ul>
        <div className="fullscreen-menu-footer"></div>
      </nav>

      {/* ── NAV ────────────────────────────── */}
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`} id="sitenav">
        <a href="/" className="nav-logo" aria-label="ClearPath Technology Partners home">
          <img
            src="/assets/clearpath-logo.png"
            alt="ClearPath Technology Partners"
            height={56}
            style={{ display: "block" }}
          />
        </a>
        <ul className="nav-links">
          <li className="nav-services">
            <a href="/services/" className="nav-services-trigger">Services</a>
            <div className="services-mega" aria-label="ClearPath services menu">
              <div className="services-mega-inner">
                <div className="services-mega-intro">
                  <span className="services-mega-kicker">ClearPath Services</span>
                  <a href="/services/" className="services-mega-title">
                    Explore every way we modernize your business.
                  </a>
                  <p className="services-mega-text">
                    Grouped by outcome so you can find the right starting point: cloud, automation, search growth, analytics, and websites.
                  </p>
                </div>
                <div className="mega-group">
                  <div className="mega-group-title">Microsoft Cloud</div>
                  <a href="/services/microsoft-cloud/">
                    <strong>Microsoft products</strong>
                    <span>Azure, Entra, Defender, Intune</span>
                  </a>
                  <a href="/services/microsoft-365/">
                    <strong>Microsoft 365</strong>
                    <span>Email, Teams, SharePoint, devices</span>
                  </a>
                  <a href="/services/managed-security/">
                    <strong>Managed security</strong>
                    <span>Monitoring, patching, compliance</span>
                  </a>
                  <a href="/services/cloud-migration/">
                    <strong>Cloud migration</strong>
                    <span>Zero-downtime Azure migration</span>
                  </a>
                </div>
                <div className="mega-group">
                  <div className="mega-group-title">Automation + AI</div>
                  <a href="/services/workflow-automation-ai/">
                    <strong>Workflow automations</strong>
                    <span>Power Automate, Logic Apps, CRM</span>
                  </a>
                  <a href="/services/workflow-automation-ai/#ai-agents">
                    <strong>AI agents</strong>
                    <span>Sales, support, documents, ops</span>
                  </a>
                  <a href="/services/automation/">
                    <strong>Lead + review automation</strong>
                    <span>Fast response and reputation loops</span>
                  </a>
                </div>
                <div className="mega-group">
                  <div className="mega-group-title">SEO + Growth</div>
                  <a href="/services/seo-optimization/">
                    <strong>Technical SEO</strong>
                    <span>Crawl health, schema, speed</span>
                  </a>
                  <a href="/services/seo-optimization/#on-page">
                    <strong>On-page + AI SEO</strong>
                    <span>Service pages built to rank</span>
                  </a>
                  <a href="/services/seo-optimization/#off-page">
                    <strong>Off-page SEO</strong>
                    <span>Local authority and reputation</span>
                  </a>
                </div>
                <div className="mega-group">
                  <div className="mega-group-title">Web + Measurement</div>
                  <a href="/services/website-design-hosting/">
                    <strong>Website design</strong>
                    <span>Fast service sites and forms</span>
                  </a>
                  <a href="/services/website-design-hosting/#hosting">
                    <strong>Hosting + security</strong>
                    <span>Azure/Vercel, SSL, monitoring</span>
                  </a>
                  <a href="/services/analytics-advertising/">
                    <strong>Analytics + advertising</strong>
                    <span>GA4, tracking, dashboards, ads</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="/case-studies/just-windows/">Our Work</a>
          </li>
          <li>
            <a href="/stack/">Stack</a>
          </li>
          <li>
            <a href="/contact/">Contact</a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a href="/contact/" className="nav-cta-btn">Start the Conversation →</a>
          <button
            className="hamburger"
            id="hamburger"
            type="button"
            aria-label="Toggle menu"
            aria-controls="fullscreen-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
