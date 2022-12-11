import { Button } from 'components/elements'
import { GithubLogo, Hamburger, Logo } from 'components/svgs'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

const Navigation = () => {
	const [open, setOpen] = useState(false)

	return (
		<nav className='mx-auto flex h-[5.5rem] max-w-[1344px] items-center px-5 sm:px-10'>
			<Link href='/'>
				<Logo className='dark:text-[#C2C2C2]' />
			</Link>
			<div
				className={clsx(
					'absolute left-0 top-[4.375rem] z-20 h-[calc(100vh-4.375rem)] w-full overflow-y-auto bg-white p-5 dark:bg-black sm:px-10 lg:static lg:ml-10 lg:flex lg:h-auto lg:items-center lg:overflow-y-visible lg:p-0',
					!open && 'hidden'
				)}
			>
				<div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
					<Link className='nav-link-shadow' href='/blog/all'>
						Blog
					</Link>
					<Link className='nav-link-shadow' href='/pricing'>
						Pricing
					</Link>
					<Link className='nav-link-shadow' href='/docs'>
						Docs
					</Link>
					<Link className='nav-link-shadow' href='/beta'>
						Beta
					</Link>
					<Link className='nav-link-shadow' href='/shuttle-heros'>
						Shuttle Heroes
					</Link>
				</div>
				<div className='mt-10 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:gap-5'>
					<div className='mt-10 flex flex-wrap items-center gap-5 lg:mt-0'>
						<Button variant='secondary' invertOnDark>
							Join Discord
						</Button>
						<Button variant='primary' invertOnDark>
							<GithubLogo />
							Log in
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
