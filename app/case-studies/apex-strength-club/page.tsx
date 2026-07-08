import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { MetricValue } from "@/components/ui/motion-primitives";
import { getCaseStudyBySlug } from "@/lib/data/case-studies";

const SLUG = "apex-strength-club";

export const metadata: Metadata = {
  title: "Apex Strength Club Case Study | CirroFlow Technology Partners",
  description:
    "How CirroFlow built a premium website and local search presence for Apex Strength Club, a 24/7 gym in Vermilion, OH — launch-ready before the doors open.",
};

export default function ApexCaseStudyPage() {
  const caseStudy = getCaseStudyBySlug(SLUG);
  if (!caseStudy) notFound();

  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="General Business Case Study"
          title={<>Launch-ready <em>before the doors open.</em></>}
          lede={`${caseStudy.clientName}${caseStudy.clientLocation ? ` · ${caseStudy.clientLocation}` : ""}`}
          visual={
            caseStudy.cardImage ? (
              <Image
                src={caseStudy.cardImage}
                alt={`${caseStudy.clientName} website shown across desktop, tablet, and phone`}
                width={1672}
                height={941}
                sizes="(max-width: 980px) 100vw, 640px"
                priority
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
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
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
