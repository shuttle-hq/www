"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./CustomButton.module.css";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "blackwhite";

interface CommonProps {
  variant: ButtonVariant;
  children: ReactNode;
  invertOnDark?: boolean;
  className?: string;
}

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const getButtonClassNames = (
  variant: ButtonVariant,
  invertOnDark?: boolean,
  className?: string,
) =>
  clsx(
    `${styles.button} flex relative items-center gap-2 whitespace-nowrap px-6 py-3`,
    variant === "primary" &&
      (invertOnDark
        ? `bg-black text-head dark:bg-[#D8D8D8] dark:text-black dark:hover:bg-gradient-to-r dark:hover:from-[#fc540c] dark:hover:to-[#f5c57a] dark:hover:text-white`
        : `bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white`),
    variant === "secondary" &&
      `${styles.secondaryButton} ${styles.secondaryButtonShadow} ${styles.secondaryButtonBorderGradient} text-head`,
    variant === "tertiary" &&
      `${styles.buttonShadow} ${styles.shadowGradient} text-black`,
    variant === "blackwhite" &&
      "border border-[#ffffff40] px-6 py-3 font-gradual text-base text-white hover:bg-gradient-1",
    className,
  );

const CustomButton: FC<ButtonProps> = (props) => {
  const { variant, invertOnDark, className, children, href, ...rest } = props;

  const classNames = getButtonClassNames(variant, invertOnDark, className);
  const style =
    variant === "tertiary"
      ? {
          backgroundImage:
            "linear-gradient(73deg, #FC540C -7.95%, rgba(255, 215, 111, 0.72) 45.94%, #38D4E9 116.73%)",
        }
      : undefined;

  if (href) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    if (href.startsWith("/")) {
      return (
        <Link href={href} {...anchorProps}>
          <button className={classNames} style={style}>
            {children}
          </button>
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classNames}
        style={style}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classNames} style={style} {...buttonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
