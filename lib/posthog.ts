import posthog from "posthog-js";

const isDev = process.env.NODE_ENV === 'development';

function getEventName(event: string): string {
  return isDev ? `${event}-dev` : event;
}

export function trackEvent(event: string, properties?: Record<string, any>) {
  posthog.capture(getEventName(event), properties);

  trackEventServer(event, properties);
}

async function trackEventServer(event: string, properties?: Record<string, any>) {
  try {
    const distinctId = posthog.get_distinct_id();

    await fetch('/api/track-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: `${getEventName(event)}-server`,
        distinctId,
        properties
      })
    });
  } catch (error) {
    console.error('Failed to track server-side event:', error);
  }
}

export async function trackEventServerOnly(event: string, properties?: Record<string, any>) {
  try {
    const distinctId = posthog.get_distinct_id();

    await fetch('/api/track-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: getEventName(event),
        distinctId,
        properties
      })
    });
  } catch (error) {
    console.error('Failed to track server-side event:', error);
  }
}
