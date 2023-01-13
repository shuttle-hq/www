import { Project } from 'lib/shuttle'
import { ChangeEvent } from 'react'

interface Props {
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void
	projects: Project[]
	selectedProject: Project
}

export default function ProjectDropdown({ onChange, projects, selectedProject }: Props) {
	return (
		<>
			<label htmlFor='projects' className='sr-only'>
				Projects
			</label>
			<select
				name='projects'
				onChange={onChange}
				value={selectedProject.name}
				className='cursor-pointer rounded-lg bg-black/90 p-3 text-[#c2c2c2] outline-none outline-1 focus:outline-orange-400 dark:bg-[#e9e9e9] dark:text-black'
			>
				{projects.map(({ name, state }) => (
					<option value={name} key={name}>
						{name} ({state.toUpperCase()})
					</option>
				))}
			</select>
		</>
	)
}
