export function CtaSection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg-text" aria-hidden="true">AUDIT</div>
      <div className="container">
        <h2>Stop paying for IT<br />that <em>doesn&apos;t work.</em></h2>
        <div className="cta-body">
          <p className="cta-sub">
            Schedule a free 30-minute assessment. We&apos;ll map your current stack, identify every inefficiency, and hand you a written migration plan - no commitment, no sales pressure.
          </p>
          <div className="cta-actions-group">
            <a href="/contact/" className="btn-cta-primary">
              Get My Free Assessment →
            </a>
            <p className="cta-phone">Or call us: <a href="tel:+14404536752">440-453-6752</a></p>
            <p className="cta-fine">No commitment. No spam. Just a clear picture of where you can save.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
