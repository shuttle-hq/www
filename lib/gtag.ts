import { NextRouter } from "next/router";
import { GA_MEASUREMENT_ID } from "./constants";
import { User } from "./shuttle";

// https://developers.google.com/analytics/devguides/collection/ga4/event-parameters?client_type=gtag#set-up-every-event
export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value?: string;
}
// https://developers.google.com/analytics/devguides/collection/ga4/events?client_type=gtag
export const gtagEvent = ({ action, category, label, value }: GtagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const gtagUserId = (userId: string) => {
  window.gtag("set", "user_id", userId);
};

export const gtagConsent = () => {
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
  });
};

export const setupGoogleAnalytics = (router: NextRouter, user: any) => {
  const handleRouteChange = (url: string) => {
    pageview(url);
  };

  // set userId in GA session
  if (typeof user !== "undefined") {
    gtagUserId(user.userId);
  }

  router.events.on("routeChangeComplete", handleRouteChange);
  router.events.on("hashChangeComplete", handleRouteChange);
  return () => {
    router.events.off("routeChangeComplete", handleRouteChange);
    router.events.off("hashChangeComplete", handleRouteChange);
  };
};
