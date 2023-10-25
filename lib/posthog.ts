import posthog from 'posthog-js'

export type TrackingEvent = 'github_star_cta'

export type TrackingProperties = {
	domain: 'console' | 'www'
}

export function trackEvent(event: TrackingEvent, properties?: TrackingProperties) {
	posthog.capture(event, properties)
}
