import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { CaseStudyTabs } from "@/components/case-study-tabs";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { showcaseTiles } from "@/lib/data/showcase";

export const metadata: Metadata = {
  title: "Case Studies | ClearPath Technology Partners",
  description:
    "Real results by industry — home services, healthcare & wellness, and general small business — from websites and automation ClearPath has built.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <HeroParallax tiles={showcaseTiles} />
        <section className="case-studies-section">
          <div className="container">
            <CaseStudyTabs />
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
