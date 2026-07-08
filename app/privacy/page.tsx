import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | CirroFlow Technology Partners",
  robots: "noindex, follow",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero eyebrow="Legal" title="Privacy Policy" />
        <section className="legal-section">
          <div className="container">
          <div className="legal-body">
            <p className="legal-meta">{site.legalName} &nbsp;|&nbsp; Effective date: June 18, 2026 &nbsp;|&nbsp; Last updated: July 3, 2026</p>

            <h2>1. Who We Are</h2>
            <p>
              {site.legalName} (&quot;CirroFlow,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a
              small business growth partner based in Ohio. We provide website design and hosting, SEO, AI search
              optimization, AI call agents, and automation services. Our website is located at {site.url}.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information in two ways: directly from you when you fill out a form, and automatically when you visit our website.</p>
            <p>Information you provide directly:</p>
            <ul>
              <li>Name and job title</li>
              <li>Business or company name</li>
              <li>Email address and phone number</li>
              <li>Industry and services you are interested in</li>
              <li>Any additional details you include in a free-form message field</li>
            </ul>
            <p>Information collected automatically:</p>
            <ul>
              <li>Pages visited, time on page, and referring URL</li>
              <li>Browser type, operating system, and device type</li>
              <li>IP address (anonymized where applicable)</li>
              <li>Interactions with forms, buttons, and links (conversion events)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your assessment or inquiry request within one business day</li>
              <li>To prepare a written plan tailored to your business</li>
              <li>To follow up regarding services you checked or described</li>
              <li>To send relevant information about CirroFlow services you have indicated interest in</li>
              <li>To improve our website content, page performance, and conversion experience</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>We do not use your information for automated decision-making that produces legal or similarly significant effects on you.</p>

            <h2>4. How We Share Your Information</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. We share data only with service providers that help us operate our business, and only to the extent necessary:</p>
            <ul>
              <li><strong>Make.com</strong> — Our workflow automation platform processes form submissions and routes your inquiry to our team.</li>
              <li><strong>Vercel</strong> — Our website is hosted on Vercel&apos;s edge network, which may log request metadata (IP address, headers) for security and performance purposes.</li>
              <li><strong>Google Analytics 4</strong> — Used on some client engagements and our own site to understand visitor behavior. Google Analytics collects anonymized usage data. You can opt out via Google&apos;s opt-out tool.</li>
              <li><strong>Google Business Profile</strong> — If you contact us through Google Search or Google Maps, your message is handled through Google&apos;s platform under their privacy policy.</li>
            </ul>
            <p>We may also disclose your information if required by law, court order, or to protect the rights, safety, or property of CirroFlow, our clients, or the public.</p>

            <h2>5. Cookies and Tracking</h2>
            <ul>
              <li><strong>Essential cookies</strong> — Required for the website to function correctly. These cannot be disabled.</li>
              <li><strong>Analytics cookies</strong> — Set by Vercel Analytics or Google Analytics to track page views and events. These are anonymous and aggregated.</li>
            </ul>
            <p>You can control non-essential cookies through your browser settings. Disabling analytics cookies will not affect your ability to use the site. For a full list of the cookies we use and how to opt out, see our <a href="/cookies">Cookie Policy</a>.</p>

            <h2>6. Data Retention</h2>
            <p>We retain contact form submissions and inquiry data for up to 24 months, or longer if an active client relationship exists. You may request deletion of your data at any time by contacting us at the address below.</p>

            <h2>7. Data Security</h2>
            <p>We take reasonable technical and organizational measures to protect your information. Our website is served over HTTPS, and form submissions are transmitted securely via encrypted webhooks. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>Our services are directed at businesses and business professionals. We do not knowingly collect personal information from individuals under the age of 18.</p>

            <h2>9. Your Rights</h2>
            <p>You may contact us to request a copy of the personal information we hold about you, request correction or deletion of that information, or opt out of future marketing communications at any time. We will respond to all verifiable requests within 30 days.</p>

            <h2>10. Third-Party Links</h2>
            <p>Our website may contain links to external sites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before submitting any information.</p>

            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. Continued use of our site after any update constitutes acceptance of the revised policy.</p>

            <h2>12. Contact Us</h2>
            <div className="legal-contact-box">
              <p>{site.legalName}</p>
              <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><a href={site.phoneHref}>{site.phone}</a></p>
            </div>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
