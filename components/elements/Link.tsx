"use client";

import { trackEvent } from "lib/posthog";
import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TrackedLinkProps extends LinkProps {
    children: ReactNode;
    eventName?: string;
    eventProperties?: Record<string, any>;
    className?: string;
    target?: string;
}

const Link = ({
    children,
    eventName,
    eventProperties,
    className,
    target,
    ...props
}: TrackedLinkProps) => {
    return (
        <NextLink
            {...props}
            className={className}
            target={target}
            onClick={() => {
                if (eventName) trackEvent(eventName, eventProperties);
            }}
        >
            {children}
        </NextLink>
    );
};

export default Link;
