import clsx from 'clsx'
import { Button } from 'components/elements'
import Image from 'next/image'
import { FC, useState } from 'react'
import { DISCORD_URL } from '../../lib/constants'
import { trackEvent } from 'lib/posthog'

export interface QuestionAttrs {
	question: string
	answer: string
}

interface FrequentlyAskedQuestionsProps {
	questions: QuestionAttrs[]
	hideDiscord?: boolean
	page: 'pricing' | 'homepage'
}

const FrequentlyAskedQuestions: FC<FrequentlyAskedQuestionsProps> = ({ questions, hideDiscord, page }) => {
	const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

	const updateActiveQuestion = (index: number) => {
		if (activeQuestion === index) {
			setActiveQuestion(null)
		} else {
			setActiveQuestion(index)
		}
	}

	return (
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-32 desktop:mt-48'>
			<h2 className='font-gradual text-5xl font-bold text-black dark:text-head lg:text-[3.5rem]'>FAQ</h2>
			<div
				className={clsx(
					'mt-10  gap-8 sm:mt-14 lg:gap-16',
					!hideDiscord && 'grid lg:grid-cols-[1fr_minmax(auto,_380px)] lg:items-start'
				)}
			>
				<div className='divide-y divide-white divide-opacity-10 border-y border-white border-opacity-10'>
					{questions.map(({ question, answer }, index) => (
						<div className='flex items-center justify-between px-5' key={question}>
							<div className='w-full'>
								<button
									onClick={() => {
										trackEvent(`${page}_faq_question_${question}`)
										updateActiveQuestion(index)
									}}
									className='w-full text-left'
								>
									<h3 className='cursor-pointer py-5 pr-5 text-head md:text-xl'>{question}</h3>
								</button>
								<div
									className={clsx(
										'text-head transition-all duration-500',
										activeQuestion === index
											? 'pb-5 pr-5 opacity-100'
											: 'max-h-0 overflow-hidden pb-0 pr-0 opacity-0'
									)}
								>
									<p
										className='text-head'
										dangerouslySetInnerHTML={{
											__html: answer,
										}}
									/>
								</div>
							</div>
							<button className='flex-shrink-0' onClick={() => updateActiveQuestion(index)}>
								{activeQuestion === index ? (
									<svg
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M7 16.5L24 16.5' stroke='#7A7A7A' strokeWidth={2} />
									</svg>
								) : (
									<svg
										width={32}
										height={32}
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M15.5 8V25' stroke='#7A7A7A' strokeWidth={2} />
										<path d='M7 16.5L24 16.5' stroke='#7A7A7A' strokeWidth={2} />
									</svg>
								)}
							</button>
						</div>
					))}
				</div>
				{!hideDiscord && (
					<div className='group relative z-10 overflow-hidden rounded-[2rem] border border-white border-opacity-10 bg-[#13292C] from-[#0A0401] via-[#0E0A08] to-[#040607] px-8 py-14 dark:bg-gradient-to-r'>
						<Image
							src='/images/sections/frequently-asked-questions/stars.png'
							alt='stars'
							fill
							className='pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3'
						/>
						<Image
							src='/images/sections/frequently-asked-questions/stars-2.png'
							alt='stars 2'
							fill
							className='pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1'
						/>
						<h3 className='text-2xl text-head'>Want to know more?</h3>
						<p className='mt-2 text-head'>
							Join our Discord, we&apos;re happy to answer any questions!
						</p>
						<Button
							variant='primary'
							className='mt-8'
							href={DISCORD_URL}
							onClick={() => {
								trackEvent(`${page}_faq_discord`)
							}}
						>
							Join Discord
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FrequentlyAskedQuestions
