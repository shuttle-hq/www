import { trackServerEvent } from 'lib/posthog-server'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { event, properties, distinctId } = req.body

    if (!event || !distinctId) {
        return res.status(400).json({ error: 'Missing required parameters' })
    }

    try {
        // Add additional server-side properties
        const enrichedProperties = {
            ...properties,
            // Add sensitive or server-side only properties
            serverTimestamp: new Date().toISOString()
        }

        trackServerEvent(event, distinctId, enrichedProperties)
        res.status(200).json({ success: true })
    } catch (error) {
        console.error('Error tracking event:', error)
        res.status(500).json({ error: 'Failed to track event' })
    }
} 