import axios, { HttpStatusCode, Method } from 'axios'

export async function getApiKey(username: string): Promise<string> {
	const res = await fetch(`${process.env.SHUTTLE_API_BASE_URL}/users/${username}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.SHUTTLE_ADMIN_SECRET}`,
		},
	})

	if (res.ok) {
		const body = await res.json()
		return body['key']
	} else {
		console.log(res)
		throw new Error('could not get api key.')
	}
}

export type User = {
	name: string
	key: string
	projects: string[]
}

export type Project = {
	name: string
	state: string
}

export type Deployment = {
	id: string
	service_id: string
	state: string
	last_update: string
}

export type DeploymentInfo = {
	name: string
	deployments: Deployment[]
	resources: []
	secrets: []
} | null

export enum DeploymentState {
	Queued = 'queued',
	Building = 'building',
	Built = 'built',
	Loading = 'loading',
	Running = 'running',
	Completed = 'completed',
	Stopped = 'stopped',
	Crashed = 'crashed',
	Unknown = 'unknown',
}

export type Error = {
	status: HttpStatusCode
	error: string
}

export class Shuttle {
	private url(suffix: string): string {
		return `${process.env.SHUTTLE_API_BASE_URL}${suffix}`
	}

	private request(method: Method, path: string, apiKey?: string): Promise<Record<string, any>> {
		const SECRET = apiKey ? apiKey : process.env.SHUTTLE_ADMIN_SECRET
		// uncomment the next line to use test user key from the env
		// const SECRET = apiKey ? process.env.SHUTTLE_USER_SECRET : process.env.SHUTTLE_ADMIN_SECRET
		let req = {
			headers: {
				Authorization: `Bearer ${SECRET}`,
				'Content-Type': 'application/json',
			},
			method: method,
			url: this.url(path),
		}
		return axios
			.request(req)
			.then((res) => {
				return res.data
			})
			.catch((err) => {
				if (err.response) {
					return Promise.reject({
						status: err.response.status,
						...err.response.data,
					})
				} else {
					return Promise.reject(err)
				}
			})
	}

	async get_user(user: string): Promise<User> {
		return this.request('GET', `/users/${user}`).then((body) => {
			return body as User
		})
	}

	async create_user(user: string): Promise<User> {
		return this.request('POST', `/users/${user}`).then((body) => {
			return body as User
		})
	}

	async get_projects(apiKey: string): Promise<Project[]> {
		return this.request('GET', '/projects', apiKey).then((body) => body as Project[])
	}

	async get_project_deployments(projectName: string, apiKey: string): Promise<DeploymentInfo> {
		return this.request('GET', `/projects/${projectName}/services/${projectName}`, apiKey).then(
			(body) => body as DeploymentInfo
		)
	}
}

export default new Shuttle()
