import shuttle from 'lib/shuttle'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Error } from 'lib/shuttle'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async function handleProjects(req: NextApiRequest, res: NextApiResponse) {
	try {
		const session = await getSession(req, res)
		if (session) {
			const data = await shuttle.get_projects(session.user.api_key)
			return res.status(200).json(data)
		}
	} catch (error) {
		return res.status((error as Error).status || 400).json(error)
	}
})
