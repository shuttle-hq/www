import { Button } from 'components/elements'
import { GithubLogo, Hamburger, Logo } from 'components/svgs'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'
import { useUser } from '@auth0/nextjs-auth0/client'

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), { ssr: false })

const Navigation = () => {
	const [open, setOpen] = useState(false)

	const { user } = useUser()

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
					'absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-[#E9E9E9] p-5 dark:bg-black sm:px-10 lg:static lg:ml-10 lg:flex lg:h-auto lg:items-center lg:overflow-y-visible lg:p-0',
					!open && 'hidden'
				)}
			>
				<div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/blog/tags/all'
						onClick={() => {
							setOpen(false)
						}}
					>
						Blog
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/pricing'
						onClick={() => {
							setOpen(false)
						}}
					>
						Pricing
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/docs'
						onClick={() => {
							setOpen(false)
						}}
					>
						Docs
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/beta'
						onClick={() => {
							setOpen(false)
						}}
					>
						Beta
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/shuttle-heroes'
						onClick={() => {
							setOpen(false)
						}}
					>
						Shuttle Heroes
					</Link>
				</div>
				<div className='mt-10 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:gap-5'>
					<div className='mt-10 flex flex-wrap items-center gap-5 lg:mt-0'>
						<Button variant='secondary' invertOnDark>
							Join Discord
						</Button>
						<Button variant='primary' invertOnDark href={user ? '/dashboard/' : '/login'}>
							{user ? (
								'Dashboard'
							) : (
								<>
									<GithubLogo />
									Log in
								</>
							)}
						</Button>
					</div>
					<ThemeSwitcher className='mt-5 lg:-order-1 lg:mt-0' />
				</div>
			</div>

			<button className='ml-auto dark:text-[#D8D8D8] lg:hidden' onClick={() => setOpen((open) => !open)}>
				<Hamburger />
			</button>
		</nav>
	)
}

export default Navigation
