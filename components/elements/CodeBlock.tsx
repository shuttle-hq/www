// Ignore typescript errors for now
// @ts-nocheck

import clsx from 'clsx'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust'
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'
import { useWindowSize } from 'react-use'
import CopyButton from './CopyButton'
import HeightMagic from './HeightMagic'

SyntaxHighlighter.registerLanguage('rust', rust)

cargo.displayName = 'cargo'

cargo.aliases = []

function cargo(Prism: any) {
	Prism.languages.cargo = {
		builtin: /\b(?:Packaging|Archiving|Compiling|Finished)\b/,
	}
}

SyntaxHighlighter.registerLanguage('cargo', cargo)

interface Props {
	readonly id?: string
	readonly language: string
	readonly code: string
	readonly showLineNumbers?: boolean
	readonly biggestAmountOfLines?: number
	readonly className?: string
	readonly copyBtn?: boolean
	readonly style?: React.CSSProperties
}

export default function CodeBlock({
	id,
	code,
	language,
	showLineNumbers,
	biggestAmountOfLines,
	className,
	copyBtn,
	style,
}: Props) {
	useWindowSize()

	console.log(code)

	return (
		<div
			className={clsx('relative -mt-4 rounded !bg-black p-4 pt-0 shadow-lg', className)}
			style={style}
			id={id}
		>
			{copyBtn && <CopyButton code={code} className='sticky right-2 top-2 inline-flex items-center' />}

			<HeightMagic>
				<SyntaxHighlighter
					className='!m-0 overflow-hidden !p-0 text-sm dark:!bg-black dark:[&>*]:!bg-black'
					language={language}
					style={oneDark}
					showLineNumbers={showLineNumbers}
					lineNumberStyle={{
						width: '3.25em',
						position: 'sticky',
						left: 0,
						background: 'black',
					}}
				>
					{code +
						Array.from({ length: biggestAmountOfLines - code.split('\n').length })
							.fill(0)
							.map((_, i) => '\n')
							.join('')}
				</SyntaxHighlighter>
			</HeightMagic>
		</div>
	)
}
