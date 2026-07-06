import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { coreServices } from "@/lib/data/services";
import { publishedCaseStudies } from "@/lib/data/case-studies";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/packages", "/case-studies", "/blog", "/contact", "/faq"];

  const serviceRoutes = coreServices.map((service) => `/services/${service.slug}`);
  const caseStudyRoutes = publishedCaseStudies.map((cs) => `/case-studies/${cs.slug}`);

  // Routes with no tracked content-modification date are left without
  // `lastModified` rather than stamping build time — a fabricated "changed
  // today" on every deploy is a worse crawl signal than omitting it.
  const undated = [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes].map((route) => ({
    url: `${site.url}${route}`,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...undated, ...blogRoutes];
}
