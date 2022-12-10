import { F5, Github, Hulu, Meta, MongoDB, Stellar, Uber, UiPath } from 'components/svgs'
import Link from 'next/link'

const LogosReferences = () => {
	return (
		<div className='mt-28 text-center'>
			<h2 className='text-[#525151] dark:text-[#7A7A7A]'>Loved by Engineers at</h2>
			<div className='mt-5 border-y border-black/10 dark:border-[#191919]'>
				<div className='mx-auto grid w-full max-w-7xl grid-cols-4 items-center justify-items-center gap-12 p-6 text-white sm:p-8 lg:grid-cols-8'>
					<Link href='https://uber.com'>
						<Uber className='text-[#13292C] dark:text-white' />
					</Link>
					<Link href='https://uber.com'>
						<Github className='text-[#13292C] dark:text-white' />
					</Link>
					<Link href='https://uber.com'>
						<UiPath className='text-[#13292C] dark:text-white' />
					</Link>
					<Link href='https://uber.com'>
						<Meta className='text-[#13292C] dark:text-white' />
					</Link>
					<Link href='https://uber.com'>
						<Stellar className='text-[#13292C] dark:text-white' />
					</Link>
					<Link href='https://uber.com'>
						<MongoDB className='text-[#13292C] dark:text-white' />
					</Link>
					<Link href='https://uber.com'>
						<Hulu className='text-[#13292C] dark:text-white' />
					</Link>
					<Link href='https://uber.com'>
						<F5 className='text-[#13292C] dark:text-white' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LogosReferences
