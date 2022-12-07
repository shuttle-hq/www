import { F5, Github, Hulu, Meta, MongoDB, Stellar, Uber, UiPath } from 'components/svgs'
import Link from 'next/link'

const LogosReferences = () => {
	return (
		<div className='mt-28 text-center'>
			<h2>Loved by Engineers at</h2>
			<div className='mt-5 border-y border-[#191919]'>
				<div className='mx-auto grid w-full max-w-7xl grid-cols-4 items-center justify-items-center gap-12 p-6 text-white sm:p-8 lg:grid-cols-8'>
					<Link href='https://uber.com'>
						<Uber />
					</Link>
					<Link href='https://uber.com'>
						<Github />
					</Link>
					<Link href='https://uber.com'>
						<UiPath />
					</Link>
					<Link href='https://uber.com'>
						<Meta />
					</Link>
					<Link href='https://uber.com'>
						<Stellar />
					</Link>
					<Link href='https://uber.com'>
						<MongoDB />
					</Link>
					<Link href='https://uber.com'>
						<Hulu />
					</Link>
					<Link href='https://uber.com'>
						<F5 />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LogosReferences
