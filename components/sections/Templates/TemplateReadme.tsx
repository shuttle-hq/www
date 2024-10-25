import { Markdown } from 'components/elements/Markdown'

export default function TemplateReadme({ title, readme }: { title: string; readme: string }) {
	return (
		<div className='col-span-2 rounded-3xl border border-[#434343] p-8'>
			<h1 className='mb-5 text-[36px] font-bold leading-10 text-[#D8D8D8]'>{title}</h1>

			<Markdown body={readme} />
		</div>
	)
}
