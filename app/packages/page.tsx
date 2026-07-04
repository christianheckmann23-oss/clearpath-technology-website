import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PackagesSection, AddOnsSection } from "@/components/packages-section";

export const metadata: Metadata = {
  title: "Packages & Pricing | ClearPath Technology Partners",
  description:
    "Three fixed packages for small business websites, SEO, AI search optimization, and automation — Foundation, Growth, and Accelerate. Pricing scales for larger projects.",
};

export default function PackagesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Packages & Pricing"
          title={<>Pick the package that <em>fits</em>. No custom quote required.</>}
          lede="Three fixed packages covering everything from a credible first website to a fully automated growth engine. Pricing shown is a starting point — larger or more complex projects are scoped and quoted individually."
        />
        <PackagesSection />
        <AddOnsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
