export default function Step1Left({ className }: { className?: string }) {
	return (
		<div
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-7 ${className} absolute left-[170px] top-[260px] w-full sm:w-[500px]`}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[24px] text-[#F0F0F0]'>
				<h1 className='text-2xl leading-none'>Rust-First</h1>
			</div>

			<p>
				Build an app with your favourite Rust framework and deploy it immediately. We’ll take care of all
				the infrastructure.
			</p>
		</div>
	)
}
