import posthog from "posthog-js";

export function trackEvent(event: string, properties?: Record<string, any>) {
  posthog.capture(event, properties);
}
