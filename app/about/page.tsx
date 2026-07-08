import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About | CirroFlow Technologies",
  description: "Why CirroFlow exists, how we work, and the founder's background in healthcare, IT managed services, and ERP implementation.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="About"
          title={<>A partner who <em>builds</em>, not just advises.</>}
          lede="CirroFlow Technologies is a boutique growth partner for small business owners. Websites, search visibility, and automation, built and delivered by people who actually roll up their sleeves and implement it."
        />
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-body">
                <p>
                  I grew up in Lorain, Ohio, and my path here wasn&apos;t a straight line. I started at Lorain
                  County Community College, then transferred to Ohio University, where I finished a double major
                  in Strategic Leadership &amp; Management and Business Analytics.
                </p>
                <p>
                  Before CirroFlow, I worked as a certified pharmacy technician, then moved into business
                  development for an IT managed services company, and later worked as an ERP implementation
                  consultant, helping businesses stand up the systems that actually run their day-to-day
                  operations. Healthcare, IT sales, enterprise software: three very different rooms, but the same
                  problem kept showing up in every single one. Small business owners were running on tools nobody
                  built for them, set up years ago by someone who&apos;s long gone.
                </p>
                <p>
                  That&apos;s why I started CirroFlow with home services and contractor businesses: window,
                  roofing, and companies just like them that live or die on how fast they respond to a lead. It&apos;s
                  still where a lot of my work lives today, and I take that responsibility seriously. Your next
                  lead shouldn&apos;t slip through the cracks because your website or follow-up couldn&apos;t
                  keep up.
                </p>
                <p>
                  It&apos;s also why I&apos;m so driven on AI. We&apos;re still early in the adoption curve. Most
                  small business owners have heard about AI, maybe messed around with a chatbot, but haven&apos;t
                  actually put it to work inside their business yet. That&apos;s the gap I built CirroFlow to
                  close: bringing you the same AI capabilities that larger companies are quietly rolling out
                  in-house, without you needing an IT department of your own to make it happen. That&apos;s the
                  mission in one sentence: put the technology big companies take for granted — a great website,
                  AI search visibility, automation that answers every call — within reach of every small
                  business, at a fixed price you can see up front.
                </p>
                <p>
                  However your business generates leads today, whether it&apos;s a website that just sits there,
                  a phone that goes unanswered, or a follow-up that happens whenever someone gets around to it,
                  that&apos;s the problem I&apos;m here to fix. You built your business. Let me help you grow it.
                </p>
              </div>
              <div className="about-side">
                <div className="founder-photo-frame">
                  <Image
                    src="/assets/founder-photo.jpg"
                    alt="Christian Heckmann, founder of CirroFlow Technologies"
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                    priority
                  />
                </div>
                <div className="founder-caption">
                  <span className="founder-name">Christian Heckmann</span>
                  <span className="founder-title">Founder, CirroFlow Technologies</span>
                </div>
                <div className="about-fact-box">
                  <h4>How We Work</h4>
                  <ul>
                    <li>Fixed packages, not hourly billing</li>
                    <li>Month-to-month, no lock-in contracts</li>
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
