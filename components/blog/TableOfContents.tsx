import { MDXRemote } from 'next-mdx-remote'

interface HeaderProps {
	slug: string
	content: string
	lvl: number
}

const TOCHeader = ({ slug, content, lvl }: HeaderProps) => {
	const margin = `${lvl - 1}rem`
	return (
		<li
			className={`block text-xl text-slate-300 transition duration-150 ease-in-out hover:translate-x-2 hover:text-white`}
			style={{ marginLeft: margin }}
		>
			<a href={`#${slug}`}>- {content}</a>
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
