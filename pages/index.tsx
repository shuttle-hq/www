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
} from 'components/sections'
import { getSortedPosts, Post } from 'lib/blog/posts'
import { GetStaticPropsResult } from 'next'
import { StarterAttrs } from '../components/elements/Starter'
import { QuestionAttrs } from '../components/sections/FrequentlyAskedQuestions'
import { landingQuestions, FeaturedStartersContent } from '../content'
import { NextSeo } from 'next-seo'

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const posts = getSortedPosts(3)
	const starters = FeaturedStartersContent

	// Fetch stargazers count from GitHub API
	const githubToken = process.env.GITHUB_ACCESS_TOKEN
	const githubResponse = await fetch('https://api.github.com/repos/shuttle-hq/shuttle', {
		headers: {
			Authorization: `token ${githubToken}`,
		},
	})
	const repoData = await githubResponse.json()
	const stargazersCount = repoData.stargazers_count ?? 5000

	return {
		props: {
			posts,
			starters,
			questions: landingQuestions,
			stargazersCount,
		},
		revalidate: 86400, // Revalidate every 24 hours
	}
}

interface Props {
	readonly posts: Post[]
	readonly starters: StarterAttrs[]
	readonly questions: QuestionAttrs[]
	readonly stargazersCount: number
}

export default function Home({ posts, starters, questions, stargazersCount }: Props) {
	return (
		<>
			<NextSeo
				title='Shuttle - Build Backends Fast'
				description='Develop backends with zero infra setup using Shuttle: Code-driven cloud provisioning.'
 				openGraph={{
				images: [
          {
            url: 'https://www.shuttle.rs/images/og-image.png',
            width: 3516,
            height: 1432,
            alt: 'Shuttle.rs - Build Backends Fast',
          },
		  ]
		  }}
			/>
			<main className='text-body'>
				<Hero />
				<GetStarted />
				<LogosReferences />
				<Features />
				<CommunitySupportedNumbers stargazersCount={stargazersCount} />
				<FeaturedStarters starters={starters} />
				<HowItWorks />
				<Testimonials />
				<CallToAction />
				<FrequentlyAskedQuestions questions={questions} page='homepage' />
				<FeaturedBlogPosts posts={posts} />
			</main>
		</>
	)
}
