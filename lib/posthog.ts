import posthog from 'posthog-js'

export type TrackingEvent =
	| 'pro-plan-intent'
	| 'community-plan-intent'
	| 'team-plan-intent'
	| 'api-key-copied'
	| 'contact-intent'

export type TrackingProperties = {
	domain: 'console' | 'www'
}

export function trackEvent(event: TrackingEvent, properties?: TrackingProperties) {
	posthog.capture(event, properties)
}
