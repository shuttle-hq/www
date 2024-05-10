import { useState } from 'react'
import CheckmarkIcon from './CheckmarkIcon'
import CopyIcon from './CopyIcon'

export default function Copy({
	text,
	obfuscatedText,
	className,
	afterCopy,
}: {
	text: string
	obfuscatedText?: string
	className?: string
	afterCopy?: () => void
}) {
	const [isCopied, setIsCopied] = useState(false)

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text)
		setIsCopied(true)
		if (afterCopy) {
			afterCopy()
		}
	}

	return (
		<code className={className} onClick={() => handleCopy(text)}>
			$ {obfuscatedText ?? text}
			{isCopied ? <CheckmarkIcon /> : <CopyIcon />}
		</code>
	)
}
