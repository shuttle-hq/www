import { Footer, Navigation } from 'components/sections'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface PageProps {
	children: ReactNode
	disableFooterMargin?: boolean
	background?: string
}

const Page: FC<PageProps> = ({ children, disableFooterMargin, background }) => {
	return (
		<div className='relative flex min-h-screen flex-col'>
			{background && (
				<Image src={background} alt='' width={1920} height={1080} className='absolute -z-10 w-full' />
			)}
			<Navigation />
			<main className='flex flex-grow flex-col'>{children}</main>
			<Footer disableMargin={disableFooterMargin} />
		</div>
	)
}

export default Page
