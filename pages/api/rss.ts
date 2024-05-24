import type { NextApiRequest, NextApiResponse } from 'next'
import { exportedPosts } from 'lib/blog/make-rss'

export default function rss_feed(_: NextApiRequest, res: NextApiResponse<string>) {
	res.status(200).send(exportedPosts)
}
