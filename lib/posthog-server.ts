import { PostHog } from 'posthog-node'

// Initialize the client once and reuse it
const posthogClient = new PostHog(
    process.env.NEXT_PUBLIC_POSTHOG_KEY!,  // Your PostHog API key
    {
        host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        flushAt: 1, // Number of events to queue before sending to PostHog
        flushInterval: 0 // Flush events immediately in production
    }
)

export function trackServerEvent(
    event: string,
    distinctId: string,
    properties?: Record<string, any>
) {
    posthogClient.capture({
        distinctId,
        event,
        properties
    })
}

// call this when your server is shutting down
export function shutdownPostHog() {
    posthogClient.shutdown()
} 