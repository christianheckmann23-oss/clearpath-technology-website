import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Service | CirroFlow Technologies",
  robots: "noindex, follow",
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero eyebrow="Legal" title="Terms of Service" />
        <section className="legal-section">
          <div className="container">
          <div className="legal-body">
            <p className="legal-meta">{site.legalName} &nbsp;|&nbsp; Effective date: July 5, 2026 &nbsp;|&nbsp; Last updated: July 5, 2026</p>

            <h2>1. Agreement to These Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the website located at {site.url} (the
              &quot;Site&quot;), operated by {site.legalName} (&quot;CirroFlow,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;), an Ohio limited liability company. By accessing or using the Site, you agree to be bound
              by these Terms. If you do not agree, please do not use the Site.
            </p>

            <h2>2. Who We Are</h2>
            <p>
              CirroFlow is a small business growth partner based in Ohio. We provide website design and hosting, SEO,
              AI search optimization, AI call agents, and automation services to small businesses.
            </p>

            <h2>3. Use of the Site</h2>
            <p>You may use the Site for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Use the Site in any way that violates applicable federal, state, or local law</li>
              <li>Attempt to gain unauthorized access to the Site, its servers, or any connected systems</li>
              <li>Interfere with or disrupt the Site, including by introducing malware, scraping at scale, or overloading our infrastructure</li>
              <li>Submit false, misleading, or fraudulent information through our contact or assessment forms</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
              <li>Reproduce, duplicate, or resell any portion of the Site without our written permission</li>
            </ul>

            <h2>4. Our Services Are Governed by Separate Agreements</h2>
            <p>
              The Site describes our services for informational purposes. Descriptions, pricing references, package
              details, and timelines on the Site are not offers and do not create a binding contract. All website,
              hosting, SEO, AI, and automation services are provided under a separate written agreement — such as a
              services agreement, statement of work, or proposal — accepted by both parties. If there is any conflict
              between these Terms and a signed services agreement, the signed services agreement controls for the
              services it covers.
            </p>

            <h2>5. Free Assessments and Inquiries</h2>
            <p>
              Submitting an assessment request or contact form does not create a client relationship, and any
              preliminary audit, recommendation, or plan we share before a signed agreement is provided for general
              informational purposes only. We aim to respond to inquiries within one business day, but response times
              are not guaranteed.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              The Site and its contents — including text, graphics, logos, page designs, and code — are owned by
              CirroFlow or its licensors and are protected by copyright, trademark, and other intellectual property
              laws. You may view and print pages for your own business evaluation purposes, but you may not otherwise
              copy, modify, distribute, or create derivative works from the Site without our written consent.
            </p>
            <p>
              Third-party product and company names mentioned on the Site — including Google, Microsoft, Vercel, and
              others — are trademarks of their respective owners. Their appearance on the Site does not imply
              endorsement of CirroFlow by those companies.
            </p>

            <h2>7. Case Studies and Results</h2>
            <p>
              Case studies, statistics, and testimonials on the Site describe results achieved for specific clients
              under specific circumstances. They are illustrative only. Past results do not guarantee similar outcomes
              for your business, and actual results depend on factors outside our control.
            </p>

            <h2>8. Third-Party Links and Services</h2>
            <p>
              The Site contains links to third-party websites and relies on third-party platforms (such as Google,
              Vercel, and Make.com) as described in our <a href="/privacy">Privacy Policy</a>. We do not control and
              are not responsible for the content, availability, or practices of third-party sites or services. Your
              use of them is at your own risk and subject to their own terms.
            </p>

            <h2>9. Disclaimer of Warranties</h2>
            <p>
              THE SITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE
              OF HARMFUL COMPONENTS, OR THAT ANY INFORMATION ON THE SITE IS COMPLETE, ACCURATE, OR CURRENT.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, CIRROFLOW AND ITS MEMBERS, OFFICERS, EMPLOYEES, AND AGENTS WILL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOST
              PROFITS, LOST DATA, OR BUSINESS INTERRUPTION — ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE, EVEN IF
              WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY ARISING OUT OF OR RELATED TO
              THE SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100). THIS SECTION APPLIES TO THE SITE ONLY;
              LIABILITY FOR CONTRACTED SERVICES IS ADDRESSED IN THE APPLICABLE SERVICES AGREEMENT.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or limitation of certain damages, so
              some of the above limitations may not apply to you.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless CirroFlow and its members, officers, employees, and agents from
              any claims, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of your
              violation of these Terms or your misuse of the Site.
            </p>

            <h2>12. Privacy</h2>
            <p>
              Your use of the Site is also governed by our <a href="/privacy">Privacy Policy</a> and{" "}
              <a href="/cookies">Cookie Policy</a>, which describe how we collect, use, and protect your information.
            </p>

            <h2>13. Governing Law and Venue</h2>
            <p>
              These Terms are governed by the laws of the State of Ohio, without regard to its conflict-of-law
              principles. Any dispute arising out of these Terms or your use of the Site will be brought exclusively in
              the state or federal courts located in Ohio, and you consent to the jurisdiction of those courts.
            </p>

            <h2>14. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will update the &quot;Last updated&quot; date
              at the top of this page. Material changes will be communicated via a notice on the Site. Your continued
              use of the Site after any update constitutes acceptance of the revised Terms.
            </p>

            <h2>15. Severability and Entire Agreement</h2>
            <p>
              If any provision of these Terms is found unenforceable, the remaining provisions will remain in full
              effect. These Terms, together with the Privacy Policy and Cookie Policy, are the entire agreement between
              you and CirroFlow regarding use of the Site, and supersede any prior understandings on that subject.
            </p>

            <h2>16. Contact Us</h2>
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
