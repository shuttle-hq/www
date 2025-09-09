# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development

- `npm install` - Install dependencies
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run fmt` - Format code with Prettier
- `npm run lint` - Run Next.js linting
- `npm run test` - Run tests with Vitest

### Content Management

- `bun run scripts/fix-blogs.ts` - Fix blog post formatting and metadata

## Architecture Overview

### Framework & Stack

- **Next.js 14** with TypeScript - React framework with file-based routing
- **Tailwind CSS** - Utility-first CSS framework with custom theme configuration
- **MDX** - Markdown with JSX for blog content (`_blog/` directory)
- **PostHog** - Analytics and feature flagging
- **Vercel Analytics** - Additional analytics tracking

### Project Structure

```txt
/pages/           # Next.js pages and API routes
  /blog/          # Dynamic blog routing by year/month/slug
  /api/           # API endpoints (RSS feed generation)
/components/      # React components organized by type
  /sections/      # Page sections (Hero, Features, etc.)
  /elements/      # Reusable UI elements
  /blog/          # Blog-specific components
/lib/             # Utility functions and data processing
  /blog/          # Blog post processing and RSS generation
/content/         # Static content definitions (FAQ, plans, starters)
/_blog/           # Blog posts in MDX format (YYYY-MM-DD-title.mdx)
/_launchpad/      # Launchpad newsletter content
/public/images/   # Static assets organized by feature/page
```

### Key Features

- **Blog System**: File-based blog with MDX support, automatic URL generation from filename dates, and RSS feed generation
- **Dynamic Content**: Static generation with ISR (revalidation) for GitHub star counts and other dynamic data
- **Component Architecture**: Modular sections and elements with TypeScript interfaces
- **SEO Optimization**: Next-SEO integration with OpenGraph and Twitter meta tags
- **Dark Mode**: Class-based dark mode using Tailwind CSS
- **Analytics**: PostHog integration with page view tracking and GTM

### Blog Content Management

- Blog posts use filename format: `YYYY-MM-DD-slug.mdx`
- Posts automatically generate URLs: `/blog/YYYY/MM/DD/slug`
- Front matter supports: title, date, author, tags, cover image, description
- Table of contents and reading time calculated automatically
- RSS feed generated at `/api/rss`

### Blog CTA Components

Reusable call-to-action components for blog posts located in `/components/blog/cta/`:

- **TryItYourself**: Encourages hands-on experimentation with Shuttle
- **ReadyToShipFaster**: Focuses on deployment and production readiness
- **ViewImplementation**: Links to source code and complete tutorials
- **DatabaseCTA**: Promotes Shuttle's database services with PostgreSQL, MongoDB, and Redis. Uses brand gradient background for visibility.
- **NewConsoleCTA**: Promotes the redesigned Shuttle Console experience

All CTA components:

- Accept customizable props (title, subtitle, buttonText, href, eventName)
- Include PostHog analytics tracking
- Use consistent Tailwind CSS styling with brand gradients
- Are exported from `@components/blog/cta/index.ts` for easy import
- **Must be registered** in `/pages/blog/[year]/[month]/[day]/[slug].tsx` mdxComponents object to be usable in MDX files

### Styling System

- Custom Tailwind theme with gradients and brand colors
- Typography plugin for blog content styling
- Custom CSS modules for specific components
- Responsive design with mobile-first approach
- Brand fonts: BwGradual (headings), Fira Mono (code), Atkinson (accessibility)

### Brand Colors

Shuttle's brand gradient colors:

- **Primary Orange**: `#FC540C` (252, 84, 12)
- **Middle Yellow**: `rgba(255, 215, 111, 0.72)` (255, 215, 111 with 72% opacity)
- **Secondary Cyan**: `#38D4E9` (56, 212, 233)

Primary gradient definition:

```css
linear-gradient(71.78deg, #FC540C 27.87%, rgba(255, 215, 111, 0.72) 52.56%, #38D4E9 74.58%)
```

For subtle brand-colored backgrounds with transparency, use:

```css
/* Tailwind classes for brand gradient with transparency */
bg-gradient-to-br from-[#FC540C]/20 via-[rgba(255,215,111,0.15)] to-[#38D4E9]/20 backdrop-blur-sm border border-[#FC540C]/30
```

### Environment Setup

- Uses PostHog for analytics (requires `NEXT_PUBLIC_POSTHOG_KEY`)
- GitHub API integration for star count (requires `GITHUB_ACCESS_TOKEN`)
- Image domains configured for external images: github.com, cdn.discordapp.com, endler.dev

### important-instruction-reminders

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User.
NEVER automatically run dev, build, lint, format, or test commands at the end of tasks unless explicitly requested by the user.
