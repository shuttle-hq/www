import { DeploymentInfo } from 'lib/shuttle'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export default function useDeploymentInfo(projectName: string) {
	const { data, error, isLoading } = useSWR(`/api/projects/${projectName}`, fetcher, {
		onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
			// Don't retry on following cases
			if (error.status === 503 || error.status === 404) return
			if (retryCount >= 3) return
		},
	})

	let errorText = ''
	if (error) {
		switch (error.response.status) {
			case 404:
				errorText = 'No deployments is found for this project.'
				break

			case 503:
				errorText = 'Project is not ready.'
				break

			default:
				errorText = "Coudn't retrieve deployment data."
				break
		}
	}

	return {
		deploymentInfo: data as DeploymentInfo,
		isLoading,
		error,
		errorText,
	}
}
