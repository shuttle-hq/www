import { FC } from 'react'
import { Copy } from 'components/svgs'
import clsx from 'clsx'
import { useCopyToClipboard } from 'react-use'

interface CopyButtonProps {
	code: string
	className?: string
	width?: number
	height?: number
}

const CopyButton: FC<CopyButtonProps> = ({ code, className, width = 32, height = 32 }) => {
	const [_, copyToClipboard] = useCopyToClipboard()
	return (
		<button
			className={clsx(
				'rounded-xl border border-[#191919] border-transparent px-3 py-2 text-sm font-medium leading-4 shadow-sm transition hover:border-[#484848] dark:text-head dark:text-white dark:hover:bg-[#343434]',
				className
			)}
			onClick={() => {
				copyToClipboard(code)
			}}
		>
			<Copy width={width} height={height} />
		</button>
	)
}

export default CopyButton
