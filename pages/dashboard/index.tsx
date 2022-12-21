import { useUser } from '@auth0/nextjs-auth0/client'
import { DashboardPage } from 'components/templates'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { FeaturedStarters } from 'components/sections'

export default function DashboardHome() {
	return (
		<>
			<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
				<header className='max-w-2xl'>
					<h1 className='w-fit font-gradual text-5xl font-bold dark:text-[#C2C2C2] lg:text-6.5'>
						Start using shuttle
					</h1>
					<p className='mt-4 sm:text-xl lg:text-2xl'>Follow these few steps and you’re ready to go</p>
				</header>
				<div className='mt-16 grid grid-cols-11 gap-y-5'>
					<div className='col-span-3 col-start-1 row-span-1 h-[171px] w-full bg-[red]'></div>
					<div className='col-span-3 col-start-3 row-start-2 h-[171px] w-full bg-[red]'></div>
					<div className='col-span-3 col-start-5 row-start-3 h-[171px] w-full bg-[red]'></div>
					<div className='col-span-3 col-start-7 row-start-4 h-[171px] w-full bg-[red]'></div>
					<div className='col-span-3 col-start-9 row-start-5 h-[171px] w-full bg-[red]'></div>
				</div>
			</div>
			<FeaturedStarters />
		</>
	)
}

DashboardHome.getLayout = (children: ReactNode) => <DashboardPage>{children}</DashboardPage>
