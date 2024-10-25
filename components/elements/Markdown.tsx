import ReactMarkdown from 'react-markdown'
import remarkGfm4 from 'remark-gfm-4'

export function Markdown({ body }: { body: string }) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm4]}
			components={{
				h1: ({ children }) => <h1 className='mb-3 text-2xl text-head'>{children}</h1>,
				h2: ({ children }) => <h2 className='mb-2 text-xl text-head'>{children}</h2>,
				p: ({ children }) => <p className='mb-8 text-sm text-body'>{children}</p>,
				li: ({ children }) => <li className='mb-1 ml-4 list-disc text-sm text-body'>{children}</li>,
				code: ({ children }) => (
					<code className='text-code mx-[.15em] mb-1 text-sm text-head'>{children}</code>
				),
				pre: ({ children }) => (
					<pre
						style={{
							scrollbarColor: 'black transparent',
							scrollbarWidth: 'thin',
						}}
						className='mb-8 overflow-x-scroll rounded-xl bg-[#121212] p-4 text-head'
					>
						{children}
					</pre>
				),
				ul: ({ children }) => <ul className='mb-8'>{children}</ul>,
				a: ({ children, href, target }) => (
					<a {...{ href, target }} className='text-link underline' target='_blank'>
						{children}
					</a>
				),
			}}
		>
			{body}
		</ReactMarkdown>
	)
}
