import { Button } from 'components/elements'
import { trackEvent } from 'lib/posthog'
import Image from 'next/image'

interface CallToActionProps {
	subtext?: string
}

const CallToAction = ({ subtext }: CallToActionProps) => {
	const subtext_ =
		subtext ||
		'Join the movement and help revolutionize the world of backend development. Together, we can create the future!'
	return (
		<div className='mx-auto mt-8 max-w-7xl text-center sm:mx-auto sm:mt-16 sm:px-10 lg:mt-32 desktop:mt-64'>
			<div className='group relative z-[1] overflow-hidden rounded-[2rem] bg-[#13292C] dark:bg-black'>
				<span className='pointer-events-none'></span>
				<div className='px-5 py-10 md:px-8 desktop:px-20 desktop:pb-40'>
					<h2 className='text-gradient bg-clip-text font-gradual text-4.5 font-bold leading-none text-head lg:text-[3.5rem] desktop:text-[4rem]'>
						Build the Future of Backend Development with us
					</h2>
					<div className='mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-12 xl:mt-16'>
						<Button
							href='https://github.com/shuttle-hq/shuttle'
							variant='primary'
							className='px-6 py-3 sm:px-8 sm:py-3.5 sm:text-lg'
							onClick={() => {
								trackEvent('homepage_buildthefuture_github')
							}}
						>
							Github
						</Button>
						<Button
							href='https://discord.gg/shuttle'
							variant='secondary'
							className='px-6 py-3 sm:px-8 sm:py-3.5 sm:text-lg'
							onClick={() => {
								trackEvent('homepage_buildthefuture_discord')
							}}
						>
							Discord
						</Button>
						<Button
							href='https://twitter.com/shuttle_dev'
							variant='secondary'
							className='px-6 py-3 sm:px-8 sm:py-3.5 sm:text-lg'
							onClick={() => {
								trackEvent('homepage_buildthefuture_twitter')
							}}
						>
							Twitter
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CallToAction
