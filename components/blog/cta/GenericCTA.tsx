"use client";

import { trackEvent } from "lib/posthog";
import { CTAButton } from "./CTAButton";

interface TryItYourselfProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
  eventName?: string;
  className?: string;
}

export function GenericCTA({
  title = "Try it yourself",
  subtitle = "Get started with Shuttle in under 2 minutes",
  buttonText = "Quick Start",
  href = "https://console.shuttle.dev",
  eventName = "blog_cta_generic",
  className = "",
}: TryItYourselfProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 transition-colors duration-500 px-4 my-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#49341E] rounded-xl">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl leading-tight mb-0.5">
              {title}
            </h4>
            <p className="text-gray-400 text-base">{subtitle}</p>
          </div>
        </div>

        <CTAButton
          href={href}
          onClick={() => {
            trackEvent(eventName);
          }}
        >
          {buttonText}
        </CTAButton>
      </div>
    </div>
  );
}
