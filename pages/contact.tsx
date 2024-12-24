import { Button } from 'components/elements'
import { NextSeo } from 'next-seo'
import { FormEvent, MouseEvent, useState } from 'react'

type FormTargetOption = 'support@shuttle.rs' | 'hello@shuttle.rs'

export default function About() {
	const [isOpen, setIsOpen] = useState(false)
	const [target, setTarget] = useState<FormTargetOption>('support@shuttle.rs')
	const [name, setName] = useState<string>('')
	const [subject, setSubject] = useState<string>('')
	const [body, setBody] = useState<string>('')

	const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
		if (!name || !subject || !body) return

		e.preventDefault()

		window.location.href = `mailto:${target}?subject=${name} - ${subject}&body=${body}`
	}

	const options = [
		{ value: 'support@shuttle.rs', label: 'Support' },
		{ value: 'hello@shuttle.rs', label: 'General Inquiry' },
	]

	return (
		<main>
			<NextSeo
				title='Contact | Shuttle'
				description="Need to contact us? Fill out the form and we'll get back to you."
				openGraph={{
					images: [
						{
							url: 'https://www.shuttle.dev/images/og-image.png',
							width: 3516,
							height: 1432,
							alt: 'Shuttle.dev - Build Backends Fast',
						},
					],
				}}
			/>
			<section className='mx-auto mt-24 w-full max-w-2xl items-center px-5 sm:px-10 lg:mt-28'>
				<h2 className='text-gradient my-12 bg-clip-text text-center font-gradual text-[56px] font-bold leading-[150%] text-head'>
					Contact
				</h2>
				<form onSubmit={handleSubmit} className=' flex w-full flex-col gap-4 text-center'>
					<div className='relative cursor-pointer'>
						<svg
							className='absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fill-rule='evenodd'
								d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
								clip-rule='evenodd'
							/>
						</svg>
						<div
							className='relative h-[56px] w-full appearance-none rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-left text-xl font-normal text-head placeholder:text-head'
							onClick={() => setIsOpen(!isOpen)}
						>
							<div>
								{options.find((option) => option.value === target)?.label ??
									'Please select an option'}
							</div>
							{isOpen && (
								<div className='absolute left-0 top-[56px] z-10 w-full rounded-lg border border-slate-700 bg-black py-[15px]'>
									{options.map((option, index) => (
										<div
											key={index}
											className='flex h-[56px] cursor-pointer items-center px-[12px] text-xl font-normal text-head hover:bg-slate-900 hover:text-white'
											onClick={() => {
												setTarget(option.value as FormTargetOption)
												setIsOpen(false)
											}}
										>
											{option.label}
										</div>
									))}
								</div>
							)}
						</div>
					</div>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						name='name'
						placeholder='Full Name'
						className='h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-head outline-none placeholder:text-head'
						required
					/>
					<input
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						type='text'
						name='subject'
						placeholder='Subject'
						className='h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-head outline-none placeholder:text-head'
						required
					/>
					<textarea
						value={body}
						onChange={(e) => setBody(e.target.value)}
						name='body'
						placeholder='Message'
						className='w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-head outline-none placeholder:text-head'
						required
					/>
					<Button
						variant='primary'
						type='submit'
						onClick={handleSubmit}
						className='h-[56px] justify-center text-lg'
					>
						Submit
					</Button>
				</form>
			</section>
		</main>
	)
}
