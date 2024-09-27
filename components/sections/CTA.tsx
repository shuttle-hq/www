import { Button } from 'components/elements'
import { trackEvent } from 'lib/posthog'

export default function CTA() {
	return (
		<div className='mt-8 border-t border-[#FFFFFF33] sm:mt-16 sm:px-10 lg:mt-32 desktop:mt-64'>
			<div className='group relative z-[1] overflow-hidden rounded-[2rem] bg-[#13292C] dark:bg-black'>
				<div className='flex flex-col items-center px-5 py-[100px] md:px-8 desktop:px-20 desktop:pb-40'>
					<h2 className='bg-clip-text text-center font-gradual text-4.5 font-bold leading-none text-[#C2C2C2] lg:text-[3.5rem] desktop:text-[4rem]'>
						Be a part of the next leap in developer experience
					</h2>
					<div className='mt-10 flex flex-wrap items-center gap-4 lg:mt-12 xl:mt-16'>
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
