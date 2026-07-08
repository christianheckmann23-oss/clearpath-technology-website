import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/page-hero";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | CirroFlow Technology Partners`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PageHero eyebrow="Blog" title={post.title}>
          <div className="blog-post-meta">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span>·</span>
            <span>{post.tags.join(", ")}</span>
          </div>
        </PageHero>
        <section className="blog-post-section">
          <div className="container">
            <article className="prose prose-slate blog-body">
              <MDXRemote source={post.content} />
            </article>
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
