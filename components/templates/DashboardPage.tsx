import { useUser } from '@auth0/nextjs-auth0/client'
import { DashboardNavigation, Footer } from 'components/sections'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

interface DashboardPageProps {
	children: ReactNode
	disableFooterMargin?: boolean
}

const DashboardPage: FC<DashboardPageProps> = ({ children, disableFooterMargin }) => {
	const { user } = useUser()
	const router = useRouter()

	useEffect(() => {
		if (!user) {
			router.push('/')
		}
	}, [user, router])

	return (
		<div className='flex min-h-screen flex-col'>
			<DashboardNavigation />
			<main className='flex flex-grow flex-col'>{children}</main>
			<Footer disableMargin={disableFooterMargin} />
		</div>
	)
}

export default DashboardPage
