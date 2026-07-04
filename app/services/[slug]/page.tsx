import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { ServiceHeroLight } from "@/components/service-hero-light";
import { AIIntegrationHero } from "@/components/ai-integration-hero";
import { ProcessStepper } from "@/components/ui/process-stepper";
import { StatsBar } from "@/components/ui/stats-bar";
import { ServiceVisual } from "@/components/ui/service-visuals";
import { AutomationWorkflowVisual } from "@/components/ui/automation-workflow-visual";
import { coreServices, getServiceBySlug } from "@/lib/data/services";
import { servicePageContent, serviceIcon } from "@/lib/data/service-page-content";
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
    title: `${service.name} | ClearPath Technology Partners`,
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
    icon: <Icon size={16} strokeWidth={2} aria-hidden="true" />,
    value,
    label,
  }));
  const processSteps = content.processSteps.map(({ icon: Icon, title, desc }) => ({
    icon: <Icon size={20} strokeWidth={2} aria-hidden="true" />,
    title,
    desc,
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
        />
        <ServiceHeroLight
          eyebrow={content.eyebrow}
          titleMain={content.titleMain}
          titleAccent={content.titleAccent}
          description={content.description}
          heroStats={heroStats}
          visual={visual}
        />
        <section className="service-detail-section">
          <div className="container">
            <div className="service-detail-grid">
              <div className="service-detail-body-stack">
                <ProcessStepper steps={processSteps} id="see-it-in-action" />
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
                <h4>Other Services</h4>
                <ul>
                  {otherServices.map((s) => {
                    const Icon = serviceIcon[s.slug];
                    return (
                      <li key={s.slug}>
                        <a href={`/services/${s.slug}`}>
                          <span className="service-sidebar-link-main">
                            {Icon && (
                              <span className="service-sidebar-icon">
                                <Icon size={16} strokeWidth={2} aria-hidden="true" />
                              </span>
                            )}
                            {s.name}
                          </span>
                          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <a href="/services" className="service-sidebar-viewall">
                  View all services <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </a>
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
