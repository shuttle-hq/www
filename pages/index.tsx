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
import { getAllTags, getSortedPosts, Post } from 'lib/blog/posts'
import { GetStaticPropsResult } from 'next'
import { StarterAttrs } from "../components/elements/Starter";
import { QuestionAttrs } from "../components/sections/FrequentlyAskedQuestions";
import { Questions, FeaturedStartersContent } from "../content"

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const posts = getSortedPosts(3)
	const starters = FeaturedStartersContent
	const questions = Questions
	return {
		props: {
			posts,
			starters,
			questions,
		},
	}
}

interface Props {
	readonly posts: Post[]
	readonly starters: StarterAttrs[]
	readonly questions: QuestionAttrs[]
}

export default function Home({posts, starters, questions}: Props) {
	return (
		<>
			<Hero />
			<GetStarted />
			<LogosReferences />
			<Features />
			<CommunitySupportedNumbers />
			<FeaturedStarters starters={starters}/>
			<HowItWorks />
			<Testimonials />
			<CallToAction />
			<FrequentlyAskedQuestions questions={questions}/>
			<FeaturedBlogPosts posts={posts} />
		</>
	)
}
