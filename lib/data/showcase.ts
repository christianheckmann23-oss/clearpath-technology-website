export interface ShowcaseTile {
  title: string;
  link: string;
  /** Real screenshot tile */
  thumbnail?: string;
  /** CTA tile (no screenshot yet) — rendered as a designed gradient card */
  cta?: { eyebrow: string; label: string; action?: string };
}

/**
 * Tiles for the case-studies parallax showcase. Screenshot tiles must be
 * REAL work only — never stock or fabricated client sites. Industries we
 * haven't shipped yet get branded CTA tiles instead, which double as
 * conversion prompts. Add new client screenshots here as projects launch.
 */
export const showcaseTiles: ShowcaseTile[] = [
  {
    title: "Just Windows USA — Home",
    link: "/case-studies/just-windows-usa",
    thumbnail: "/assets/case-jw-hero.jpg",
  },
  {
    title: "Your business could be next",
    link: "/contact",
    cta: { eyebrow: "Your Website", label: "This spot is waiting for your business." },
  },
  {
    title: "Just Windows USA — Services",
    link: "/case-studies/just-windows-usa",
    thumbnail: "/assets/case-jw-services.jpg",
  },
  {
    title: "Healthcare & Wellness",
    link: "/contact",
    cta: { eyebrow: "Coming Soon", label: "Healthcare & Wellness case study in progress." },
  },
  {
    title: "Apex Strength Club — Home",
    link: "/case-studies/apex-strength-club",
    thumbnail: "/assets/case-apex-hero.jpg",
  },
  {
    title: "General Small Business",
    link: "/case-studies/apex-strength-club",
    cta: { eyebrow: "New Case Study", label: "Apex Strength Club — launch-ready before the doors open.", action: "Read the case study →" },
  },
  {
    title: "Just Windows USA — Services",
    link: "/case-studies/just-windows-usa",
    thumbnail: "/assets/case-jw-services.jpg",
  },
  {
    title: "See our packages",
    link: "/packages",
    cta: { eyebrow: "Packages", label: "Foundation · Growth · Accelerate — from $199." },
  },
  {
    title: "Apex Strength Club — Home",
    link: "/case-studies/apex-strength-club",
    thumbnail: "/assets/case-apex-hero.jpg",
  },
];
