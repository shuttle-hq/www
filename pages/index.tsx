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
		</>
	)
}
