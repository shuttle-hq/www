"use client";

import { trackEvent } from "lib/posthog";
import CustomButton from "components/elements/CustomButton";

interface ReadyToShipFasterProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
  eventName?: string;
}

export const ReadyToShipFaster = ({
  title = "Ready to ship faster?",
  subtitle = "Deploy your Rust app in minutes, not hours.",
  buttonText = "Get Started",
  href = "https://console.shuttle.dev",
  eventName = "blog_ready_to_ship_cta"
}: ReadyToShipFasterProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FC540C]/20 via-[rgba(255,215,111,0.15)] to-[#38D4E9]/20 hover:from-[#FC540C]/25 hover:via-[rgba(255,215,111,0.18)] hover:to-[#38D4E9]/25 backdrop-blur-sm border border-[#FC540C]/30 hover:border-[#FC540C]/40 transition-colors duration-500 p-6 my-6 flex items-center gap-6">
      <div className="flex-shrink-0">
        <div className="p-3 bg-gradient-to-br from-[#FC540C] to-[#38D4E9] rounded-xl">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="text-white text-lg font-semibold font-gradual mb-1">
          {title}
        </h3>
        <p className="text-gray-400 text-base">
          {subtitle}
        </p>
      </div>
      
      <div className="flex-shrink-0">
        <CustomButton
          className="px-4 py-2 text-lg"
          variant="primary"
          href={href}
          onClick={() => {
            trackEvent(eventName);
          }}
        >
          {buttonText}
        </CustomButton>
      </div>
    </div>
  );
};