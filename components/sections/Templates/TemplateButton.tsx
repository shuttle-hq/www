import Link from 'next/link'
import BgGlow from './BgGlow'

export default function TemplateButton({ href, title }: { href: string; title: string }) {
	return (
		<div className='relative mb-3 w-full rounded-xl bg-[linear-gradient(46.52deg,_rgba(244,41,41,0.2)_-19.65%,_rgba(255,138,63,0.2)_27.61%,_rgba(229,233,56,0.2)_101.96%)] p-[1px]'>
			<button className='flex w-full items-baseline justify-center gap-1 rounded-xl bg-[#0F0F0F] px-6 py-2'>
				<Link href={href} target='_blank'>
					<span className='text-sm text-white'>{title}</span>
				</Link>
			</button>
			<BgGlow className='absolute -top-8 left-1 -z-10 w-full' />
		</div>
	)
}
