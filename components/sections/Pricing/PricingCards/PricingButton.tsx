import React from "react";
import clsx from "clsx";
import CustomButton from "../../../elements/CustomButton";

interface PricingButtonProps {
  text: string;
  variant?: "default" | "highlight";
  collapsed?: boolean;
  href?: string;
}

export const PricingButton: React.FC<PricingButtonProps> = ({
  text,
  variant = "default",
  collapsed,
  href,
}) => {
  return (
    <CustomButton
      href={href}
      variant={variant === "default" ? "primary" : "secondary"}
      className={clsx("justify-center w-full mt-4", {
        "xl:mt-4": collapsed,
        "xl:mt-8": !collapsed,
      })}
    >
      {text}
    </CustomButton>
  );
};
