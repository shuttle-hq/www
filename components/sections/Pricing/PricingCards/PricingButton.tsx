import React from "react";

interface PricingButtonProps {
  text: string;
  variant?: "default" | "highlight";
  collapsed?: boolean;
}

export const PricingButton: React.FC<PricingButtonProps> = ({
  text,
  variant = "default",
  collapsed,
}) => {
  const baseStyles =
    "gap-5 self-stretch px-6 py-2 mt-8 w-full text-base tracking-normal rounded-2xl min-h-10 max-md:px-5 transition duration-300 ease-in-out hover:opacity-80 ";
  const variantStyles =
    variant === "highlight"
      ? "text-black bg-zinc-300"
      : "bg-zinc-800 text-zinc-300";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${collapsed ? "xl:mt-4" : "xl:mt-8"}`}
    >
      {text}
    </button>
  );
};
