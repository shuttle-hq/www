export default function Step1Left({
	className,
	id,
	style,
}: {
	className?: string
	id: string
	style?: React.SVGAttributes<SVGSVGElement>['style']
}) {
	return (
		<div
			id={id}
			className={`z-10 w-full rounded-[24px] border border-[#525150] bg-black p-4 sm:w-[500px] lg:w-[300px] 2xl:w-[500px] 2xl:p-7 ${className}`}
			style={style}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[#F0F0F0]'>
				<h1 className='text-xl leading-none 2xl:text-2xl'>Rust-First</h1>
			</div>

			<p className='text-sm 2xl:text-base'>
				Build an app with your favourite Rust framework and deploy it immediately. We’ll take care of all
				the infrastructure.
			</p>
		</div>
	)
}
