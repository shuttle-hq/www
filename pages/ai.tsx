import { Hero, Info, Steps, Waitlist } from 'components/sections/ShuttleAI'
import { Page } from 'components/templates'
import { ReactNode } from 'react'
import Image from 'next/image'
import StartBuilding from 'components/sections/Home/StartBuilding'

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
			<StartBuilding />
			<Waitlist />
		</div>
	)
}

ShuttleAIPage.getLayout = (children: ReactNode) => <Page disableFooterMargin>{children}</Page>
