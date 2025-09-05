import posthog from "posthog-js";

const isDev = process.env.NODE_ENV === 'development';

function getEventName(event: string): string {
  return isDev ? `${event}-dev` : event;
}

export function trackEvent(event: string, properties?: Record<string, any>) {
  posthog.capture(getEventName(event), properties);
}