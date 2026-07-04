import type { PackageTierSlug } from "./packages";

export type ServiceCategory = "website" | "growth" | "automation";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDesc: string;
  longDesc: string;
  /** 3-4 concrete "what you get" bullets for the service detail page body */
  features: string[];
  tags: string[];
  bundledIn: PackageTierSlug[];
  isAddOn?: boolean;
  addOnPricing?: string;
}

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    category: "website",
    shortDesc:
      "We build professional websites that help businesses look credible online and turn more visitors into customers.",
    longDesc:
      "Your website is the first impression most customers get of your business. We design fast, mobile-first sites built around one goal — turning visitors into calls, form submissions, and booked jobs. Every site is built with clean structure and real content, not filler, so it reads as credible the moment it loads.",
    features: [
      "Custom design built around your services, not a generic template",
      "Mobile-first — most of your visitors are on a phone",
      "Lead forms and click-to-call wired in from day one",
      "Fast page loads — no bloated page builders",
    ],
    tags: ["Custom Design", "Mobile-First", "Fast Load", "Conversion-Focused"],
    bundledIn: ["foundation", "growth", "accelerate"],
  },
  {
    slug: "website-hosting",
    name: "Website Hosting",
    category: "website",
    shortDesc:
      "We host and maintain your website to keep your business online, secure, and accessible at all times.",
    longDesc:
      "A website is only as good as its uptime. We host every site on modern, fast infrastructure with SSL, backups, and uptime monitoring included — so you're never the one finding out the site is down. Hosting and maintenance are bundled into every package, with no separate hosting bill to juggle.",
    features: [
      "99.9% uptime target, monitored around the clock",
      "SSL certificate and security headers on every page",
      "Automatic backups you can restore any time",
      "One bill — hosting is bundled, not a separate vendor",
    ],
    tags: ["Uptime Monitoring", "SSL", "Backups", "Security"],
    bundledIn: ["foundation", "growth", "accelerate"],
  },
  {
    slug: "seo",
    name: "SEO",
    category: "growth",
    shortDesc:
      "We help optimize your website for search engines so more customers can find your business online.",
    longDesc:
      "Search Engine Optimization is the foundation of getting found — technical health, on-page structure, and local signals that tell Google your business is the right answer. We fix what's broken first (missing headers, slow pages, broken schema), then build ongoing authority so rankings improve month over month instead of plateauing after launch.",
    features: [
      "Full technical audit — broken headers, slow pages, missing schema",
      "On-page optimization for the pages that actually drive leads",
      "Local SEO signals so you show up in \"near me\" searches",
      "Monthly reporting so you can see rankings move",
    ],
    tags: ["Technical SEO", "On-Page SEO", "Local SEO", "Search Console"],
    bundledIn: ["foundation", "growth", "accelerate"],
  },
  {
    slug: "ai-search-optimization",
    name: "AI Search Optimization",
    category: "growth",
    shortDesc:
      "We help your business get found in AI search tools like ChatGPT, Google AI, and Perplexity through better content and online signals.",
    longDesc:
      "Customers are starting to ask ChatGPT, Google AI Overviews, and Perplexity for recommendations instead of scrolling search results. AI Search Optimization (GEO) structures your content and online signals so your business is the one those tools actually cite — the same way traditional SEO earns you a top blue link, but for the AI-answer era.",
    features: [
      "Content structured the way AI models actually cite sources",
      "Visibility tracking across ChatGPT, Google AI, and Perplexity",
      "Reputation and review signals that build AI trust",
      "An emerging channel most local competitors haven't touched yet",
    ],
    tags: ["GEO", "ChatGPT", "Google AI Overviews", "Perplexity"],
    bundledIn: ["growth", "accelerate"],
  },
  {
    slug: "ai-call-agents",
    name: "AI Call Agents & Receptionists",
    category: "automation",
    shortDesc:
      "We build AI call agents and virtual receptionists that answer incoming calls, help capture leads, and give your business 24/7 availability.",
    longDesc:
      "Every unanswered call is a lead going to whichever competitor picks up. Our AI call agents answer instantly, capture the caller's information, and route it straight to you — day or night, weekends included — so your business never looks like it's closed for business.",
    features: [
      "Answers every call instantly — nights, weekends, holidays",
      "Captures name, number, and job details automatically",
      "Texts or emails you the lead the moment the call ends",
      "Sounds like a real receptionist, not a phone tree",
    ],
    tags: ["24/7 Availability", "Lead Capture", "Virtual Receptionist"],
    bundledIn: ["accelerate"],
  },
  {
    slug: "ai-automations",
    name: "AI Automations",
    category: "automation",
    shortDesc:
      "We offer free consultations to identify areas of your business that can be improved or automated with artificial intelligence.",
    longDesc:
      "Most small businesses are running on manual busywork that a well-built automation could handle in seconds — lead follow-up, review requests, document handling, CRM updates. We start with a free consultation to map where automation actually pays for itself, then build it scoped to your business and scale it as you grow.",
    features: [
      "Free consultation to map what's actually worth automating",
      "Instant lead follow-up — no more \"we'll call you back tomorrow\"",
      "Review requests and CRM updates that happen without you",
      "Built on Make and n8n — scales as your business grows",
    ],
    tags: ["Workflow Automation", "Make / n8n", "Free Consultation"],
    bundledIn: ["accelerate"],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    category: "growth",
    shortDesc: "Ongoing social media posting and management, matched to the rest of your brand.",
    longDesc:
      "An add-on for Accelerate-tier clients — once your site, SEO, and automations are running, we keep your social presence active and consistent with everything else we've built, without you having to think about it.",
    features: [],
    tags: ["Social Media"],
    bundledIn: [],
    isAddOn: true,
    addOnPricing: "$59.99/mo + $15/page",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const coreServices = services.filter((service) => !service.isAddOn);
