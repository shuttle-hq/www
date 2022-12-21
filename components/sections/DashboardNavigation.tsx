import { Hamburger, Logo } from 'components/svgs'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

const DashboardNavigation = () => {
	const [open, setOpen] = useState(false)

	return (
		<nav className='mx-auto flex h-[5.5rem] w-full max-w-[1344px] items-center px-5 sm:px-10'>
			<Link
				href='/'
				onClick={() => {
					setOpen(false)
				}}
			>
				<Logo className='dark:text-[#C2C2C2]' />
			</Link>
			<div
				className={clsx(
					'absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-white p-5 dark:bg-black sm:px-10 lg:static lg:ml-10 lg:flex lg:h-auto lg:items-center lg:overflow-y-visible lg:p-0',
					!open && 'hidden'
				)}
			>
				<div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
					<Link
						className='nav-link-shadow transition-all hover:text-white'
						href='/blog/tags/all'
						onClick={() => {
							setOpen(false)
						}}
					>
						Docs
					</Link>
					<Link
						className='nav-link-shadow transition-all hover:text-white'
						href='/pricing'
						onClick={() => {
							setOpen(false)
						}}
					>
						Discord
					</Link>
				</div>
				<div className='mt-4 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:gap-5'>
					<div className='mt-4 flex flex-wrap items-center gap-5 lg:mt-0'>
						<Link
							className='nav-link-shadow transition-all hover:text-white'
							href='/api/auth/logout'
							onClick={() => {
								setOpen(false)
							}}
						>
							Logout
						</Link>
					</div>
				</div>
			</div>

			<button className='ml-auto dark:text-[#D8D8D8] lg:hidden' onClick={() => setOpen((open) => !open)}>
				<Hamburger />
			</button>
		</nav>
	)
}

export default DashboardNavigation
