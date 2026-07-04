import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { AIIntegrationHero } from "@/components/ai-integration-hero";
import { ServiceVisual } from "@/components/ui/service-visuals";
import { coreServices, getServiceBySlug } from "@/lib/data/services";
import { packages } from "@/lib/data/packages";

/** These two pages get the dark integrations-carousel hero instead of the
    standard split PageHero — "plugs into your tools" IS the hero here. */
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
  if (!service || service.isAddOn) notFound();

  const bundledPackages = packages.filter((pkg) => service.bundledIn.includes(pkg.slug));
  const otherServices = coreServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <SiteNav />
      <main id="main-content">
        {INTEGRATION_SLUGS.has(service.slug) ? (
          <AIIntegrationHero eyebrow="Services" title={service.name} lede={service.shortDesc} />
        ) : (
          <PageHero
            eyebrow="Services"
            title={service.name}
            lede={service.shortDesc}
            visual={<ServiceVisual slug={service.slug} />}
          />
        )}
        <section className="service-detail-section">
          <div className="container">
            <div className="service-detail-grid">
              <div className="service-detail-body">
                <p>{service.longDesc}</p>
                {service.features.length > 0 && (
                  <ul className="service-feature-list">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={19} strokeWidth={2} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="service-detail-tags">
                  {service.tags.map((tag) => (
                    <span className="stag" key={tag}>{tag}</span>
                  ))}
                </div>
                {INTEGRATION_SLUGS.has(service.slug) && (
                  <div className="service-detail-visual-card">
                    <span className="service-detail-visual-label">See it in action</span>
                    <ServiceVisual slug={service.slug} />
                  </div>
                )}
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
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <a href={`/services/${s.slug}`}>
                        <span>{s.name}</span>
                        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
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
