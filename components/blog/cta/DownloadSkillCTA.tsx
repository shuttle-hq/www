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
      className={`group relative rounded-2xl bg-black p-[1px] my-8 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(252,84,12,0.3)] ${className}`}
    >
      {/* Gradient Border/Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FC540C] via-[#FFD76F] to-[#38D4E9] opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FC540C] via-[#FFD76F] to-[#38D4E9] opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-[#0A0A0A] rounded-2xl h-full w-full">
        <div className="flex items-center gap-4 w-full text-center md:text-left md:w-auto flex-col md:flex-row">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-lg bg-[#1A1A1A] border border-[#333] group-hover:border-[#FC540C]/40 transition-colors duration-500 shadow-inner">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FC540C]"
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

          {/* Text */}
          <div className="flex flex-col gap-1">
            <h3 className="text-white font-gradual text-lg sm:text-xl font-bold tracking-wide">
              {title}
            </h3>
            <p className="text-[#A2A2A2] text-sm font-atkinson max-w-md leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Button */}
        <a
          href={href}
          download
          onClick={handleDownload}
          className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black transition-all duration-300 bg-gradient-to-r from-[#FC540C] via-[#FFD76F] to-[#38D4E9] rounded-full hover:shadow-[0_0_20px_rgba(252,84,12,0.4)] hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto whitespace-nowrap font-gradual no-underline"
        >
          <span className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download .skill
          </span>
        </a>
      </div>
    </div>
  );
}
