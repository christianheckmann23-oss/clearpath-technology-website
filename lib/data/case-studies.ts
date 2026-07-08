export type Industry = "home-services" | "healthcare-wellness" | "general-business";

export interface IndustryInfo {
  slug: Industry;
  label: string;
  description: string;
}

export const industries: IndustryInfo[] = [
  {
    slug: "home-services",
    label: "Home Services & Contractors",
    description: "Window, roofing, HVAC, and other contractor businesses that live or die on lead response time.",
  },
  {
    slug: "healthcare-wellness",
    label: "Healthcare & Wellness",
    description: "Small healthcare and wellness businesses — brought to you by a team with real healthcare consulting and pharmacy experience.",
  },
  {
    slug: "general-business",
    label: "General Small Business",
    description: "Any small business that needs to look credible online and stop losing leads to slow follow-up.",
  },
];

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  industry: Industry;
  clientName: string;
  clientLocation?: string;
  clientUrl?: string;
  status: "published" | "coming-soon";
  headline: string;
  /** Rendered directly after the linked client name — start mid-sentence ("had a...", "is a..."). */
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
  heroImage?: string;
  /** Optional card image for the industry tabs — a composite/device shot shown
      as-is instead of wrapping heroImage in a browser frame. */
  cardImage?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "just-windows-usa",
    industry: "home-services",
    clientName: "Just Windows USA",
    clientLocation: "Mentor, OH",
    clientUrl: "https://www.justwindowsusa.com",
    status: "published",
    headline: "232 SEO issues cleared in 4 days. Leads automated.",
    challenge:
      "had a WordPress site carrying 235 SEO issues — 7 pages with no H1, 8 pages Google couldn't read, and a quote form with no automated follow-up. Every unanswered lead was a potential job going to a competitor.",
    solution:
      "CirroFlow rebuilt the site as a clean, fast website, ran a Semrush-driven SEO optimization across every page, and wired up an automation that sends an instant confirmation to every customer and an instant alert to the owner the moment a form is submitted.",
    metrics: [
      { value: "232", label: "SEO issues resolved — 235 down to 3 in 4 days" },
      { value: "97%", label: "Semrush site health score after rebuild" },
      { value: "$20", label: "Monthly hosting, down from $75/mo" },
      { value: "0s", label: "Lead response delay — automation fires instantly on every form submission" },
    ],
    heroImage: "/assets/case-jw-hero.jpg",
  },
  {
    slug: "apex-strength-club",
    industry: "general-business",
    clientName: "Apex Strength Club",
    clientLocation: "Vermilion, OH",
    clientUrl: "https://apexstrengthclub.com",
    status: "published",
    headline: "Launch-ready before the doors open.",
    challenge:
      "is a family-owned, premium 24/7 strength gym opening in Vermilion, Ohio. With opening day approaching and the space still under construction, the club had no website and no search presence — locals couldn't find it, and there was nowhere to send interested members.",
    solution:
      "CirroFlow designed and built a premium dark-and-gold website to match the gym floor — memberships, amenities, and a build-progress page that turns the construction phase into anticipation — and laid the local search groundwork so the club is indexed and findable before opening day.",
    metrics: [
      { value: "0", label: "Days open at launch — website and memberships live while the gym was still under construction" },
      { value: "24/7", label: "Always-open positioning carried through the whole site, from hero to memberships" },
      { value: "100%", label: "Mobile-first build — most members will find and browse the gym from a phone" },
      { value: "Day 1", label: "Local search groundwork done during the build-out — indexed and findable from day one" },
    ],
    heroImage: "/assets/case-apex-hero.jpg",
    cardImage: "/assets/case-apex-devices.jpg",
  },
];

export function getCaseStudiesByIndustry(industry: Industry): CaseStudy[] {
  return caseStudies.filter((cs) => cs.industry === industry && cs.status === "published");
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const publishedCaseStudies = caseStudies.filter((cs) => cs.status === "published");
