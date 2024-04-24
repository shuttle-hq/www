export default function Step1Right({ className }: { className?: string }) {
	return (
		<div
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-4 ${className} absolute right-[170px] top-[260px] w-full sm:w-[500px]`}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<h1 className='text-2xl leading-none'>A Free Tier for Exploring</h1>
			</div>

			<p>
				Experience the magic with our Community tier - have up to 3 projects, enough CPU & RAM to get
				started, access to databases and more
			</p>
		</div>
	)
}
