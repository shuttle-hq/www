import React from 'react'

export default function Step3Left2({ className }: { className?: string }) {
	return (
		<div
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-7 ${className} bottom-[25%] left-[3%] w-full sm:w-[500px]`}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<h1 className='text-2xl leading-none'>Build fast, redeploy instantly</h1>
			</div>

			<p className='xl:text-md text-sm'>
				During deployment your code is packaged and sent to Shuttle where it is compiled and deployed.
				After a few seconds, your app is already running in the cloud.
			</p>
			<br />
			<p className='xl:text-md text-sm'>
				When iterating, Shuttle always uses the cache from previous builds to give you lightning-speed
				redeploys.
			</p>
		</div>
	)
}
