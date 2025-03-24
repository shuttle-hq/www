import posthog from "posthog-js";

export function trackEvent(event: string, properties?: Record<string, any>) {
  posthog.capture(event, properties);
}

export function TrackUniqueUsers() {
  posthog.capture("page_view", {
    path: window.location.pathname,
    user: posthog.get_distinct_id(),
  });
}
