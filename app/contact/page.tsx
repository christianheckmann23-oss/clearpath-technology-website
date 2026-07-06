import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { HeroForm } from "@/components/hero-form";
import { PageHero } from "@/components/page-hero";
import { TrackedLink } from "@/components/ui/tracked-link";
import { site } from "@/lib/data/site";
import { AnalyticsEvent } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Contact | ClearPath Technology Partners",
  description: "Schedule a free 30-minute assessment with ClearPath Technology Partners — no commitment, no sales pressure.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title={<>Let&apos;s talk about what your business <em>actually needs</em>.</>}
          lede="Fill out the form or call us directly. We'll map your current setup and hand you a written plan — no commitment."
        />
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <p>
                  Most calls take 30 minutes. We&apos;ll ask about your current website, how leads reach you today,
                  and what&apos;s actually costing you business — then tell you honestly which package (if any)
                  makes sense.
                </p>
                <div className="contact-info-row">
                  <span>Phone</span>
                  <TrackedLink
                    href={site.phoneHref}
                    event={AnalyticsEvent.PhoneClick}
                    properties={{ location: "contact_page" }}
                  >
                    {site.phone}
                  </TrackedLink>
                </div>
                <div className="contact-info-row">
                  <span>Email</span>
                  <TrackedLink
                    href={`mailto:${site.email}`}
                    event={AnalyticsEvent.EmailClick}
                    properties={{ location: "contact_page" }}
                  >
                    {site.email}
                  </TrackedLink>
                </div>
              </div>
              <div className="contact-form-card">
                <HeroForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
