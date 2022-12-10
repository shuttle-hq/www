import { CallToAction, FrequentlyAskedQuestions, Testimonials, TrustedBy } from 'components/sections'

export default function Pricing() {
	return (
		<>
			<TrustedBy />
			<Testimonials />
			<FrequentlyAskedQuestions
				questions={[
					{
						question:
							'How do you handle isolation/sandboxing, if plugins are loaded as dynamic libraries?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
					{
						question: 'How does plugin reloading work? Is it using dynamic linking somehow?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
					{
						question: 'Do you plan to have a WASM runner?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
					{
						question:
							'How it differs from using serverless framework with rust lambda and provided runtime?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
				]}
				hideDiscord
			/>
			<CallToAction />
		</>
	)
}
