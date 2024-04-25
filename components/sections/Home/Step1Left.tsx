export default function Step1Left({ className, id }: { className?: string; id: string }) {
	return (
		<div
			id={id}
			className={`z-40 rounded-[24px] border border-[#525150] bg-black p-7 ${className} top-[20%] w-full sm:w-[500px] lg:left-[3%] lg:right-[auto]`}
		>
			<div className='mb-3 flex items-baseline gap-[6px] text-[#F0F0F0]'>
				<h1 className='text-2xl leading-none'>Rust-First</h1>
			</div>

			<p>
				Build an app with your favourite Rust framework and deploy it immediately. We’ll take care of all
				the infrastructure.
			</p>
		</div>
	)
}
