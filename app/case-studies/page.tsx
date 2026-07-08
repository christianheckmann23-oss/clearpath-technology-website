import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { CaseStudyGallery } from "@/components/case-study-gallery";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Case Studies | CirroFlow Technologies",
  description:
    "Real results by industry — home services, healthcare & wellness, and general small business — from websites and automation CirroFlow has built.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Case Studies"
          title="Real work, built to convert."
          lede="Websites, search visibility, and automation we've shipped for real businesses — plus the spots we're saving for yours."
        />
        <section className="case-studies-section">
          <div className="container">
            <div className="case-studies-header">
              <span className="eyebrow">Client Results</span>
              <h2>Every build has a before and after.</h2>
              <p>
                Browse the projects below — what each client came to us with, what we shipped, and the numbers
                that moved. New case studies are added as sites launch, so if your industry isn&apos;t here yet,
                that spot is open.
              </p>
            </div>
            <CaseStudyGallery />
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
