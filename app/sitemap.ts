import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { coreServices } from "@/lib/data/services";
import { publishedCaseStudies } from "@/lib/data/case-studies";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/packages", "/case-studies", "/blog", "/contact", "/faq"];

  const serviceRoutes = coreServices.map((service) => `/services/${service.slug}`);
  const caseStudyRoutes = publishedCaseStudies.map((cs) => `/case-studies/${cs.slug}`);
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
