import React from "react";

interface PricingButtonProps {
  text: string;
  variant?: "default" | "highlight";
}

export const PricingButton: React.FC<PricingButtonProps> = ({
  text,
  variant = "default",
}) => {
  const baseStyles =
    "gap-5 self-stretch px-6 py-2 mt-8 w-full text-base tracking-normal rounded-2xl min-h-10 max-md:px-5";
  const variantStyles =
    variant === "highlight"
      ? "text-black bg-zinc-300"
      : "bg-zinc-800 text-zinc-300";

  return <button className={`${baseStyles} ${variantStyles}`}>{text}</button>;
};
