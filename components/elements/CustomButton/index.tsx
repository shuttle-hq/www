"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./CustomButton.module.css";

interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary" | "blackwhite";
  children: ReactNode;
  invertOnDark?: boolean;
}

interface ButtonProps extends CommonButtonProps {
  href?: string;
	onClick?: VoidFunction;
}

const CustomButton: FC<ButtonProps> = ({
  variant = "none",
  invertOnDark,
  className,
  children,
	onClick,
  href,
}) => {
  // Primary and secondary switch for dark mode

  const classNames = clsx(
    `${styles.button} flex relative items-center gap-2 whitespace-nowrap px-6 py-3`,
    variant === "primary"
      ? invertOnDark
        ? `bg-black text-head dark:bg-[#D8D8D8] dark:text-black dark:hover:bg-gradient-to-r dark:hover:from-[#fc540c] dark:hover:to-[#f5c57a] dark:hover:text-white`
        : `bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white`
      : "",
    variant === "secondary"
      ? `${styles.secondaryButton} ${styles.secondaryButtonShadow} ${styles.secondaryButtonBorderGradient} text-head`
      : "",
    variant === "tertiary" &&
      "${styles.buttonShadow} ${styles.shadowGradient} text-black",
    variant === "blackwhite" &&
      "border-[1px] border-solid border-[#ffffff40] px-6 py-3 font-gradual text-base text-white hover:bg-gradient-1",
    className,
  );

  const tertBg = {
    backgroundImage:
      "linear-gradient(73deg, #FC540C -7.95%, rgba(255, 215, 111, 0.72) 45.94%, #38D4E9 116.73%",
  };

  children = (
    <button onClick={onClick} className={classNames} style={variant === "tertiary" ? tertBg : {}}>
      {children}
    </button>
  );

  if (href)
    if (href.startsWith("/")) children = <Link href={href}>{children}</Link>;
    else
      children = (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );

  return children;
};

export default CustomButton;
