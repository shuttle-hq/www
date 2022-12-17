import { FC, SVGAttributes } from 'react'

const LinkedInLogo: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_1_4321)'>
				<path
					d='M23.9943 24.0002V23.9992H24.0003V15.1972C24.0003 10.8912 23.0733 7.57422 18.0393 7.57422C15.6193 7.57422 13.9953 8.90222 13.3323 10.1612H13.2623V7.97622H8.48926V23.9992H13.4593V16.0652C13.4593 13.9762 13.8553 11.9562 16.4423 11.9562C18.9913 11.9562 19.0293 14.3402 19.0293 16.1992V24.0002H23.9943Z'
					fill='#D8D8D8'
				/>
				<path d='M0.395996 7.97705H5.372V24H0.395996V7.97705Z' fill='#D8D8D8' />
				<path
					d='M2.882 0C1.291 0 0 1.291 0 2.882C0 4.473 1.291 5.791 2.882 5.791C4.473 5.791 5.764 4.473 5.764 2.882C5.763 1.291 4.472 0 2.882 0V0Z'
					fill='#D8D8D8'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_4321'>
					<rect width={24} height={24} fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default LinkedInLogo
