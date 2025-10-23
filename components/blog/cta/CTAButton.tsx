"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function CTAButton({
  href,
  onClick,
  children,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-5 py-2 text-base bg-white hover:bg-gray-300 text-black font-medium rounded-full transition-all duration-200 no-underline ${className}`}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
