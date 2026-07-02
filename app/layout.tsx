import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClearPath Technology Partners | Microsoft Cloud MSP for Regional Businesses",
  description:
    "ClearPath Technology Partners migrates contractors, logistics firms, and retailers to Microsoft Azure, Microsoft 365, Entra ID, Defender, and automation with flat-rate managed services.",
  robots: "index, follow, max-image-preview:large",
  authors: [{ name: "ClearPath Technology Partners LLC" }],
  alternates: {
    canonical: "https://www.clearpathtechnology.com/",
  },
  icons: {
    icon: [
      { url: "/assets/clearpath-logo.svg", type: "image/svg+xml" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/assets/favicon.svg" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "ClearPath Technology Partners",
    title: "ClearPath Technology Partners | Microsoft Cloud MSP",
    description:
      "Flat-rate Microsoft Cloud managed services: Azure migration, Microsoft 365, Entra ID, Defender, automation, and zero-downtime SEO-preserving migrations.",
    url: "https://www.clearpathtechnology.com/",
    images: [
      {
        url: "https://www.clearpathtechnology.com/assets/clearpath-og.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearPath Technology Partners | Microsoft Cloud MSP",
    description:
      "Microsoft Cloud migrations, automation, security, and managed services for regional businesses.",
    images: ["https://www.clearpathtechnology.com/assets/clearpath-og.svg"],
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
      "@id": "https://www.clearpathtechnology.com/#organization",
      name: "ClearPath Technology Partners LLC",
      url: "https://www.clearpathtechnology.com/",
      logo: "https://www.clearpathtechnology.com/assets/clearpath-logo.svg",
      email: "info@clearpathtechnology.org",
      telephone: "+1-440-453-6752",
      description:
        "Microsoft Cloud managed services provider specializing in Azure migrations, Microsoft 365, identity, security, automation, and infrastructure as code.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.clearpathtechnology.com/#website",
      url: "https://www.clearpathtechnology.com/",
      name: "ClearPath Technology Partners",
      publisher: { "@id": "https://www.clearpathtechnology.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.clearpathtechnology.com/#business",
      name: "ClearPath Technology Partners",
      url: "https://www.clearpathtechnology.com/",
      image: "https://www.clearpathtechnology.com/assets/clearpath-og.svg",
      email: "info@clearpathtechnology.org",
      telephone: "+1-440-453-6752",
      areaServed: "United States",
      priceRange: "$$",
      knowsAbout: [
        "Microsoft Azure",
        "Microsoft 365",
        "Entra ID",
        "Microsoft Defender",
        "Azure Lighthouse",
        "Power Automate",
        "Infrastructure as Code",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.clearpathtechnology.com/#managed-cloud-service",
      name: "Microsoft Cloud Managed Services",
      provider: { "@id": "https://www.clearpathtechnology.com/#organization" },
      areaServed: "United States",
      serviceType:
        "Azure migration, Microsoft 365 management, identity, security, automation, and managed IT services",
      description:
        "Flat-rate Microsoft Cloud MSP services for regional contractors, logistics firms, and retailers.",
    },
  ],
};

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
        {children}
      </body>
    </html>
  );
}
