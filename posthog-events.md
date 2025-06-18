# PostHog Events Documentation

This document lists all PostHog events tracked in the Shuttle website repository, including their names, when they are triggered, and their location in the codebase.

## Navigation Events

- `homepage_mainnav_logo`

  - Triggered when clicking the main navigation logo
  - Location: `components/svgs/Logo.tsx`

- `homepage_mainnav_login`

  - Triggered when clicking the login button in the main navigation
  - Location: `components/sections/Navigation/index.tsx`

- `homepage_mainnav_signup`

  - Triggered when clicking the signup button in the main navigation
  - Location: `components/sections/Navigation/index.tsx`

- `homepage_mainnav_blog`

  - Triggered when clicking the blog button in the main navigation
  - Location `components/sections/Navigation/index.tsx`

- `homepage_mainnav_pricing`

  - Triggered when clicking the pricing button in the main navigation
  - Location `components/sections/Navigation/index.tsx`

- `homepage_mainnav_docs`

  - Triggered when clicking the docs button in the main navigation
  - Location `components/sections/Navigation/index.tsx`

- `homepage_mainnav_ai`
  - Triggered when clicking the Shuttle AI button in the main navigation
  - Location `components/sections/Navigation/index.tsx`

## Blog Events

- `blog_article_{title}_hackernews`

  - Triggered when sharing a blog article to Hacker News
  - Location: `pages/blog/[year]/[month]/[day]/[slug].tsx`

- `blog_article_{title}_twitter`

  - Triggered when sharing a blog article to Twitter
  - Location: `pages/blog/[year]/[month]/[day]/[slug].tsx`

- `blog_article_{title}_linkedin`

  - Triggered when sharing a blog article to LinkedIn
  - Location: `pages/blog/[year]/[month]/[day]/[slug].tsx`

- `blog_article_{title}_mastodon`

  - Triggered when sharing a blog article to Mastodon
  - Location: `pages/blog/[year]/[month]/[day]/[slug].tsx`

- `homepage_footer_site_{post.title}`

  - Triggered when clicking a blog post in the footer
  - Location: `components/sections/Blog.tsx` and `components/sections/FeaturedBlogPost.tsx`

- `blog_tag_{tag}`

  - Triggered when clicking a blog tag
  - Location: `components/sections/Blog.tsx`

- `homepage_whatsnew_blogpost_{post.title}`
  - Triggered when clicking a blog post in the "What's New" section
  - Location: `components/sections/FeaturedBlogPosts.tsx`

## Pricing Events

- `pricing_comparison_{t.name}`

  - Triggered when viewing a specific pricing tier comparison
  - Location: `components/sections/Pricing.tsx`

- `pricing_estimator_vcpu_{cpu}`

  - Triggered when adjusting vCPU in the pricing calculator
  - Location: `components/sections/Pricing/Calculator.tsx`

- `pricing_estimator_hours_{hours}`

  - Triggered when adjusting hours in the pricing calculator
  - Location: `components/sections/Pricing/Calculator.tsx`

- `pricing_contactus`

  - Triggered when clicking the contact us button in pricing section
  - Location: `components/sections/Pricing/Contact.tsx`

- `pricing_tiers_{name}`

  - Triggered when interacting with a specific pricing tier
  - Location: `components/sections/Pricing/Plan.tsx`

- `pricing_tiers_suggest_feature`

  - Triggered when suggesting a feature in pricing tiers
  - Location: `components/sections/Pricing/Plan.tsx`

- `pricing_setupcall`

  - Triggered when setting up a call in the pricing calculator
  - Location: `components/sections/Pricing/Calculator.tsx`

- `pricing_protrial_signup_click`

  - Triggered upon clicking "Try Pro Free" in Pricing page
  - Location: `components/sections/Pricing/ProTrial.tsx`

- `pricing_protrial_learn_more_click`
  - Triggered upon clicking "Learn more" in Pricing page
  - Location: `components/sections/Pricing/ProTrial.tsx`

## Social & Community Events

- `github_star_cta`

  - Triggered when clicking the GitHub star CTA
  - Location: `components/sections/StarOnGithub.tsx`

- `twitter_follow_cta`

  - Triggered when clicking the Twitter follow CTA
  - Location: `components/sections/StarOnGithub.tsx`

- `homepage_newsletter_subscribe`

  - Triggered when subscribing to the newsletter
  - Location: `components/sections/CallToActionNewsletter.tsx`

- `homepage_buildbackendsfast_discord`

  - Triggered when clicking the Discord link in the hero section
  - Location: `components/sections/Hero.tsx`

- `{page}_faq_discord`

  - Triggered when clicking the Discord link in FAQ section
  - Location: `components/sections/FrequentlyAskedQuestions.tsx`

- `homepage_poweredbyourcommunity_joinusnow`

  - Triggered when clicking the "Join Us Now" button in the community section
  - Location: `components/sections/CommunitySupportedNumbers.tsx`

- `homepage_buildthefuture_github`

  - Triggered when clicking the GitHub link in the "Build the Future" section
  - Location: `components/sections/CallToAction.tsx`

- `homepage_buildthefuture_discord`

  - Triggered when clicking the Discord link in the "Build the Future" section
  - Location: `components/sections/CallToAction.tsx`

- `homepage_buildthefuture_twitter`
  - Triggered when clicking the Twitter link in the "Build the Future" section
  - Location: `components/sections/CallToAction.tsx`

## Launchpad Events

- `launchpad_subscribe`

  - Triggered when subscribing to the launchpad
  - Location: `components/sections/Launchpad/Form.tsx` and `components/sections/Launchpad/Waitlist.tsx`

- `launchpad_seemore`

  - Triggered when clicking "See More" in the launchpad
  - Location: `pages/launchpad/index.tsx`

- `launchpad_issue_{issue.title}`

  - Triggered when clicking on a specific launchpad issue
  - Location: `components/sections/Launchpad/LaunchpadIssues.tsx`

- `cch_sign_up`

  - Triggered when signing up for CCH
  - Location: `pages/cch.tsx`

- `cch_go_to_console`
  - Triggered when going to the console from CCH
  - Location: `pages/cch.tsx`

## How It Works Events

- `homepage_howitworks_getstarted`

  - Triggered when clicking "Get Started" in the How It Works section
  - Location: `components/sections/HowItWorks.tsx`

- `homepage_howitworks_deploy`

  - Triggered when clicking "Deploy" in the How It Works section
  - Location: `components/sections/HowItWorks.tsx`

- `homepage_howitworks_addadatabase`

  - Triggered when clicking "Add a Database" in the How It Works section
  - Location: `components/sections/HowItWorks.tsx`

- `homepage_howitworks_deployagain`
  - Triggered when clicking "Deploy Again" in the How It Works section
  - Location: `components/sections/HowItWorks.tsx`

## FAQ Events

- `{page}_faq_question_{question}`
  - Triggered when expanding a FAQ question
  - Location: `components/sections/FrequentlyAskedQuestions.tsx`

## Hero Section Events

- `homepage_buildbackendsfast_startbuilding`

  - Triggered when clicking the "Start Building" button in the hero section
  - Location: `components/sections/Hero.tsx`

- `heroes_becomeahero`
  - Triggered when clicking the "Become a Hero" button
  - Location: `components/sections/ShuttleHeroesHero.tsx`

## Get Started Events

- `{step}`
  - Triggered during the get started flow
  - Location: `components/sections/GetStarted.tsx`

## Starter Template Events

- `homepage_starters_{templateKey}_source`

  - Triggered when viewing the source code of a starter template
  - Location: `components/elements/Starter.tsx`

- `homepage_starters_{templateKey}_post`

  - Triggered when viewing the blog post of a starter template
  - Location: `components/elements/Starter.tsx`

- `homepage_starters_{templateKey}_deploy`
  - Triggered when deploying a starter template
  - Location: `components/elements/Starter.tsx`

## Shuttle AI Events

- `shuttle_ai_waitlist_join`

  - Triggered when joining the Shuttle AI waitlist
  - Location: `components/sections/ShuttleAI/Waitlist.tsx`

- `shuttle_ai_form_button`
  - Triggered when clicking the form button in Shuttle AI section
  - Location: `components/sections/ShuttleAI/Hero.tsx`

## Development Notes

- In development mode, all event names are suffixed with `-dev`
- Events can include additional properties passed as a second argument to `trackEvent`
- The tracking implementation is handled by the PostHog JavaScript client
