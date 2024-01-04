import { Footer, Navigation } from 'components/sections'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

interface PageProps {
	children: ReactNode
	disableFooterMargin?: boolean
	background?: string
	disableFooter?: boolean
	disableHeader?: boolean
}

const Page: FC<PageProps> = ({ children, disableFooterMargin, background, disableFooter, disableHeader }) => {
	return (
		<div className='relative flex min-h-screen flex-col'>
			{background && (
				<Image src={background} alt='' width={1920} height={1080} className='absolute -z-10 w-full' />
			)}
			{!disableHeader && <Navigation />}
			<main className='flex flex-grow flex-col'>{children}</main>
			{!disableFooter && <Footer disableMargin={disableFooterMargin} />}
		</div>
	)
}

export default Page
