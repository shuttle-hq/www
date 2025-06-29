import {
  CallToAction,
  CommunitySupportedNumbers,
  FeaturedBlogPosts,
  FeaturedStarters,
  Features,
  FrequentlyAskedQuestions,
  GetStarted,
  Hero,
  HowItWorks,
  LogosReferences,
  Testimonials,
} from "components/sections";
import { getSortedPosts, Post } from "lib/blog/posts";
import { GetStaticPropsResult } from "next";
import { StarterAttrs } from "../components/elements/Starter";
import { QuestionAttrs } from "../components/sections/FrequentlyAskedQuestions";
import { landingQuestions, FeaturedStartersContent } from "../content";
import { NextSeo } from "next-seo";
import { ProTrial } from "components/sections/ProTrial";

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const posts = getSortedPosts(3);
  const starters = FeaturedStartersContent;

  // Fetch stargazers count from GitHub API
  const githubToken = process.env.GITHUB_ACCESS_TOKEN;
  const githubResponse = await fetch(
    "https://api.github.com/repos/shuttle-hq/shuttle",
    {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }
  );
  const repoData = await githubResponse.json();
  const stargazersCount = repoData.stargazers_count ?? 6000;

  return {
    props: {
      posts,
      starters,
      questions: landingQuestions,
      stargazersCount,
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
}

interface Props {
  readonly posts: Post[];
  readonly starters: StarterAttrs[];
  readonly questions: QuestionAttrs[];
  readonly stargazersCount: number;
}

export default function Home({
  posts,
  starters,
  questions,
  stargazersCount,
}: Props) {
  return (
    <>
      <NextSeo
        title="Shuttle - Build Backends Fast"
        description="Develop backends with zero infra setup using Shuttle: Code-driven cloud provisioning."
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/og-image.png",
              width: 3516,
              height: 1432,
              alt: "Shuttle.dev - Build Backends Fast",
            },
          ],
        }}
      />
      {/* <div className="w-full text-center p-2 bg-yellow-400 text-black">🚨 Beware of impersonators and scams! Never trust communication that are not from our official websites and socials.</div> */}
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
    </>
  );
}
