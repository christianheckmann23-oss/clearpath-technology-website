import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { FAQS } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQ | CirroFlow Technologies",
  description: "Common questions about our packages, pricing, timelines, and how AI Search Optimization differs from traditional SEO.",
};

const faqLdJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson) }} />
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="FAQ"
          title={<>Common questions, <em>answered plainly</em>.</>}
          lede="If you don't see your question here, just ask — it's the first thing we'll cover in a free assessment."
        />
        <FaqAccordion />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
