import { Footer, Navigation } from 'components/sections'
import { FC, ReactNode } from 'react'

interface PageProps {
	children: ReactNode
	disableFooterMargin?: boolean
}

const Page: FC<PageProps> = ({ children, disableFooterMargin }) => {
	return (
		<div className='flex min-h-screen flex-col'>
			<Navigation />
			<main className='flex flex-grow flex-col'>{children}</main>
			<Footer disableMargin={disableFooterMargin} />
		</div>
	)
}

export default Page
