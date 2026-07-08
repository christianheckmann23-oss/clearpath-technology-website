import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { site } from "@/lib/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "CirroFlow Technologies | Websites, AI Search & Automation for Small Business",
  description:
    "CirroFlow builds websites, SEO, AI search optimization, AI call agents, and automation for small businesses — fixed packages, flat monthly pricing, no long-term contracts.",
  robots: "index, follow, max-image-preview:large",
  authors: [{ name: site.legalName }],
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: [{ url: "/assets/cirroflow-icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/assets/cirroflow-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "CirroFlow Technologies | Websites, AI Search & Automation for Small Business",
    description:
      "Fixed packages for web design, SEO, AI search optimization, AI call agents, and automation — priced flat, scoped upfront.",
    url: site.url,
    images: [
      {
        url: `${site.url}/assets/cirroflow-og.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CirroFlow Technologies | Websites, AI Search & Automation",
    description: "Fixed packages for web design, SEO, AI search optimization, AI call agents, and automation for small businesses.",
    images: [`${site.url}/assets/cirroflow-og.png`],
  },
  other: {
    "theme-color": "#000000",
  },
};

const ldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      url: site.url,
      logo: `${site.url}/assets/cirroflow-icon.png`,
      email: site.email,
      telephone: site.phoneHref.replace("tel:", ""),
      description:
        "CirroFlow Technologies builds websites, SEO, AI search optimization, AI call agents, and automation for small businesses.",
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      image: `${site.url}/assets/cirroflow-og.png`,
      email: site.email,
      telephone: site.phoneHref.replace("tel:", ""),
      areaServed: site.areaServed,
      priceRange: "$$",
      knowsAbout: [
        "Web Design",
        "Website Hosting",
        "SEO",
        "AI Search Optimization",
        "AI Call Agents",
        "AI Automations",
      ],
    },
  ],
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <ScrollProgress />
        {children}
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
