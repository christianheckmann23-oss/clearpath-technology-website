import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy | CirroFlow Technology Partners",
  robots: "noindex, follow",
};

export default function CookiesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero eyebrow="Legal" title="Cookie Policy" />
        <section className="legal-section">
          <div className="container">
          <div className="legal-body">
            <p className="legal-meta">{site.legalName} &nbsp;|&nbsp; Effective date: July 5, 2026 &nbsp;|&nbsp; Last updated: July 5, 2026</p>

            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that a website stores on your device to remember information about your
              visit. Similar technologies — such as local storage and pixels — serve the same purpose, and we refer to
              them collectively as &quot;cookies.&quot; This Cookie Policy explains what cookies {site.url} uses and
              how you can control them. It works together with our <a href="/privacy">Privacy Policy</a>.
            </p>

            <h2>2. Cookies We Use</h2>
            <p>
              We keep our cookie footprint deliberately small. We do not use advertising or cross-site tracking
              cookies, and we do not sell data collected by cookies.
            </p>
            <ul>
              <li>
                <strong>Essential cookies</strong> — Set by our hosting infrastructure so the site loads securely and
                routes traffic correctly. Required for the site to function and cannot be disabled.
              </li>
              <li>
                <strong>Analytics cookies</strong> — Set by Vercel Analytics or Google Analytics 4 (cookies such as{" "}
                <code>_ga</code> and <code>_ga_*</code>) to count visits, page views, and conversion events so we can
                improve the site. Data is aggregated and does not identify you personally. Retained for up to 24
                months.
              </li>
              <li>
                <strong>Performance cookies</strong> — Used by Vercel&apos;s edge network to monitor uptime, route
                requests to the nearest server, and protect against abuse. Session to short-term duration.
              </li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>The analytics and performance cookies above are set by third parties on our behalf:</p>
            <ul>
              <li>
                <strong>Google Analytics 4</strong> — usage analytics. See{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
              </li>
              <li>
                <strong>Vercel</strong> — website hosting, edge delivery, and analytics. See{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.
              </li>
            </ul>
            <p>
              If you follow a link from our site to an external service (such as Google Maps or a client website),
              that service may set its own cookies under its own policy.
            </p>

            <h2>4. How to Control Cookies</h2>
            <ul>
              <li>
                <strong>Browser settings</strong> — Every major browser lets you block or delete cookies. Blocking
                non-essential cookies will not affect your ability to use this site.
              </li>
              <li>
                <strong>Google Analytics opt-out</strong> — Install{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google&apos;s browser add-on</a>
                {" "}to prevent GA4 from collecting your data on any site.
              </li>
              <li>
                <strong>Do Not Track / Global Privacy Control</strong> — Our site does not serve targeted advertising,
                so there is no ad tracking to opt out of. Analytics data is anonymized and aggregated.
              </li>
            </ul>

            <h2>5. Changes to This Policy</h2>
            <p>
              If we add new cookies or change how we use existing ones, we will update this page and the &quot;Last
              updated&quot; date above. Material changes will be communicated via a notice on our website.
            </p>

            <h2>6. Contact Us</h2>
            <div className="legal-contact-box">
              <p>{site.legalName}</p>
              <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><a href={site.phoneHref}>{site.phone}</a></p>
            </div>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
