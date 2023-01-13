import { formatDate, getDeploymentColor } from 'lib/helpers'
import { Project } from 'lib/shuttle'
import useDeploymentInfo from './useDeploymentInfo'
import Spinner from '../../elements/Spinner'

const headerTexts = ['No.', 'Deployment ID', 'Status', 'Last Updated']

interface Props {
	readonly selectedProject: Project
}

export default function DeploymentTable({ selectedProject }: Props) {
	const { deploymentInfo, isLoading, error, errorText } = useDeploymentInfo(
		(selectedProject && selectedProject.name) || ''
	)

	if (isLoading)
		return (
			<div aria-label='loading'>
				<Spinner />
			</div>
		)

	if (error) return <p>{errorText}</p>

	return (
		<div className='w-full overflow-x-auto rounded-lg bg-gradient-to-r from-[#FC540C] to-[#C39348] p-1'>
			<table className='w-full border-collapse rounded-lg bg-[#e9e9e9] text-left shadow-lg shadow-yellow-100/10 dark:bg-black'>
				<thead>
					<tr>
						{headerTexts.map((text) => (
							<th
								key={text}
								scope='col'
								className='bg-gradient-to-r from-[#FC540C] to-[#C39348] bg-clip-text py-3 px-5 text-xl font-semibold tracking-wider text-transparent'
							>
								{text}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{deploymentInfo &&
						deploymentInfo.deployments.map((deployment, index) => {
							const backgroundColor =
								index % 2 === 0 ? 'dark:bg-white/10 bg-white/60' : 'bg-transparent'
							return (
								<tr key={deployment.id} className={backgroundColor}>
									<td className='py-3 px-5'>{index + 1}</td>
									<th scope='row' className='truncate py-3 px-5'>
										{deployment.id}
									</th>
									<td className='truncate py-3 px-5'>
										<span
											className='rounded-md p-1 text-sm'
											style={{
												color: `${getDeploymentColor(deployment.state)}`,
											}}
										>
											{deployment.state.toUpperCase()}
										</span>
									</td>
									<td className='truncate py-3 px-5'>{formatDate(deployment.last_update)}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}
