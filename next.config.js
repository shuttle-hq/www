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
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
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
        {
          source: "/:path*",
          has: [
            { type: "host", "value": "docs.cobra.shuttle.dev" },
          ],
          destination: "https://shuttle-1.gitbook.io/shuttle-cobra/:path*",
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap.xml",
        },
        {
          source: "/rss.xml",
          destination: "/api/rss",
        },
        {
          source: "/llms.txt",
          destination: "/api/llms",
        },
        {
          source: "/llms-full.txt",
          destination: "/api/llms-full",
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
      ],
    }
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
      {
        source: "/shuttle-cobra/:path*",
        has: [
          { type: "host", "value": "docs.cobra.shuttle.dev" },
        ],
        permanent: false,
        destination: "/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        // Note: since i18n has been configured, the path matching rules are altered,
        // see: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers#headers-with-i18n-support
        // That's why "/(.*)" won't match the `/`, but "/:path*" will.
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
