export type PackageTierSlug = "foundation" | "growth" | "accelerate";
export type AnalyticsLevel = "none" | "pixel-only" | "full-ga4";

export interface PackageTier {
  slug: PackageTierSlug;
  name: string;
  setupFee: number;
  monthly: number;
  tagline: string;
  included: string[];
  analytics: AnalyticsLevel;
  highlight?: boolean;
}

export interface AddOn {
  slug: string;
  name: string;
  pricing: string;
  description: string;
}

export const scalesNote =
  "Pricing shown is a starting point. Larger or more complex projects are scoped and quoted individually.";

export const packages: PackageTier[] = [
  {
    slug: "foundation",
    name: "Foundation",
    setupFee: 199,
    monthly: 20,
    tagline: "Look credible and get found online.",
    included: [
      "Templated 3-5 page website build",
      "Website hosting",
      "Basic on-page SEO (meta tags, structure, local schema)",
    ],
    analytics: "none",
  },
  {
    slug: "growth",
    name: "Growth",
    setupFee: 499,
    monthly: 35,
    tagline: "Stay visible and keep showing up.",
    included: [
      "Everything in Foundation",
      "Custom website design (not templated)",
      "Full on-page + technical SEO",
      "AI Search Optimization — be found in ChatGPT, Google AI, and Perplexity",
      "1 blog post per month",
      "Vercel Analytics (pixel-only visitor tracking)",
    ],
    analytics: "pixel-only",
    highlight: true,
  },
  {
    slug: "accelerate",
    name: "Accelerate",
    setupFee: 899,
    monthly: 49,
    tagline: "Get found, get automated, never miss a lead.",
    included: [
      "Everything in Growth",
      "AI Call Agent / virtual receptionist (monthly cost varies with usage)",
      "AI Automations, scoped to your business",
      "3 blog posts per month",
      "Monthly email newsletter",
      "Full GA4 + conversion tracking dashboard",
    ],
    analytics: "full-ga4",
  },
];

export const addOns: AddOn[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    pricing: "$59.99/mo base + $20 per additional account managed",
    description:
      "Available as an add-on for Accelerate-tier clients — we post and manage your social presence so it matches everything else we're building for you.",
  },
  {
    slug: "advertising",
    name: "Advertising / Ads Management",
    pricing: "Custom — scoped per campaign",
    description:
      "Paid campaign management on Google and Meta. Ad spend is always billed directly to your own ad accounts, separate from our management fee.",
  },
  {
    slug: "gbp-workspace-setup",
    name: "Google Business Profile + Workspace Setup",
    pricing: "$10/mo",
    description:
      "Google Business Profile and Gmail/Workspace setup and ongoing management, available as an add-on for any package tier.",
  },
  {
    slug: "email-newsletter",
    name: "Email Newsletter",
    pricing: "$5/mo",
    description:
      "Add a monthly email newsletter to Foundation or Growth — included standard with Accelerate.",
  },
  {
    slug: "blog-content",
    name: "Blog Content",
    pricing: "$5 per post",
    description:
      "Add blog posts to Foundation, which doesn't include any standard — Growth and Accelerate already include monthly posts.",
  },
  {
    slug: "ai-automations-custom",
    name: "AI Automations (Custom / Advanced)",
    pricing: "Custom — schedule a consultation",
    description:
      "Accelerate includes baseline automation. Larger or more complex automation builds beyond that are scoped and quoted after a free consultation.",
  },
];
