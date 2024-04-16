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
import { useScroll, motion, useMotionValueEvent, useSpring } from 'framer-motion'
import GreyRocket from 'components/sections/Home/GreyRocket'
import RocketColor1 from 'components/sections/Home/RocketColor1'
import RocketColor3 from 'components/sections/Home/RocketColor3'
import RocketColor2 from 'components/sections/Home/RocketColor2'
import RocketColorFull from 'components/sections/Home/RocketColorFull'
import { useEffect, useState } from 'react'
import Step1 from 'components/sections/Home/Step1'
import Step2 from 'components/sections/Home/Step2'
import Step3 from 'components/sections/Home/Step3'
import Step1Left from 'components/sections/Home/Step1Left'
import Step1Bottom from 'components/sections/Home/Step1Bottom'
import Step1Right from 'components/sections/Home/Step1Right'
import Vectors1 from 'components/sections/Home/Vectors1'
import Step3Vectors from 'components/sections/Home/Step3Vectors'
import Step3Right from 'components/sections/Home/Step3Right'
import Step3Left from 'components/sections/Home/Step3Left'
import Step3Left2 from 'components/sections/Home/Step3Left2'
import Step4 from 'components/sections/Home/Step4'

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const posts = getSortedPosts(3)
	const starters = FeaturedStartersContent

	// Fetch stargazers count from GitHub API
	const githubToken = process.env.GITHUB_ACCESS_TOKEN
	const githubResponse = await fetch('https://api.github.com/repos/shuttle-hq/shuttle', {
		headers: {
			Authorization: `token ${githubToken}`,
		},
	})
	const repoData = await githubResponse.json()
	const stargazersCount = repoData.stargazers_count ?? 5000

	return {
		props: {
			posts,
			starters,
			questions: landingQuestions,
			stargazersCount,
		},
		revalidate: 86400, // Revalidate every 24 hours
	}
}

interface Props {
	readonly posts: Post[]
	readonly starters: StarterAttrs[]
	readonly questions: QuestionAttrs[]
	readonly stargazersCount: number
}

export default function Home({ posts, starters, questions, stargazersCount }: Props) {
	// const { scrollYProgress, scrollY } = useScroll()
	// const scaleX = useSpring(scrollYProgress)
	// console.log('scaleX:', scaleX)

	// useMotionValueEvent(scrollY, 'change', (latest) => {
	// 	console.log('Page scroll: ', latest)
	// })
	const [activeStep, setActiveStep] = useState(0)

	useEffect(() => {
		function handleScroll(event: any) {
			if (event.keyCode === 37) {
				if (activeStep > 0) {
					setActiveStep((a) => a - 1)
				}
			} else if (event.keyCode === 39) {
				if (activeStep < 3) {
					setActiveStep((a) => a + 1)
				}
			}
		}

		addEventListener('keyup', handleScroll, true)

		return () => {
			removeEventListener('keyup', handleScroll, true)
		}
	}, [activeStep])

	return (
		<main className='pointer-events-none overflow-hidden text-body'>
			<div className='mt-[226px] w-full text-center'>
				<h1 className='text-[72px] text-[#F0F0F0]'>Launch System</h1>
				<p>Blast off in t-minus 3, 2, 1...</p>
			</div>
			<div className='mx-auto my-20 flex h-screen max-w-7xl justify-center overflow-y-hidden'>
				<div
					className={`${
						activeStep === 0 ? 'opacity-100' : 'opacity-0'
					} absolute flex h-full w-full justify-center transition-all duration-700 ease-in`}
				>
					<RocketColor1 className='absolute' />
					<Step1 className='absolute' />
					<Step1Left />
					<Step1Bottom />
					<Step1Right />
					<Vectors1 />
				</div>
				<div
					className={`${
						activeStep === 1 ? 'opacity-100' : 'opacity-0'
					} absolute flex w-full justify-center transition-all duration-700 ease-in`}
				>
					<RocketColor2 className='absolute' />
					<Step2 className='absolute' />
				</div>
				<div
					className={`${
						activeStep === 2 ? 'opacity-100' : 'opacity-0'
					} absolute flex h-full w-full justify-center transition-all duration-700 ease-in`}
				>
					<RocketColor3 className='absolute' />
					<Step3 className='absolute' />
					<Step3Vectors />
					<Step3Left />
					<Step3Left2 />
					<Step3Right />
				</div>
			</div>
		</main>
	)
}
