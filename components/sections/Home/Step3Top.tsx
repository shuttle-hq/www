import Code from './Code'

export default function Step3Top({ className, id }: { className?: string; id?: string }) {
	return (
		<div
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-4 ${className} top-0 w-full sm:w-[500px]`}
			id={id}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<svg width='29' height='19' viewBox='0 0 29 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M6.968 18.24C2.648 18.24 0.104 14.856 0.104 9.12C0.104 3.384 2.648 -1.43051e-06 6.968 -1.43051e-06C11.288 -1.43051e-06 13.856 3.384 13.856 9.12C13.856 14.856 11.288 18.24 6.968 18.24ZM6.968 15.6C9.152 15.6 10.424 13.176 10.424 9.12C10.424 5.064 9.152 2.64 6.968 2.64C4.808 2.64 3.512 5.064 3.512 9.12C3.512 13.176 4.808 15.6 6.968 15.6ZM22.2329 7.8H22.4489C26.3609 7.8 28.6889 9.672 28.6889 12.84C28.6889 16.224 26.2409 18.24 22.0649 18.24C18.3689 18.24 16.0649 16.056 15.8009 12.336H18.9929C19.0889 14.4 20.2409 15.6 22.1129 15.6C24.1049 15.6 25.2569 14.592 25.2569 12.84C25.2569 11.088 24.0089 10.056 21.9209 10.056H21.4649V7.752C23.5289 7.56 24.7529 6.552 24.7529 5.04C24.7529 3.528 23.7689 2.64 22.0649 2.64C20.4329 2.64 19.4009 3.864 19.2809 5.928H16.1609C16.4249 2.208 18.7049 -1.43051e-06 22.3529 -1.43051e-06C26.0249 -1.43051e-06 28.1849 1.584 28.1849 3.96C28.1849 6.336 25.9769 7.752 22.2329 7.752V7.8Z'
						fill='url(#paint0_linear_4133_5311)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4133_5311'
							x1='-51'
							y1='35'
							x2='45.7873'
							y2='26.6042'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#FC540C' />
							<stop offset='0.431599' stop-color='#FFD76F' stop-opacity='0.72' />
							<stop offset='0.810504' stop-color='#38D4E9' />
						</linearGradient>
					</defs>
				</svg>

				<h1 className='text-2xl leading-none'>Deploy</h1>
			</div>
			<div className='rounded-xl bg-[linear-gradient(84.88deg,_#FC540C_-150.6%,_rgba(255,215,111,0.72)_-25.99%,_#38D4E9_83.4%)] p-[1px]'>
				<Code
					className='flex w-full cursor-pointer items-center gap-2 rounded-xl bg-black p-4 text-[13px]'
					text='cargo shuttle deploy'
				/>
			</div>
		</div>
	)
}
