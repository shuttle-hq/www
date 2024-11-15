import { MDXRemote } from 'next-mdx-remote'

interface HeaderProps {
	slug: string
	content: string
	lvl: number
}

function get_margin(lvl: number): number {
	if (lvl >= 1 && lvl <= 6) {
		return lvl * 4
	} else {
		throw new Error(`Margin level is invalid: ${lvl}`)
	}
}

const TOCHeader = ({ slug, content, lvl }: HeaderProps) => {
	const margin = get_margin(lvl)
	return (
		<li
			className={`pl-${margin} text-xl text-slate-300 transition duration-150 ease-in-out hover:translate-x-2 hover:text-white`}
		>
			<a href={`#${slug}`} className={`pl-${margin}`}>
				- {content}
			</a>
		</li>
	)
}

interface Props {
	toc: HeaderProps[]
}

export const TableOfContents = ({ toc }: Props) => {
	return (
		<div className='mb-12 mt-16 border-b-2 border-t-2 border-b-[#A2A2A2] border-t-[#A2A2A2] pb-8 pt-4'>
			<p className='pb-4 pt-4 text-2xl font-bold leading-10 lg:text-3xl'>Table of Contents</p>
			<ol>
				{toc.map((header) => (
					<TOCHeader key={header.slug} slug={header.slug} content={header.content} lvl={header.lvl} />
				))}
			</ol>
		</div>
	)
}
