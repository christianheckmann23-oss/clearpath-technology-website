import { SiteNav } from "@/components/site-nav";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { showcaseTiles } from "@/lib/data/showcase";
import { MarqueeBar } from "@/components/marquee-bar";
import { ServicesSection } from "@/components/services-section";
import { CaseStudySection } from "@/components/case-study-section";
import { SocialProofSection } from "@/components/social-proof-section";
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
        <HeroParallax tiles={showcaseTiles} />
        <MarqueeBar />
        <ServicesSection />
        <CaseStudySection />
        <SocialProofSection />
        <ProcessSection />
        <WhySection />
        <CtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
