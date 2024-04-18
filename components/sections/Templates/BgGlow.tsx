export default function BgGlow({ className }: { className?: string }) {
	return (
		<svg
			width='189'
			height='108'
			viewBox='0 0 189 108'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g filter='url(#filter0_f_4147_25789)'>
				<ellipse
					cx='94.5'
					cy='54'
					rx='64'
					ry='24'
					fill='url(#paint0_linear_4147_25789)'
					fill-opacity='0.4'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_4147_25789'
					x='0.5'
					y='0'
					width='188'
					height='108'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation='15' result='effect1_foregroundBlur_4147_25789' />
				</filter>
				<linearGradient
					id='paint0_linear_4147_25789'
					x1='11.0217'
					y1='86.7273'
					x2='211.423'
					y2='45.3445'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.22108' stop-color='#FF5C00' />
					<stop offset='1' stop-color='#00F0FF' />
				</linearGradient>
			</defs>
		</svg>
	)
}
