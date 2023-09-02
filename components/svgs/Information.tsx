import { FC, SVGAttributes } from 'react'

const Information: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M8 12.5V7' stroke='#61635E' />
			<path d='M8 5V6' stroke='#61635E' />
			<rect x='0.5' y='0.5' width='15' height='15' rx='7.5' stroke='white' stroke-opacity='0.25' />
		</svg>
	)
}

export default Information
