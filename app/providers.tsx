"use client";

import { ReactNode, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import IntercomProvider from "providers/IntercomProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieConsent from "react-cookie-consent";
import StarOnGithub from "components/sections/StarOnGithub";
import AnalyticsScripts from "./AnalyticsScripts";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      if (!posthog.__loaded) {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: "/ingest",
          ui_host: "https://eu.posthog.com",
          loaded: (p: typeof posthog) => {
            if (process.env.NODE_ENV === "development") p.debug();
          },
          capture_pageview: true,
        } as any);
        // @ts-ignore internal flag to avoid double init
        posthog.__loaded = true;
      }
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-transparent text-black dark:text-body">
        <StarOnGithub />
        <IntercomProvider>
          <PostHogProvider client={posthog}>{children}</PostHogProvider>
        </IntercomProvider>
        <GoogleTagManager gtmId="GTM-5QF3M9CR" />
        <CookieConsent
          containerClasses="max-w-xl left-1/2 transform bottom-4 -translate-x-1/2 flex items-end flex-col bg-black/10 border border-white/10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-2xl p-6"
          contentClasses="text-base text-body !m-0 !flex-none tracking-tight self-start"
          buttonWrapperClasses="!mt-3"
          buttonClasses="!m-0 !py-3 !px-6 gap-2 whitespace-nowrap rounded-button font-bold transition-all duration-500 button-shadow dark:border-gradient dark:shadow-gradient bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white dark:bg-black dark:text-head dark:hover:bg-none"
          declineButtonClasses="!p-0 !mr-6 !ml-0 !my-0 !bg-transparent text-body hover:text-head underline transition duration-500"
          enableDeclineButton={true}
          declineButtonText="Decline"
          buttonText="Allow"
          onDecline={() => {}}
          onAccept={() => {}}
        >
          We use cookies to enhance the user experience and measure engagement.
        </CookieConsent>
        <Analytics />
        <AnalyticsScripts />
      </div>
    </>
  );
}

