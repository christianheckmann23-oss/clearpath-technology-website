import { services } from "./services";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

function serviceLink(slug: string, label: string): NavLink {
  const service = services.find((s) => s.slug === slug);
  return { label, href: `/services/${slug}`, description: service?.shortDesc };
}

export const megaMenuGroups: NavGroup[] = [
  {
    title: "Website",
    links: [
      serviceLink("web-design", "Web Design"),
      serviceLink("website-hosting", "Website Hosting"),
    ],
  },
  {
    title: "Get Found",
    links: [
      serviceLink("seo", "SEO"),
      serviceLink("ai-search-optimization", "AI Search Optimization"),
    ],
  },
  {
    title: "Automate",
    links: [
      serviceLink("ai-call-agents", "AI Call Agents"),
      serviceLink("ai-automations", "AI Automations"),
    ],
  },
];

export const primaryNav: NavLink[] = [
  { label: "Pricing", href: "/packages" },
  { label: "Our Work", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

// Primary tier: large type in the mobile fullscreen menu. Individual
// services are listed in the secondary tier below (mobileServiceLinks) —
// there's no standalone services index page to link to.
export const mobilePrimaryLinks: NavLink[] = [
  ...primaryNav,
  { label: "Contact", href: "/contact" },
];

// Secondary tier: individual services, rendered smaller/muted so the
// mobile menu isn't 12 giant links deep.
export const mobileServiceLinks: NavLink[] = megaMenuGroups.flatMap((group) => group.links);

/** @deprecated kept for any lingering references; prefer the two tiers above */
export const mobileMenuLinks: NavLink[] = [...mobilePrimaryLinks, ...mobileServiceLinks];
