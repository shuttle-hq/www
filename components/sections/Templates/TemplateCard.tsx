import Image from 'next/image'
import Link from 'next/link'
import { TemplateWithKeyAndType } from 'pages/templates'
import LaunchBG from './LaunchBG'

export default function TemplateCard({ template, logo }: { template: TemplateWithKeyAndType; logo: string }) {
	return (
		<Link href={`/templates/${template.key}`}>
			<div className='flex h-[320px] flex-col items-start justify-between gap-2 rounded-3xl border border-[#434343] bg-[#0F0F0F] p-6'>
				<div>
					<Image src={logo} alt='Template logo' width={55} height={37} className='rounded-full' />
					<h2 className='mb-1 mt-2 text-xl font-bold text-white'>{template.title}</h2>
					<p className='mb-4 text-sm'>{template.description}</p>
					<div className='flex flex-wrap gap-2'>
						{template.tags?.slice(0, 4).map((tag) => (
							<span
								key={tag}
								className='rounded-xl border border-[#434343] px-3 py-1 text-xs text-white'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
				<div className='relative rounded-xl bg-[linear-gradient(85.52deg,_#FC540C_-7.27%,_rgba(255,215,111,0.72)_108.87%)] p-[1px]'>
					<button className='relative z-10 flex items-baseline gap-1 rounded-xl bg-[#0F0F0F] px-6 py-2'>
						<span className='text-sm text-white'>Launch</span>{' '}
						<Image src='/images/templates/arrow.svg' width={10} height={10} alt='arrow' />
					</button>
					<LaunchBG
						className='absolute -left-[10px] -top-7'
						width={180}
						height={80}
						rectWidth={180}
						rectHeight={80}
					/>
				</div>
			</div>
		</Link>
	)
}
