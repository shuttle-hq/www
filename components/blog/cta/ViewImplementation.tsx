"use client";

import { trackEvent } from "lib/posthog";
import CustomButton from "components/elements/CustomButton";

interface ViewImplementationProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
  eventName?: string;
}

export const ViewImplementation = ({
  title = "Want to see the full implementation?",
  subtitle = "Check out the complete source code and examples",
  buttonText = "View Code",
  href = "#",
  eventName = "blog_view_implementation_cta"
}: ViewImplementationProps) => {
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
            <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          variant="secondary"
          href={href}
          onClick={() => {
            trackEvent(eventName);
          }}
        >
          {buttonText}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="ml-2"
          >
            <path 
              d="M5 12h14m-7-7l7 7-7 7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </CustomButton>
      </div>
    </div>
  );
};