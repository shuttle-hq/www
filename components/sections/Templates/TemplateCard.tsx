import Image from 'next/image'
import Link from 'next/link'
import { StarterWithKey } from 'pages/templates'

export default function TemplateCard({ starter }: { starter: StarterWithKey }) {
	return (
		<Link href={`/templates/${starter.path}`}>
			<div className='overdlow-y-scroll flex h-[320px] flex-col items-start justify-between rounded-3xl border border-[#434343] bg-[#0F0F0F] p-6'>
				<div>
					<Image src='/images/templates/logo.png' alt='Template logo' width={55} height={37} />
					<h2 className='mb-1 mt-2 text-xl font-bold text-white'>{starter.title}</h2>
					<p className='mb-4'>{starter.description}</p>
					<div className='flex gap-2'>
						{starter.tags.map((tag) => (
							<span
								key={tag}
								className='rounded-xl border border-[#434343] px-3 py-1 text-sm text-white'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div className='rounded-xl bg-[linear-gradient(85.52deg,_#FC540C_-7.27%,_rgba(255,215,111,0.72)_108.87%)] p-[1px]'>
					<button className='flex items-baseline gap-1 rounded-xl bg-[#0F0F0F] px-6 py-2'>
						<span className='text-sm text-white'>Launch</span>{' '}
						<Image src='/images/templates/arrow.svg' width={10} height={10} alt='arrow' />
					</button>
				</div>
			</div>
		</Link>
	)
}
