"use client";

import Image from "next/image";
import * as React from "react";

interface LogoImageProps {
  src: string;
  className?: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src, className = "" }) => {
  return (
    <Image
      src={src}
      alt="Company Logo"
      className={`object-contain shrink-0 self-stretch my-auto ${className}`}
    />
  );
};

export default LogoImage;
