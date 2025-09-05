import dynamic from "next/dynamic";
const CallToAction = dynamic(() => import("components/sections/CallToAction"), { ssr: false });
const CommunitySupportedNumbers = dynamic(
  () => import("components/sections/CommunitySupportedNumbers"),
  { ssr: false },
);
const FeaturedBlogPosts = dynamic(
  () => import("components/sections/FeaturedBlogPosts"),
  { ssr: false },
);
const FeaturedStarters = dynamic(
  () => import("components/sections/FeaturedStarters"),
  { ssr: false },
);
const Features = dynamic(() => import("components/sections/Features"), {
  ssr: false,
});
const FrequentlyAskedQuestions = dynamic(
  () => import("components/sections/FrequentlyAskedQuestions"),
  { ssr: false },
);
const GetStarted = dynamic(() => import("components/sections/GetStarted"), {
  ssr: false,
});
const Hero = dynamic(() => import("components/sections/Hero"), { ssr: false });
const HowItWorks = dynamic(() => import("components/sections/HowItWorks"), {
  ssr: false,
});
const LogosReferences = dynamic(() => import("components/sections/LogosReferences"), { ssr: false });
const Testimonials = dynamic(() => import("components/sections/Testimonials"), { ssr: false });
const ProTrial = dynamic(() => import("components/sections/ProTrial").then(m => m.ProTrial), { ssr: false });
import { getSortedPosts } from "lib/blog/posts";
import { landingQuestions, FeaturedStartersContent } from "../../content";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Shuttle - Build Backends Fast",
  description:
    "Develop backends with zero infra setup using Shuttle: Code-driven cloud provisioning.",
  openGraph: {
    images: [
      {
        url: "https://www.shuttle.dev/images/og-image.png",
        width: 3516,
        height: 1432,
        alt: "Shuttle.dev - Build Backends Fast",
      },
    ],
  },
};

async function getData() {
  const posts = getSortedPosts(3);
  const starters = FeaturedStartersContent;

  const githubToken = process.env.GITHUB_ACCESS_TOKEN;
  const githubResponse = await fetch(
    "https://api.github.com/repos/shuttle-hq/shuttle",
    {
      headers: githubToken ? { Authorization: `token ${githubToken}` } : {},
      next: { revalidate },
    },
  );
  const repoData = await githubResponse.json();
  const stargazersCount = repoData.stargazers_count ?? 6000;

  return { posts, starters, questions: landingQuestions, stargazersCount };
}

export default async function Home() {
  const { posts, starters, questions, stargazersCount } = await getData();

  return (
    <main className="text-body">
      <Hero />
      <GetStarted />
      <LogosReferences />
      <Features />
      <CommunitySupportedNumbers stargazersCount={stargazersCount} />
      <ProTrial />
      <FeaturedStarters starters={starters} />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FrequentlyAskedQuestions questions={questions} page="homepage" />
      <FeaturedBlogPosts posts={posts} />
    </main>
  );
}

