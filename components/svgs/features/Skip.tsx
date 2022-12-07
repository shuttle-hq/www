import { FC, SVGAttributes } from 'react'

const Skip: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M21.3333 24H24V8H21.3333M8 24L19.3333 16L8 8V24Z' fill='#D8D8D8' />
		</svg>
	)
}

export default Skip
