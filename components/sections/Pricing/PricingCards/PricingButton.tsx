import React from "react";
import clsx from "clsx";
import CustomButton from "../../../elements/CustomButton";
import { trackEvent } from "lib/posthog";

interface PricingButtonProps {
  text: string;
  variant?: "default" | "highlight";
  collapsed?: boolean;
  href?: string;
  eventName?: string;
}

export const PricingButton: React.FC<PricingButtonProps> = ({
  text,
  variant = "default",
  collapsed,
  href,
  eventName,
}) => {
  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName);
    }
  };

  return (
    <CustomButton
      href={href}
      variant={variant === "default" ? "primary" : "secondary"}
      className={clsx("justify-center w-full mt-4", {
        "xl:mt-4": collapsed,
        "xl:mt-8": !collapsed,
      })}
      onClick={handleClick}
    >
      {text}
    </CustomButton>
  );
};
