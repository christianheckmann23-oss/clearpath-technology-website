export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="/" className="nav-logo" aria-label="ClearPath Technology Partners home">
              <img
                src="/assets/clearpath-logo.png"
                alt="ClearPath Technology Partners"
                height={56}
                style={{ display: "block" }}
              />
            </a>
            <p className="footer-brand-desc">Managed IT, cloud, and automation services for regional businesses. We build, automate, and secure your operations - on Azure, Vercel, Google, or wherever the work runs best.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/">All Services</a></li>
              <li><a href="/services/microsoft-cloud/">Microsoft Cloud</a></li>
              <li><a href="/services/workflow-automation-ai/">Automation + AI</a></li>
              <li><a href="/services/seo-optimization/">SEO Optimization</a></li>
              <li><a href="/services/analytics-advertising/">Analytics + Advertising</a></li>
              <li><a href="/services/website-design-hosting/">Web Design + Hosting</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/#process">About Us</a></li>
              <li><a href="/case-studies/just-windows/">Case Studies</a></li>
              <li><a href="/#stack">Microsoft Stack</a></li>
              <li><a href="/contact/">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/contact/">Start the Conversation</a></li>
              <li><a href="/case-studies/just-windows/">Azure Migration Guide</a></li>
              <li><a href="/privacy/">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ClearPath Technology Partners LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
