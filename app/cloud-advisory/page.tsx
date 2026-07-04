import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { TapLink } from "@/components/ui/tap-link";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Cloud & IT Advisory | ClearPath Technology Partners",
  description:
    "Microsoft Cloud advisory for businesses that need Azure, Microsoft 365, identity, and security managed as one platform. Custom-quoted, scoped to your environment.",
  robots: "noindex, follow",
};

const CAPABILITIES = [
  { icon: "azure-cloud", label: "Azure Cloud" },
  { icon: "microsoft-365", label: "Microsoft 365" },
  { icon: "entra-id", label: "Entra ID" },
  { icon: "microsoft-defender", label: "Microsoft Defender" },
  { icon: "intune", label: "Intune" },
  { icon: "microsoft-sentinel", label: "Microsoft Sentinel" },
  { icon: "azure-lighthouse", label: "Azure Lighthouse" },
  { icon: "infrastructure-as-code", label: "Infrastructure as Code" },
];

const WHERE_IT_HELPS = [
  "Company email lives in multiple systems or personal accounts.",
  "Employees need secure access from field devices or home offices.",
  "Licenses, admin roles, and MFA settings have become messy.",
  "Websites, apps, or data need to move off expensive legacy hosting.",
  "Leadership wants one view of security, devices, and cloud health.",
];

const HOW_WE_IMPLEMENT = [
  "Audit the tenant, domains, identities, devices, and current licensing.",
  "Design the target state for Microsoft 365, Entra ID, Intune, and Azure.",
  "Apply MFA, conditional access, backup, monitoring, and least-privilege roles.",
  "Deploy infrastructure with repeatable scripts where possible.",
  "Document admin access, recovery paths, and monthly management tasks.",
];

export default function CloudAdvisoryPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Cloud & IT Advisory"
          title={<>One managed Microsoft <em>foundation</em> for your business.</>}
          lede="For businesses that need Azure, Microsoft 365, identity, and security managed as one platform — not scattered tools. This is custom-quoted, scoped work, separate from our standard web/AI packages."
        />

        <section className="capability-section">
          <div className="container">
            <div className="capability-grid">
              {CAPABILITIES.map((cap) => (
                <div className="capability-card" key={cap.icon}>
                  <img src={`/assets/microsoft-icons/${cap.icon}.svg`} alt="" aria-hidden="true" />
                  <span>{cap.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="checklist-grid">
              <div className="checklist-panel">
                <h3>Where it helps</h3>
                <ul>
                  {WHERE_IT_HELPS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="checklist-panel">
                <h3>How we implement it</h3>
                <ul>
                  {HOW_WE_IMPLEMENT.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-bg-text" aria-hidden="true">CLOUD</div>
          <div className="container">
            <h2>Clean up the stack<br /><em>before it gets expensive.</em></h2>
            <div className="cta-body">
              <p className="cta-sub">
                A short Microsoft Cloud audit shows licensing waste, security gaps, and migration opportunities —
                scoped and quoted for your environment.
              </p>
              <div className="cta-actions-group">
                <TapLink href="/contact" className="btn-cta-primary">Get My Free Assessment →</TapLink>
                <p className="cta-phone">Or call us: <a href={site.phoneHref}>{site.phone}</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
