import {
	CallToAction,
	CommunitySupportedNumbers,
	FeaturedBlogPosts,
	FeaturedStarters,
	Features,
	GetStarted,
	Hero,
	HowItWorks,
	LogosReferences,
	Testimonials,
} from 'components/sections'

export default function Home() {
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
			<FeaturedBlogPosts />
		</>
	)
}
