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

export interface ServicePageContent {
  eyebrow: string;
  titleMain: string;
  titleAccent: string;
  description: string;
  heroStats: StatChip[];
  /** Honest, capability-framed stats — never fabricated track-record
      numbers CirroFlow can't back up (no fake "100+ clients" claims). */
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
      "Our AI call agents answer instantly, capture caller details, and text you the lead — day or night, weekends included. Your business never looks closed. Monthly cost varies depending on call minutes used.",
    heroStats: [
      { icon: PhoneCall, value: "24/7", label: "always answers" },
      { icon: Zap, value: "Instant", label: "lead capture" },
      { icon: MessageSquare, value: "Auto-Text", label: "you get notified" },
      { icon: Users, value: "Sounds Human", label: "not a phone tree" },
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
    bottomStats: [
      { icon: Workflow, value: "Built On", label: "Make & n8n" },
      { icon: Zap, value: "0s", label: "Target response delay" },
      { icon: RefreshCw, value: "24/7", label: "Always-on automation" },
      { icon: ShieldCheck, value: "Free", label: "Initial consultation" },
      { icon: DollarSign, value: "Accelerate", label: "Included in top-tier package" },
    ],
  },
};
