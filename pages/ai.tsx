import { Hero, Info, Steps } from 'components/sections/ShuttleAI'
import { Page } from 'components/templates'
import { ReactNode } from 'react'
import Image from 'next/image'
import { Waitlist } from 'components/sections/ShuttleAI/Waitlist'

export default function ShuttleAIPage() {
	return (
		<div
			className='group relative flex-grow overflow-hidden bg-center bg-repeat'
			style={{ backgroundImage: "url('/images/pages/shuttle-ai/stars.png')" }}
		>
			<Image
				src='/images/pages/shuttle-ai/noise-group.png'
				alt=''
				width={1440}
				height={1023}
				className='absolute -top-[5.5rem] w-full mix-blend-overlay'
			/>
			<Hero />
			<Info />
			<Steps />
			<Waitlist
				cta='The fastest way to build and deploy in the cloud.'
				description='Even faster than deploying a "hello world". Sign up for the waitlist!'
			/>
		</div>
	)
}

ShuttleAIPage.getLayout = (children: ReactNode) => <Page disableFooterMargin>{children}</Page>
