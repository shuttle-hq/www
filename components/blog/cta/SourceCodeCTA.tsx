"use client";

import { trackEvent } from "lib/posthog";
import { CTAButton } from "./CTAButton";

interface SourceCodeCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  repo?: string;
  eventName?: string;
}

export const SourceCodeCTA = ({
  title = "Source Code Avaiable on GitHub",
  subtitle = "Check out the complete source code and examples",
  buttonText = "View Code",
  repo = "#",
  eventName = "blog_cta_view_source_code",
}: SourceCodeCTAProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 transition-colors duration-500 px-4 my-6 flex items-center gap-6">
      <div className="flex-shrink-0">
        <div className="p-3 bg-[#010409] rounded-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      </div>

      <div className="flex-1">
        <h4 className="text-white font-semibold text-xl leading-tight mb-0.5">
          {title}
        </h4>
        <p className="text-gray-400 text-base">{subtitle}</p>
      </div>

      <div className="flex-shrink-0">
        <CTAButton
          href={`https://www.github.com/${repo}`}
          onClick={() => {
            trackEvent(eventName);
          }}
          className="bg-[#010409]/90 hover:bg-[#010409] text-white gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          {buttonText}
        </CTAButton>
      </div>
    </div>
  );
};
