import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export const metadata: Metadata = {
  title: "About | ClearPath Technology Partners",
  description: "Why ClearPath exists, how we work, and the healthcare consulting background behind our healthcare & wellness case study track.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="About"
          title={<>A partner who <em>builds</em>, not just advises.</>}
          lede="ClearPath Technology Partners is a boutique growth partner for small businesses — websites, search visibility, and automation, delivered by people who actually implement it."
        />
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-body">
                <p>
                  Most small businesses end up juggling a web designer, an SEO consultant, and whoever set up their
                  Google Business Profile three years ago — none of whom talk to each other. ClearPath exists to be
                  the one team that handles all of it, priced as a fixed package instead of a pile of separate
                  invoices.
                </p>
                <p>
                  We started with home services and contractor businesses — window, roofing, and similar
                  companies that live or die on how fast they respond to a lead. That&apos;s still where a lot of
                  our work lives today.
                </p>
                <p>
                  We&apos;re also building out a Healthcare &amp; Wellness track, grounded in real experience: our
                  team includes a background in healthcare consulting and a certified pharmacy technician. Small
                  healthcare and wellness businesses have compliance and trust considerations that a generic web
                  agency usually misses — we don&apos;t.
                </p>
                <p>
                  However your business generates leads today — a website that just sits there, a phone that goes
                  unanswered, a follow-up that happens whenever someone gets around to it — that&apos;s the problem
                  we&apos;re built to fix.
                </p>
              </div>
              <div className="about-side">
                <ImagePlaceholder label="Founder photo" sub="Coming soon" ratio="portrait" />
                <div className="about-fact-box">
                  <h4>How We Work</h4>
                  <ul>
                    <li>Fixed packages, not hourly billing</li>
                    <li>Month-to-month — no lock-in contracts</li>
                    <li>You own your Google Business Profile and analytics</li>
                    <li>Larger projects scoped and quoted individually</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
