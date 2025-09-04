/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["github.com", "cdn.discordapp.com", "endler.dev"],
  },
  async rewrites() {
    return [
      {
        source: "/rss.xml",
        destination: "/api/rss",
      },
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
  redirects() {
    return [
      {
        source: "/docs",
        destination: "https://docs.shuttle.dev/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blog/tags/all",
        permanent: true,
      },
      {
        source: "/install",
        destination:
          "https://raw.githubusercontent.com/shuttle-hq/shuttle/main/install.sh",
        permanent: false,
      },
      {
        source: "/install-win",
        destination:
          "https://raw.githubusercontent.com/shuttle-hq/shuttle/main/install.ps1",
        permanent: false,
      },
      // redirect docs.shuttle.rs -> docs.shuttle.dev
      // done here instead of in Mintlify since Mintlify can only host one custom domain for the site.
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "docs.shuttle.rs",
          },
        ],
        permanent: true,
        destination: "https://docs.shuttle.dev/:path*",
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
