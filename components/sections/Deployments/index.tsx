import { ChangeEvent, useEffect, useState } from 'react'
import { Project } from 'lib/shuttle'
import useProjects from './useProjects'
import DeploymentTable from './DeploymentTable'
import ProjectDropdown from './ProjectDropdown'
import Spinner from '../../elements/Spinner'

export default function Deployments() {
	const { projects, isLoading, error } = useProjects()
	const [selectedProject, setSelectedProject] = useState<Project | null>(null)
	useEffect(() => {
		projects && projects.length > 0 && setSelectedProject(projects[0])
	}, [projects])

	const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newSelection = projects.find((project) => project.name === e.target.value) || null
		setSelectedProject(newSelection)
	}

	return (
		<section className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<div className='align-center mb-10 flex'>
				{error ? (
					<p>Error fetching data</p>
				) : isLoading ? (
					<div aria-label='loading'>
						<Spinner />
					</div>
				) : projects && projects.length > 0 && selectedProject ? (
					<ProjectDropdown
						projects={projects}
						onChange={handleSelectionChange}
						selectedProject={selectedProject}
					/>
				) : (
					<p className='text-xl'>No project found</p>
				)}
			</div>
			{selectedProject && <DeploymentTable selectedProject={selectedProject} />}
		</section>
	)
}
