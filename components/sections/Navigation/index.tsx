import clsx from 'clsx'
import { Button, LoginButton } from 'components/elements'
import { GithubLogo, Hamburger, Logo } from 'components/svgs'
import { trackEvent } from 'lib/posthog'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import { DISCORD_URL } from '../../../lib/constants'

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
				<Logo className='dark:text-head' />
			</Link>
			<div
				className={clsx(
					'absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-[#E9E9E9] p-5 dark:bg-black sm:px-10 xl:static xl:ml-10 xl:flex xl:h-auto xl:items-center xl:overflow-y-visible xl:bg-transparent xl:p-0 xl:dark:bg-transparent',
					!open && 'hidden'
				)}
			>
				<div className='flex flex-col gap-4 xl:flex-row xl:gap-8'>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/blog/tags/all'
						onClick={({ ctrlKey, metaKey }) => {
							trackEvent('homepage_mainnav_blog')
							setOpen(ctrlKey || metaKey)
						}}
					>
						Blog
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/pricing'
						onClick={({ ctrlKey, metaKey }) => {
							trackEvent('homepage_mainnav_pricing')
							setOpen(ctrlKey || metaKey)
						}}
					>
						Pricing
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='https://docs.shuttle.rs'
						onClick={({ ctrlKey, metaKey }) => {
							trackEvent('homepage_mainnav_docs')
							setOpen(ctrlKey || metaKey)
						}}
					>
						Docs
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/beta'
						onClick={({ ctrlKey, metaKey }) => {
							trackEvent('homepage_mainnav_beta')
							setOpen(ctrlKey || metaKey)
						}}
					>
						Beta
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/shuttle-heroes'
						onClick={({ ctrlKey, metaKey }) => {
							trackEvent('homepage_mainnav_heroes')
							setOpen(ctrlKey || metaKey)
						}}
					>
						Shuttle Heroes
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/ai'
						onClick={({ ctrlKey, metaKey }) => {
							trackEvent('homepage_mainnav_ai')
							setOpen(ctrlKey || metaKey)
						}}
					>
						Shuttle AI
					</Link>
					<Link
						className='nav-link-shadow transition-all dark:hover:text-white'
						href='/launchpad'
						onClick={({ ctrlKey, metaKey }) => {
							trackEvent('homepage_mainnav_launchpad')
							setOpen(ctrlKey || metaKey)
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

			<button className='ml-auto dark:text-head xl:hidden' onClick={() => setOpen((open) => !open)}>
				<Hamburger />
			</button>
		</nav>
	)
}

export default Navigation
