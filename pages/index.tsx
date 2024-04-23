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
import { useScroll, motion, useMotionValueEvent, useSpring, useAnimation, useAnimate } from 'framer-motion'
import GreyRocket from 'components/sections/Home/GreyRocket'
import RocketColor1 from 'components/sections/Home/RocketColor1'
import RocketColor3 from 'components/sections/Home/RocketColor3'
import RocketColor2 from 'components/sections/Home/RocketColor2'
import RocketColorFull from 'components/sections/Home/RocketColorFull'
import { useCallback, useEffect, useRef, useState } from 'react'
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
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import RocketColor4 from 'components/sections/Home/RocketColorFull'

gsap.registerPlugin(useGSAP, ScrollTrigger)

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
	const [activeStep, setActiveStep] = useState(0)
	const container = useRef<HTMLDivElement | null>(null)
	const tl = useRef<any>()

	useGSAP(
		() => {
			const rockets = gsap.utils.toArray('.rocket')

			rockets.forEach((rocket: any, index) => {
				gsap.fromTo(
					rocket,
					{ autoAlpha: 0, y: 100 }, // from state
					{
						autoAlpha: 1,
						y: 0, // to state
						scrollTrigger: {
							trigger: container.current,
							start: 'top top+=100',
							end: '+=100', // Adjust end value based on how long you want the pin effect
							scrub: true,
							markers: true, // Remove in production, used for debugging
							pin: true, // Pin the container when in view
							pinSpacing: false,
							onEnter: () => console.log('Animation start for', rocket),
							onLeaveBack: () => console.log('Reversing animation for', rocket),
						},
					}
				)
			})
		},
		{ scope: container }
	) // <-- scope for selector text (optional)

	return (
		<main className='text-body'>
			{/* <Hero /> */}

			<div className='rockets relative h-[3000px]' ref={container}>
				<RocketColor1 className='rocket-1 rocket absolute left-0 top-0' />
				<RocketColor2 className='rocket-2 rocket absolute left-0 top-0' />
				<RocketColor3 className='rocket-3 rocket absolute left-0 top-0' />
				<RocketColor4 className='rocket-4 rocket absolute left-0 top-0' />
			</div>
		</main>
	)
}
