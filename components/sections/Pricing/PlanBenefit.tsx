export default function PlanBenefit({ text }: { text: string }) {
	return (
		<div className='w-full rounded-2xl bg-[linear-gradient(85.52deg,#FC540C_-7.27%,_rgba(255,215,111,0.72)_108.87%)] p-[1px]'>
			<div className='flex w-full items-center gap-2 rounded-2xl bg-black px-8 py-6'>
				<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M16 8V24' stroke='#E4792D' stroke-width='2.66667' />
					<path d='M24 16L8 16' stroke='#E4792D' stroke-width='2.66667' />
				</svg>

				<h1 className='font-gradual text-xl text-[#C8C8C8]'>{text}</h1>
			</div>
		</div>
	)
}
