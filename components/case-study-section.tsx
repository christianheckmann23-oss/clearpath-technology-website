export function CaseStudySection() {
  return (
    <section className="case-study-section" id="case-study">
      <div className="container">
        <span className="case-eyebrow">Live Case Study</span>
        <h2>
          232 SEO issues.<br />
          Cleared in <em style={{ color: "var(--blue-lt)", WebkitTextStroke: "0" }}>4 days.</em><br />
          Leads automated.
        </h2>
        <div className="case-grid">
          <div>
            <p className="case-client-name">Just Windows USA · Mentor, OH · Window Contractor</p>
            <p className="case-text">
              <a
                href="https://www.justwindowsusa.com"
                target="_blank"
                rel="noopener"
                style={{ color: "inherit", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Just Windows USA
              </a>{" "}
              had a WordPress site carrying 235 SEO issues - 7 pages with no H1, 8 pages Google couldn&apos;t read, and a quote form with no automated follow-up. Every unanswered lead was a potential job going to a competitor.
            </p>
            <p className="case-text">
              ClearPath rebuilt the site as a clean static HTML site on Azure, ran a Semrush-driven SEO optimization across all 7 pages, and wired up a Make automation that sends an instant confirmation to every customer and an instant alert to the owner the moment a form is submitted - built on Make for full AI customization and flexibility.
            </p>
          </div>
          <div>
            <div className="case-metrics">
              <div className="metric-box">
                <div className="metric-big blue">232</div>
                <div className="metric-desc">SEO issues resolved - 235 down to 3 in 4 days</div>
              </div>
              <div className="metric-box">
                <div className="metric-big">97%</div>
                <div className="metric-desc">Semrush site health score after rebuild</div>
              </div>
              <div className="metric-box">
                <div className="metric-big blue">$20</div>
                <div className="metric-desc">Monthly hosting (down from $75/mo)</div>
              </div>
              <div className="metric-box">
                <div className="metric-big">0s</div>
                <div className="metric-desc">Lead response delay - Make automation fires instantly on every form submission</div>
              </div>
            </div>
            <a
              href="/case-studies/just-windows/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "32px",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--blue-lt)",
                letterSpacing: ".3px",
                textDecoration: "none",
              }}
            >
              Read the full case study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
