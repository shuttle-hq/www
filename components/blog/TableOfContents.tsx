import { MDXRemote } from 'next-mdx-remote'

interface HeaderProps {
	slug: string
	content: string
	lvl: number
}

function get_margin(lvl: number): number {
	if (lvl === 2) {
		return 4
	} else if (lvl === 3) {
		return 8
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
	console.log(toc)
	return (
		<div className='mb-16 mt-16 border-b-2 border-t-2 border-b-white pb-4 pt-4'>
			<p className='pb-4 pt-4 text-2xl font-bold leading-10 lg:text-3xl'>Table of Contents</p>
			<ol>
				{toc.map((header) => (
					<TOCHeader key={header.slug} slug={header.slug} content={header.content} lvl={header.lvl} />
				))}
			</ol>
		</div>
	)
}
