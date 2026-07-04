import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServicesSection } from "@/components/services-section";

export const metadata: Metadata = {
  title: "Services | ClearPath Technology Partners",
  description:
    "Web design, hosting, SEO, AI search optimization, AI call agents, and AI automations — the focused set of services ClearPath delivers for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Services"
          title={<>A <em>focused</em> set of services, not a do-everything list.</>}
          lede={
            <>
              Every service below is available on its own or bundled into one of our{" "}
              <a href="/packages" style={{ color: "var(--blue-lt)", textDecoration: "underline" }}>packages</a>.
            </>
          }
        />
        <ServicesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
