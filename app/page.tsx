import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { MarqueeBar } from "@/components/marquee-bar";
import { ServicesSection } from "@/components/services-section";
import { CaseStudySection } from "@/components/case-study-section";
import { ProcessSection } from "@/components/process-section";
import { WhySection } from "@/components/why-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <SiteNav />

      <main id="main-content">
        <HeroSection />
        <MarqueeBar />
        <ServicesSection />
        <CaseStudySection />
        <ProcessSection />
        <WhySection />
        <CtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
