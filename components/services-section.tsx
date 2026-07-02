export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="eyebrow">What We Deliver</span>
            <h2>Managed services<br />that move the needle.</h2>
          </div>
          <p>Not just IT support - automated business outcomes baked directly into your infrastructure from day one.</p>
        </div>

        <div className="services-list">
          <a href="/services/microsoft-cloud/" className="service-row">
            <span className="service-num">01</span>
            <div className="service-content">
              <div className="service-name">Microsoft Cloud, Products &amp; Security</div>
              <div className="service-desc">Azure, Microsoft 365, Entra ID, Defender, Intune, Lighthouse, and cloud infrastructure planned as one managed business platform instead of scattered tools.</div>
              <div className="service-tags-row">
                <span className="stag">Azure</span>
                <span className="stag">Microsoft 365</span>
                <span className="stag">Entra ID</span>
                <span className="stag">Defender</span>
                <span className="stag">Intune</span>
              </div>
            </div>
            <span className="service-arrow">→</span>
          </a>
          <a href="/services/workflow-automation-ai/" className="service-row">
            <span className="service-num">02</span>
            <div className="service-content">
              <div className="service-name">Workflow Automations &amp; AI Agents</div>
              <div className="service-desc">Lead response, review requests, document OCR, CRM updates, voice agents, and practical AI automations that move work between your apps without adding manual office tasks.</div>
              <div className="service-tags-row">
                <span className="stag">AI Voice Agents</span>
                <span className="stag">Power Automate</span>
                <span className="stag">n8n / Make</span>
                <span className="stag">AI Agents</span>
                <span className="stag">Document Intelligence</span>
              </div>
            </div>
            <span className="service-arrow">→</span>
          </a>
          <a href="/services/seo-optimization/" className="service-row">
            <span className="service-num">03</span>
            <div className="service-content">
              <div className="service-name">SEO Optimization</div>
              <div className="service-desc">Technical SEO, on-page improvements, AI-search readiness, local authority, and off-page signals handled as a measurable growth program.</div>
              <div className="service-tags-row">
                <span className="stag">Technical SEO</span>
                <span className="stag">On-Page SEO</span>
                <span className="stag">AI SEO</span>
                <span className="stag">Off-Page SEO</span>
              </div>
            </div>
            <span className="service-arrow">→</span>
          </a>
          <a href="/services/analytics-advertising/" className="service-row">
            <span className="service-num">04</span>
            <div className="service-content">
              <div className="service-name">Website Analytics &amp; Advertising</div>
              <div className="service-desc">GA4, Search Console, conversion tracking, reporting dashboards, and paid campaigns built around the numbers that matter: leads, cost, and close rate.</div>
              <div className="service-tags-row">
                <span className="stag">GA4</span>
                <span className="stag">Search Console</span>
                <span className="stag">Conversion Tracking</span>
                <span className="stag">Google Ads</span>
              </div>
            </div>
            <span className="service-arrow">→</span>
          </a>
          <a href="/services/website-design-hosting/" className="service-row">
            <span className="service-num">05</span>
            <div className="service-content">
              <div className="service-name">Website Design, Hosting &amp; Protection</div>
              <div className="service-desc">Fast service websites, secure hosting, form routing, backups, uptime monitoring, SSL, DNS, and security hardening for sites that generate real revenue.</div>
              <div className="service-tags-row">
                <span className="stag">Website Design</span>
                <span className="stag">Website Hosting</span>
                <span className="stag">Security</span>
                <span className="stag">Forms</span>
                <span className="stag">Performance</span>
              </div>
            </div>
            <span className="service-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
