export default function Step1Right({ className, id }: { className?: string; id: string }) {
	return (
		<div
			id={id}
			className='z-10 w-full rounded-[24px] border border-[#525150] bg-black p-4 sm:w-[500px] lg:w-[300px] 2xl:w-[500px] 2xl:p-7'
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<h1 className='text-xl leading-none 2xl:text-2xl'>A Free Tier for Exploring</h1>
			</div>

			<p className='text-sm 2xl:text-base'>
				Experience the magic with our Community tier - have up to 3 projects, enough CPU & RAM to get
				started, access to databases and more
			</p>
		</div>
	)
}
