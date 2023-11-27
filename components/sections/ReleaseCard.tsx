import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import PlusIcon from 'components/svgs/PlusIcon'
import MinusIcon from 'components/svgs/MinusIcon'
import { Release } from 'pages/releases'

export default function ReleaseCard({ release }: { release: Release }) {
	const [height, setHeight] = useState<'auto' | number>('auto')

	const releaseId = release.id.toString()
	const SrhunkHeight = 60

	return (
		<AnimateHeight id={releaseId} duration={300} height={height}>
			<div className='border-t border-[#282828] pt-3'>
				<div
					aria-expanded={height !== SrhunkHeight}
					aria-controls={releaseId}
					className='flex cursor-pointer items-center justify-between'
					onClick={() => setHeight(height === SrhunkHeight ? 'auto' : SrhunkHeight)}
				>
					<div className='flex items-baseline gap-2'>
						<h1 className='text-[28px] text-[#EDEDED]'>{release.name || release.tag_name}</h1>
						<p className='text-xs text-[#7B7B7B]'>
							{new Date(release.published_at).toLocaleDateString('en-UK', {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							})}
						</p>
					</div>
					{height === SrhunkHeight ? <PlusIcon /> : <MinusIcon />}
				</div>

				<ReactMarkdown
					components={{
						h1: ({ children }) => <h1 className='mb-3 text-sm text-[#7B7B7B]'>{children}</h1>,
						h2: ({ children }) => <h2 className='mb-2 text-xl text-[#EDEDED]'>{children}</h2>,
						p: ({ children }) => <p className='mb-8 text-sm text-[#7B7B7B]'>{children}</p>,
						li: ({ children }) => (
							<li className='mb-1 ml-4 list-disc text-sm text-[#7B7B7B]'>{children}</li>
						),
						code: ({ children }) => (
							<code className='text-code mx-[.15em] mb-1 text-sm text-[#A3A3A3]'>{children}</code>
						),
						pre: ({ children }) => (
							<pre className='mb-8 rounded-xl bg-[#121212] p-4 text-[#A3A3A3]'>{children}</pre>
						),
						ul: ({ children }) => <ul className='mb-8'>{children}</ul>,
						a: ({ children, href, target }) => (
							<a {...{ href, target }} className='text-link underline' target='_blank'>
								{children}
							</a>
						),
					}}
				>
					{release.body}
				</ReactMarkdown>
			</div>
		</AnimateHeight>
	)
}
