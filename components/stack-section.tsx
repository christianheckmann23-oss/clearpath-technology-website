import type { CSSProperties } from "react";

export function StackSection() {
  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <div className="stack-header">
          <span className="eyebrow">Our Technology Stack</span>
          <h2>Best-fit tools.<br />Deep expertise.</h2>
          <p className="stack-intro">We work across a wide range of platforms and tools - below are a few common stack examples. Every engagement is scoped to what your business actually needs.</p>
        </div>
        <div className="stack-panels">

          <div className="stack-panel" style={{ "--accent": "#2563eb" } as CSSProperties}>
            <div className="stack-panel-top">
              <span className="stack-panel-label">Example Stack</span>
              <h3 className="stack-panel-name">Microsoft Cloud</h3>
              <p className="stack-panel-desc">Full Microsoft environment - email, identity, security, and cloud infrastructure managed from one place at a flat monthly rate.</p>
            </div>
            <ul className="stack-panel-tools">
              <li>Microsoft 365 - Email, Teams, SharePoint</li>
              <li>Azure Cloud - hosting, functions, storage</li>
              <li>Entra ID - identity, MFA, conditional access</li>
              <li>Microsoft Defender - endpoint security</li>
              <li>Intune MDM - device management</li>
              <li>Microsoft Sentinel - SIEM monitoring</li>
            </ul>
            <a href="/services/microsoft-cloud/" className="stack-panel-link">See Microsoft services →</a>
          </div>

          <div className="stack-panel" style={{ "--accent": "#7c3aed" } as CSSProperties}>
            <div className="stack-panel-top">
              <span className="stack-panel-label">Example Stack</span>
              <h3 className="stack-panel-name">AI &amp; Automation</h3>
              <p className="stack-panel-desc">Voice agents that answer calls, workflows that route leads, and AI that reads your documents - all running 24/7 without staff overhead.</p>
            </div>
            <ul className="stack-panel-tools">
              <li>Vapi - inbound/outbound voice agents</li>
              <li>Make - no-code workflow automation</li>
              <li>n8n - self-hosted pipeline automation</li>
              <li>OpenAI GPT-4o - language &amp; reasoning</li>
              <li>Azure AI Vision - OCR, document reads</li>
              <li>Webhook integrations - any platform</li>
            </ul>
            <a href="/services/automation/" className="stack-panel-link">See automation services →</a>
          </div>

          <div className="stack-panel" style={{ "--accent": "#16a34a" } as CSSProperties}>
            <div className="stack-panel-top">
              <span className="stack-panel-label">Example Stack</span>
              <h3 className="stack-panel-name">Online Presence</h3>
              <p className="stack-panel-desc">Website design and hosting, Google Business optimization, SEO, and paid advertising - everything needed to get found and convert leads.</p>
            </div>
            <ul className="stack-panel-tools">
              <li>Google Business Profile - maps &amp; search</li>
              <li>Vercel - edge hosting, fast deploys</li>
              <li>Google Analytics 4 - traffic &amp; conversions</li>
              <li>SEO - on-page, technical, local</li>
              <li>Google Ads - paid search campaigns</li>
              <li>Search Console - indexing &amp; rankings</li>
            </ul>
            <a href="/services/seo-optimization/" className="stack-panel-link">See online presence services →</a>
          </div>

        </div>
      </div>
    </section>
  );
}
