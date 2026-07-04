"use client";

import { useReducedMotion } from "motion/react";
import {
  Mail,
  Calendar,
  Table2,
  MessageSquare,
  Receipt,
  CreditCard,
  Phone,
  Workflow,
  MapPin,
  Wrench,
  Home,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Magnetic } from "@/components/ui/motion-primitives";
import { buttonHover, buttonTap } from "@/lib/motion-variants";

/**
 * Dual-direction scrolling "connects with your tools" pill rows — shared
 * between the standalone light IntegrationMarquee section (other pages)
 * and the dark AIIntegrationHero (AI Call Agents / AI Automations hero).
 * Named tool pills (honest nominative use — real Make/n8n/voice-stack
 * integrations) instead of hotlinked brand logos.
 */

export const INT_ROW1 = [
  { icon: Mail, label: "Gmail" },
  { icon: Calendar, label: "Google Calendar" },
  { icon: Table2, label: "Google Sheets" },
  { icon: Mail, label: "Outlook" },
  { icon: MessageSquare, label: "Slack" },
  { icon: Receipt, label: "QuickBooks" },
  { icon: CreditCard, label: "Stripe" },
];

export const INT_ROW2 = [
  { icon: Workflow, label: "Make" },
  { icon: Workflow, label: "n8n" },
  { icon: Phone, label: "Twilio" },
  { icon: Users, label: "HubSpot" },
  { icon: Wrench, label: "Jobber" },
  { icon: Home, label: "Housecall Pro" },
  { icon: MapPin, label: "Google Business Profile" },
];

export function PillRow({
  items,
  direction,
  dark = false,
}: {
  items: typeof INT_ROW1;
  direction: "left" | "right";
  dark?: boolean;
}) {
  const reduce = useReducedMotion();
  const repeated = Array.from({ length: 4 }).flatMap(() => items);
  return (
    <div className={`int-track ${reduce ? "" : direction === "left" ? "int-scroll-left" : "int-scroll-right"}`}>
      {repeated.map((item, i) => (
        <span className={`int-pill${dark ? " int-pill-dark" : ""}`} key={`${item.label}-${i}`}>
          <item.icon size={16} strokeWidth={2} aria-hidden="true" />
          {item.label}
        </span>
      ))}
    </div>
  );
}

export function IntegrationMarquee() {
  return (
    <section className="integrations-section">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ display: "inline-block" }}>⚡ Integrations</span>
        <h2 className="integrations-title">
          Plugs into the tools you <em>already use</em>.
        </h2>
        <p className="integrations-sub">
          Your AI call agent and automations connect to your calendar, inbox, CRM, and invoicing — over 1,000 apps
          through Make and n8n. No rip-and-replace.
        </p>
        <Magnetic>
          <motion.a href="/contact" className="integrations-cta" whileHover={buttonHover} whileTap={buttonTap}>
            Start the Conversation →
          </motion.a>
        </Magnetic>
      </div>

      <div className="int-carousel" aria-hidden="true">
        <PillRow items={INT_ROW1} direction="left" />
        <PillRow items={INT_ROW2} direction="right" />
      </div>
    </section>
  );
}
