import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { TapLink } from "@/components/ui/tap-link";
import { TiltCard } from "@/components/ui/motion-primitives";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | CirroFlow Technologies",
  description: "Practical writing on web design, SEO, AI search optimization, and automation for small businesses.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero
          eyebrow="Blog"
          title={<>Notes on <em>growing</em> a small business online.</>}
          lede="Practical writing on web design, SEO, AI search optimization, and automation — no fluff."
        />
        <section className="blog-section">
          <div className="container">
            {posts.length > 0 ? (
              <div className="blog-list">
                {posts.map((post) => (
                  <TiltCard key={post.slug} max={3}>
                  <TapLink href={`/blog/${post.slug}`} className="blog-card" variant="row">
                    <div className="blog-card-date">
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </div>
                    <div className="blog-card-title">{post.title}</div>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-tags">
                      {post.tags.map((tag) => (
                        <span className="stag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </TapLink>
                  </TiltCard>
                ))}
              </div>
            ) : (
              <div className="case-study-empty">
                <div className="case-study-empty-title">First post coming soon</div>
                <p>We&apos;re working on it — check back shortly.</p>
              </div>
            )}
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
