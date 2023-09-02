import clsx from 'clsx'
import { CopyButton } from 'components/elements'
import { useMemo } from 'react'

export const Pre = ({ children, ...props }: any) => {
	let line = 1

	const code = useMemo(() => {
		return [children.props.children]
			.flat()
			.flatMap((child) => {
				if (typeof child !== 'string') {
					return child.props.children
				} else {
					return child
				}
			})
			.join('')
	}, [children])

	return (
		<div className={clsx('relative')}>
			<CopyButton code={code} className='absolute right-2 top-2 inline-flex items-center' />
			<pre
				{...props}
				className={clsx(
					'!border !border-black/10 !bg-white !pr-16 !text-sm text-[#525151] dark:!border-white/10 dark:!bg-black dark:text-[#7A7A7A] [&>*]:!bg-white dark:[&>*]:!bg-black',
					props.className ?? 'language-'
				)}
			>
				{{
					...children,
					props: {
						...children.props,
						className: children.props.className ?? 'language-',
						children: [
							...[children.props.children].flat().flatMap((child) => {
								if (typeof child === 'string') {
									const [head, ...tail] = child.split('\n')
									return [
										head,
										...tail.flatMap((child) => {
											line++

											return ['\n', child]
										}),
									]
								}

								// This is a hack to prevent toml tables from being interpreted as HTML tables

								// Before this fix:
								// [
								//   dependencies
								// ]

								// After this fix:
								// [dependencies]
								if (
									props.className === 'language-toml' &&
									child.props.className === 'token table class-name'
								) {
									return {
										...child,
										props: {
											...child.props,
											className: 'token class-name',
										},
									}
								}

								return child
							}),
						],
					},
				}}
			</pre>
		</div>
	)
}
