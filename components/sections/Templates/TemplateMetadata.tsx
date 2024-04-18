import Image from 'next/image'

export default function TemplateMetadata({ use_cases, tags }: { use_cases: string[]; tags: string[] }) {
	return (
		<>
			<div className='mb-5 flex w-full justify-between'>
				<p className='text-[#7A7A7A]'>Type</p>

				<div className='flex gap-2'>
					<p>Starter</p>
				</div>
			</div>
			<hr className='mb-5 w-full border-[#434343] border-[0.5]' />

			<div className='mb-5 flex w-full justify-between'>
				<p className='text-[#7A7A7A]'>Use case</p>

				<div>
					<p>
						{use_cases.map((useCase) => (
							<span key={useCase}>{useCase} </span>
						))}
					</p>
				</div>
			</div>
			<hr className='mb-5 w-full border-[#434343] border-[0.5]' />

			<div className='mb-5 flex w-full justify-between'>
				<p className='text-[#7A7A7A]'>Author</p>

				<div className='flex gap-2'>
					<Image src='/images/logo.png' width={24} height={24} alt='Shuttle logo' />
					<p>Shuttle</p>
				</div>
			</div>
			<hr className='mb-5 w-full border-[#434343] border-[0.5]' />

			<div className='mb-5 flex w-full justify-between gap-4'>
				<span className='text-[#7A7A7A]'>Tags</span>
				<div className='flex flex-wrap gap-1'>
					{tags.map((tag) => (
						<span
							key={tag}
							className='rounded-xl border border-[#434343] px-3 py-1 text-sm text-white'
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</>
	)
}
