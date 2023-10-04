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

	return {
		props: {
			posts,
			starters,
			questions: landingQuestions,
		},
	}
}

interface Props {
	readonly posts: Post[]
	readonly starters: StarterAttrs[]
	readonly questions: QuestionAttrs[]
}

export default function Home({ posts, starters, questions }: Props) {
	return (
		<>
			<Hero />
			<GetStarted />
			<LogosReferences />
			<Features />
			<CommunitySupportedNumbers />
			<FeaturedStarters starters={starters} />
			<HowItWorks />
			<Testimonials />
			<CallToAction />
			<FrequentlyAskedQuestions questions={questions} />
			<FeaturedBlogPosts posts={posts} />
		</>
	)
}
