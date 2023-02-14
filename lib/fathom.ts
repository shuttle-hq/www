import * as Fathom from "fathom-client";
import { NextRouter } from "next/router";
import { FATHOM_TRACKING_CODE } from "./constants";

// Setup fathom analytics
export const setupFathomAnalytics = (router: NextRouter) => {
  // Initialize Fathom when the app loads
  // Example: yourdomain.com
  //  - Do not include https://
  //  - This must be an exact match of your domain.
  //  - If you're using www. for your domain, make sure you include that here.
  if (FATHOM_TRACKING_CODE === undefined) {
    return;
  }

  Fathom.load(FATHOM_TRACKING_CODE, {
    includedDomains: ["shuttle.rs", "www.shuttle.rs"],
  });

  function onRouteChangeComplete() {
    Fathom.trackPageview();
  }
  // Record a pageview when route changes
  router.events.on("routeChangeComplete", onRouteChangeComplete);

  // Unassign event listener
  return () => {
    router.events.off("routeChangeComplete", onRouteChangeComplete);
  };
};
