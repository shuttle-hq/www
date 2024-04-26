import React from 'react'

export default function Step2Left({ className, id }: { className?: string; id?: string }) {
	return (
		<div
			id={id}
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-7 ${className} left-[3%] top-[20%] w-full sm:w-[500px]`}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<h1 className='text-2xl leading-none'>Infrastructure from Code</h1>
			</div>

			<p>
				With Shuttle you can take any Rust service code and have it ready for deployment by adding a single
				annotation to you main function. You can then add more annotations that control cloud resources.
			</p>
		</div>
	)
}