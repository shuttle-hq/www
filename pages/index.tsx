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
import { getAllTags, getSortedPosts } from 'lib/blog/posts'
import { GetStaticPropsResult } from 'next'
import {QUESTIONS} from "../lib/faq";

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const posts = getSortedPosts(3)

	return {
		props: {
			posts,
		},
	}
}

interface Props {
	readonly posts: ReturnType<typeof getSortedPosts>
}

export default function Home(props: Props) {
	return (
		<>
			<Hero />
			<GetStarted />
			<LogosReferences />
			<Features />
			<CommunitySupportedNumbers />
			<FeaturedStarters />
			<HowItWorks />
			<Testimonials />
			<CallToAction />
			<FrequentlyAskedQuestions
				questions={QUESTIONS}
			/>
			<FeaturedBlogPosts posts={props.posts} />
		</>
	)
}
