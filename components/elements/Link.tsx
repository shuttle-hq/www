import { trackEvent } from "lib/posthog";
import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TrackedLinkProps extends LinkProps {
  children: ReactNode;
  eventName?: string;
  eventProperties?: Record<string, any>;
  className?: string;
  target?: string;
  onClick?: (params: any) => void;
}

const Link = ({
  children,
  eventName,
  eventProperties,
  className,
  target,
  onClick,
  ...props
}: TrackedLinkProps) => {
  return (
    <NextLink
      {...props}
      className={className}
      target={target}
      onClick={(params) => {
        if (eventName) trackEvent(eventName, eventProperties);
        if (onClick) onClick(params);
      }}
    >
      {children}
    </NextLink>
  );
};

export default Link;
