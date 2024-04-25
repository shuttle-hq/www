import { CallToAction, Footer } from 'components/sections'
import { getSortedPosts, Post } from 'lib/blog/posts'
import { GetStaticPropsResult } from 'next'
import { StarterAttrs } from '../components/elements/Starter'
import { QuestionAttrs } from '../components/sections/FrequentlyAskedQuestions'
import { landingQuestions, FeaturedStartersContent } from '../content'
import GreyRocket from 'components/sections/Home/GreyRocket'
import RocketColor1 from 'components/sections/Home/RocketColor1'
import RocketColor3 from 'components/sections/Home/RocketColor3'
import RocketColor2 from 'components/sections/Home/RocketColor2'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Step1Top from 'components/sections/Home/Step1Top'
import Step2Top from 'components/sections/Home/Step2Top'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import { Page } from 'components/templates'
import Step3Top from 'components/sections/Home/Step3Top'
import RocketColor4 from 'components/sections/Home/RocketColorFull'
import Link from 'next/link'
import TemplateCard from 'components/sections/Home/TemplateCard'
import Step1Left from 'components/sections/Home/Step1Left'
import Step1Right from 'components/sections/Home/Step1Right'
import Step1Bottom from 'components/sections/Home/Step1Bottom'
import Vectors1 from 'components/sections/Home/Vectors1'
import Step2Left from 'components/sections/Home/Step2Left'
import Step2Right from 'components/sections/Home/Step2Right'
import Step2Bottom from 'components/sections/Home/Step2Bottom'
import Step3Left from 'components/sections/Home/Step3Left'
import Step3Left2 from 'components/sections/Home/Step3Left2'
import Step3Vectors from 'components/sections/Home/Step3Vectors'
import Step3Right from 'components/sections/Home/Step3Right'
import Xarrow from 'react-xarrows'

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
	const box1Ref = useRef(null)

	useGSAP(() => {
		const bodyScrollBar = Scrollbar.init(document.body, {
			damping: 0.1,
			delegateTo: document,
		})

		ScrollTrigger.scrollerProxy('.scroller', {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value ?? 0
				}
				return bodyScrollBar.scrollTop
			},
		})
		bodyScrollBar.addListener(ScrollTrigger.update)

		gsap.set('.panel', {
			zIndex: (i, target, targets) => targets.length - i,
			// opacity: (i, target, targets) => 0,
		})

		const images = gsap.utils.toArray<GSAPTweenTarget>('.panel')
		const [first, second, third, fourth] = images

		const steps = gsap.utils.toArray<GSAPTweenTarget>('.step-top')
		const [firstStep, secondStep, thirdStep] = steps

		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: 'section.black',
				scroller: '.scroller',
				start: 'top top',
				end: () => '+=' + window.innerHeight,
				scrub: true,
				toggleActions: 'play none reverse none',
				invalidateOnRefresh: true,
			},
		})

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: 'section.black',
				scroller: '.scroller',
				start: () => 'top -' + window.innerHeight * 1.5,
				end: () => '+=' + window.innerHeight,
				scrub: true,
				toggleActions: 'play none reverse none',
				invalidateOnRefresh: true,
			},
		})

		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: 'section.black',
				scroller: '.scroller',
				start: () => 'top -' + window.innerHeight * 2.5,
				end: () => '+=' + window.innerHeight,
				scrub: true,
				toggleActions: 'play none reverse none',
				invalidateOnRefresh: true,
			},
		})

		const tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: 'section.black',
				scroller: '.scroller',
				start: () => 'top -' + window.innerHeight * 3.5,
				end: () => '+=' + window.innerHeight,
				scrub: true,
				toggleActions: 'play none reverse none',
				invalidateOnRefresh: true,
			},
		})

		tl1
			// .fromTo(
			// 	firstStep,
			// 	{ left: 0, right: 0, scale: 1, opacity: 1 },
			// 	{ left: 0, scale: 0.7, opacity: 0.3 }
			// )
			.fromTo(first, { opacity: 1 }, { opacity: 0 })

		tl2
			// .to(firstStep, { left: 0, scale: 0.7, opacity: 0 })
			// 	.fromTo(secondStep, { left: '30%', scale: 1, opacity: 1 }, { left: 0, scale: 0.7, opacity: 0.3 })
			.fromTo(second, { opacity: 1 }, { opacity: 0 })

		tl3
			// .to(secondStep, { left: 0, scale: 0.7, opacity: 0 })
			// .fromTo(thirdStep, { left: '30%', scale: 1, opacity: 1 }, { left: 0, scale: 0.7, opacity: 0.3 })
			.fromTo(third, { opacity: 1 }, { opacity: 0 })

		tl4
			// .to(thirdStep, { left: 0, scale: 0.7, opacity: 0 })
			.fromTo(fourth, { left: 0 }, { left: window.innerWidth < 1024 ? 0 : -(window.innerWidth / 4) })

		ScrollTrigger.create({
			trigger: 'section.black',
			scroller: '.scroller',
			scrub: true,
			// markers: true,
			pin: true,
			start: () => 'top top',
			end: () => '+=' + (images.length + 1) * window.innerHeight,
			invalidateOnRefresh: true,
		})
	})

	return (
		<div className='scroller px-5' ref={container}>
			<CallToAction />

			<div className='z-50 mx-auto mb-0 flex max-w-7xl flex-col items-center sm:mx-auto sm:mt-16 sm:px-10 lg:mt-32 desktop:mt-64'>
				{/* <h1 className='text-[48px] text-[#F0F0F0]'>Launch System</h1>

				<p className='text-[20px] text-[#C8C8C8]'>Blast off in t-minus 3, 2, 1...</p> */}
			</div>
			<section className='black flex flex-col'>
				<div className='p-wrap relative'>
					<div className='panel flex flex-col items-center gap-8 bg-black lg:justify-center'>
						<Xarrow
							start='top-1'
							end='left-1'
							startAnchor='left'
							endAnchor='top'
							color='#525150'
							strokeWidth={1}
							dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<Xarrow
							start='top-1'
							end='right-1'
							startAnchor='right'
							endAnchor='top'
							color='#525150'
							strokeWidth={1}
							dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>

						<Xarrow
							start='left-1'
							end='bottom-1'
							startAnchor='bottom'
							endAnchor='left'
							color='#525150'
							showHead={false}
							strokeWidth={1}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<Xarrow
							start='right-1'
							end='bottom-1'
							startAnchor='bottom'
							endAnchor='right'
							color='#525150'
							strokeWidth={1}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<Step1Top id='top-1' className='step-top static lg:absolute' />
						<Step1Left id='left-1' className='static lg:absolute' />
						<Step1Right id='right-1' className='static lg:absolute' />
						<Step1Bottom id='bottom-1' className='static lg:absolute' />
						<RocketColor1 className='absolute lg:static' />
					</div>

					<div className='panel flex flex-col items-center gap-8 bg-black lg:justify-center'>
						<Xarrow
							start='top-1'
							end='left-1'
							startAnchor='left'
							endAnchor='top'
							color='#525150'
							strokeWidth={1}
							dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<Xarrow
							start='top-2'
							end='right-2'
							startAnchor='right'
							endAnchor='top'
							color='#525150'
							strokeWidth={1}
							dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>

						<Xarrow
							start='left-2'
							end='bottom-2'
							startAnchor='bottom'
							endAnchor='left'
							color='#525150'
							showHead={false}
							strokeWidth={1}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<Xarrow
							start='right-2'
							end='bottom-2'
							startAnchor='bottom'
							endAnchor='right'
							color='#525150'
							strokeWidth={1}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<RocketColor2 className='absolute lg:static' />
						<Step2Top id='top-2' className='step-top static lg:absolute' />
						<Step2Left id='left-2' className='static lg:absolute' />
						<Step2Right id='right-2' className='static lg:absolute' />
						<Step2Bottom id='bottom-2' className='static lg:absolute' />
					</div>

					<div className='panel flex flex-col items-center gap-8 bg-black lg:justify-center'>
						<Xarrow
							start='top-3'
							end='left-3'
							startAnchor='left'
							endAnchor='top'
							color='#525150'
							strokeWidth={1}
							dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<Xarrow
							start='top-3'
							end='right-3'
							startAnchor='right'
							endAnchor='top'
							color='#525150'
							strokeWidth={1}
							dashness={{ strokeLen: 2, nonStrokeLen: 5 }}
							showHead={false}
							curveness={1}
							divContainerProps={{ className: 'hidden lg:block' }}
						/>
						<RocketColor3 className='absolute lg:static' />
						<Step3Top id='top-3' className='step-top static lg:absolute' />
						<Step3Left className='static lg:absolute' id='left-3' />
						<Step3Left2 className='static lg:absolute' />
						<Step3Right className='static lg:absolute' id='right-3' />
					</div>

					<div className='panel flex flex-col items-center gap-8 bg-black lg:justify-center'>
						<div className='overall-steps static right-[3%] top-1/2 flex flex-col gap-5 lg:absolute lg:-translate-y-1/2'>
							<Step1Top />
							<Step2Top />
							<Step3Top />
						</div>
						<RocketColor4 />
					</div>
				</div>
			</section>

			<div className='mx-auto mt-8 max-w-7xl sm:mx-auto sm:mt-16 sm:px-10 lg:mt-32 desktop:mt-64'>
				<h1 className='text-[56px] text-[#F0F0F0]'>Start Building</h1>
				<p>Use one of our starter templates to get your project off the ground in minutes.</p>

				<Link href='/starters'>
					<p className='my-5 flex items-center gap-1 text-[#F0F0F0]'>
						See all
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3.82918 9.13587L12.8496 9.13587L8.77168 5.05797L9.99857 3.83105L16.168 10.0005L9.99857 16.1698L8.77168 14.9429L12.8496 10.865L3.82918 10.865L3.82918 9.13587Z'
								fill='white'
							/>
						</svg>{' '}
					</p>{' '}
				</Link>

				<div className='col-span-3 grid grid-cols-1 gap-6 px-[28px] md:grid-cols-2 md:px-0 lg:grid-cols-3'>
					<TemplateCard
						logo='https://avatars.githubusercontent.com/u/54710151?v=4'
						template={{
							key: 'actix-web/hello-world',
							title: 'Actix Web',
							description: 'Powerful and fast web framework',
							path: 'actix-web/hello-world',
							use_cases: ['Web app'],
							tags: ['actix-web'],
							template: 'actix-web',
						}}
					/>
					<TemplateCard
						logo='https://avatars.githubusercontent.com/u/54710151?v=4'
						template={{
							key: 'actix-web/hello-world',
							title: 'Actix Web',
							description: 'Powerful and fast web framework',
							path: 'actix-web/hello-world',
							use_cases: ['Web app'],
							tags: ['actix-web'],
							template: 'actix-web',
						}}
					/>
					<TemplateCard
						logo='https://avatars.githubusercontent.com/u/54710151?v=4'
						template={{
							key: 'actix-web/hello-world',
							title: 'Actix Web',
							description: 'Powerful and fast web framework',
							path: 'actix-web/hello-world',
							use_cases: ['Web app'],
							tags: ['actix-web'],
							template: 'actix-web',
						}}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}

Home.getLayout = (children: ReactNode) => <Page disableFooter>{children}</Page>
