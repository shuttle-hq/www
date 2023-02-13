import { CallToAction, FrequentlyAskedQuestions, Pricing, Testimonials, TrustedBy } from 'components/sections'
import {QuestionAttrs} from "../components/sections/FrequentlyAskedQuestions";
import {GetStaticPropsResult} from "next";
import {Questions} from "../content";

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const questions = Questions
	return {
		props: {
			questions
		}
	}
}

interface Props {
	readonly questions: QuestionAttrs[]
}

export default function PricingPage({questions}: Props) {
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
			<FrequentlyAskedQuestions questions={questions}/>
			<CallToAction />
		</>
	)
}
