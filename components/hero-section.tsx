import { ClearPathHeroBackground } from "@/components/ui/clearpath-hero";
import { HeroForm } from "@/components/hero-form";

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <ClearPathHeroBackground />
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-left">
          <h1>
            A ClearPath<br />to <em>innovation.</em>
          </h1>
          <div className="hero-body">
            <p className="hero-sub">
              We help regional <strong>contractors, logistics firms, and retailers</strong> modernize their IT, websites, and operations - cloud hosting, AI automations, voice agents, and managed security. <strong>Flat monthly pricing.</strong> Zero downtime. Measurable ROI from day one.
            </p>
            <div className="hero-actions">
              <a href="/contact/" className="btn-solid">Get My Free Assessment →</a>
              <a href="#case-study" className="btn-ghost">See Our Work</a>
            </div>
          </div>
        </div>
        <div className="hero-form-card">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
