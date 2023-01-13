import { Project } from 'lib/shuttle'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export default function useProjects() {
	const { data, error, isLoading } = useSWR('/api/projects', fetcher, {
		onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
			// Don't retry on following cases
			if (retryCount >= 3) return
		},
	})

	return {
		projects: data as Project[],
		isLoading,
		error,
	}
}
