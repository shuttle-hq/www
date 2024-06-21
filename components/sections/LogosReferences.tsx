import { F5, Github, Hulu, Meta, MongoDB, Stellar, Uber, UiPath } from 'components/svgs'
import Link from 'next/link'

const LogosReferences = () => {
	return (
		<div className='mt-28 text-center'>
			<h2>Loved by Engineers at</h2>
			<div className='mt-5 border-y border-black/10 text-white dark:border-[#191919]'>
				<div className='mx-auto grid w-full max-w-7xl grid-cols-4 items-center justify-items-center gap-12 p-6 sm:p-8 lg:grid-cols-8'>
					<Link href='https://uber.com'>
						<Uber />
					</Link>
					<Link href='https://github.com/'>
						<Github />
					</Link>
					<Link href='https://www.uipath.com/'>
						<UiPath />
					</Link>
					<Link href='https://www.meta.com/'>
						<Meta />
					</Link>
					<Link href='https://stellar.org/'>
						<Stellar />
					</Link>
					<Link href='https://www.mongodb.com/'>
						<MongoDB />
					</Link>
					<Link href='https://www.hulu.com'>
						<Hulu />
					</Link>
					<Link href='https://www.f5.com/'>
						<F5 />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LogosReferences
