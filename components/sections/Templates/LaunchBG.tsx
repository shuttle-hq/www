export default function LaunchBG({
	className,
	width = 346,
	height = 92,
	rectWidth = 280,
	rectHeight = 26,
}: {
	className?: string
	width?: number
	height?: number
	rectWidth?: number
	rectHeight?: number
}) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 346 92'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g filter='url(#filter0_f_4147_26418)'>
				<rect x='33' y='33' width={rectWidth} height={rectHeight} fill='url(#paint0_linear_4147_26418)' />
			</g>
			<defs>
				<filter
					id='filter0_f_4147_26418'
					x='0.200001'
					y='0.200001'
					width='345.6'
					height='91.6'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feGaussianBlur stdDeviation='16.4' result='effect1_foregroundBlur_4147_26418' />
				</filter>
				<linearGradient
					id='paint0_linear_4147_26418'
					x1='5.90323'
					y1='52.9063'
					x2='215.17'
					y2='-123.565'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#FC540C' />
					<stop offset='0.979319' stop-color='#FFD76F' stop-opacity='0.72' />
				</linearGradient>
			</defs>
		</svg>
	)
}
