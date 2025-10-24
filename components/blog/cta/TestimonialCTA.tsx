import Image from "next/image";
import React from "react";
import { trackEvent } from "lib/posthog";
import { CTAButton } from "./CTAButton";

import styles from "./styles.module.css";

type TestimonialCTAProps = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonText?: string;
  quote: string;
  author: string;
  role?: string;
  handle?: string;
  avatarSrc?: string;
  avatarSize?: number;
  className?: string;
  eventName?: string;
};

export const TestimonialCTA: React.FC<TestimonialCTAProps> = ({
  title = "Loved by developers",
  subtitle = "Join developers building with Shuttle",
  href = "https://console.shuttle.dev",
  buttonText = "Join them",
  quote = "Deployed my second service with Shuttle and I really like it! It's fast and integrates well with cargo, so I can focus on the Rust code instead of the deployment. Well done!",
  author = "Matthias Endler",
  role = "Rust Consultant @ Corrode",
  handle = "@matthiasendler",
  avatarSrc = "/images/sections/testimonials/matthias.jpg",
  avatarSize = 32,
  className = "",
  eventName = "blog_cta_testimonial",
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:justify-between relative overflow-hidden rounded-3xl bg-[#0F0F0F] border border-white/5 p-5 sm:p-7 gap-6 lg:gap-4 ${className}`}
    >
      <div className="flex flex-col lg:w-[40%]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20.3267L10.8963 19.3344C9.23858 17.8306 7.86775 16.5383 6.78375 15.4577C5.69975 14.3768 4.84075 13.4149 4.20675 12.5719C3.57275 11.7291 3.12983 10.9602 2.878 10.2652C2.626 9.57032 2.5 8.86524 2.5 8.1499C2.5 6.73074 2.9785 5.54257 3.9355 4.5854C4.89267 3.6284 6.08083 3.1499 7.5 3.1499C8.373 3.1499 9.198 3.35407 9.975 3.7624C10.752 4.17074 11.427 4.75632 12 5.51915C12.573 4.75632 13.248 4.17074 14.025 3.7624C14.802 3.35407 15.627 3.1499 16.5 3.1499C17.9192 3.1499 19.1073 3.6284 20.0645 4.5854C21.0215 5.54257 21.5 6.73074 21.5 8.1499C21.5 8.86524 21.374 9.57032 21.122 10.2652C20.8702 10.9602 20.4272 11.7291 19.7932 12.5719C19.1593 13.4149 18.3018 14.3768 17.221 15.4577C16.1403 16.5383 14.7679 17.8306 13.1038 19.3344L12 20.3267ZM12 18.2999C13.6 16.8602 14.9167 15.6262 15.95 14.5979C16.9833 13.5697 17.8 12.6765 18.4 11.9182C19 11.1598 19.4167 10.4864 19.65 9.8979C19.8833 9.30957 20 8.7269 20 8.1499C20 7.1499 19.6667 6.31657 19 5.6499C18.3333 4.98324 17.5 4.6499 16.5 4.6499C15.7103 4.6499 14.9805 4.8739 14.3105 5.3219C13.6407 5.77007 13.1102 6.39349 12.7192 7.19215H11.2808C10.8833 6.38699 10.3512 5.76199 9.6845 5.31715C9.01783 4.87232 8.28967 4.6499 7.5 4.6499C6.50633 4.6499 5.67458 4.98324 5.00475 5.6499C4.33492 6.31657 4 7.1499 4 8.1499C4 8.7269 4.11667 9.30957 4.35 9.8979C4.58333 10.4864 5 11.1598 5.6 11.9182C6.2 12.6765 7.01667 13.5682 8.05 14.5932C9.08333 15.6182 10.4 16.8537 12 18.2999Z"
            fill="#E3E3E3"
          />
        </svg>
        <h4 className="text-white font-semibold text-xl leading-tight m-0 mt-4">
          {title}
        </h4>
        <p className="text-gray-400 text-base">{subtitle}</p>
        <CTAButton
          href={href}
          onClick={() => {
            trackEvent(eventName);
          }}
          className="hidden lg:inline-flex w-max"
        >
          {buttonText}
        </CTAButton>
      </div>
      <div
        className={`flex flex-col gap-5 px-6 py-5 sm:px-8 sm:py-6 rounded-3xl lg:w-[60%] items-start justify-center ${styles["quote-bg"]}`}
      >
        <p className="self-stretch text-white text-sm italic m-0">{quote}</p>

        <div className="inline-flex justify-center items-center gap-2">
          {avatarSrc && (
            <Image
              className="rounded-full m-0"
              src={avatarSrc}
              alt={`Avatar of ${author}`}
              width={avatarSize}
              height={avatarSize}
            />
          )}
          <div className="inline-flex flex-col justify-start items-start">
            <span className="text-white text-xs leading-4">{author}</span>
            <span className="text-xs leading-4">{role}</span>
            <span className="text-xs leading-4">{handle}</span>
          </div>
        </div>
      </div>
      <CTAButton
        href={href}
        onClick={() => {
          trackEvent(eventName);
        }}
        className="lg:hidden"
      >
        {buttonText}
      </CTAButton>
    </div>
  );
};
