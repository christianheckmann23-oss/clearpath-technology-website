"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Search, Sparkles, PhoneCall, Workflow, ShieldCheck } from "lucide-react";
import { DeviceShowcase } from "@/components/ui/device-showcase";
import { SPRING_SOFT } from "@/lib/motion-variants";

function SvHeader({ icon: Icon, label }: { icon: typeof Search; label: string }) {
  return (
    <div className="sv-header">
      <Icon size={14} strokeWidth={2.25} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

/**
 * Illustrative product-UI cards for service page heroes — honest, generic
 * "Your Business" examples, never fabricated client results. Each card
 * choreographs its internal rows in sequence (transcript bubbles land like
 * a live conversation, pipeline steps light up in order).
 */

const seq = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.35, delayChildren: 0.4 } },
  },
  item: {
    hidden: { opacity: 0, y: 14, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: SPRING_SOFT },
  },
};

function Choreo({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={seq.container} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}

function Step({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={seq.item}>
      {children}
    </motion.div>
  );
}

function SeoVisual() {
  return (
    <Choreo className="service-visual">
      <SvHeader icon={Search} label="Google Search" />
      <Step>
        <div className="sv-searchbar">🔍 window replacement near me</div>
      </Step>
      <Step>
        <div className="sv-result-title">Your Business — Window Replacement &amp; Installation</div>
        <div className="sv-result-url">yourbusiness.com › services</div>
        <p className="sv-result-desc">
          Trusted local window contractor. Free estimates, fast turnaround, 5-star reviews.
        </p>
      </Step>
      <Step>
        <div className="sv-result-title" style={{ fontSize: 13 }}>Your Business — Reviews</div>
        <div className="sv-result-url">yourbusiness.com › reviews</div>
        <p className="sv-result-desc">★★★★★ 4.9 (128 reviews) — &quot;Fast, professional, fair pricing.&quot;</p>
      </Step>
      <Step>
        <div className="sv-statgrid">
          <div className="sv-stat">
            <div className="sv-stat-num">#1</div>
            <div className="sv-stat-label">Local ranking target</div>
          </div>
          <div className="sv-stat">
            <div className="sv-stat-num">97%</div>
            <div className="sv-stat-label">Site health after cleanup</div>
          </div>
        </div>
      </Step>
    </Choreo>
  );
}

function GeoVisual() {
  return (
    <Choreo className="service-visual">
      <SvHeader icon={Sparkles} label="AI Assistant" />
      <Step>
        <div className="sv-bubble user">Who&apos;s the best plumber near me for an emergency call?</div>
      </Step>
      <Step>
        <div className="sv-bubble ai">
          Based on reviews, availability, and local presence, <strong>Your Business</strong> is a top choice — they
          answer 24/7 and offer free estimates.
        </div>
      </Step>
      <Step>
        <div className="sv-meta">
          <span className="sv-chip ghost">Cited: yourbusiness.com</span>
          <span>ChatGPT · Google AI · Perplexity</span>
        </div>
      </Step>
    </Choreo>
  );
}

function CallAgentVisual() {
  return (
    <Choreo className="service-visual">
      <SvHeader icon={PhoneCall} label="Incoming Call" />
      <Step>
        <div className="sv-bubble user">Hi, do you have availability this week for an estimate?</div>
      </Step>
      <Step>
        <div className="sv-bubble ai">
          Absolutely — I can get you scheduled. Can I grab your name and the best number to reach you?
        </div>
      </Step>
      <Step>
        <div className="sv-meta">
          <span className="sv-chip">Lead captured → texted to you</span>
          <span>2:47 AM · answered instantly</span>
        </div>
      </Step>
    </Choreo>
  );
}

function AutomationVisual() {
  return (
    <Choreo className="service-visual">
      <SvHeader icon={Workflow} label="Automation Run" />
      <div className="sv-steps">
        <Step className="sv-step">
          <span className="sv-step-dot">1</span>
          <div>
            <div className="sv-step-title">Form submitted</div>
            <div className="sv-step-sub">New quote request on your website</div>
          </div>
        </Step>
        <div className="sv-step-line" aria-hidden="true" />
        <Step className="sv-step">
          <span className="sv-step-dot">2</span>
          <div>
            <div className="sv-step-title">Instant reply sent</div>
            <div className="sv-step-sub">Customer gets a confirmation in seconds</div>
          </div>
        </Step>
        <div className="sv-step-line" aria-hidden="true" />
        <Step className="sv-step">
          <span className="sv-step-dot">3</span>
          <div>
            <div className="sv-step-title">You get notified</div>
            <div className="sv-step-sub">Lead details land in your inbox &amp; phone</div>
          </div>
        </Step>
      </div>
      <Step>
        <div className="sv-meta" style={{ marginTop: 16 }}>
          <span className="sv-chip">0s response delay</span>
        </div>
      </Step>
    </Choreo>
  );
}

function HostingVisual() {
  return (
    <Choreo className="service-visual">
      <SvHeader icon={ShieldCheck} label="Site Status" />
      <div className="sv-steps">
        <Step className="sv-step">
          <span className="sv-step-dot">✓</span>
          <div>
            <div className="sv-step-title">Site online</div>
            <div className="sv-step-sub">Monitored around the clock</div>
          </div>
        </Step>
        <div className="sv-step-line" aria-hidden="true" />
        <Step className="sv-step">
          <span className="sv-step-dot">✓</span>
          <div>
            <div className="sv-step-title">SSL active</div>
            <div className="sv-step-sub">Secure padlock on every page</div>
          </div>
        </Step>
        <div className="sv-step-line" aria-hidden="true" />
        <Step className="sv-step">
          <span className="sv-step-dot">✓</span>
          <div>
            <div className="sv-step-title">Backups current</div>
            <div className="sv-step-sub">Restorable any time</div>
          </div>
        </Step>
      </div>
      <Step>
        <div className="sv-statgrid">
          <div className="sv-stat">
            <div className="sv-stat-num">99.9%</div>
            <div className="sv-stat-label">Uptime target</div>
          </div>
          <div className="sv-stat">
            <div className="sv-stat-num">$20/mo</div>
            <div className="sv-stat-label">Starting retainer</div>
          </div>
        </div>
      </Step>
    </Choreo>
  );
}

function WebDesignVisual() {
  return (
    <DeviceShowcase
      desktopSrc="/assets/case-jw-hero.jpg"
      phoneSrc="/assets/case-jw-services.jpg"
      alt="Website built by ClearPath shown on desktop and mobile"
      url="justwindowsusa.com"
      priority
    />
  );
}

const visualsBySlug: Record<string, () => ReactNode> = {
  "web-design": WebDesignVisual,
  "website-hosting": HostingVisual,
  seo: SeoVisual,
  "ai-search-optimization": GeoVisual,
  "ai-call-agents": CallAgentVisual,
  "ai-automations": AutomationVisual,
};

/** Client component wrapper so Server Component pages can request a
    visual by slug (plain-object exports from client modules can't be
    indexed server-side). Renders nothing for unknown slugs. */
export function ServiceVisual({ slug }: { slug: string }) {
  const Visual = visualsBySlug[slug];
  return Visual ? <Visual /> : null;
}

