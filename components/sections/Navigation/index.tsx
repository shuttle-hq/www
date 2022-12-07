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
			<a href='#'>
				<Logo />
			</a>
			<div
				className={clsx(
					'absolute left-0 top-[4.375rem] z-10 h-[calc(100vh-4.375rem)] w-full overflow-y-auto p-5 dark:bg-black sm:px-10 lg:static lg:ml-10 lg:flex lg:h-auto lg:items-center lg:overflow-y-visible lg:p-0',
					!open && 'hidden'
				)}
			>
				<div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
					<Link href='/blog'>Blog</Link>
					<Link href='/pricing'>Pricing</Link>
					<Link href='/docs'>Docs</Link>
					<Link href='/beta'>Beta</Link>
					<Link href='/shuttle-heros'>Shuttle Heroes</Link>
				</div>
				<div className='mt-10 lg:mt-0 lg:ml-auto lg:flex lg:items-center lg:gap-5'>
					<div className='mt-10 flex flex-wrap items-center gap-5 lg:mt-0'>
						<Button variant='secondary'>Join Discord</Button>
						<Button variant='primary' className=''>
							<GithubLogo />
							Log in
						</Button>
					</div>
					<ThemeSwitcher className='border-gradient-h group relative mt-5 flex gap-3 rounded-button p-3 after:rounded-[0.875rem] dark:hover:bg-black lg:-order-1 lg:mt-0' />
				</div>
			</div>

			<button className='ml-auto text-[#D8D8D8] lg:hidden' onClick={() => setOpen((open) => !open)}>
				<Hamburger />
			</button>
		</nav>
	)
}

export default Navigation
