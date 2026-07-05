import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { BrowserMockup } from "@/components/ui/browser-mockup";
import { DeviceShowcase } from "@/components/ui/device-showcase";
import { MetricValue } from "@/components/ui/motion-primitives";
import { getCaseStudyBySlug } from "@/lib/data/case-studies";

const SLUG = "just-windows-usa";

export const metadata: Metadata = {
  title: "Just Windows USA Case Study | ClearPath Technology Partners",
  description:
    "How ClearPath cleared 232 SEO issues in 4 days and automated lead response for Just Windows USA, a window contractor in Mentor, OH.",
};

export default function JustWindowsCaseStudyPage() {
  const caseStudy = getCaseStudyBySlug(SLUG);
  if (!caseStudy) notFound();

  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Home Services Case Study"
          title={<>232 SEO issues cleared in <em>4 days</em>. Leads automated.</>}
          lede={`${caseStudy.clientName}${caseStudy.clientLocation ? ` · ${caseStudy.clientLocation}` : ""}`}
          visual={
            caseStudy.heroImage ? (
              <DeviceShowcase
                desktopSrc={caseStudy.heroImage}
                phoneSrc="/assets/case-jw-services.jpg"
                alt={`${caseStudy.clientName} website`}
                url={caseStudy.clientUrl?.replace(/^https?:\/\//, "")}
                priority
              />
            ) : undefined
          }
        />
        <section className="case-detail-section">
          <div className="container">
            <div className="case-grid">
              <div>
                <p className="case-client-name">The Challenge</p>
                <p className="case-text">
                  {caseStudy.clientUrl ? (
                    <a
                      href={caseStudy.clientUrl}
                      target="_blank"
                      rel="noopener"
                      style={{ color: "inherit", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      {caseStudy.clientName}
                    </a>
                  ) : (
                    caseStudy.clientName
                  )}{" "}
                  {caseStudy.challenge}
                </p>
                <p className="case-client-name" style={{ marginTop: "32px" }}>The Solution</p>
                <p className="case-text">{caseStudy.solution}</p>
              </div>
              <div className="case-metrics">
                {caseStudy.metrics.map((metric, i) => (
                  <div className="metric-box" key={metric.label}>
                    <div className={`metric-big${i % 2 === 0 ? " blue" : ""}`}>
                      <MetricValue value={metric.value} />
                    </div>
                    <div className="metric-desc">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "64px", maxWidth: "700px" }}>
              <BrowserMockup
                src="/assets/case-jw-services.jpg"
                alt={`${caseStudy.clientName} services page`}
                url={caseStudy.clientUrl?.replace(/^https?:\/\//, "")}
              />
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
