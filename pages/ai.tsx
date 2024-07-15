import { Hero, Info, Steps } from 'components/sections/ShuttleAI'
import { Page } from 'components/templates'
import { ReactNode } from 'react'
import Image from 'next/image'
import { Waitlist } from 'components/sections/ShuttleAI/Waitlist'
import { NextSeo } from 'next-seo'

export default function ShuttleAIPage() {
	return (
		<>
			<NextSeo
				title='Shuttle AI - Deploy Apps from Prompts | Cloud Development Tools'
				description='Build and deploy cloud applications effortlessly using Shuttle AI. Discover the power of single-prompt app deployment in our Rust-centric product.'
			/>
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

				<div className='relative mb-48 mt-16 flex w-full max-w-screen-xl justify-center rounded-xl border border-[#434343] py-16 lg:mx-auto'>
					<div className='absolute -top-20 left-1/2 top-0 h-20 w-max -translate-x-1/2 transform bg-white/20' />

<iframe width="560" height="315" src="https://www.youtube.com/embed/kfof_CB5VfI?si=QCNJTnerhDZ3j-j_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
			</div>
		</>
	)
}

ShuttleAIPage.getLayout = (children: ReactNode) => <Page disableFooterMargin>{children}</Page>
