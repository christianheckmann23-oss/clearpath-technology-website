/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    // The rest of the site (contact, services, faq, etc.) hasn't been
    // migrated to Next.js routes yet — it still lives as static HTML under
    // public/. These rewrites let the existing trailing-slash URLs
    // (e.g. /contact/) keep resolving to their public/**/index.html files.
    return [
      { source: "/contact/", destination: "/contact/index.html" },
      { source: "/faq/", destination: "/faq/index.html" },
      { source: "/privacy/", destination: "/privacy/index.html" },
      { source: "/stack/", destination: "/stack/index.html" },
      { source: "/sitemap/", destination: "/sitemap/index.html" },
      { source: "/services/", destination: "/services/index.html" },
      { source: "/services/:slug/", destination: "/services/:slug/index.html" },
      { source: "/case-studies/:slug/", destination: "/case-studies/:slug/index.html" },
    ];
  },
};

export default nextConfig;
