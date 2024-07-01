'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

import LaunchSystemStep1 from './LaunchSystemStep1'
import LaunchSystemStep2 from './LaunchSystemStep2'
import LaunchSystemStep3 from './LaunchSystemStep3'
import LaunchSystemStep4 from './LaunchSystemStep4'
import { useRef, useState } from 'react'
import Step1Top from '../Step1Top'
import Step1Left from '../Step1Left'
import Step1Right from '../Step1Right'
import Step1Bottom from '../Step1Bottom'
import RocketColor1 from '../RocketColor1'
import RocketColor2 from '../RocketColor2'
import RocketColor3 from '../RocketColor3'
import RocketColor4 from '../RocketColorFull'
import Step2Top from '../Step2Top'
import Step3Top from '../Step3Top'
import Step2Left from '../Step2Left'
import Step3Left from '../Step3Left'
import Step2Right from '../Step2Right'
import Step3Right from '../Step3Right'
import Step2Bottom from '../Step2Bottom'

export default function LaunchSystem() {
	const css = `
		@media (min-width: 1536px) {
			.launch-system {
				height: calc(100vh * 4);
			}
		}
	`

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref })
	const [scrollPosition, setScrollPosition] = useState(0)

	useMotionValueEvent(scrollYProgress, 'change', setScrollPosition)

	// Change opacity based on section
	const changeOpacity = (
		section: number,
		current: number,
		startOpacity: number,
		endOpacity: number,
		finishByPercent: number = 0
	) => {
		const normalized = current * 4 // (0-1), (1-2), (2-3) -> (0,1) for all

		if (normalized - section < 0) return startOpacity

		// Ease from start to end using cubic easing, taking into account when the opacity should be finished converting
		const eased = Math.min(
			1,
			Math.pow((normalized - section) / finishByPercent, 3) * (endOpacity - startOpacity) + startOpacity
		)

		if (startOpacity > endOpacity && eased < endOpacity) return endOpacity
		if (startOpacity < endOpacity && eased > endOpacity) return endOpacity

		return eased
	}

	console.log(scrollPosition)

	return (
		<>
			<style>{css}</style>
			<motion.div ref={ref} className='launch-system'>
				<motion.div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						scaleX: scrollYProgress,
						background: 'red',
						height: 30,
						zIndex: 100,
					}}
				/>
				<div className='top-0 pt-24 lg:pt-28 2xl:sticky'>
					<section className='relative z-50 mx-auto mb-[50px] w-full max-w-7xl px-5 sm:px-10'>
						<div className='flex flex-col items-center justify-center'>
							<h1 className='mb-5 text-5xl text-[#F0F0F0]'>Launch System</h1>

							<p className=''>Blast off in t-minus 3, 2, 1...</p>
						</div>

						<div></div>
					</section>
					<div className='relative mb-[200px] hidden 2xl:block'>
						<div
							className='sticky my-auto flex flex-col items-center gap-8 bg-black pt-20 lg:justify-center'
							style={{ maxHeight: '80vh', top: 'calc(50vh - 40vh)' }}
						>
							{/* SVG Connected Rectangle, full top half is dashed, full bottom half is solid */}
							<svg
								className='absolute bottom-0 -z-10 mb-[10%] h-4/5 w-4/5 transform'
								style={{
									opacity: changeOpacity(3, scrollPosition, 1, 0, 0.2),
								}}
							>
								<rect
									x='0'
									y='0'
									width='100%'
									height='50%'
									fill='black'
									stroke='#525150'
									strokeWidth='1'
									strokeDasharray='5'
								/>
								{/* Rect inside both of these rects to hide the top and bottom borders */}

								<rect
									x='0'
									y='50%'
									width='100%'
									height='50%'
									fill='black'
									stroke='#525150'
									strokeWidth='1'
									strokeDasharray='0'
								/>
								<rect x='1px' y='2' width='calc(100% - 2px)' height='99%' fill='black' />
							</svg>
							<div className='flex h-auto w-full flex-col items-center justify-between gap-8 lg:h-[80vh]'>
								<Step3Top
									id='top-3'
									className='absolute'
									style={{
										display: scrollPosition * 4 > 2.2 ? 'block' : 'none',
										opacity:
											scrollPosition * 4 > 3
												? changeOpacity(3, scrollPosition, 0.2, 0, 0.2)
												: scrollPosition * 4 > 2.5
												? changeOpacity(2, scrollPosition, 1, 0, 1.2)
												: changeOpacity(2, scrollPosition, 0, 1, 0.4),
									}}
								/>
								<Step2Top
									id='top-2'
									className='absolute'
									style={{
										display: scrollPosition * 4 > 1.2 ? 'block' : 'none',
										opacity:
											scrollPosition * 4 > 3
												? changeOpacity(3, scrollPosition, 0.2, 0, 0.2)
												: scrollPosition * 4 > 1.7
												? changeOpacity(1, scrollPosition, 1, 0.2, 1.2)
												: changeOpacity(1, scrollPosition, 0, 1, 0.4),
										right:
											scrollPosition * 4 > 1.5
												? `calc(50% + -40% * ${changeOpacity(
														1,
														scrollPosition,
														0,
														1,
														1.2
												  )})`
												: '50%',
										marginTop: `calc(-7.5% * ${changeOpacity(1, scrollPosition, 0, 1, 1.2)})`,
										transform: `translateX(50%) scale(${changeOpacity(
											1,
											scrollPosition,
											1,
											0.7,
											1.2
										)})`,
									}}
								/>
								<Step1Top
									id='top-1'
									className='absolute'
									style={{
										opacity:
											scrollPosition * 4 > 3
												? changeOpacity(3, scrollPosition, 0.2, 0, 0.2)
												: changeOpacity(0, scrollPosition, 1, 0.2, 1.2),
										left: `calc(50% + -40% * ${changeOpacity(0, scrollPosition, 0, 1, 1.2)})`,
										marginTop: `calc(-7.5% * ${changeOpacity(0, scrollPosition, 0, 1, 1.2)})`,
										transform: `translateX(-50%) scale(${changeOpacity(
											0,
											scrollPosition,
											1,
											0.7,
											1.2
										)})`,
									}}
								/>
								<div />

								<div
									className='absolute top-1/2 flex w-full -translate-y-1/2 transform flex-col items-center justify-between gap-8 pb-20 lg:flex-row'
									style={{
										opacity: changeOpacity(3, scrollPosition, 1, 0, 0.2),
									}}
								>
									<div className='relative left-[-10%] flex flex-col items-center justify-center'>
										<Step1Left
											id='left-2'
											className='absolute left-1/2'
											style={{ opacity: changeOpacity(0, scrollPosition, 1, 0, 1.2) }}
										/>
										<Step2Left
											id='left-3'
											className='absolute left-1/2'
											style={{
												opacity:
													scrollPosition * 4 > 2
														? changeOpacity(2, scrollPosition, 1, 0, 0.2)
														: changeOpacity(1, scrollPosition, 0, 1, 0.2),
											}}
										/>
										<Step3Left
											id='left-4'
											className='absolute left-1/2'
											style={{
												opacity:
													scrollPosition * 4 > 3
														? changeOpacity(3, scrollPosition, 1, 0, 0.2)
														: changeOpacity(2, scrollPosition, 0, 1, 0.2),
											}}
										/>
									</div>
									<div className='relative left-[-10%] flex flex-col items-center justify-center'>
										<Step1Right
											id='right-2'
											className='absolute left-1/2 -translate-x-1/2 transform'
											style={{ opacity: changeOpacity(0, scrollPosition, 1, 0, 1.2) }}
										/>
										<Step2Right
											id='right-3'
											className='absolute left-1/2 -translate-x-1/2 transform'
											style={{
												opacity:
													scrollPosition * 4 > 2
														? changeOpacity(2, scrollPosition, 1, 0, 0.2)
														: changeOpacity(1, scrollPosition, 0, 1, 0.2),
											}}
										/>
										<Step3Right
											id='right-4'
											className='absolute left-1/2 -translate-x-1/2 transform'
											style={{
												opacity:
													scrollPosition * 4 > 3
														? changeOpacity(3, scrollPosition, 1, 0, 0.2)
														: changeOpacity(2, scrollPosition, 0, 1, 0.2),
											}}
										/>
									</div>
								</div>
								<div
									className='absolute bottom-0 z-40'
									style={{ opacity: changeOpacity(3, scrollPosition, 1, 0, 0.2) }}
								>
									<Step1Bottom
										id='bottom-2'
										style={{ opacity: changeOpacity(0, scrollPosition, 1, 0, 1.2) }}
									/>
									<Step2Bottom
										id='bottom-3'
										style={{
											opacity:
												scrollPosition * 4 > 2
													? changeOpacity(2, scrollPosition, 1, 0, 0.2)
													: changeOpacity(1, scrollPosition, 0, 1, 0.2),
										}}
									/>
								</div>
							</div>
							{/* Since this is divided into three parts, 0 to 0.33, 0.33 to 0.66, 0.66 to 1, we can use the scrollPosition to determine which part we are in */}
							<RocketColor1 style={{ opacity: changeOpacity(0, scrollPosition, 1, 0, 1.2) }} />
							<RocketColor2
								style={{
									opacity: changeOpacity(1, scrollPosition, 0, 1, 0.2),
									display: scrollPosition * 4 > 2.2 ? 'none' : 'block',
								}}
							/>
							<RocketColor3
								style={{
									opacity:
										scrollPosition * 4 > 3
											? changeOpacity(3, scrollPosition, 1, 0, 0.2)
											: changeOpacity(2, scrollPosition, 0, 1, 0.2),
								}}
							/>
							<RocketColor4 style={{ opacity: changeOpacity(3, scrollPosition, 0, 1, 0.2) }} />
							<div
								className={`absolute flex-col gap-5 ${
									scrollPosition * 4 > 3 ? '2xl:flex' : 'hidden'
								}`}
								style={{
									opacity: changeOpacity(3, scrollPosition, 0, 1, 0.6),
									right: `calc(-20% + 20% * ${changeOpacity(3, scrollPosition, 0, 1, 0.6)})`,
								}}
							>
								<Step1Top />
								<Step2Top />
								<Step3Top />
							</div>
						</div>
					</div>
				</div>
				{/* <LaunchSystemStep4 /> */}
				<div className='2xl:hidden'>
					<LaunchSystemStep1 />
					<LaunchSystemStep2 />
					<LaunchSystemStep3 />
					<LaunchSystemStep4 />
				</div>

				{/* {currentSection === 1 && <LaunchSystemStep1 />}
			{currentSection === 2 && <LaunchSystemStep2 />}
			{currentSection === 3 && <LaunchSystemStep3 />}
			{currentSection === 4 && <LaunchSystemStep4 />} */}
			</motion.div>
		</>
	)
}
