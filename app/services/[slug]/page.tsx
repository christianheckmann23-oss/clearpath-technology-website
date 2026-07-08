import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { ServiceHeroLight } from "@/components/service-hero-light";
import { AIIntegrationHero } from "@/components/ai-integration-hero";
import { StatsBar } from "@/components/ui/stats-bar";
import { ServiceVisual } from "@/components/ui/service-visuals";
import { ServicesDisplayCards } from "@/components/services-display-cards";
import { AutomationWorkflowVisual } from "@/components/ui/automation-workflow-visual";
import { coreServices, getServiceBySlug } from "@/lib/data/services";
import { servicePageContent } from "@/lib/data/service-page-content";
import { packages } from "@/lib/data/packages";

/** These two pages additionally show the dark tool-pill integrations
    carousel inside the shared hero — "plugs into your tools" IS the
    opening hero for them. */
const INTEGRATION_SLUGS = new Set(["ai-call-agents", "ai-automations"]);

export function generateStaticParams() {
  return coreServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | CirroFlow Technologies`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const content = service ? servicePageContent[service.slug] : undefined;
  if (!service || service.isAddOn || !content) notFound();

  const bundledPackages = packages.filter((pkg) => service.bundledIn.includes(pkg.slug));
  const otherServices = coreServices.filter((s) => s.slug !== service.slug);

  const visual = service.slug === "ai-automations" ? <AutomationWorkflowVisual /> : <ServiceVisual slug={service.slug} />;

  const heroStats = content.heroStats.map(({ icon: Icon, value, label }) => ({
    icon: <Icon size={20} strokeWidth={2} aria-hidden="true" />,
    value,
    label,
  }));
  const bottomStats = content.bottomStats.map(({ icon: Icon, value, label }) => ({
    icon: <Icon size={20} strokeWidth={2} aria-hidden="true" />,
    value,
    label,
  }));

  return (
    <>
      <SiteNav />
      <main id="main-content">
        <AIIntegrationHero
          eyebrow="Services"
          title={service.name}
          lede={service.shortDesc}
          integrations={INTEGRATION_SLUGS.has(service.slug)}
          serviceSlug={service.slug}
        />
        <ServiceHeroLight
          eyebrow={content.eyebrow}
          titleMain={content.titleMain}
          titleAccent={content.titleAccent}
          description={content.description}
          heroStats={heroStats}
          visual={visual}
          serviceSlug={service.slug}
        />
        <section className="service-detail-section">
          <div className="container">
            <div className="service-detail-grid">
              <div className="service-detail-body-stack">
                <StatsBar stats={bottomStats} />
              </div>
              <div className="service-detail-sidebar">
                <h4>Included In</h4>
                <ul>
                  {bundledPackages.map((pkg) => (
                    <li key={pkg.slug}>
                      <a href="/packages">
                        <span>
                          {pkg.name} <span className="service-sidebar-price">${pkg.setupFee}+${pkg.monthly}/mo</span>
                        </span>
                        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="/#services" className="service-sidebar-viewall">
                  View all services <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-[#E8E8E4] bg-white py-24 md:py-28" aria-labelledby="more-services-heading">
          <div className="container">
            <div className="mb-14 text-center">
              <span className="eyebrow">Keep Exploring</span>
              <h2
                id="more-services-heading"
                className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1.5px] text-[#0A0A0A]"
              >
                More ways we can help.
              </h2>
            </div>
            <ServicesDisplayCards services={otherServices} />
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
