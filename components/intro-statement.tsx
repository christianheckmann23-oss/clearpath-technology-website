export function IntroStatement() {
  return (
    <section className="intro-statement">
      <div className="container">
        <h2>
          Most IT companies fix things<br />
          <em>when they break.</em><br />
          We build things that don&apos;t.
        </h2>
        <div className="intro-divider"></div>
        <div className="intro-cols">
          <p className="intro-col-text">
            The break-fix model has a fatal flaw - your IT vendor profits when things go wrong. ClearPath is structured the opposite way. We charge a flat monthly fee and deploy everything via Infrastructure as Code, so the better your systems run, the better our margins. Aligned incentives. Predictable bills. Real outcomes.
          </p>
          <div className="intro-col-stats">
            <div className="stat-cell">
              <div className="stat-number">73%</div>
              <div className="stat-label">Average reduction in monthly hosting costs after cloud migration</div>
            </div>
            <div className="stat-cell-dark">
              <div className="stat-number" style={{ color: "#60A5FA" }}>99%</div>
              <div className="stat-label">Average uptime across all managed client environments</div>
            </div>
            <div className="stat-cell-dark">
              <div className="stat-number" style={{ color: "#60A5FA" }}>&lt;60s</div>
              <div className="stat-label">Automated lead response time after form submission</div>
            </div>
            <div className="stat-cell">
              <div className="stat-number">0</div>
              <div className="stat-label">Minutes of downtime during any migration we&apos;ve run</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
