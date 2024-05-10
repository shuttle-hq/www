import Code from './Code'

export default function Step2Top({ className, id }: { className?: string; id?: string }) {
	return (
		<div
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-4 ${className} top-0 w-full sm:w-[500px]`}
			id={id}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<svg width='29' height='19' viewBox='0 0 29 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6.968 18.24C2.648 18.24 0.104 14.856 0.104 9.12C0.104 3.384 2.648 -1.43051e-06 6.968 -1.43051e-06C11.288 -1.43051e-06 13.856 3.384 13.856 9.12C13.856 14.856 11.288 18.24 6.968 18.24ZM6.968 15.6C9.152 15.6 10.424 13.176 10.424 9.12C10.424 5.064 9.152 2.64 6.968 2.64C4.808 2.64 3.512 5.064 3.512 9.12C3.512 13.176 4.808 15.6 6.968 15.6ZM16.7369 15.384V15.432H28.8809V18H15.8489V15.552C21.5369 13.56 24.8729 10.008 24.8729 5.904C24.8729 3.888 23.8649 2.64 22.2089 2.64C20.4809 2.64 19.3769 4.104 19.2329 6.528H16.0409C16.3049 2.424 18.6089 -1.43051e-06 22.3049 -1.43051e-06C26.1689 -1.43051e-06 28.4489 2.232 28.4489 6C28.4489 11.112 24.1049 14.568 16.7369 15.384Z'
						fill='url(#paint0_linear_4133_4606)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4133_4606'
							x1='-51'
							y1='35'
							x2='90.2928'
							y2='26.5786'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#FC540C' />
							<stop offset='0.431599' stop-color='#FFD76F' stop-opacity='0.72' />
							<stop offset='0.859375' stop-color='#38D4E9' />
						</linearGradient>
					</defs>
				</svg>

				<h1 className='text-2xl leading-none'>Initialise</h1>
			</div>
			<div className='rounded-xl bg-[linear-gradient(86.48deg,_#FC540C_-153.75%,_rgba(255,215,111,0.72)_32.22%,_#38D4E9_216.54%)] p-[1px]'>
				<Code
					className='flex w-full cursor-pointer items-center gap-2 rounded-xl bg-black p-4 text-[13px]'
					text='cargo shuttle init'
				/>
			</div>
		</div>
	)
}
