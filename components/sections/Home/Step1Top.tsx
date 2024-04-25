import Code from './Code'

export default function Step1Top({ className, id }: { className?: string; id?: string }) {
	return (
		<div
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-4 ${className} top-0 w-full sm:w-[500px]`}
			id={id}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<svg width='23' height='19' viewBox='0 0 23 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6.968 18.24C2.648 18.24 0.104 14.856 0.104 9.12C0.104 3.384 2.648 -1.43051e-06 6.968 -1.43051e-06C11.288 -1.43051e-06 13.856 3.384 13.856 9.12C13.856 14.856 11.288 18.24 6.968 18.24ZM6.968 15.6C9.152 15.6 10.424 13.176 10.424 9.12C10.424 5.064 9.152 2.64 6.968 2.64C4.808 2.64 3.512 5.064 3.512 9.12C3.512 13.176 4.808 15.6 6.968 15.6ZM19.0649 0.24H22.3769V18H19.0649V1.104H19.0169C19.0169 4.056 17.6969 5.784 15.4889 5.784V2.904C17.7449 2.904 19.0649 1.896 19.0649 0.24Z'
						fill='url(#paint0_linear_4133_4638)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4133_4638'
							x1='-2.59599'
							y1='24.5563'
							x2='130.395'
							y2='21.1721'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#FC540C' />
							<stop offset='0.619356' stop-color='#FFD76F' stop-opacity='0.72' />
							<stop offset='0.859375' stop-color='#38D4E9' />
						</linearGradient>
					</defs>
				</svg>

				<h1 className='text-2xl leading-none'>Install</h1>
			</div>
			<div className='rounded-xl bg-[linear-gradient(88.21deg,_#FC540C_-5.91%,_rgba(255,215,111,0.72)_301.47%,_#38D4E9_420.59%)] p-[1px]'>
				<Code
					className='flex cursor-pointer items-center gap-2 rounded-xl bg-black p-4 text-[13px]'
					text='curl -sSfL https://www.shuttle.rs/install | bash'
				/>
			</div>
		</div>
	)
}
