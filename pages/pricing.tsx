import { CallToAction, FrequentlyAskedQuestions, Pricing, Testimonials, TrustedBy } from 'components/sections'
import { QuestionAttrs } from '../components/sections/FrequentlyAskedQuestions'
import { GetStaticPropsResult } from 'next'
import { Questions } from '../content'
import Hero from 'components/sections/Pricing/Hero'
import { Page } from 'components/templates'
import { ReactNode } from 'react'
import Plans from 'components/sections/Pricing/Plans'
import LovedBy from 'components/sections/Pricing/LovedBy'
import PriceCards from 'components/sections/Pricing/PriceCards'
import Contact from 'components/sections/Pricing/Contact'
import BenefitCards from 'components/sections/Pricing/BenefitsCards'

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const questions = Questions
	return {
		props: {
			questions,
		},
	}
}

interface Props {
	readonly questions: QuestionAttrs[]
}

export default function PricingPage({ questions }: Props) {
	return (
		<div
			className='group relative flex-grow overflow-hidden bg-center bg-repeat'
			style={{ backgroundImage: "url('/images/pages/shuttle-ai/stars.png')" }}
		>
			<Hero />
			<Plans />
			<LovedBy />
			<PriceCards />
			<BenefitCards />
			<Pricing />
			<Contact />
			{/* <TrustedBy /> */}
			<Testimonials />
			<FrequentlyAskedQuestions questions={questions} />
			<CallToAction />
		</div>
	)
}

PricingPage.getLayout = (children: ReactNode) => (
	<Page background={'/images/pages/pricing/background.png'}>{children}</Page>
)
