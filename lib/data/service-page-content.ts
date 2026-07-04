import type { LucideIcon } from "lucide-react";
import {
  Zap,
  RefreshCw,
  Database,
  Star,
  Users,
  ShieldCheck,
  Search,
  MapPin,
  TrendingUp,
  FileText,
  Sparkles,
  MessageSquare,
  Globe,
  PhoneCall,
  Workflow,
  Smartphone,
  Layout,
  Rocket,
  DollarSign,
  Clock,
} from "lucide-react";

export interface StatChip {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServicePageContent {
  eyebrow: string;
  titleMain: string;
  titleAccent: string;
  description: string;
  heroStats: StatChip[];
  processSteps: ProcessStep[];
  /** Honest, capability-framed stats — never fabricated track-record
      numbers ClearPath can't back up (no fake "100+ clients" claims). */
  bottomStats: StatChip[];
}

/** Small icon per service for the sidebar's "Other Services" list. */
export const serviceIcon: Record<string, LucideIcon> = {
  "web-design": Layout,
  "website-hosting": ShieldCheck,
  seo: Search,
  "ai-search-optimization": Sparkles,
  "ai-call-agents": PhoneCall,
  "ai-automations": Workflow,
};

export const servicePageContent: Record<string, ServicePageContent> = {
  "web-design": {
    eyebrow: "WEB DESIGN FOR SMALL BUSINESSES",
    titleMain: "Your Website Should Sell.",
    titleAccent: "Not Just Sit There.",
    description:
      "We build fast, mobile-first websites designed around one goal — turning visitors into calls, forms, and booked jobs. No templates, no filler.",
    heroStats: [
      { icon: Zap, value: "Fast", label: "page loads" },
      { icon: Smartphone, value: "Mobile-First", label: "built for phones" },
      { icon: Layout, value: "Custom", label: "not a template" },
      { icon: Rocket, value: "1-2 wks", label: "typical launch" },
    ],
    processSteps: [
      { icon: MessageSquare, title: "Discovery Call", desc: "We learn your business, services, and goals" },
      { icon: Layout, title: "Design Draft", desc: "A custom layout built around what you actually do" },
      { icon: FileText, title: "Content & Copy", desc: "We write or refine your messaging" },
      { icon: ShieldCheck, title: "Build & Test", desc: "Mobile, forms, and speed all verified" },
      { icon: Rocket, title: "Launch", desc: "Site goes live and starts generating leads" },
    ],
    bottomStats: [
      { icon: Rocket, value: "1-2 wks", label: "Typical launch timeline" },
      { icon: Smartphone, value: "100%", label: "Mobile-responsive builds" },
      { icon: ShieldCheck, value: "Included", label: "Hosting & SSL bundled" },
      { icon: Users, value: "You Own It", label: "Your domain, your data" },
      { icon: DollarSign, value: "$199+", label: "Starting package price" },
    ],
  },
  "website-hosting": {
    eyebrow: "WEBSITE HOSTING FOR SMALL BUSINESSES",
    titleMain: "Your Site, Always On.",
    titleAccent: "Never Your Problem.",
    description:
      "We host, monitor, and maintain your website so you're never the one finding out it's down. SSL, backups, and uptime monitoring — bundled into every package.",
    heroStats: [
      { icon: ShieldCheck, value: "SSL", label: "every page secured" },
      { icon: RefreshCw, value: "Auto Backups", label: "restorable any time" },
      { icon: Clock, value: "24/7", label: "uptime monitoring" },
      { icon: Database, value: "One Bill", label: "no separate host" },
    ],
    processSteps: [
      { icon: Rocket, title: "Migration & Setup", desc: "Your site deployed on modern, fast infrastructure" },
      { icon: ShieldCheck, title: "SSL & Security", desc: "Certificate and security headers configured" },
      { icon: Clock, title: "Monitoring Live", desc: "Uptime checked around the clock" },
      { icon: RefreshCw, title: "Automatic Backups", desc: "Scheduled and restorable any time" },
      { icon: Users, title: "Ongoing Maintenance", desc: "Updates and upkeep handled for you" },
    ],
    bottomStats: [
      { icon: Clock, value: "99.9%", label: "Uptime target" },
      { icon: RefreshCw, value: "Daily", label: "Backup frequency" },
      { icon: ShieldCheck, value: "SSL", label: "On every site" },
      { icon: DollarSign, value: "$20/mo", label: "Starting retainer" },
      { icon: Users, value: "Zero", label: "Separate vendors to manage" },
    ],
  },
  seo: {
    eyebrow: "SEO FOR SMALL BUSINESSES",
    titleMain: "Get Found First.",
    titleAccent: "Not Page Three.",
    description:
      "We fix what's broken, then build the on-page and local signals that move you up the map and the results page — measured monthly, not guessed at.",
    heroStats: [
      { icon: Search, value: "Technical", label: "full site audit" },
      { icon: MapPin, value: "Local", label: "map pack visibility" },
      { icon: TrendingUp, value: "Monthly", label: "ranking reports" },
      { icon: FileText, value: "On-Page", label: "content optimization" },
    ],
    processSteps: [
      { icon: Search, title: "Technical Audit", desc: "Crawl health, speed, and schema checked" },
      { icon: FileText, title: "On-Page Fixes", desc: "Headers, meta, and structure corrected" },
      { icon: MapPin, title: "Local Signals", desc: "Google Business Profile and citations aligned" },
      { icon: TrendingUp, title: "Content Plan", desc: "Pages built to target real searches" },
      { icon: RefreshCw, title: "Monthly Reporting", desc: "Rankings tracked and shared with you" },
    ],
    bottomStats: [
      { icon: Search, value: "Full", label: "Technical + on-page audit" },
      { icon: MapPin, value: "Local", label: "Map pack targeting" },
      { icon: TrendingUp, value: "Monthly", label: "Ranking reports included" },
      { icon: FileText, value: "Ongoing", label: "Ranking authority building" },
      { icon: DollarSign, value: "Included", label: "Bundled in every package" },
    ],
  },
  "ai-search-optimization": {
    eyebrow: "AI SEARCH OPTIMIZATION FOR SMALL BUSINESSES",
    titleMain: "Get Recommended.",
    titleAccent: "Not Just Ranked.",
    description:
      "ChatGPT, Google AI, and Perplexity are answering questions your customers used to Google. We structure your content and signals so your business is the one they cite.",
    heroStats: [
      { icon: Sparkles, value: "GEO", label: "AI-answer optimization" },
      { icon: MessageSquare, value: "Cited", label: "in AI responses" },
      { icon: Star, value: "Reviews", label: "trust signals built" },
      { icon: Globe, value: "3 Platforms", label: "ChatGPT, Google AI, Perplexity" },
    ],
    processSteps: [
      { icon: Search, title: "AI Visibility Audit", desc: "Where your business shows up today" },
      { icon: FileText, title: "Content Structuring", desc: "Written the way models actually cite sources" },
      { icon: Star, title: "Signal Building", desc: "Reviews and reputation reinforced" },
      { icon: Sparkles, title: "Citation Tracking", desc: "Monitored across AI tools over time" },
      { icon: RefreshCw, title: "Ongoing Tuning", desc: "Adjusted as models change" },
    ],
    bottomStats: [
      { icon: Sparkles, value: "Emerging", label: "Category most competitors ignore" },
      { icon: Globe, value: "3 Platforms", label: "ChatGPT, Google AI, Perplexity" },
      { icon: MessageSquare, value: "Cited", label: "Goal: direct AI recommendation" },
      { icon: Star, value: "Reviews", label: "Trust signals reinforced" },
      { icon: DollarSign, value: "Growth+", label: "Included from Growth package" },
    ],
  },
  "ai-call-agents": {
    eyebrow: "AI CALL AGENTS FOR SMALL BUSINESSES",
    titleMain: "Never Miss a Call.",
    titleAccent: "Never Miss a Lead.",
    description:
      "Our AI call agents answer instantly, capture caller details, and text you the lead — day or night, weekends included. Your business never looks closed.",
    heroStats: [
      { icon: PhoneCall, value: "24/7", label: "always answers" },
      { icon: Zap, value: "Instant", label: "lead capture" },
      { icon: MessageSquare, value: "Auto-Text", label: "you get notified" },
      { icon: Users, value: "Sounds Human", label: "not a phone tree" },
    ],
    processSteps: [
      { icon: PhoneCall, title: "Call Comes In", desc: "Anytime, any day of the week" },
      { icon: Sparkles, title: "AI Answers Instantly", desc: "Greets the caller, no hold music" },
      { icon: FileText, title: "Details Captured", desc: "Name, number, and job needs" },
      { icon: MessageSquare, title: "You're Notified", desc: "Texted or emailed the moment it ends" },
      { icon: Zap, title: "Lead Ready", desc: "Follow up while it's still hot" },
    ],
    bottomStats: [
      { icon: PhoneCall, value: "24/7", label: "Availability, every day" },
      { icon: Zap, value: "0s", label: "Target response delay" },
      { icon: MessageSquare, value: "Instant", label: "Lead texted to you" },
      { icon: Users, value: "Accelerate", label: "Tier where this is included" },
      { icon: DollarSign, value: "$899+", label: "Starting package" },
    ],
  },
  "ai-automations": {
    eyebrow: "AI AUTOMATIONS FOR SMALL BUSINESSES",
    titleMain: "Put Busywork on Auto-Pilot.",
    titleAccent: "Focus on What Grows.",
    description:
      "We build AI automations that handle lead follow-up, reviews, documents, CRM updates, and more — so you never miss a lead or a chance to impress.",
    heroStats: [
      { icon: Zap, value: "0s", label: "response delay" },
      { icon: RefreshCw, value: "24/7", label: "follow-up" },
      { icon: Database, value: "CRM", label: "sync" },
      { icon: Star, value: "Reviews", label: "on autopilot" },
      { icon: Users, value: "Leads", label: "captured" },
    ],
    processSteps: [
      { icon: FileText, title: "Form Submitted", desc: "Visitor submits a form on your website" },
      { icon: Sparkles, title: "AI / Automation Trigger", desc: "We qualify the lead and route it instantly" },
      { icon: MessageSquare, title: "Instant Reply Sent", desc: "Confirmation and next steps sent in seconds" },
      { icon: Database, title: "CRM Updated", desc: "Lead is saved, tagged, and tracked" },
      { icon: Star, title: "Owner Notified", desc: "You get an alert so you stay in the loop" },
    ],
    bottomStats: [
      { icon: Workflow, value: "Built On", label: "Make & n8n" },
      { icon: Zap, value: "0s", label: "Target response delay" },
      { icon: RefreshCw, value: "24/7", label: "Always-on automation" },
      { icon: ShieldCheck, value: "Free", label: "Initial consultation" },
      { icon: DollarSign, value: "Accelerate", label: "Included in top-tier package" },
    ],
  },
};
