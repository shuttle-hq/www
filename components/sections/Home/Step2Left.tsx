import React from 'react'

export default function Step2Left({
	className,
	id,
	style,
}: {
	className?: string
	id?: string
	style?: React.SVGAttributes<SVGSVGElement>['style']
}) {
	return (
		<div
			id={id}
			className={`z-10 w-full rounded-3xl border border-[#525150] p-4 backdrop-blur-sm sm:w-[500px] lg:w-[300px] 2xl:w-[500px] 2xl:p-7 ${className}`}
			style={style}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[#F0F0F0]'>
				<h1 className='text-xl leading-none 2xl:text-2xl'>Infrastructure from Code</h1>
			</div>

			<p className='text-sm 2xl:text-base'>
				With Shuttle you can take any Rust service code and have it ready for deployment by adding a single
				annotation to you main function. You can then add more annotations that control cloud resources.
			</p>
		</div>
	)
}
