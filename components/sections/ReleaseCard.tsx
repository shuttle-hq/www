import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

import PlusIcon from 'components/svgs/PlusIcon'
import MinusIcon from 'components/svgs/MinusIcon'
import { Release } from 'pages/releases'
import { Markdown } from 'components/elements/Markdown'

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
						<h1 className='text-[28px] text-head'>{release.name || release.tag_name}</h1>
						<p className='text-xs text-body'>
							{new Date(release.published_at).toLocaleDateString('en-UK', {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							})}
						</p>
					</div>
					{height === SrhunkHeight ? <PlusIcon /> : <MinusIcon />}
				</div>

				<Markdown body={release.body} />
			</div>
		</AnimateHeight>
	)
}
