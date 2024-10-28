import { CopyButton } from 'components/elements'

export default function TemplateInit({ path, template }: { path: string; template: string | null }) {
	const command = `shuttle init ${
		template ? `--template ${template}` : `--from shuttle-hq/shuttle-examples --subfolder ${path}`
	}`

	return (
		<div className='mb-3 flex w-full items-center justify-between rounded-xl bg-[#121212] text-xs text-head'>
			<pre
				style={{
					scrollbarColor: 'black transparent',
					scrollbarWidth: 'thin',
				}}
				className='overflow-x-scroll p-4'
			>
				{command}
			</pre>
			<CopyButton code={command} width={16} height={16} />
		</div>
	)
}
