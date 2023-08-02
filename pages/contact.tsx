import { FormEvent, MouseEvent, useState } from 'react'

type FormTargetOption = 'support@shuttle.rs' | 'hello@shuttle.rs'

export default function About() {
	const [target, setTarget] = useState<FormTargetOption>('support@shuttle.rs')
	const [name, setName] = useState<string>('')
	const [subject, setSubject] = useState<string>('')
	const [body, setBody] = useState<string>('')

	const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
		if (!name || !subject || !body) return

		e.preventDefault()

		window.location.href = `mailto:${target}?subject=${name} - ${subject}&body=${body}`
	}

	return (
		<main>
			<section className='mx-auto mt-24 w-full max-w-2xl items-center px-5 sm:px-10 lg:mt-28'>
				<h2 className='text-gradient my-12 bg-clip-text text-center font-gradual text-[56px] font-bold leading-[150%] text-[#C2C2C2]'>
					Contact
				</h2>
				<form onSubmit={handleSubmit} className=' flex w-full flex-col gap-4 text-center'>
					<select
						name='target'
						id='target'
						onChange={(e) => setTarget(e.target.value as FormTargetOption)}
						className='h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-[#D8D8D8] placeholder:text-[#D8D8D8]'
					>
						<option value='support@shuttle.rs'>Support</option>
						<option value='hello@shuttle.rs'>General Inquiry</option>
					</select>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						name='name'
						placeholder='Full Name'
						className='h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-[#D8D8D8] placeholder:text-[#D8D8D8]'
						required
					/>
					<input
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						type='text'
						name='subject'
						placeholder='Subject'
						className='h-[56px] w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-[#D8D8D8] placeholder:text-[#D8D8D8]'
						required
					/>
					<textarea
						value={body}
						onChange={(e) => setBody(e.target.value)}
						name='body'
						placeholder='Message'
						className='w-full rounded-xl border border-slate-700 bg-transparent px-[12px] py-[15px] text-xl font-normal text-[#D8D8D8] placeholder:text-[#D8D8D8]'
						required
					/>
					<button
						type='submit'
						onClick={handleSubmit}
						className='mt-4 h-[56px] w-full rounded-[14px] bg-[#D8D8D8] text-lg text-black sm:mt-0'
					>
						Submit
					</button>
				</form>
			</section>
		</main>
	)
}
