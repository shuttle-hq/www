import { useUser } from '@auth0/nextjs-auth0/client'
import { DashboardPage } from 'components/templates'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'

export default function DashboardHome() {
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<h1 className='text-4xl font-bold'>Dashboard</h1>
			<p className='mt-4 text-center'>
				This is the dashboard. You can only see this page if you are signed in.
			</p>
		</div>
	)
}

DashboardHome.getLayout = (children: ReactNode) => <DashboardPage>{children}</DashboardPage>
