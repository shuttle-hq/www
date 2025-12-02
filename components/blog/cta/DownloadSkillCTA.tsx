"use client";

import { usePathname } from "next/navigation";
import { trackEvent } from "lib/posthog";

interface DownloadSkillCTAProps {
  title?: string;
  subtitle?: string;
  href?: string;
  eventName?: string;
  className?: string;
}

export function DownloadSkillCTA({
  title = "Download the Shuttle Skill",
  subtitle = "Get Claude to deploy your Rust projects to Shuttle with the right patterns",
  href = "/shuttle.skill",
  eventName = "blog_cta_download_skill",
  className = "",
}: DownloadSkillCTAProps) {
  const pathname = usePathname();

  const handleDownload = () => {
    trackEvent(eventName, { page: pathname });
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FC540C]/10 via-[rgba(255,215,111,0.08)] to-[#38D4E9]/10 border border-[#FC540C]/20 hover:border-[#FC540C]/40 transition-all duration-500 p-5 my-6 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FC540C]/5 via-transparent to-[#38D4E9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="p-3 bg-gradient-to-br from-[#FC540C] to-[#FFD76F] rounded-xl flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M12 3V15M12 15L7 10M12 15L17 10M5 21H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-lg sm:text-xl leading-tight mb-1">
              {title}
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-snug">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <a
            href={href}
            download
            onClick={handleDownload}
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#FC540C] via-[#FFD76F] to-[#38D4E9] text-black hover:opacity-90 transition-opacity duration-200 no-underline gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M12 3V15M12 15L7 10M12 15L17 10M5 21H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
