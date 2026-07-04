"use client";

import { motion, useReducedMotion } from "motion/react";
import { FileText, Sparkles, Mail, Database, Clock, Bell, CheckCircle2 } from "lucide-react";
import { SPRING_SOFT } from "@/lib/motion-variants";

const seq = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0.28, delayChildren: 0.3 } } },
  item: { hidden: { opacity: 0, y: 12, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: SPRING_SOFT } },
};

function Node({
  icon: Icon,
  title,
  sub,
  status = "Completed",
}: {
  icon: typeof FileText;
  title: string;
  sub: string;
  status?: "Completed" | "Scheduled";
}) {
  return (
    <motion.div className="wf-node" variants={seq.item}>
      <div className="wf-node-icon">
        <Icon size={18} strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="wf-node-body">
        <div className="wf-node-title">{title}</div>
        <div className="wf-node-sub">{sub}</div>
        <div className={`wf-node-status${status === "Scheduled" ? " scheduled" : ""}`}>
          {status === "Scheduled" ? <Clock size={12} /> : <CheckCircle2 size={12} />}
          {status}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Rich automation flowchart visual for the AI Automations service hero —
 * a single trigger fanning out into three parallel actions, converging on
 * an owner notification. Honest illustration of the pipeline shape, not a
 * specific fabricated client run.
 */
export function AutomationWorkflowVisual() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="wf-card"
      variants={reduce ? undefined : seq.container}
      initial={reduce ? undefined : "hidden"}
      animate={reduce ? undefined : "visible"}
    >
      <motion.div className="wf-live-badge" variants={seq.item}>
        <span className="wf-live-dot" /> Live Automation
      </motion.div>

      <Node icon={FileText} title="Form Submitted" sub="New quote request" />
      <div className="wf-connector" aria-hidden="true" />
      <Node icon={Sparkles} title="AI / Automation Trigger" sub="Analyze request &amp; qualify lead" />

      <div className="wf-branch" aria-hidden="true">
        <div className="wf-branch-line" />
      </div>
      <div className="wf-branch-row">
        <div className="wf-branch-col">
          <div className="wf-branch-stub" aria-hidden="true" />
          <Node icon={Mail} title="Instant Reply Sent" sub="Confirmation + next steps" />
        </div>
        <div className="wf-branch-col">
          <div className="wf-branch-stub" aria-hidden="true" />
          <Node icon={Database} title="CRM Updated" sub="Lead added &amp; tagged" />
        </div>
        <div className="wf-branch-col">
          <div className="wf-branch-stub" aria-hidden="true" />
          <Node icon={Clock} title="Review Request" sub="Sent after service" status="Scheduled" />
        </div>
      </div>
      <div className="wf-branch" aria-hidden="true">
        <div className="wf-branch-line" />
      </div>

      <Node icon={Bell} title="Owner Notified" sub="Email + SMS alert" />

      <motion.div className="wf-complete-badge" variants={seq.item}>
        <span className="wf-complete-num">100%</span>
        Tasks automated
      </motion.div>
    </motion.div>
  );
}
