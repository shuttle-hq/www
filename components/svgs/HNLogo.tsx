import { FC, SVGAttributes } from 'react'

const HackerNewsLogo: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			width={24}
			height={24}
			viewBox='0 0 524 524'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M32,32V480H480V32ZM281.67,282.83v84H235v-84l-77-140H213l46.32,97.54,44.33-97.54h52.73Z'
				fill='#D8D8D8'
			/>
		</svg>
	)
}

export default HackerNewsLogo
