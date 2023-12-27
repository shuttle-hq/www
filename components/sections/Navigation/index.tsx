import { Button, LoginButton } from 'components/elements'
import { GithubLogo, Hamburger, Logo } from 'components/svgs'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import clsx from 'clsx'
import { DISCORD_URL } from '../../../lib/constants'
import { trackEvent } from 'lib/posthog'

const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), { ssr: false })

const Navigation = () => {
	const [open, setOpen] = useState(false)

	useLayoutEffect(() => {
		function updateMenu() {
			const isMobileAndOpen = window.innerWidth < 1280 && open
			const isDesktopAndClosed = window.innerWidth >= 1280 && !open

			if (isMobileAndOpen || isDesktopAndClosed) return

			setOpen(false)
		}

		window.addEventListener('resize', updateMenu)

		return () => window.removeEventListener('resize', updateMenu)
	}, [open])

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
					'absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-[#E9E9E9] p-5 dark:bg-black sm:px-10 xl:static xl:ml-10 xl:flex xl:h-auto xl:items-center xl:overflow-y-visible xl:bg-transparent xl:p-0 xl:dark:bg-transparent',
					!open && 'hidden'
				)}
			>
				<div className='flex flex-col gap-4 xl:flex-row xl:gap-8'>
					<Link
						className='nav-link-shadow text-sky-300 transition-all'
						href='/cch'
						onClick={() => {
							trackEvent('homepage_mainnav_cch')
							setOpen(false)
						}}
					>
						CCH
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/blog/tags/all'
						onClick={() => {
							trackEvent('homepage_mainnav_blog')
							setOpen(false)
						}}
					>
						Blog
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/pricing'
						onClick={() => {
							trackEvent('homepage_mainnav_pricing')
							setOpen(false)
						}}
					>
						Pricing
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='https://docs.shuttle.rs'
						onClick={() => {
							trackEvent('homepage_mainnav_docs')
							setOpen(false)
						}}
					>
						Docs
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/beta'
						onClick={() => {
							trackEvent('homepage_mainnav_beta')
							setOpen(false)
						}}
					>
						Beta
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/shuttle-heroes'
						onClick={() => {
							trackEvent('homepage_mainnav_heroes')
							setOpen(false)
						}}
					>
						Shuttle Heroes
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/ai'
						onClick={() => {
							trackEvent('homepage_mainnav_ai')
							setOpen(false)
						}}
					>
						Shuttle AI
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/launchpad'
						onClick={() => {
							trackEvent('homepage_mainnav_launchpad')
							setOpen(false)
						}}
					>
						Launchpad
					</Link>
				</div>
				<div className='mt-10 xl:ml-auto xl:mt-0 xl:flex xl:items-center xl:gap-5'>
					<div className='mt-10 flex flex-wrap items-center gap-5 xl:mt-0'>
						<Button
							variant='secondary'
							invertOnDark
							href={DISCORD_URL}
							onClick={() => {
								trackEvent('homepage_mainnav_discord')
							}}
						>
							Join Discord
						</Button>
						<div
							onClick={() => {
								trackEvent('homepage_mainnav_login')
							}}
						>
							<LoginButton variant='primary' invertOnDark>
								<GithubLogo />
								Log in
							</LoginButton>
						</div>
					</div>
					<ThemeSwitcher className='mt-5 xl:-order-1 xl:mt-0' hidden />
				</div>
			</div>

			<button className='ml-auto dark:text-[#D8D8D8] xl:hidden' onClick={() => setOpen((open) => !open)}>
				<Hamburger />
			</button>
		</nav>
	)
}

export default Navigation
