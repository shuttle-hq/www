import { useUser } from '@auth0/nextjs-auth0/client'
import { DashboardNavigation, Footer } from 'components/sections'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'
import Spinner from 'components/elements/Spinner'

interface DashboardPageProps {
	children: ReactNode
	disableFooterMargin?: boolean
}

const DashboardPage: FC<DashboardPageProps> = ({ children, disableFooterMargin }) => {
	const { user, isLoading } = useUser()
	const router = useRouter()

	useEffect(() => {
		if (!isLoading && !user) {
			router.push('/')
		}
	}, [user, isLoading])

	return (
		<div className='flex min-h-screen flex-col'>
			{isLoading || !user ? (
				<div className='flex h-[50vh] w-screen flex-col items-center justify-center'>
					<Spinner />
				</div>
			) : (
				<>
					<DashboardNavigation />
					<main className='flex flex-grow flex-col'>{children}</main>
					<Footer disableMargin={disableFooterMargin} />
				</>
			)}
		</div>
	)
}

export default DashboardPage
