import { CallToAction, FrequentlyAskedQuestions, Pricing, Testimonials, TrustedBy } from 'components/sections'

export default function PricingPage() {
	return (
		<>
			<div className='mx-auto mt-24 w-full max-w-[1280px] px-5 sm:px-10 lg:mt-28'>
				<header>
					<h1 className='w-fit font-gradual text-5xl font-bold dark:text-[#C2C2C2] lg:text-6.5'>
						<span className='text-gradient block bg-clip-text text-transparent'>
							Make your life easier
						</span>
						with the right plan.
					</h1>
					<p className='mt-4 sm:text-xl lg:text-2xl'>
						Experience the future of backend development with shuttle.
					</p>
				</header>
			</div>
			<Pricing />
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
			/>
			<CallToAction />
		</>
	)
}
