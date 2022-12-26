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
	ShuttleHeroesHero,
	Testimonials,
} from 'components/sections'
import { getAllTags, getSortedPosts } from 'lib/blog/posts'
import { GetStaticPropsResult } from 'next'

export default function ShuttleHeroes() {
	return (
		<>
			<ShuttleHeroesHero />
			<CallToAction />
		</>
	)
}
