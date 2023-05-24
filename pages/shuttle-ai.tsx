import { Hero } from 'components/sections/ShuttleAI'
import { Waitlist } from 'components/sections/Launchpad'
import { Page } from 'components/templates'
import { ReactNode } from 'react'
import Image from 'next/image'

export default function ShuttleAIPage() {
	return (
		<div className='group relative flex-grow overflow-hidden'>
			<Image
				src='/images/pages/shuttle-ai/noise-group.png'
				alt=''
				width={1440}
				height={1023}
				className='absolute -top-[5.5rem] w-full mix-blend-overlay'
			/>
			<Image
				src='/images/pages/shuttle-ai/stars.png'
				alt=''
				width={1427}
				height={321}
				className='absolute -top-[5.5rem] w-full'
			/>
			<Hero />
			<Waitlist
				cta='The fastest way to go from an idea to production.'
				description='Sign up for the waitlist!'
			/>
		</div>
	)
}

ShuttleAIPage.getLayout = (children: ReactNode) => (
	<Page disableFooterMargin background='/images/pages/shuttle-ai/hero.png'>
		{children}
	</Page>
)
